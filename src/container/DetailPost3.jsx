import React, { Component, Fragment } from "react";

import { useParams } from "react-router-dom";

const Detailnya = () => {
    let {id} = useParams();

    return (id);
  };

class DetailPost extends Component {
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render(){
        return(
            <Fragment key = { this.props.id }>
                <h1>X</h1>
                <p>{this.state.items.title}</p>
            </Fragment>
        )
    }
}

export default DetailPost;