import React, { Component, Fragment } from "react";
// import { useNavigate } from "react-router-dom";
import './container.css';
import Post from "../component/Post";
// import {BrowserHistory} from 'react-router-dom';

class BlogPost extends Component{
    state ={
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
            image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        },
        isUpdate: false,
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
        }).then(this.getApi())  
        
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

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true,
        }) 
    }

    putApi = () => {
        fetch(`http://localhost:4000/posts/${this.state.formBlogPost.id}`, {
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.formBlogPost)
        }).then(
            this.getApi(),
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: 'Tambahkan Artikel Baru',
                    body: '',
                    userId: 1,
                    image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                },
            })
            )  
    }

    handleDetail = (id) => {
        // this.props.navigation.navigate('YouScreen', {paramsIfAny})
        // navigate(`detail-post/${id}`)
        // this.props.history.push(`/detail-post/1`);
    }

    hanldeFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        // formBlogPostNew['image'] = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    hanldeSubmit = () => {
        if (this.state.isUpdate){
            this.putApi()
        }
        else {
            this.postApi()
        }
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
                    <input value={this.state.formBlogPost.title} type="text" name="title" placeholder="Tambahkan judul" onChange={this.hanldeFormChange}/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea value={this.state.formBlogPost.body} name="body" id="body-content" placeholder="Ketik Artikel Disini" cols="30" rows="10" onChange={this.hanldeFormChange}/>
                    <button className="btn-submit" onClick={this.hanldeSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
                    })
                }
            </Fragment>
     )    
    }
}

export default BlogPost;