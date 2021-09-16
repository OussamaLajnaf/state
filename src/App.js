
import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
state ={ me:{
photo:"./0122.jpg",
fulname:"Oussama Lajnaf",
adress: "Sfax",
proffession: "Streamer"},
count:0,
isshow:true
}
handelshow=()=>{
  this.setState({isshow:!this.state.isshow})
}
componentDidMount(){
  setInterval(() => {this.setState({count:this.state.count+1})
  }, 1000);
}





  render() {
    console.log("render")
    return (
      <div style={{display:"block" , textAlign:"center"}}>
        
        <button onClick={this.handelshow}>{this.state.isshow?"Hide":"show"}</button>
        {this.state.isshow&& <div>  <img src={this.state.me.photo} style={{height:"300px",width:"300px"}}alt=""/>
        <p style={{ fontFamily:"inherit", fontsize:"25px", textAlign:"center" }}> {this.state.me.fulname}</p>
        <p style={{ fontFamily:"inherit", fontsize:"25px", textAlign:"center" }}> {this.state.me.adress}</p>
        <p style={{ fontFamily:"inherit", fontsize:"25px", textAlign:"center" }}> {this.state.me.proffession}</p>  </div>}
        
        
        
        
        <h1>Footer by me</h1>
      </div>
    )
  }
}
