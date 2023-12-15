const Router = require('koa-router');
const { faker } = require('@faker-js/faker');
const { getListMessages } = require('../../db/db');

const router = new Router();

router.get('/messages/unread', async (ctx) => {
    const timestamp = new Date().getTime();
    const messages = getListMessages(timestamp).sort(function (a, b) {
        return a.received - b.received;
    })
    ctx.response.body = {
        status: 'ok',
        timestamp: timestamp,
        messages: messages,
    };
    ctx.response.status = 200;
});

module.exports = router;
