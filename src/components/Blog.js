import React from 'react';

const Blog = () => {
    return (
        <div className='px-8 pt-8 text-center'>
        <div className='mb-8 bg-pink-100 rounded-lg p-3'>
        <h2 className='text-3xl font-bold mb-3 text-pink-400'>Questions No 1: What is CORS?</h2>
        <p className='text-xl' >Answer:CORS stands for cross-origin resource sharing. Just like HTTPS, it's a protocol that defines some rules for sharing resources from a different origin. We know that modern web apps consist of two key components: a client and a server. The client requests some data from the server, and the server sends back data as a response. That means In ReactJS, CORS refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.</p>
        </div>
        <div className='mb-8 bg-pink-100 rounded-lg p-3'>
        <h2 className='text-3xl font-bold mb-3 text-pink-400'>Questions No 2: Why are you using firebase?What other options do you have to implement authentication?</h2>
        <p className='text-xl' >Answer:We use firebase for ssome benefits.For examples-
         1.Reliable & Extensive Databases
         2.Fast & Safe Hosting
         3.Provides A Free Start to Newbies
         4.Google Analytics
         5.Firebase Cloud Messaging for Cross-Platform
         6.Free Multi-Platform Firebase Authentication etc
         <br />
         
          Auth0, MongoDB, Passport, Okta etc are the most  other popular alternatives and competitors to Firebase Authentication.
        </p>
        </div>

        <div className='mb-8 bg-pink-100 rounded-lg p-3'>
        <h2 className='text-3xl font-bold mb-3 text-pink-400'>Questions No 1: How does the private route work?</h2>
        <p className='text-xl' >Answer:The Private Route component is used to protect selected pages in a React app from unauthenticated users.
        <br/>
        PrivateRoute component will simply check the current user state from the user,destructed from useContext hook.<br/>
        The PrivateRoute component renders child components if the user is loged in.Then the user is redirected to the login page with return url paged in the Navigate component.
        </p>
        </div>
        <div className='mb-8 bg-pink-100 rounded-lg p-3'>
        <h2 className='text-3xl font-bold mb-3 text-pink-400'>Questions No 1: What is Node? How does Node work?</h2>
        <p className='text-xl' >Answer:  Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.
        <br/>
        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </p>
    </div>
</div>
    );
};

export default Blog;