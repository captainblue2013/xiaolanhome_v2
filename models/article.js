/**
 * Created by lanhao on 16/6/2.
 */

'use strict';

const requestAgent = require('request-agent').init();
const moment = require('moment');


let article = {};

article.detail = (id) => {
    return requestAgent
        .headers({'content-type':'application/json'})
        .url('http://eeesss.lanhao.name/blog/articles/'+id)
        .method('get')
        .send()
        .then(requestAgent.toJson)
        .then(function (obj) {
            if(obj && obj.found){
                obj._source.modified = moment.unix(obj._source.modified).format('MM/DD/YYYY');
                return obj._source;
            }else{
                return false;
            }
        });
};



/**
 *
 * @param option
 * {
 *  page default 0
 *  offset default 0
 *  size default 10
 *  keyword default null
 * }
 *
 */
article.list = (option) => {
    let body = {
        "sort": [{ "modified": { "order": "desc" }}],
        "from": (option && option.from)?option.from:0,
        "size": (option && option.size)?option.size:10
    };
    if(option && option.keyword){
        body.query = {
            match:{
                '_all':option.keyword
            }
        };
        body.sort.unshift({ "_score": { "order": "desc" }});
    }
    return requestAgent
        .headers({'content-type':'application/json'})
        .url('http://eeesss.lanhao.name/blog/articles/_search')
        .body(body)
        .method('get')
        .send()
        .then(requestAgent.toJson)
        .then(article.formatDate)
        .then(function (obj) {
            if(obj && obj.hits && obj.hits){
                return obj.hits.hits;
            }else{
                console.log(obj);
                reject('error from ES');
            }
        });
};

article.formatDate = (obj) => {
    var list = obj.hits.hits;
    if(list.length){
        for(let k in list){
            console.log(list[k]._score,list[k]._source.title);

            list[k]._source.modified = moment.unix(list[k]._source.modified).format('MM/DD');
        }
    }
    obj.hits.hits = list;
    return obj;
};

article.lowScore = (list) => {
    let result = [];
    for(let k in list){
        //
    }
};

module.exports = article;

//article.list({from:10}).then(function (val) {
//    console.log(val);
//}).catch(function (err) {
//    console.log('error!'+err);
//});