import express from 'express';
import mongodb from 'mongodb';


let app = express();
let dbUrl='mongodb://localhost:27017';


mongodb.MongoClient.connect(dbUrl,(err,clinet) => {
    if(err){
        console.log('数据库连接失败');
        return;

    }
    console.log('数据库连接成功');
    let db = clinet.db('crud');
    app.get('/api/games',(req,res)=> {
        db.collection('games').find({}).toArray((err,games)=>{
            res.json({ games })
        })

    })

    app.use((req,res)=> {
        res.status(404).json({
            errors:{
                global:'你发送的地址不存在'
            }
        })
    });

   
    app.listen('8082','localhost');

})






