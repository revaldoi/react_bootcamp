import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import { BrowserRouter, Link, Route } from "react-router-dom";
import BlogPost from "./BlogPost";
import DetailPost from "./DetailPost";
import Product from "./Product";


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

            <Router>
              <Fragment>
                <div className="list">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="a">Page 1</Link></li>
                      <li><Link to="b">Page 2</Link></li>
                      <li><Link to="a">Page 3</Link></li>
                    </ul>
                  </div>
                <Routes>
                  <Route exact path="/" element={<BlogPost />} />
                  <Route path="/a" element={<BlogPost />} />
                  <Route path="b" element={<Product />} />
                  <Route path="/a/detail-post/:id" element={<DetailPost/>} />
                  <Route path="/detail-post/:id" element={<DetailPost/>} />
                </Routes>
              </Fragment>
            </Router>
        )
    }
}

export default Home;