import React, { Component } from "react";

import { useParams } from "react-router-dom";

const Viewprofileparams = () => {
    let {id} = useParams();
    fetch(`http://localhost:4000/posts/${id}`)
        .then(res => {
            console.log('result: ', res)
        })

    return (
      <div>
        <div>id is : {id}</div>
      </div>
    );
  };

class DetailPost extends Component {
    render(){
        return(
            <div>
                <Viewprofileparams />
            </div>
        )
    }
}

export default DetailPost;