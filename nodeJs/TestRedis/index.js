var redis = require("redis");

var port = 6379;
var host = "127.0.0.1";
var password = "lmj917857";

var client = redis.createClient(port, host);
client.auth(password, function() {
    console.log("OK");
});

function setKey(key, value, callback) {

    client.on("connect", function() {
        client.set(key, value, callback);
    });
}

function getKey(key, callback) {

    client.on("connect", function() {
        client.get(key, callback);
    });
}

function hashSet(hash, key, value, callback) {
    client.on("connect", function(){
        client.hset(hash, key, value, callback);
    });
}

function hashGet(hash, key, callback) {
    client.on("connect", function(){
        client.hget(hash, key, callback);
    });
}

function hashGetAll(hash, callback) {
    client.on("connect", function(){
        client.hgetall(hash, callback);
    });
}

function hmSet(hash, paramArr, callback) {
    client.on("connect", function(){
        client.hmset(hash, ...paramArr, callback);
    });
}

module.exports = {
    setKey: setKey,
    getKey: getKey,
    hashSet:hashSet,
    hashGet: hashGet,
    hashGetAll: hashGetAll,
    hmSet: hmSet
};


