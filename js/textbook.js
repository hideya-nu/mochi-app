const myHeading = document.querySelector('h1');
const { Client } = require("@notionhq/client");
//import { Client } from '@notionhq/client';


var data01;
var data02;
var data03;

let pass = 100;
function print_pass() {
  alert(pass);
};

const databaseId = '94934973a0e548f9be85bf1454b45ab7'; //間にハイフンがなくて大丈夫

// Initializing a client
const main = async () => {
    const notion = new Client({
		auth: `secret_OEplBkvVCBw99DMMli7IS80W1gshHYZ97MAF5qTI6dI`,
    })
      
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log(response); 
}

main();


/*function getSeisaki() {
  //const secret_key = 'secret_LAdznzDIRFB8nAz70O1XaXL09g851sjyLBP7vJBoOMB';
  const secret_key = 'secret_OEplBkvVCBw99DMMli7IS80W1gshHYZ97MAF5qTI6dI';

  const db_id = '94934973a0e548f9be85bf1454b45ab7';
  const url = 'https://api.notion.com/v1/databases/' + db_id + '/query';


  const opts = {
    "method" : "post",
    "headers" : {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + secret_key,
      'Notion-Version': '2022-06-28',
    }
  };
  console.log(url);
  console.log(opts);

  let result = UrlFetchApp.fetch(url, opts);
  const obj = JSON.parse(result.getContentText());

  const values = [ ['名前', '教科書名', '学籍番号'] ];
  for(var n in obj.results) {
    var item = obj.results[n].properties;
    try {
      var val = [
        item['名前'].title[0].plain_text,
        item['教科書名'].number,
        item['学籍番号'].number,
      ];
      values.push(val);
    } catch(e) {
      console.error(e);
    }
  };

  console.log('kitakore');
};

//notionからデータを抽出
var notion_db = new XMLHttpRequest();

notion_db.open('GET','/');
*/



/* GET home page. */
window.onload = function(){
  console.log('kita');
  var str = "5419019";
  document.getElementById('schoolN').innerHTML = str ;
};

/*
router.post('/', function(req, res, next) {
  const parent = {type:'database_id', database_id: db_id}
  const props = {
    '名前': {title: [{text:{content: req.body.name}}]},
    '点数': {type: 'number', number: +req.body.score},
    'ステータス': {type: 'status', text: +req.body.status},
    '分類': {type: 'select', text: +req.body.type}
  }
  notion.pages.create({
    parent: parent,
    properties: props
  }).then(resp=>{
    res.redirect('/');
  });
});

module.exports = router;
*/