const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const perfil = require('./routes/perfil');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/perfil', perfil.routes());

module.exports = router;
