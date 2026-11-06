const fs = require("node:fs");
const path = require("node:path");
const html = fs.readFileSync(path.join(__dirname,"index.html"),"utf8");
const match = html.match(/<meta name="grd-build" content="(\d{8}-\d+)">/);
if (!match) throw new Error("Falta versión válida en index.html");
fs.writeFileSync(path.join(__dirname,"version.json"), JSON.stringify({content:match[1]})+"\n");
