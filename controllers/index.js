/**
 * Created by lanhao on 15/5/17.
 */

const articleModel = require('../models/article');
const redis = global.app.libs['redis'];

var Controller = {};

Controller.tagSet = null;

Controller.index = (req, res) => {
  articleModel.list()
    .then((list)=> {
      res.render('index.html', {'list': list});
    })
    .catch((err)=> {
      console.log(err);
      res.render('error.html', {});
    });
};

Controller.item = (req, res) => {
  let id = req.params[1];
  if(req.params[0]!=='article'){
    id = req.params[0];
  }
  articleModel.detail(id)
    .then((item) => {
      redis.increase(['blog:view:count','a'+id,1],(e,r)=>{
        if(e){
          console.log(e,r);
        }
      });
      return item;
    })
    .then((item) => {
      item ?
        res.render('detail.html', {'item': item})
        : res.render('error.html', {});
    })
    .catch((err) => {
      console.log(err);
      res.render('error.html', {});
    });
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
  articleModel.list({size: 999})
    .then((list)=> {
      Controller.tagSet = new Set();
      for (let k in list) {
        list[k]._source.keywords.forEach((item)=> {
          Controller.tagSet.add(item);
        });
      }
    });
};

module.exports = Controller;

loadTagSet();