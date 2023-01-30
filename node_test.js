//export {values};

const http = require('http');
const fs = require('fs');
const url = require('url');
//const pdfImage = new PDFImage("/images/企画書.pdf");
const { Client } = require("@notionhq/client");

const hostname = '127.0.0.1';
const port = 3000;

const hostname = '0.0.0.0';
const port = (process.env.PORT || 3000);

const server = http.createServer(RouteSetting);

const indexPage = fs.readFileSync('./html/index.html', 'UTF-8');
const textbookPage = fs.readFileSync('./html/textbook.html', 'UTF-8');
const exhibitPage = fs.readFileSync('./html/exhibit.html', 'UTF-8');
const manualPage = fs.readFileSync('./html/manual.html', 'UTF-8');
const informationPage = fs.readFileSync('./html/information.html', 'UTF-8');

const mainCss = fs.readFileSync('./css/main.css', 'UTF-8');
const indexJs = fs.readFileSync('./js/index.js', 'UTF-8');
const textbookJs = fs.readFileSync('./js/textbook.js', 'UTF-8');

const logoImg = fs.readFileSync('./images/ReNUT.png');
//const kikakuImg = fs.readFileSync('./images/企画書.pdf','UTF-8');

const  secret_key = 'secret_LAdznzDIRFB8nAz70O1XaXL09g851sjyLBP7vJBoOMB'
const  db_id = '94934973a0e548f9be85bf1454b45ab7'
const notion = new Client({
  auth: secret_key,
})

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
        notionGet();
        
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
      
      case '/html/information.html':
        //'textbook.html'にアクセスした時の処理
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(informationPage);
        res.end();
        break;

      case '/html/manual.html':
        //'textbook.html'にアクセスした時の処理
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(manualPage);
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
      
      case '/images/ReNUT.png':
        // imagesファイルにアクセスした時の処理
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(logoImg);
        res.end();
        break;

      case '/images/企画書.pdf':
        // imagesファイルにアクセスした時の処理
        res.writeHead(200, {'Content-Type': 'image/pdf'});
        res.write(kikakuImg);
        res.end();
        break;

      default:
        //ダメだった時の処理
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('お探しのページは見つかりません。');
        break;
    }
}



function notionGet(req, res, next) {
  notion.databases.query({
    database_id: db_id,
  }).then(resp=>{

    const values = [];
    for (var n in resp.results){
     var item = resp.results[n].properties;
      try {
        var val = [
          item['教科書名'].title[0].plain_text,
          item['渡し手学籍番号'].number,
          item['受け取り手学籍番号'].number,
        ];
        
        values.push(val);
      }catch(e){
      console.error(e);
      }
      //valueの中にnotionDataが二次元配列で格納
      console.log(values[n][0]);
      
    }
    module.exports = values;
    //res.render('index', { title: 'notion',data: values });
  });
};
