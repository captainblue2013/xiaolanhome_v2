"use strict";
const request = require('request-agent').init();

const vote = function () {
  request.url('http://www.ctcnn.com/jinlvAward2016/vote.jsp?id=270&awardIterm_id=15')
    .body({
      awardIterm_id:15,
      id:270
    })
    .method('post')
    .send()
    .then(function (res) {
      if(res.statusCode == 200){
        console.log(res.body);
      }
      setTimeout(function () {
        vote();
      },1000);
    });
};


vote();