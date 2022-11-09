import React from 'react';

const Blog = () => {
    return (
        <div className='px-8 pt-8 text-center'>
        <div className='mb-8 bg-pink-100 rounded-lg p-3'>
        <h2 className='text-3xl font-bold mb-3 text-pink-400'>Questions No 1: What is the Difference between SQL and NoSQ?</h2>
        <p className='text-xl' >Answer:1. SQL databases are primarily called RDBMS or relational Databases.NoSQL are primarily called as Non-relational or distributed database <br/>2.Structured Query Language but NoSQL is No declarative query language.<br/> 3.Sql databases have a predefined schema NoSQL databases use dynamic schema for unstructured data.<br/>4.Oracle,MySQL,Postgres etc Sql on the other hand MongoDB Redis,Hbase,Neo4j etc NoSql</p>
        </div>
        <div className='mb-8 bg-pink-100 rounded-lg p-3'>
        <h2 className='text-3xl font-bold mb-3 text-pink-400'>Questions No 2:What is JWT, and how does it work?</h2>
        <p className='text-xl' >Answer:JSON Web Token (JWT) is an open standard  that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
         <br />
         The Steps are below how jwt work:- <br/>
          1.Client login with username and password<br/>
          2.Server creates a token for the client.<br/>
          3.Server sends a token to the client <br/>
          4.Client stores the token on either localstorage or browser cookie.<br/>
          5.Clients make a request,a copy is send to the server for authorization<br/>
          6.Then server verifies the jwt signature<br/>
          7.Server respondss to the client's request
        </p>
        </div>

        <div className='mb-8 bg-pink-100 rounded-lg p-3'>
        <h2 className='text-3xl font-bold mb-3 text-pink-400'>Questions No 3: What is the difference between javascript and NodeJS?</h2>
        <p className='text-xl' >Answer:1.JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
        <br/>
        Javascript can only be run in the browsers.We can run Javascript outside the browser with the help of NodeJS.<br/>
        Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br/>
        Javascript used mainly clientside,Nodejs used server side.
        </p>
        </div>
        <div className='mb-8 bg-pink-100 rounded-lg p-3'>
        <h2 className='text-3xl font-bold mb-3 text-pink-400'>Questions No 4: How does NodeJS handle multiple requests at the same time?</h2>
        <p className='text-xl' >Answer: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
        <br/>
        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
        </p>
    </div>
</div>
    );
};

export default Blog;