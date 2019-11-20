const fs = require('fs');
const moment = require('moment');


let article = {};

article.detail = (id) => {
  let { content } = require('../articles/' + id + '.json');
  let cache = process.localArticle.map[id];
  if (cache === undefined) {
    return null;
  }
  let article = {
    content,
  };
  Object.assign(article, cache);
  return article;
};


article.list = (option) => {
  let from = option && option.from ? Number.parseInt(option.from) : 0;

  return process.localArticle.sortList.slice(from, from + 10);
};

article.formatDate = (obj) => {
  var list = obj.hits.hits;
  if (list.length) {
    for (let k in list) {
      list[k]._source.modified = moment.unix(list[k]._source.modified).format('MM/DD');
    }
  }
  obj.hits.hits = list;
  return obj;
};

article.lowScore = (list) => {
  let result = [];
  let bestScore = list[0]._score;
  for (let k in list) {
    if (list[k]._score > bestScore / 5) {
      result.push(list[k]);
    }
  }
  return result;
};

module.exports = article;

