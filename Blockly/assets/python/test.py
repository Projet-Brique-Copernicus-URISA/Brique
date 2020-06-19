from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket
 
 
class SimpleEcho(WebSocket):
 
    def handleMessage(self):
 
        print(self.data)
 
server = SimpleWebSocketServer('', 8000, SimpleEcho)
server.serveforever()