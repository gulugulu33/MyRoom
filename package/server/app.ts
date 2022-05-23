import Koa from 'koa';
import koaBody from 'koa-body';
import Router from 'koa-router';
import koaStatic from 'koa-static';
import { config } from './config';
import { PORT } from './constants';

const app = new Koa();

app.use(koaBody())

const router = new Router();

router.get('/api', async (ctx, next) => {
  ctx.body = { message: 'Hello World' };
  await next(); //若下一个要执行的中间件回调中也存在异步函数，我们就需要在调用next时也使用await关键字
});

router.post('/api', async (ctx, next) => {
  console.log('save:',ctx.request.body);
  //添加到数据库
  ctx.body = {message: 'Save data successful', receivedData: ctx.request.body}
  await next()
})
// 加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

app.use(koaStatic(config.staticFilePath));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
