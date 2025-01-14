# Node.js Server Resource Exhaustion

This repository demonstrates a common Node.js server error: resource exhaustion due to improperly handled connections. The server keeps connections alive indefinitely, leading to memory leaks and eventual server crashes.

## Bug Description
The `server.js` file contains a Node.js HTTP server that does not properly close connections. This can lead to a large number of open connections, consuming significant server resources and ultimately causing the server to become unresponsive or crash.

## Solution
The `serverSolution.js` file demonstrates a corrected version that uses the `close` method of the HTTP response object to properly terminate connections.