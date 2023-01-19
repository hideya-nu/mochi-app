/*const myHeading = document.querySelector('h1');
//const { Client } = require("@notionhq/client");
import { Client } from '@notionhq/client';


const secret_key = 'secret_LAdznzDIRFB8nAz70O1XaXL09g851sjyLBP7vJBoOMB';
const db_id = '94934973a0e548f9be85bf1454b45ab7';

const notion = new Client({ auth: process.env.secret_key })
const databaseId = process.env.db_id

var data01;
var data02;
var data03;

let pass = 100;
function print_pass() {
  alert(pass);
};*/

window.onload = function() {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  console.log(params);
  const textName = params.get("textName");
  const span = document.getElementById("receivedTextName");
  span.innerText = textName;
}