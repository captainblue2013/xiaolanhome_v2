/**
 * Created by lanhao on 16/6/11.
 */
const requestAgent = require('request-agent').init();

requestAgent.url('http://127.0.0.1:3001/loadMore')
.headers({'content-type':'application/json'})
.body({'from':0})
.method('get')
.send()
.then(requestAgent.toJson)
.then((value) => {
    console.log(value);
});
