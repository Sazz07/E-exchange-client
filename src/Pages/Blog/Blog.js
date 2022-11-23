import React from 'react';

const Blog = () => {
    return (
        <div className='my-20'>
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Blog Section</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold text-lg">1. What are the different ways to manage a state in a React application?</h3>
                        <p className="mt-1 text-gray-600">There are four ways we can manage a state in a React application:-
                            <br /> <br />
                            <span className='font-semibold'>1. Local (UI) state:</span> Local state is data we manage in one or another component. <br />
                            Local state is most often managed in React using the useState hook.
                            <br /> <br />
                            <span className='font-semibold'>2. Global(UI) state:</span> Global state is data we manage across multiple components. <br />
                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                            <br /> <br />
                            <span className='font-semibold'>3. Server state:</span>  Data that comes from an external server that must be integrated with our UI state. <br />
                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                            <br /> <br />
                            <span className='font-semibold'>4. URL state:</span> Data that exists on our URLs, including the pathname and query parameters. <br />
                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">2. How does prototypical inheritance work?</h3>
                        <p className="mt-1 text-gray-600">Everything in Javascript is an object. Even when creating a Class is an Object via an Object or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword class and inheritance. Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar.
                            <br /> <br />
                            There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming.the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties.
                            <br /> <br />
                            The main purpose is to allow multiple instances of an object to share common properties.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">3. What is a unit test? Why should we write unit tests?</h3>
                        <p className="mt-1 text-gray-600"> The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                            <br /> <br />
                            Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                            <br /> <br />
                            It is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
                            <br /> <br />
                            Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount.
                            <br /> <br />
                            Over the course of the product development life cycle, unit test saves time and money,and helps developers write better code, more efficiently.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">4. React vs. Angular vs. Vue?</h3>
                        <p className="mt-1 text-gray-600">React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.
                            <br /> <br />
                            <span className='font-semibold'>React:</span> React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework. <br /> <br />
                            <span className='font-semibold'>Angular:</span>AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based. <br /> Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.
                            <br /> <br />
                            <span className='font-semibold'>Vue:</span> The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework. <br /> Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;