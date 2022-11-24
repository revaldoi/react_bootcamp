import React, {Component, Fragment} from "react";
import './container.css';
import CardProduct from "./CardProduct";

class Product extends Component {
    state = {
        order: 0
    }

    handlePerhitungan = (newValue) => {
        this.setState({
            order: newValue
        })
    } 

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img alt="" src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-nursing-pillow-archives-baby-loop-7.png"/>
                    </div>
                    <div className="troley">
                        <img alt="xx" src="" />
                         <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onPerhitungan={(value) => this.handlePerhitungan(value)}/>
            </Fragment>
        )
    }
}

export default Product;