const mongoClient = require("mongodb").MongoClient
mongoClient.connect("mongodb://localhost:27017/crud")
            .then(conn => global.conn = conn.db("crud"))
            .catch(err => console.log(err))

function findAll(callback){  
    global.conn.collection("clientes").find({}).toArray(callback);
}

function insert(cliente, callback){
    global.conn.collection("clientes").insert(cliente, callback);
}

const ObjectId = require("mongodb").ObjectId;

function findOne(id, callback){  
    global.conn.collection("clientes").findOne(new ObjectId(id), callback);
}

function update(id, cliente, callback){
    global.conn.collection("clientes").update({_id: new ObjectId(id)}, cliente, callback);
}

function deleteOne(id, callback){
    global.conn.collection("clientes").deleteOne({_id: new ObjectId(id)}, callback);
}

module.exports = { findAll, insert, findOne, update, deleteOne }

