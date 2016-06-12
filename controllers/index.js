/**
 * Created by lanhao on 15/5/17.
 */

const articleModel = require('../models/article');

var Controller = {};

Controller.index = (req,res) => {

};

Controller.about = (req, res) => {
    res.render('about.html',{});
};

Controller.building = (req,res) => {
    res.render('tags.html',{});
}

module.exports = Controller;