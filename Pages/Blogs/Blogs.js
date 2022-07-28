import React from "react";
import SingleBlogs from "./SingleBlogs/SingleBlogs";
import PageTitle from "./../../Shared/PageTitle/PageTitle";

const Blogs = () => {
  const BlogsALL = [
    {
      id: 1,
      title: "How will you improve the performance of a React Application?",
      description:
        "Many ways to improve the performance of a React Application. There are 1.use React.Fragment 2. React.Lazy for Lazy 3. Use Production Build 4.Use React. memo 5.Multiple Chunk Files 6.Avoid Inline Function Definition in the Render Function 7.Dependency Optimization & Using a CDN and Use CSS Animation, and many more...........",
    },
    {
      id: 2,
      title:
        " What are the different ways to manage a state in a React application",
      description:
        "The Four Kinds of React State to Manage. There are server state, local state, global state, URL state",
    },
    {
      id: 3,
      title: "How does prototypical inheritance work?",
      description:
        "The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object",
    },
    {
      id: 4,
      title: "Why you do not set the state directly in React. ",
      description:
        "If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all component",
    },
    {
      id: 5,
      title: "What is a unit test? Why should write unit tests?",
      description:
        "Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. Unit testing improves the quality of the code. It identifies every defect that may have come up before code is sent further for integration",
    },
  ];
  return (
    <>
      <PageTitle pagetitle="Blogs"></PageTitle>
      <div className="blog-container bg-light pt-3 pb-2">
        <div className="container">
          <div className="row">
            {BlogsALL.map((blogs) => (
              <SingleBlogs blogs={blogs} key={blogs.id}></SingleBlogs>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
