import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// import { BrowserRouter, Link, Route } from "react-router-dom";
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//   } from "react-router-dom";
// import YoutubeComponent from "../component/YoutubeComponent";
import BlogPost from "./BlogPost";
import Product from "./Product";

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <BlogPost />,
//     },
//     {
//         path: "/product",
//         element: <Product />,
//       },
// ]);
  

class Home extends Component {
    render(){
        return (
            // <div>
            //     <YoutubeComponent 
            //         time="03.10"/>
            //     <YoutubeComponent
            //         time="11.10"/>
            //     <YoutubeComponent 
            //         time=""/>
            // </div>
            
            // <BrowserRouter>
            //     <Fragment>
            //         <Route exact path="/" element={<BlogPost/>} />
            //         <Route path="/product" element={<Product/>} />
            //     </Fragment>
            // </BrowserRouter>

            // <RouterProvider router={router} />

            <Router>
              <Routes>
                <Route exact path="/" element={<h1>Home Page</h1>} />
                <Route exact path="a" element={<BlogPost />} />
                <Route exact path="b" element={<Product />} />
              </Routes>
            </Router>
        )
    }
}

export default Home;