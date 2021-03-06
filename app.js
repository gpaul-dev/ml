let express = require('express');
let server = express();
let path=require('path');
let publicPath=path.resolve(__dirname,"./public");
let viewsPath=path.resolve(__dirname,"./views");
let port=process.env.PORT;
server.use(express.static(publicPath));
server.use(express.urlencoded());
server.listen(port||3000);
server.get('/',(req,res)=> res.sendFile(viewsPath+'/home.html'));
server.get('/register',(req,res)=> res.sendFile(viewsPath+"/register.html"));
server.get('/login',(req,res)=> res.sendFile(viewsPath+"/login.html"));
server.post('/register',(req,res)=>res.redirect("/"));
server.post('/login',(req,res)=>console.log(req.body));
