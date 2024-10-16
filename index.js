const express = require('express');
const app = express();
const path = require('path');
const redditdata = require('./data.json');

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/rand', (req,res)=> {
    const num = Math.floor(Math.random() * 10)
    const newrannum = Math.floor(Math.random() * 10)
    let evenorodd;
 
    if(newrannum % 2 === 0){
      evenorodd ='even' ;
    }else{
      evenorodd ='odd';
    }
 
     res.render('random',{num, evenorodd,newrannum})
 })
 
 app.get('/authors',(req, res)=> {
     const authors = ['enid blyton','rl stine', 'roald dahl', 'jk rowling', 'dr seuss'];
     res.render('authors', {authors})
 })
 
 app.get('/', (req,res)=> {
     res.render('home')
 })
 
 app.get('/c/:subredditc',(req, res) => {
    const {subredditc} = req.params
    const data = redditdata[subredditc]
    if(data){
        res.render('subreddit', {...data})

    }else{
        res.render('notfound', {subredditc})

    }
})
 
 app.listen('3000', ()=>{
     console.log('listening at port 3000')
 })