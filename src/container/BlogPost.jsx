import React, { Component, Fragment } from "react";
import './container.css';
import Post from "../component/Post";

class BlogPost extends Component{
    state ={
        post: [],
        formBlogPost: {
            id: 1,
            title: 'default',
            body: '',
            userId: 1
        }
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

    postApi = () => {
        let data = (this.state.formBlogPost);
        fetch(`http://localhost:4000/posts`, {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        //     .then(function(response) {
        //     return response.json();
        // }).then(data => this.setState({ 
        //     title: data.title.value }    
        // ));
    }

    handleRemove = (data) => {
        fetch(`http://localhost:4000/posts/${data}`, {
            method:'DELETE',
        }).then((a) => {
            console.log(a);
            this.getApi(a)
        })
    }

    hanldeFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();

        formBlogPostNew['image'] = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        formBlogPostNew['id'] = timeStamp;
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    hanldeSubmit = () => {
        this.postApi()
        console.log(this.state.formBlogPost)
    }

    componentDidMount() {
        this.getApi();
    } 

    render(){
        return(
            <Fragment>
                <h3 className="section-title">Blog Post</h3>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Tambahkan judul" onChange={this.hanldeFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body-content" cols="30" rows="10" onChange={this.hanldeFormChange}/>
                    <button className="btn-submit" onClick={this.hanldeSubmit}>Simpan</button>
                </div>
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