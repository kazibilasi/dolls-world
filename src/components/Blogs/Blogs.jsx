

const Blogs = () => {
    return (
        <div className="container mx-auto">
            <div className="w-2/4 mt-10 mx-auto">
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Access token and refresh token are commonly used in authentication and authorization systems.

                            An access token is a credential that is used to access protected resources on a server. It is usually obtained after a successful authentication process. Access tokens have a limited lifespan and are typically short-lived. They are used to authenticate and authorize API requests on behalf of the user or application.

                            A refresh token, on the other hand, is a long-lived credential that is used to obtain new access tokens without requiring the user to reauthenticate. When an access token expires, the refresh token can be used to request a new access token from the server, extending the user's session.</p>

                    </div>

                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content">
                        <p>SQL and NoSQL databases differ in their data models, schemas, scalability, query languages, ACID compliance, and use cases. SQL databases are based on the relational model, have predefined schemas, and use SQL as a query language. They are suitable for structured data and complex relationships but have limitations on scalability. On the other hand, NoSQL databases offer flexible data models, can scale horizontally, and have their own query languages. They prioritize scalability and performance over strict consistency and are commonly used for handling large-scale data, high traffic loads, and applications with evolving data structure</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    What is express js? What is Nest JS ?
                    </div>
                    <div className="collapse-content">
                        <p>Express.js is a lightweight web application framework for Node.js, known for its simplicity and flexibility. It allows developers to build web applications and APIs by defining routes and handling HTTP requests and responses. NestJS, on the other hand, is a progressive TypeScript framework built on top of Express.js. It provides a higher-level structure and additional features like dependency injection, middleware support, and built-in authentication for developing scalable and maintainable server-side applications. NestJS follows a modular architecture pattern and is well-suited for building enterprise-grade applications.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-bold">
                    What is MongoDB aggregate and how does it work ?
                    </div>
                    <div className="collapse-content">
                        <p>MongoDB's aggregate is a framework for performing advanced data processing and analysis in MongoDB. It works by chaining together pipeline stages, where each stage applies a specific operation to the input data. These operations can include filtering, grouping, sorting, and transforming documents. The aggregate framework supports a wide range of operations and allows for the execution of complex queries to generate meaningful insights from the data. It provides a flexible and efficient way to perform data aggregation and analysis in MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;