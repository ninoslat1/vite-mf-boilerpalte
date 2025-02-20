const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const DIST_DIR = path.join(__dirname, 'dist');

const serveFile = (filePath, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (filePath.endsWith('.html')) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        serveFile(path.join(DIST_DIR, 'index.html'), res);
      }
      return;
    }

    const ext = path.extname(filePath);
    const contentTypeMap = {
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.html': 'text/html'
    };

    res.writeHead(200, { 'Content-Type': contentTypeMap[ext] || 'text/html' });
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

  fs.stat(filePath, (err, stats) => {
    if (err || stats.isDirectory()) {
      serveFile(path.join(DIST_DIR, 'index.html'), res);
    } else {
      serveFile(filePath, res);
    }
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
