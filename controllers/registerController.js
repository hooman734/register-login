exports.register = async ctx => {
    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;

 };

 exports.fillForm = async ctx => {
    await ctx.render('register');
};