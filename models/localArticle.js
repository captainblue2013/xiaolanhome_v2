const moment = require('moment');
const fs = require('fs');
const path = require('path');
class localArticle {
  constructor(){
    this.map = {};
    this.sortList = [];
    this.se = {};
  }

  load(){

    let list = fs.readdirSync(`./articles`);
    
    let len = list.length;
    for(let k=len-1;k>0;k--){
      let article = Object.assign({},require('../articles/'+list[k]));
      delete article.content;
      article.seq = Number.parseInt(article.modified);
      article.createdAt = moment.unix(article.createdAt).format('MM/DD/YYYY');
      article.modified = moment.unix(article.modified).format('MM/DD/YYYY');
      
      this.sortList.push(article);
      this.map[article.id]= article;
      for(let i in article.keywords){
        let word = article.keywords[i];
        
         this.se[word] = this.se[word] || [];
         this.se[word].push(article);
      }
    }
    this.updateDesc();
   //console.log(this.sortList);process.exit(0);
  }

  updateDesc(){
    this.sortList.sort((a,b)=>{
      //console.log(a.seq,b.seq,typeof a.seq);process.exit(0);
      return b.seq - a.seq;
    });
  }
}

module.exports = localArticle;

// let t = new localArticle();
// t.load();
// console.log(t.sortList);process.exit(0);