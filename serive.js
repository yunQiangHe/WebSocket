var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 9998 }); //服务端口8181

wss.on('connection', function(ws) {
    console.log('服务端：客户端已连接');
    ws.on('message', function(message) {
        //打印客户端监听的消息
        console.log(message);
    });
});