const assert = require( "assert" );
const klast = require( "./klast.js" );

assert.equal( klast( { "hello": "world" }, "yeah", [ "ugh" ], { "hello": true } )
, "world yeah ugh hello" );

console.log( "ok" );
