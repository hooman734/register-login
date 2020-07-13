Router = require('koa-router');
path = require('path');

const router = new Router();
const log = require(path.resolve(__dirname, '../controllers', 'registerController'));

router.get('/api/register',async ctx => await log.fillForm(ctx));
router.post('/api/register', async ctx => await log.register(ctx));
 
 

module.exports = router;