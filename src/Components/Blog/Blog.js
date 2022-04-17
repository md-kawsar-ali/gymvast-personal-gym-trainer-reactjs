import React from 'react';
import './Blog.css';
import Accordion from 'react-bootstrap/Accordion'

const Blog = () => {
    return (
        <section className='blog'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>1. Difference between Authorization and Authentication</Accordion.Header>
                                <Accordion.Body>
                                    In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person's or user's authorities are checked for accessing the resources. Authentication is done before the authorization process, whereas authorization process is done after the authentication process.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                                <Accordion.Body>
                                    I am using Firebase authentication and Firebase hosting in the project.

                                    Anyway, I can use my custom authentication system instead. On the other hand, there are a lot of third-party authentication service provider such as okta, Auth0, OneLogin and JumpCloud.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>3. What other services does Firebase provide other than Authentication?</Accordion.Header>
                                <Accordion.Body>
                                    There are many services which Firebase provides, Most useful of them are:
                                    <ul>
                                        <li>Cloud Firestore</li>
                                        <li>Cloud Functions</li>
                                        <li>Hosting</li>
                                        <li>Cloud Storage</li>
                                        <li>Google Analytics</li>
                                        <li>Predictions</li>
                                        <li>Cloud Messaging</li>
                                        <li>Dynamic Links</li>
                                        <li>Remote Config</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;