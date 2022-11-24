import React, { Component, Fragment } from "react";
import './container.css';
import Post from "../component/Post";

class BlogPost extends Component{
    state ={
        post: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                post: json
            })
        })
    }

    render(){
        return(
            <Fragment>
                <h3 className="section-title">Blog Post</h3>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
     )    
    }
}

export default BlogPost;