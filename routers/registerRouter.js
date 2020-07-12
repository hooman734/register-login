Router = require('koa-router');
path = require('path');

const router = new Router();
const register = require(path.resolve(__dirname, '../controllers', 'registerController'));

router.get('/api/register',async ctx => await register.register(ctx));
 
 

module.exports = router;