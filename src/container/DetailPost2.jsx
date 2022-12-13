import React, { Component, Fragment } from "react";

import { useParams } from "react-router-dom";

const Detailnya = () => {
    let {id} = useParams();
    fetch(`http://localhost:4000/posts/${id}`)
        .then(res => {
            console.log('result: ', res)
        })

    return (
        <div className="content">
            <h1>Detaile</h1>
            <p className="title">{props.data.title}</p>
            <p className="desc">{props.data.body}</p>
        </div>
    );
  };

class DetailPost extends Component {
    state ={
        post: [],
        formBlogPost: {
            title: '',
            body: '',
        }
    }

    render(){
        return(
            <Fragment>
                <h1>X</h1>
                {
                    this.state.post.map(post => {
                        return <Detailnya data={formBlogPost}/>
                    })
                }

            </Fragment>
        )
    }
}

export default DetailPost;