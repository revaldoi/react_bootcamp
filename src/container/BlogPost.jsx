import React, { Component, Fragment } from "react";
import './container.css';
import Post from "../component/Post";

class BlogPost extends Component{
    state ={
        post: []
    }

    getApi = () => {
        fetch('http://localhost:4000/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({
                post: json
            })
        })
    }

    handleRemove = (data) => {
    fetch(`http://localhost:4000/posts/${data}`, {
        method:'DELETE',
    }).then((a) => {
        console.log(a);
    })
    this.getApi();
        // fetch.delete(`http://localhost:4000/posts/${data}`).then((res) => {
        //     console.log(res);
        // })
    }

    componentDidMount() {
        this.getApi();
    }

    render(){
        return(
            <Fragment>
                <h3 className="section-title">Blog Post</h3>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
            </Fragment>
     )    
    }
}

export default BlogPost;