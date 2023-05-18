import React from 'react';

const Faq = () => {
    return (
        <>
            <section class="container mx-auto md:flex-row p-2 md:p-10">
                <h2 class="font-bold text-5xl text-center ">
                    Frequently Asked Any <span className='bg-[#EB455F] text-white shape m-2 '>Questions</span>
                </h2>
                <p class="text-center py-5 mx-auto text-b7-white">
                    The company required clients to pay substantial fees in advance.<br />
                    They not only aim to sell goods but also they take pride in how they serve their clients.
                </p>
                <div >
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                        <div className="collapse-title text-xl font-medium">
                            01. What are the features of React?
                        </div>
                        <div className="collapse-content">
                            <p>JSX:  JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.</p>
                        </div>

                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                        <div className="collapse-title text-xl font-medium">
                            02. What are the components in React?

                        </div>
                        <div className="collapse-content">
                            <p> Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.</p>
                        </div>

                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                        <div className="collapse-title text-xl font-medium">
                            03. What is a state in React?

                        </div>
                        <div className="collapse-content">
                            <p>The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                        <div className="collapse-title text-xl font-medium">
                            04.What are props in React?

                        </div>
                        <div className="collapse-content">
                            <p>Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Faq;