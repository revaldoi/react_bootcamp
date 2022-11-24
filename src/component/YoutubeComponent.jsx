import React from "react";
import './component.css';


const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/2OoPrSief-E/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCVZ23cIsZWHSKFhdNFZNyDKi5xLQ" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="tittle">Judul</p>
            <p className="desc">Deskripsi</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time : "time"
}

export default YoutubeComponent;