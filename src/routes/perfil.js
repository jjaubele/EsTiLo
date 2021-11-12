const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('perfil', '/', async (ctx) => {
  await ctx.render('perfil/index', {
    nameUrl: (name) => ctx.router.url('hello.name', name),
    notice: ctx.flashMessage.notice,
  });
});

// router.get('hello.name', '/:name', (ctx) => {
//   ctx.body = { message: `Hello ${ctx.params.name}!` };
// });

module.exports = router;
