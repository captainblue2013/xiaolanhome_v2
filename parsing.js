const fs = require('fs');
const data = require('./data.json');

let len = data.hits.hits.length;

for(let i=0;i<len;i++){
  let article = data.hits.hits[i];
  fs.writeFileSync('./articles/'+article._id+'.json',JSON.stringify({
    id: article._id,
    title:article._source.title,
    keywords:article._source.keywords,  
    content:article._source.content,
    createdAt:article._source.createdAt,
    modified:article._source.modified,
  },null,2));
}