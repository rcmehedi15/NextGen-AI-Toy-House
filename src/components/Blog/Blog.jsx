import React from "react";
import { useNavigation } from "react-router-dom";
import './Blog.css'
import useTitle from "../../Hook/useTitle";

const Blog = () => {
    useTitle('Blog')

    const ref = React.createRef();
    const options = {
        orientation: "landscape",
        unit: "px",
        format: [window.innerWidth * 0.55, window.innerHeight],
    };

    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <h1>Loading</h1>;
    }
    return (
        <div className="my-5 container mx-auto">
            <div className="m-3 mx-auto">

                <div ref={ref} id="react-to-pdf">
                    <div className='container mx-auto'>
                        <div className=' faq-container'>
                            <div class="faq">
                                <h1 className='faq-title text-center text-primary'> Questions:</h1>
                                <div className='single-question'>
                                    <h1> 01: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                                        <p><span>Token </span>
                                        Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.Jul </p>
                                    </div>
                                </div>

                                <div className='single-question'>
                                    <h1> 02:Compare SQL and NoSQL databases?</h1>
                                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                                        <p> <span>Database</span>
                                        SQL databases use a structured query language and have a defined schema. NoSQL databases use dynamic schemas for unstructured data. NoSQL databases scale horizontally, whereas SQL databases scale vertically
                                        </p>
                                    </div>
                                </div>
                                <div className='single-question'>
                                    <h1> 03: What is express js? What is Nest JS.</h1>
                                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                                        <p>
                                            <span >Nest Js</span>
                                            NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications 
                                        </p>
                                    </div>
                                </div>
                                <div className='single-question'>
                                    <h1> 04: What is MongoDB aggregate and how does it work</h1>
                                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                                        <p>
                                            <span >MongoDB aggregate</span>
                                            Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;

