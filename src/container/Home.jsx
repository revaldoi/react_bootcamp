import React, {Component, Fragment } from "react";
// import YoutubeComponent from "../component/YoutubeComponent";
import BlogPost from "./BlogPost";
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
            <Fragment>
                <Product/>
                <BlogPost/>
            </Fragment>
        )
    }
}

export default Home;