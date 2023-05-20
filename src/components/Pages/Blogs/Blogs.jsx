
import useTitle from '../../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <h1 className='my-7 text-center text-5xl text-blue-600 '>Blogs about questions and answers</h1>
            <div className='border border-emerald-500 text-center p-7 my-7 hover:bg-green-300'>
                <h2 className='text-3xl font-bold text-center  text-red-600 mb-5'> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <hr className='my-5' />
                <p className='text-2xl font-semibold leading-normal  text-gray-950'>

                    Access Token: A credential used to access protected resources, obtained during authentication. Its short-lived and grants permissions.
                    <br />
                    <br />
                    Refresh Token: A long-lived credential used to get a new access token when the current one expires. Its securely stored on the client-side.at maintains its own internal state.
                    <br />
                    <br />
                    Process: Client uses access token to access resources. When it expires, client sends refresh token to get a new access token from the server.
                    <br />
                    <br />
                    Storage: Store tokens in memory or browser storage for web apps, secure storage mechanisms for mobile/desktop apps. Follow security best practices.
                </p>
            </div>
            <div className='border border-emerald-500 text-center p-7 my-7 hover:bg-green-300'>
                <h2 className='text-3xl font-bold text-center  text-red-600 mb-5'> Compare SQL and NoSQL databases?
                </h2>
                <hr className='my-5' />
                <p className='text-2xl font-semibold leading-normal  text-gray-950'>
                    SQL Databases:
                    <br />
                    Structured data in tables with rigid schemas
                    <br />
                    Strong data consistency and integrity rules
                    <br />
                    Uses SQL for querying and manipulating data
                    <br />
                    Vertical scalability, horizontal scalability with effort
                    <br />
                    ACID transactions supported
                    <br />
                    Schema modifications can be complex
                    <br />
                    <br />
                    NoSQL Databases:
                    <br />
                    Flexible or schema-less data storage
                    <br />
                    Eventual consistency for scalability and performance
                    <br />
                    Different query languages or APIs
                    <br />
                    Designed for horizontal scalability
                    <br />
                    Limited or no ACID transaction support
                    <br />
                    Schema changes are flexible and dynamic
                    <br />
                    <br />
                    SQL databases are suitable for structured data and complex queries, while NoSQL databases offer flexibility, scalability, and dynamic data structures.
                    <br />
                </p>
            </div>
            <div className='border border-emerald-500 text-center p-7 my-7 hover:bg-green-300'>
                <h2 className='text-3xl font-bold text-center  text-red-600 mb-5'>What is express js? What is Nest JS ?</h2>
                <hr className='my-5' />
                <p className='text-2xl font-semibold leading-normal  text-gray-950'>
                    Express.js is a popular web application framework for Node.js. It provides a minimal and flexible set of features for building web applications and APIs. Express.js is known for its simplicity, lightweight nature, and extensive middleware ecosystem. It allows developers to handle HTTP requests, define routes, manage sessions, handle cookies, and integrate with various templating engines. Express.js provides a straightforward and intuitive API for building server-side applications using JavaScript.
                    <br />
                    <br />
                    Nest.js, on the other hand, is a progressive and opinionated Node.js framework for building scalable and maintainable server-side applications. Nest.js takes inspiration from Angular, borrowing concepts like dependency injection, decorators, and module-based architecture. It leverages TypeScript, a statically typed superset of JavaScript, and follows a modular, component-driven approach. Nest.js provides a robust foundation for creating highly structured and scalable applications, with support for features like routing, dependency injection, middleware, validation, and more. It also encourages the use of well-established design patterns and architectural principles.
                    <br />
                    <br />
                </p>
            </div>
            <div className='border border-emerald-500 text-center p-7 my-7 hover:bg-green-300'>
                <h2 className='text-3xl font-bold text-center  text-red-600 mb-5'>What is MongoDB aggregate and how does it work?</h2>
                <hr className='my-5' />
                <p className='text-2xl font-semibold leading-normal  text-gray-950'>
                MongoDB aggregate is a framework for data aggregation used to process data records and return computed results. It is used to perform complex queries on collections in MongoDB. The aggregate function groups data from multiple documents into a single document and performs operations on the grouped data. The pipeline consists of one or more stages that process documents: Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.
                    <br />
                    <br />
                
                </p>
            </div>
        </div>
    );
};

export default Blogs;