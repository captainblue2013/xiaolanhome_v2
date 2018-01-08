/**
 * Created by lanhao on 16/5/30.
 */


'use strict';

let articleModel = require('../models/article');

let article = {};

article.item = (req, res) => {
  let id = req.params[1];
  let item = articleModel.detail(id);
  if(item){
    res.json(200, item)
  }else{
    res.json(500, null, 'error');
  }
};


article.loadMore = (req, res) => {

  let from = req.query.from || 0;
  let list = articleModel.list({from: from});
  res.json(200, list);
};


article.search = (req, res) => {
  let key = req.query.keyword || (req.query.tag || '');
  key = decodeURIComponent(key);
  let list = process.localArticle.se[key] || [];
  res.json(200, list);
};

module.exports = article;