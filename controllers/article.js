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
        .then(function (item) {
            res.render('detail.html',{'item':item});
        })
        .catch(function (err) {
            console.log(err);
            res.render('error.html',{});
        });
};

module.exports = article;