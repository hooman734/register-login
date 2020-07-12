const Koa = require('koa'),
   path = require('path'),
   Pug = require('koa-pug'),
   Router = require('koa-router'),
   KoaBody = require('koa-body'),
   port = process.env.PORT || 4444;


// instantiate all requirements
const app = new Koa();
const router = new Router();
const pug = new Pug({
   viewPath: path.resolve(__dirname, './views'),
   basedir: path.resolve(__dirname, './views'),
   app: app
});




// setup routers
app
   .use(KoaBody())
   .use(router.allowedMethods())
   .use(router.routes());
   


// define routes
router.get('/api', async ctx => {
   await ctx.render('first_view');
});




// route to default welcome page
app.use(async ctx => {
   ctx.body = '<h1><em>Welcome...</em></h1>';
 });


// setup listening
app.listen(port, () => {
   console.log(`Listening on port ${port}...`);
});
