//import { Client } from "@notionhq/client"

const secret_key = 'secret_OEplBkvVCBw99DMMli7IS80W1gshHYZ97MAF5qTI6dI';
const db_id = '94934973a0e548f9be85bf1454b45ab7';
const notion = new Client({ auth: process.env.secret_key })

const databaseId = process.env.db_id


function test(){
    //notionのデータを出力する
    alert("test");
}

async function getIssuesFromNotionDatabase() {
    const pages = []
    let cursor = undefined
    while (true) {
      const { results, next_cursor } = await notion.databases.query({
        database_id: databaseId,
        start_cursor: cursor,
      })
      pages.push(...results)
      if (!next_cursor) {
        break
      }
      cursor = next_cursor
    }
    console.log(`${pages.length} issues successfully fetched.`)
  
    const issues = []
    for (const page of pages) {
      const issueNumberPropertyId = page.properties["Issue Number"].id
      const propertyResult = await notion.pages.properties.retrieve({
        page_id: page.id,
        property_id: issueNumberPropertyId,
      })
      issues.push({
        pageId: page.id,
        issueNumber: propertyResult.number,
      })
    }
  
    return issues
  }