import React, {Component} from "react";
import burger from "./burger.jpg";


const burgerOrderCount = {
    fontSize: "30px",
    fontWeight: "500",
    backgroundColor: 'black',
    borderRadius: "20px",
    padding:"10px",
    marginTop: '45px'
}

const Button1 = {
    fontSize: "20px",
    fontWeight: "600",
    color: "purple",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: '10px',
    width: "200px",
    position:"absolute",
    left: "450px",
    marginTop: "45px"
    
}
const Button2 = {
    fontSize: "20px",
    fontWeight: "600",
    color: "red",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: '10px',
    width: "200px",
    position:"absolute",
    right: "450px",
    marginTop: "45px"
}
class Burger extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    takeOrder(){
        this.setState({
            count: this.state.count + 1
        })
    }
    cancelOrder(){
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        const {count} = this.state;
        return <div>
            <img src={burger} alt="burger.jpg" width="200" height="150"></img>
            <h2 style={{color:"darkgreen"}}>Burger Order List</h2>
            <h1 style={burgerOrderCount}>Total Order = {this.state.count}</h1>
            <button style={Button1} onClick={ () => this.takeOrder()}>Take Order</button>
            
            <button style={Button2} onClick={ () => this.cancelOrder()} disabled={count===0 ? true : false}>Cancel Order</button>
        </div>
    };
}

export default Burger;