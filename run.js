const fs = require('fs');
const Md = require('markdown').markdown;

const file = process.argv[2];

if (!fs.existsSync(file)) {
  console.log(`${file} Not Found!`);
  process.exit();
}

const content = fs.readFileSync(file).toString();

const html = Md.toHTML(content);

const id = 323;
const t = Date.now();
fs.writeFileSync(`./articles/${id}.json`, JSON.stringify({
  id,
  title: file.split('/').pop().replace('.md',''),
  keywords: [
    '命令行'
  ],
  content: html,
  createdAt: Number.parseInt(t / 1000),
  modified: Number.parseInt(t / 1000),
}, null, 2));
