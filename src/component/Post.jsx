import React from "react";

const Post = (props) => {
    return(
        
        <div className="post">
            <div className="img-thumb">
                <img src={props.data.image} alt="ini gamabr"/>
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
            </div>
        </div>
    )
}

export default Post;