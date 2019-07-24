var express = require('express'),
app=express(),

port = process.env.PORT || 3030,
bodyParser=require('body-parser'),
mailRoutes=require('./routes/mailRoutes.js');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mailRoutes(app);

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.info('>>> 🌎 Open http://localhost:%s/ in your browser.', port)
});