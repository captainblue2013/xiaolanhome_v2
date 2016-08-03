/**
 * Created by lanhao on 16/5/30.
 */

/**
 * @jsoc.host http://www.lanhao.name
 */
'use strict';

let articleModel = require('../models/article');

let article = {};

article.item = (req, res) => {
  let id = req.params[1];
  articleModel.detail(id)
    .then((item) => {
      item ?
        res.json(200, item)
        : res.json(404, null, 'not found');
    })
    .catch((err) => {
      console.log(err);
      res.json(500, null, 'error');
    });
};

/**
 * @jsoc
 *   name:loadMore
 *   desc:loading article list
 *   group:article
 *   request
 *     method:get
 *     uri:/loadMore
 *     params
 *     query
 *       from
 *         _type:number
 *         _default:0
 *         _desc:上一次请求最后一个id
 *     body
 *   response
 *     body
 *       code
 *         _assert:100
 *       data
 *         _type:array
 *       message
 *         _type:string
 *         _required:false
 */
article.loadMore = (req, res) => {

  let from = req.query.from || 0;
  articleModel.list({from: from})
    .then((list) => {
      res.json(200, list);
    })
    .catch((err) => {
      console.log(err);
      res.json(500, {}, err.toString());
    });
};

/**
 * @jsoc
 *   name:searchByWord
 *   desc:search by word
 *   group:article
 *   request
 *     method:get
 *     uri:/article/search
 *     params
 *     query
 *       keyword
 *         _type:string
 *         _from:keyword
 *         _desc:关键词
 *     body
 *   response
 *     body
 *       code
 *         _assert:200
 *       data
 *         _type:array
 *       message
 *         _type:string
 *         _required:false
 */
/**
 * @jsoc
 *   name:searchByTag
 *   desc:search by tag
 *   group:article
 *   request
 *     method:get
 *     uri:/article/search
 *     params
 *     query
 *       tag
 *         _type:string
 *         _from:tag
 *         _desc:标签名
 *     body
 *   response
 *     body
 *       code
 *         _assert:200
 *       data
 *         _type:array
 *       message
 *         _type:string
 *         _required:false
 */
article.search = (req, res) => {
  if (req.query.keyword) {
    let keyword = decodeURIComponent(req.query.keyword);
    articleModel.list({keyword: keyword})
      //.then(articleModel.lowScore)
      .then((list)=> {
        res.json(200, list);
      })
      .catch((err) => {
        console.log(err);
        res.json(500, {}, err.toString());
      });
  } else if (req.query.tag) {
    let tag = decodeURIComponent(req.query.tag);
    articleModel.list({tag: tag})
      //.then(articleModel.lowScore)
      .then((list)=> {
        res.json(200, list);
      })
      .catch((err) => {
        console.log(err);
        res.json(500, {}, err.toString());
      });
  } else {
    res.json(200, []);
  }
};

module.exports = article;