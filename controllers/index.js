/**
 * Created by lanhao on 15/5/17.
 */



var Controller = {};

Controller.index = function (req,res) {

    res.json(200,{
        'headers':req.headers,
        'method':req.method,
        'query':req.query,
        'body':req.body
    });
};

Controller.detail = function(req,res){
    res.end('detail');
}

module.exports = Controller;