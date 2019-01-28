var redisUtil = require("./index");

redisUtil.setKey("key2", "xiaojie", function(error, reply) {
    if(error == null) {
        console.log("set:" + reply);
    }else{
        console.log(error);
    }
});
redisUtil.getKey("key2", function(error, reply) {
    if(error == null) {
        console.log("get:" + reply);
    }else{
        console.log(error);
    }
});

redisUtil.hashSet("map1", "key1", "value1", function(error, reply) {
    if(error == null) {
        console.log("hashSet:" + reply);
    }else{
        console.log(error);
    }
});

redisUtil.hashSet("map1", "key2", "value2", function(error, reply) {
    if(error == null) {
        console.log("hashSet:" + reply);
    }else{
        console.log(error);
    }
});

redisUtil.hashGet("map1", "key1", function(error, reply) {
    if(error == null) {
        console.log("hashGet:" + reply);
    }else{
        console.log(error);
    }
});

redisUtil.hashGetAll("map1", function(error, reply) {
    if(error == null) {
        console.log("hashGetAll:");
        console.log(reply);
    }else{
        console.log(error);
    }
});

redisUtil.hmSet("map4", ["key1", "value1", "key2", "value2"], function(error, reply) {
    if(error == null) {
        console.log("hmSet:");
        console.log(reply);
    }else{
        console.log(error);
    }
});

redisUtil.hashGetAll("map4", function(error, reply) {
    if(error == null) {
        console.log("hashGetAll:");
        console.log(reply);
    }else{
        console.log(error);
    }
});