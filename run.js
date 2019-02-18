const fs = require('fs');
const Md = require('markdown').markdown;

const file = process.argv[2];

if (!fs.existsSync(file)) {
  console.log(`${file} Not Found!`);
  process.exit();
}

const content = fs.readFileSync(file).toString();

const html = Md.toHTML(content);

const id = 318;
const t = Date.now();
fs.writeFileSync(`./articles/${id}.json`, JSON.stringify({
  id,
  title: '2018总结: 你咋才来啊',
  keywords: [
    'docker',
    'devops',
    'node'
  ],
  content: html,
  createdAt: Number.parseInt(t / 1000),
  modified: Number.parseInt(t / 1000),
}, null, 2));