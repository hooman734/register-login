// import built in modules & setup using port
const Koa = require('koa'),
   path = require('path'),
   Pug = require('koa-pug'),
   KoaBody = require('koa-body'),
   port = process.env.PORT || 4444;

   

   
// import customized routers
const registerRouter = require(path.resolve(__dirname, './routers', 'registerRouter'));



// instantiate all requirements
const app = new Koa();
const router = new Router();
const pug = new Pug({
   viewPath: path.resolve(__dirname, './views'),
   basedir: path.resolve(__dirname, './views'),
   app: app
});



// use body
app.use(KoaBody());



// setup routers
app
   .use(registerRouter.routes())
   .use(registerRouter.allowedMethods());
   


// route to default welcome page
app.use(async ctx => {
   await ctx.render('first_view');
   // ctx.body = `<h1><em>Welcome...</em></h1>`;
 });



// setup listening
app.listen(port, () => {
   console.log(`Listening on port ${port}...`);
});
