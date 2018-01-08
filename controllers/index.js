/**
 * Created by lanhao on 15/5/17.
 */

const articleModel = require('../models/article');

var Controller = {};

Controller.tagSet = null;

Controller.index = (req, res) => {
  let list = articleModel.list();
  res.render('index.html', {'list': list});
};

Controller.item = (req, res) => {
  let id = req.params[1];
  if(req.params[0]!=='article'){
    id = req.params[0];
  }
  let item = articleModel.detail(id);
  
  if(item){
    res.render('detail.html', {'item': item});
  }else{
    res.render('error.html', {});
  }
};

Controller.about = (req, res) => {
  res.render('about.html', {});
};

Controller.search = (req, res) => {
  res.render('search.html', {});
};

Controller.tags = (req, res) => {
  if (!Controller.tagSet) {
    loadTagSet();
  }

  res.render('tags.html', {tags: Array.from(Controller.tagSet)});
};

Controller.building = (req, res) => {
  res.render('building.html', {});
};

const loadTagSet = () => {
  Controller.tagSet = new Set(Object.keys(process.localArticle.se));
  
};

module.exports = Controller;

