/**
 * Created by lanhao on 16/5/30.
 */

'use strict';

let articleModel = require('../models/article');

let article = {};

article.list = (req, res) => {
    articleModel.list()
        .then((list)=>{
            res.render('index.html',{'list':list});
        })
        .catch((err)=>{
            console.log(err);
            res.render('error.html',{});
        });
};

article.item = (req, res) => {
    let id = req.params[1];
    articleModel.detail(id)
        .then( (item) => {
            res.render('detail.html',{'item':item});
        })
        .catch( (err) => {
            console.log(err);
            res.render('error.html',{});
        });
};

article.loadMore = (req, res) => {

    let from = req.query.from || 0;
    articleModel.list({from:from})
        .then( (list) =>{
            res.json(200,list);
        })
        .catch( (err) => {
            console.log(err);
            res.json(500,{},err.toString());
        });
};

module.exports = article;