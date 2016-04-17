var express = require('express'),
    router = express.Router();


// set '/'
router.use(express.static(__dirname+'/../../dist'));
router.use(express.static(__dirname+'/../../client'));

// set server routes
router.get('/', _redirectToHomePage);
router.get('/main', _redirectToHomePage);
router.get('/home', _serverSideRender);

router.get('/photo', _serverSideRender);
router.get('/photo/upload', _serverSideRender);
router.get('/photo/list', _serverSideRender);
router.get('/photo/social', _serverSideRender);
router.get('/photo/social/comments', _serverSideRender);
router.get('/photo/social/chat', _serverSideRender);

router.get('/products', _serverSideRender);
router.get('/products/:id', _serverSideRender);
router.get('/products/:id/edit', _serverSideRender);

router.get('/user', _serverSideRender);
router.get('/user/login', _serverSideRender);
router.get('/user/logout', _serverSideRender);
router.get('/user/register', _serverSideRender);
router.get('/user/forgetpass', _serverSideRender);
router.get('/user/edit', _serverSideRender);



function _redirectToHomePage(req, res) {
  res.redirect('/home');
}

function _serverSideRender(req, res) {
  res.sendfile('server/views/index.html');
}





module.exports = router;
