var mysql = require('mysql');

var connection = null;

exports.connect = function(done){
   // connectionPool = getConnection();
   // connection = mysql.createConnection({
   //    connectionLimit: 10,
   //    host     : 'localhost',
   //    user     : 'piscine',
   //    password : 'piscine',
   //    database: 'festivalxbfjmadm'
   // });
   // connection.connect(function(err){
   //     if (err) done(err);
       done(null);
   // });
}

var connectionPool = null;

function getConnection(){
   // console.log("get connection");
   if (!connectionPool){
      // console.log("init connectionPool");
      connectionPool = mysql.createPool({
         connectionLimit: 10,
         host     : 'mysql-projetsep.alwaysdata.net',
         user     : 'projetsep',
         password : 'ProjetSEP-2020',
         database: 'projetsep_festival_des_jeux'
      })      
   }
   // return connection;
   return connectionPool;
}

// ----------------------------------------------------
// ---------- SELECT / Query data

exports.queryData = function(request,callback){
   // console.log("query")
   getConnection().query(request,function(err,result){
        if(err) console.log(err);
        callback(result);
    });
}

exports.queryAll = function(table,callback){
    this.queryData(`SELECT * FROM ${table}`, callback);
}

exports.queryAllOrdered = function(table,order,callback){
    this.queryData(`SELECT * FROM ${table} ORDER BY ${order}`, callback);
}

exports.queryAllOrderedDesc = function(table,order,callback){
    this.queryData(`SELECT * FROM ${table} ORDER BY ${order} DESC`, callback);
}

exports.queryValue = function(table,property,key,callback){
    this.queryData(`SELECT * FROM ${table} WHERE ${property}=${key}`, callback);
}

exports.queryValuesOrdered = function(table,property,key,order,callback){
    this.queryData(`SELECT * FROM ${table} WHERE ${property}=${key} ORDER BY ${order}`, callback);
}

exports.queryValuesOrderedDesc = function(table,property,key,order,callback){
    this.queryData(`SELECT * FROM ${table} WHERE ${property}=${key} ORDER BY ${order} DESC`, callback);
}

// no collate, seems to be case insensitive !?
//COLLATE SQL_Latin1_General_CP1_CI_AS 
exports.queryValueStarting = function(table,property,searchTerm,callback){
    this.queryData(`SELECT DISTINCT * FROM ${table} WHERE ${property} LIKE '${searchTerm}%'`,callback);
}

exports.queryValueOrderedStarting = function(table,property,searchTerm,order,callback){
    this.queryData(`SELECT DISTINCT * FROM ${table} WHERE ${property} LIKE '${searchTerm}%' ORDER BY ${order}`,callback);
}

exports.queryValueOrderedStartingDesc = function(table,property,searchTerm,order,callback){
    this.queryData(`SELECT DISTINCT * FROM ${table} WHERE ${property} LIKE '${searchTerm}%' ORDER BY ${order} DESC`,callback);
}



// ----------------------------------------------------
// ---------- INSERT/UPDATE / Add or modify data


// if val is a string return 'val' else return val
var val2val = function(val){
    if(typeof(val)=='string'){
        val = '"'+val+'"';
    }
    return val;
}
// build SET request from value objects properties
var mapsetvalues = function(values){
    var keys = Object.keys(values);
    // console.log(keys);
    var setvalue = "SET ";
    for(i=1;i<keys.length;i++){
        if (keys[i].slice(0,1) != "_"){ // convention for private property not save on BD
            if(i>1) { setvalue += ", "; } 
            setvalue += `${keys[i]}=${val2val(values[keys[i]])}`;
        }
    }
    return setvalue;
}

var mapfirstvaluekey = function(values){
    var wherevalue = " WHERE ";
    var keys = Object.keys(values);
    wherevalue += ` ${keys[0]}=${val2val(values[keys[0]])}`;
    return wherevalue;
}

var maptwovaluekey = function(values,firstKey,secondKey){
    var setvalue = "SET ";
    var wherevalue = " WHERE ";
    var keys = Object.keys(values);
    var first = 0;
    var second = 0;
    for(i=0;i<keys.length;i++){
        if (keys[i].slice(0,1) != "_"){ // convention for private property not save on BD
            if(i>0) { setvalue += ", "; } 
            setvalue += `${keys[i]}=${val2val(values[keys[i]])}`;
            if(keys[i]==firstKey) { first = i; }
            if(keys[i]==secondKey) { second = i; }
        }
    }
   //  console.log(`first=${first}`);
   //  console.log(`second=${second}`);
    wherevalue += ` ${keys[first]}=${val2val(values[keys[first]])} AND ${keys[second]}=${val2val(values[keys[second]])}`;
   //  console.log(`wherevalue=${wherevalue}`);
    return setvalue + wherevalue;
}

// table is the table to update
// values is an object describing values to change
// first property of this object has to be the key used by WHERE clause
exports.updateValue = function(table,values,callback){
    var req = `UPDATE ${table} ` + mapsetvalues(values) + mapfirstvaluekey(values);
   //  console.log(req);
    this.queryData(req,callback);
}
exports.updateValueTwoKeys = function(table,values,first,second,callback){
   //  console.log(`first key=${first} - second key=${second}`);
    var req = `UPDATE ${table} ` + maptwovaluekey(values,first,second);
   //  console.log(req);
    this.queryData(req,callback);
}
// build INSERT request from value object properties
// ignore first value considered as primary index
var mapinsertvalues = function(values){
    var keys = Object.keys(values);
    // console.log(keys);
    var setvalue = "(";
    for(i=1;i<keys.length;i++){
        if (keys[i].slice(0,1) != "_"){ // convention for private property not save on BD
            if(i>1) { setvalue += ", "; } 
            setvalue += keys[i];
        }
    }
    setvalue += ") VALUES (";
    for(i=1;i<keys.length;i++){
        if (keys[i].slice(0,1) != "_"){ // convention for private property not save on BD
            if(i>1) { setvalue += ", "; } 
            setvalue += `${val2val(values[keys[i]])}`;
        }
    }
    setvalue += ");";
    return setvalue;
}
// build INSERT request from value object properties
// same as previous but no primary key, all values are inserted
var mapinsertallvalues = function(values){
    var keys = Object.keys(values);
    // console.log(keys);
    var setvalue = "(";
    for(i=0;i<keys.length;i++){
        if (keys[i].slice(0,1) != "_"){ // convention for private property not save on BD
            if(i>0) { setvalue += ", "; } 
            setvalue += keys[i];
        }
    }
    setvalue += ") VALUES (";
    for(i=0;i<keys.length;i++){
        if (keys[i].slice(0,1) != "_"){ // convention for private property not save on BD
            if(i>0) { setvalue += ", "; } 
            setvalue += `${val2val(values[keys[i]])}`;
        }
    }
    setvalue += ");";
    return setvalue;
}

// table is the table where insert new value
// values is an object describing values to insert
exports.insertValue= function(table,values,callback){
    var req = `INSERT INTO ${table} ${mapinsertvalues(values)}`;
   //  console.log(req);
    this.queryData(req,callback);
}
// table is the table where insert new value
// values is an object describing values to insert
exports.insertallValue= function(table,values,callback){
    var req = `INSERT INTO ${table} ${mapinsertallvalues(values)}`;
   //  console.log(req);
    this.queryData(req,callback);
}


exports.deleteValue = function(table,key,keyval,callback){
    this.queryData(`DELETE FROM ${table} WHERE ${key}=${val2val(keyval)}`,callback);
}

exports.deleteValueTwoKeys = function(table,key1,key1val,key2,key2val,callback){
    this.queryData(`DELETE FROM ${table} WHERE ${key1}=${val2val(key1val)} AND ${key2}=${val2val(key2val)}`,callback);
}