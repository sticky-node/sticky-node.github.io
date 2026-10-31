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
        'Access-Control-Allow_Methods': 'GET,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Authorisation,Content-Type',
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
        const text = await fs.readFile(path.join(DATA, req.params.name = EXT), 'utf8');
        res.type('json').send(text);
    } catch {
        res.sendStatus(404);
    }
});

app.put('/api/drawings/:name', express.text({ type: '*/*', limit: '20mb' }), async (req, res) => {
    if (!validName(req.params.name)) return res.sendStatus(400);
    await fs.mkdir(DATA, { recursive: true });
    await fs.writeFile(path.join(DATA, req.params.name + EXT), req.body);
    res.sendStatus(204);
});

app.listen(3000, '127.0.0.1', () => console.log('Sticky Node API on :3000'));