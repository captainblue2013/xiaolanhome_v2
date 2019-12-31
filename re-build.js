const parse = require('ml2md').default;
const { readdirSync, writeFileSync } = require('fs');

const list = readdirSync('./articles');
list.forEach(f => {
  const json = require(`./articles/${f}`);
  const md = parse(json.content);
  const filename = `./md/${f.replace('.json', '')}-${json.title}-[${json.keywords.join('][')}]-${json.createdAt}.md`;
  writeFileSync(filename, md);
  console.log(filename);
});