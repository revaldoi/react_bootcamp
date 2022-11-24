import React, { Component } from "react";
import YoutubeComponent from "../component/YoutubeComponent";

class Home extends Component {
    render(){
        return (
            <div>
                <YoutubeComponent 
                    time="03.10"/>
                <YoutubeComponent
                    time="11.10"/>
                <YoutubeComponent 
                    time=""/>
            </div>
        )
    }
}

export default Home;