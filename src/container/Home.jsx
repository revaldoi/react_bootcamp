import React, {Component} from "react";
// import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
// import YoutubeComponent from "../component/YoutubeComponent";
import BlogPost from "./BlogPost";
import Product from "./Product";

const router = createBrowserRouter([
    {
      path: "/",
      element: <BlogPost />,
    },
    {
        path: "/product",
        element: <Product />,
      },
]);
  

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
            //         <Route path="/" component={BlogPost} />
            //         <Route path="/product" component={Product} />
            //     </Fragment>
            // </BrowserRouter>
            <RouterProvider router={router} />
        )
    }
}

export default Home;