import express from 'express';
import mongodb from 'mongodb';

let app = express();
let dbUrl='mongodb://localhost'


mongodb.MongoClient.connect(dbUrl,(err,client) =>{
    if(err){
        console.log('数据库连接失败');
        return;

    } 
    let db=client.db('curd')
    app.get('api/games',(req,res) => {
        db.collection('games').find({}).toArray((err,games) =>{
            res.json({games})

        })
    })
    app.listen('8090','localhost')
})


