import React, {Component} from "react";
import './container.css';

class CardProduct extends Component {
    state = {
        order: 0
    }

    handlePerhitungan = (newValue) => {
        this.props.onPerhitungan(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order +1
        }, () => {
            this.handlePerhitungan(this.state.order)
        })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order -1
            }, () => {
                this.handlePerhitungan(this.state.order)
            })
        }
    }

    render(){
        return(
            <div className="card">
                <div className="img-thub-prod">
                    <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyad5XKm3gHRyFqOUHuvwsHprilVyRMml9aA&usqp=CAU" />
                </div>
                <p className="product-title">Daging Ayam</p>
                <p className="product-price">Rp18.200</p>
                <div>
                    <button className="minus" onClick={this.handleMinus} >-</button>
                    <input type="text" value={this.state.order}></input>
                    <button className="plus" onClick={this.handlePlus} >+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;