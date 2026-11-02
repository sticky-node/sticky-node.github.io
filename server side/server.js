const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const DATA = path.join(__dirname, "data");
const EXT = '.sticky.json';
const ORIGIN = 'https://sticky-node.github.io'
const TOKEN = process.env.STICKY_TOKEN;
const validName = n => /^[\w\- ]{1,64}$/.test(n); 

if (!TOKEN) {
    console.error('STICKY_TOKEN is not set, refusing to start');
    process.exit(1);
}

app.use('/api', (req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': ORIGIN,
        'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization,Content-Type',
    });
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    if (req.get('Authorization') !== 'Bearer ' + TOKEN) return res.sendStatus(401);
    next();
});

app.get('/api/drawings', async (req, res) => {
    await fs.mkdir(DATA, { recursive: true });
    const files = await fs.readdir(DATA);
    res.json(files.filter(f => f.endsWith(EXT)).map(f => f.slice(0, -EXT.length)).sort());
});

app.get('/api/drawings/:name', async (req, res) => {
    if (!validName(req.params.name)) return res.sendStatus(400);
    try {
        const text = await fs.readFile(path.join(DATA, req.params.name + EXT), 'utf8');
        res.type('json').send(text);
    } catch {
        res.sendStatus(404);
    }
});
c
app.put('/api/drawings/:name', express.text({ type: '*/*', limit: '20mb' }), async (req, res) => {
    if (!validName(req.params.name)) return res.sendStatus(400);
    await fs.mkdir(DATA, { recursive: true });
    await fs.writeFile(path.join(DATA, req.params.name + EXT), req.body);
    res.sendStatus(204);
});

const IMAGES = path.join(DATA, 'images');
const validImage = n => /^[\w\-]{1,64}\.(png|jpe?g|gif|webp)$/i.test(n);

app.put('/api/images/:id', express.raw({ type: 'image/*', limit: '20mb' }), async (req, res) => {
    if (!validImage(req.params.id)) return res.sendStatus(400);
    if (!(req.get('Content-Type') || '').startsWith('image/')) return res.sendStatus(415);
    if (!Buffer.isBuffer(req.body) || req.body.length === 0) return res.sendStatus(400);
    await fs.mkdir(IMAGES, { recursive: true });
    await fs.writeFile(path.join(IMAGES, req.params.id), req.body);
    res.sendStatus(204);
});

app.get('/api/images/:id', (req, res) => {
    if (!validImage(req.params.id)) return res.sendStatus(400);
    res.set('X-Content-Type-Options', 'nosniff');
    res.sendFile(
        path.join(IMAGES, req.params.id),
        { headers: { 'Cache-Control': 'private, max-age=31536000, immutable' } },
        err => { if (err && !res.headersSent) res.sendStatus(404); }
    );
});

app.listen(3000, '127.0.0.1', () => console.log('Sticky Node API on :3000'));
