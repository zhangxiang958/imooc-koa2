/**
 * 实现 koa 的中间件机制，达到类似以下效果：
 * 
 * compose(foo, bar, test)(ctx);
 * 
 * 打印：
 * foo
 * bar
 * test
 */

function foo(ctx, next) {
    console.log('foo');
}

function bar(ctx, next) {
    console.log('bar');
}

function test(ctx, next) {
    console.log('test');
}

function compose(...fn) {
    return function(ctx, next) {
        
    }
}

