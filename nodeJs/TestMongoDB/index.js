var mongo = require("mongodb");

var url = "mongodb://127.0.0.1:27017/test";

function insert(collection, obj, callback) {
    mongo.connect(url, function(error, db) {
        if(error == null) {
            var database = db.db("test");
            //创建集合
            // database.createCollection("teacher", function(error, res) {
            //     if(error == null) {
            //         console.log(res);
            //     }else{
            //         console.log(error);
            //     }
            // })
            //插入数据
            // var obj = {name: "dog", age: 22, sex :1};
            // database.collection("student").insertOne(obj, function(error, res) {
            //     if(error == null) {
            //         console.log(res);
            //     }else{
            //         console.log(error);
            //     }
            //     db.close();
            // });

            database.collection(collection).insertOne(obj, callback);
            db.close();
        }else{
            console.log(error);
        }
    })
}

function insertMany(collection, objs, callback) {
    mongo.connect(url, function(error, db) {
        if(error == null) {
            var database = db.db("test");
            database.collection(collection).insertMany(objs, callback);
            db.close();
        }else{
            console.log(error);
        }
    })
}

// insertMany("student", [{name: "dog", age: 22, sex :1},{name: "monkey", age: 21, sex :0}], function(error, res) {
//     if(error == null) {
//         console.log(res);
//     }else{
//         console.log(error);
//     }
// })

function find(collection, where, callback) {
    mongo.connect(url, function(error, db) {
        if(error == null) {
            var database = db.db("test");
            database.collection(collection).find(where).toArray(callback);
            db.close();
        }else{
            console.log(error);
        }
    })
}

// find("student", {age :22}, function(error, res) {
//     if(error == null) {
//         console.log(res);
//     }else{
//         console.log(error);
//     }
// });

function update(collection, where, update, callback) {
    mongo.connect(url, function(error, db) {
        if(error == null) {
            var database = db.db("test");
            database.collection(collection).updateOne(where, update, callback);
            db.close();
        }else{
            console.log(error);
        }
    })
}

// update("student", {name :"dog"}, {$set:{age:18}}, function(error, res) {
//     if(error == null) {
//         console.log(res);
//     }else{
//         console.log(error);
//     }
// });

function deleteData(collection, where, callback) {
    mongo.connect(url, function(error, db) {
        if(error == null) {
            var database = db.db("test");
            database.collection(collection).deleteOne(where, callback);
            db.close();
        }else{
            console.log(error);
        }
    })
}

// deleteData("student", {$and:[{age:18},{name:"dog"}]}, function(error, res) {
//     if(error == null) {
//         console.log(res);
//     }else{
//         console.log(error);
//     }
// });

module.exports = {
    insert: insert,
    insertMany: insertMany,
    find: find,
    update:update,
    deleteData:deleteData
};



