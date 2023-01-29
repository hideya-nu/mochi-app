const http = require('http');
const fs = require('fs');
const url = require('url');
const { Client } = require("@notionhq/client");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(RouteSetting);

const indexPage = fs.readFileSync('./html/index.html', 'UTF-8');
const textbookPage = fs.readFileSync('./html/textbook.html', 'UTF-8');
const exhibitPage = fs.readFileSync('./html/exhibit.html', 'UTF-8');

const mainCss = fs.readFileSync('./css/main.css', 'UTF-8');
const indexJs = fs.readFileSync('./js/index.js', 'UTF-8');
const textbookJs = fs.readFileSync('./js/textbook.js', 'UTF-8');


server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function RouteSetting(req, res) {
    const url_parts = url.parse(req.url);
    switch (url_parts.pathname) {
      case '/':
        case'/html/index.html':
        // '/'または'index.html'にアクセスした時の処理
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(indexPage);
        res.end();
        break;
    
      case '/html/textbook.html':
        //'textbook.html'にアクセスした時の処理
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(textbookPage);
        res.end();
        break;
      
      case '/html/exhibit.html':
        //'textbook.html'にアクセスした時の処理
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(exhibitPage);
        res.end();
        break;  

      case '/css/main.css':
      // cssファイルにアクセスした時の処理
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(mainCss);
      res.end();
      break;
  
      case '/js/index.js':
      // jsファイルにアクセスした時の処理
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(indexJs);
      res.end();
      break;

      case '/js/textbook.js':
        // jsファイルにアクセスした時の処理
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(textbookJs);
        res.end();
        break;

      default:
        //ダメだった時の処理
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('お探しのページは見つかりません。');
        break;
    }
  }