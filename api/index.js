//Variável global precisa ser forçada no servidor

'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var users = [{
    username: 'joao',
    name: 'João',
    age: 30
},{
    username: 'maria',
    name: 'Maria',
    age: 36
},{
    username: 'hyde',
    name: 'Hyde',
    age: 27
}];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', function(req,res){
    res.json({ response: 'Home' });
});

app.get('/user', function(req,res){
    res.json({ response: 'User' });
});

app.get('/user/:username',function(req,res){
    var username = req.params.username;
    if(hasUser(users, username)){
        return res.json(users.filter( function(user){
            return user.username === username;
        }));
    }
    res.status(404).json({ erro: 'Usuário não encontrado' });
    
    res.json({ erro: 'Usuário não encontrado' });
});

app.post('/user', function(req, res){
    var username = req.body.username;
    if(!hasUser(users, username)){
        var name = req.body.name;
        var age = req.body.age;
        var obj = { username:username, name:name, age:age };
        users.push(obj);
        res.json({ message: 'Usuário cadastrado.'});
    }else{
        res.json({ message: 'Usuário ' + username + ' já existe' });
    }
});

function hasUser(users, username){
    return users.some( function(user){
        return user.username === username;
    });
}

app.listen(3000);