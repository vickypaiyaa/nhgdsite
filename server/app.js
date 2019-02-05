'use strict';

const express = require('express');
const app=express();
const bodyParser=require('body-parser');

app.set("views", "./views");
app.set("view engine", "jade");

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
	res.render('index');
})

module.exports = app;