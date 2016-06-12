'use strict';

module.exports = {
    '/':'get.article.list',
    '/article':'get.article.list',
    '/article/{id}':'get.article.item',
    '/loadMore':'get.article.loadMore',
    '/search':'get.index.building',
    '/tags':'get.index.building',
    '/about':'get.index.about',
    '/project':'get.index.building',
};