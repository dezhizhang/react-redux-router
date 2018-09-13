import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

let app = express();
let dbUrl='mongodb://localhost:27017';

app.use(bodyParser.json());


const validate =(data) => {
    let errors={};
    if(data.username ==='') errors.username = '用户名不能为空';
    if(data.couver ==='') errors.cover ='图片地址不能为空';

    const isValied = Object.keys(errors).length===0;
    return { errors,isValied} 

}

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

    app.get('/api/games/:id',(req,res) => {
        db.collection('games').findOne({_id: new mongodb.ObjectId(req.param._id)},(err,game) => {
            if(err){
                console.log('查询失败'+err);
                return;

            }
            res.json({game});

        } )
    })

    app.post('/api/games',(req,res) => {
       const { errors,isValied } =validate(req.body);
       if(isValied){
        let { username,cover } = req.body;
        db.collection('games').insertOne({username,cover},(err,data)=> {
            if(err){
                res.status(500).json({errors:{ global:'出错了'}});

            } else {
                res.json({ games:data.ops[0]});

            }
            
            
        })
       }else{
           res.status(400).json({ errors });

       }

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






