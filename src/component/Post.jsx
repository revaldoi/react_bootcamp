import React from "react";
import { useNavigate } from "react-router-dom";


const Post = (props) => {
    const navigate = useNavigate();
    const goDetail = (data) => {
        navigate(`detail-post/${data.id}`)
      };
    return(
        
        <div className="post">
            <div className="img-thumb">
                <img src={props.data.image} alt="ini gamabr"/>
            </div>
            <div className="content">
                {/* <p className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p> */}
                <p className="title" onClick={() => goDetail(props.data)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
            </div>
        </div>
    )
}

export default Post;