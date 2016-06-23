"use strict";
//let tree = {};
//let words = ['瓜皮','瓜先知','老虎','老虎开车'];
//
//const buildTree = (w) =>{
//    let _len = w.length;
//    let _node = tree;
//    for(let i=0; i<_len; i++){
//        _node[w.charAt(i)] = _node[w.charAt(i)] || {};
//        _node = _node[w.charAt(i)];
//    }
//};
//
//for(let k in words){
//    buildTree(words[k]);
//}
//
//let str = '瓜皮是大神'; // 瓜先知是大神 ， 瓜哥是大神 ，老虎不发车
//
//for(let i=0 ; i<str.length ; i++){
//    let j = i;
//    let find = '';
//    let _node = tree;
//    while(_node[str.charAt(j)]){
//        find += (_node[str.charAt(j)])?str.charAt(j):'';
//        _node = _node[str.charAt(j)];
//        j++;
//    }
//    if(find.length>1){
//        console.log('FIND:'+find);
//        process.exit(-1);
//    }
//}

const requestAgent = require('request-agent').init();


requestAgent.url('http://notification.services.blues.tff.com/send/mail')
    .headers({
        'content-type':'application/x-www-form-urlencoded'
    })
    .body({
        is_now:true,
        content:{
            To:'admin@lanhao.name',        // 用户邮箱（多用户用","隔开：xxx,bbb）
            To_name:'testUser',   // 别称
            Subject:'test title',   // 邮件标题
            Msg:'test content',       // 正文
            Type:'normal'      // 邮件类型（marketing，normal）
        }
    })
    .method('post').send()
    .then(function (val) {
        console.log(val.body);
    })
    .catch(function (err) {
        console.log('error',err);
    });
    
