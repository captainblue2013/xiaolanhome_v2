'use strict';

module.exports = {
    '/':'get.article.list',
    '/article':'get.article.list',
    '/article/search':'get.article.search',
    '/article/{id}':'get.article.item',
    '/loadMore':'get.article.loadMore',
    '/tags':'get.index.building',
    '/about':'get.index.about',
    '/project':'get.index.building',
    '/search':'get.index.search'
};