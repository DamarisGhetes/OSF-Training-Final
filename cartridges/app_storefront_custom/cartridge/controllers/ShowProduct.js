'use strict';

var server = require('server');

server.get('RetrieveProduct', function(req, res, next)
{
    var productId = req.querystring.pid;
    var productMgr = require('dw/catalog/ProductMgr');
    var myProduct = productMgr.getProduct(productId);
    res.render('training/productfound', {myProduct: myProduct});
    return next();
});

server.get('RenderTemplate', function(req, res, next)
{
    res.render('training/testrendertemplate');
    return next();
});

server.get('TestRemoteInclude', function(req, res, next)
{
    res.render('training/testremoteinclude');
    return next();
});

server.get('TestDecorator', function(req, res, next)
{
    res.render('training/testdecorator');
    return next();
});

server.get('TestCustom', function(req, res, next)
{
    res.render('training/testmodule');
    return next();
});

server.get('TestBundle', function(req, res, next)
{
    res.render('training/testbundle');
    return next();
});


module.exports = server.exports();