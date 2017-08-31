"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "klast",
			"path": "klast/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/klast.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"klast": "klast"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const klast = require( "./klast.js" );
//: @end-server

//: @client:
const klast = require( "./klast.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "klast", ( ) => {

	describe( "`klast( { 'hello': 'world' }, 'yeah', [ 'ugh' ], { 'hello': true } )`", ( ) => {
		it( "should be equal to 'world yeah ugh hello'", ( ) => {

			assert.equal( klast( { "hello": "world" }, "yeah", [ "ugh" ], { "hello": true } ),
				"world yeah ugh hello" );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "klast", ( ) => {

	describe( "`klast( { 'hello': 'world' }, 'yeah', [ 'ugh' ], { 'hello': true } )`", ( ) => {
		it( "should be equal to 'world yeah ugh hello'", ( ) => {

			assert.equal( klast( { "hello": "world" }, "yeah", [ "ugh" ], { "hello": true } ),
				"world yeah ugh hello" );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "klast", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`klast( { 'hello': 'world' }, 'yeah', [ 'ugh' ], { 'hello': true } )`", ( ) => {
		it( "should be equal to 'world yeah ugh hello'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return klast( { "hello": "world" }, "yeah", [ "ugh" ], { "hello": true } );
				}

			).value;

			assert.equal( result, "world yeah ugh hello" );

		} );
	} );

} );

//: @end-bridge
