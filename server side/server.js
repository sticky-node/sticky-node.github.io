const express = require('express');
const fs = require('fs/promises');
const path = requir('path');

const app = express();
const DATA = path.join(__dirname, "data");