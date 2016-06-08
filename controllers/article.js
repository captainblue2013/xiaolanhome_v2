/**
 * Created by lanhao on 16/5/30.
 */

'use strict';

let article = {};

article.list = (req, res) => {

    res.end('list');
};

article.item = (req, res) => {
    res.end('item');
};

module.exports = article;