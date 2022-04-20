import * as http from "http";
import Server from "./Server";

const port = 8080;

Server.set( "port", port );

const server = http.createServer( Server );

server.listen( port );
server.on( "error", onError );
server.on( "listening", onListening );


function onError(error: NodeJS.ErrnoException): void {

    if ( error.syscall !== "listen" ) {
        throw error;
    }

    switch ( error.code ) {

        case "EADDRINUSE" :
            console.log(`Index::onError: ${ port } is already in use` );
            process.exit( 1 );

        default:
            throw error;

    }

}


function onListening(): void {
    const address   = server.address();
    let bind        = null;

    if ( address ) {
        bind = typeof address === "string" && address !== null ? `pipe ${ address }` : `port ${ address.port }`;
    }

    console.log(`Listening on ${ bind }` );
    
}
