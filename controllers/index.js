/**
 * Created by lanhao on 15/5/17.
 */

const articleModel = require('../models/article');

var Controller = {};

Controller.index = function (req,res) {

};

Controller.detail = function(req,res){
    res.end('detail');
}

module.exports = Controller;