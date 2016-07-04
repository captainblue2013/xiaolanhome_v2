'use strict';

module.exports = {
  '/': 'get.index.index',
  '/article/search': 'get.article.search',
  '/article/{id}': 'get.index.item',
  '/loadMore': 'get.article.loadMore',
  '/tags': 'get.index.tags',
  '/about': 'get.index.about',
  '/project': 'get.index.building',
  '/search': 'get.index.search',
  '/{id}': 'get.index.item',
};