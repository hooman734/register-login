Router = require('koa-router');

router = new Router();


router.get('/api/register', async ctx => {
    await ctx.render('register');
 });
 
 

module.exports = router;