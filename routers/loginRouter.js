Router = require('koa-router');
path = require('path');

const router = new Router();
const log = require(path.resolve(__dirname, '../controllers', 'loginController'));

router.get('/api/login',async ctx => await log.fillForm(ctx));
router.post('/api/login', async ctx => await log.submit(ctx));
 
 

module.exports = router;