/**
 * Created by lanhao on 15/5/17.
 */

//引入配置文件
let config = require('./config/config');
//引入小蓝框架
let xiaolan = require('xiaolan')(config);

const localArticle = require('./models/localArticle');

const local = new localArticle()
local.load();
process.localArticle = local;

//启动监听服务
xiaolan.createServer();