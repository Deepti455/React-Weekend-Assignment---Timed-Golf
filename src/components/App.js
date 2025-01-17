import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      ball: false,
      time: 0, 
      x: 0, 
      y: 0,
      timerCheck : false,
      ballPosition: {left: "0px", top: "0px"},
      intervalId: 0
    };
      this.timer=this.timer.bind(this);
      this.moveBall=this.moveBall.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown",this.moveBall);
    const interval = setInterval(this.timer, 1000);
    this.setState({intervalId: interval}); 
  }

  timer(){
    if(this.state.ball===true && this.state.timerCheck===false){
      this.setState({time:this.state.time+1}) 
    }else{
      this.setState({time:this.state.time}) 
    } 
    } 

  // componentWillUnmount(){
  //   clearInterval(intervalId);
  //   console.log(intervalId);
  // }

  componentDidUpdate(){
    if(this.state.x===250 && this.state.y===250){
      this.state.timerCheck=true;
    }
  }
  moveBall(evt){
    if(this.state.ball===true && this.state.timerCheck===false){
      if(evt.key==="ArrowRight"){
        const pos=this.state.x + 5;
        this.setState({
          x : pos,
          ballPosition : {left : pos + "px", top : this.state.y +"px"}
        })
      }else if(evt.key==="ArrowLeft"){
        const pos=this.state.x - 5;
        this.setState({
          x : pos,
          ballPosition : {left : pos + "px", top : this.state.y +"px"}
        })
      }if(evt.key==="ArrowUp"){
        const pos=this.state.y - 5;
        this.setState({
          y : pos,
          ballPosition : {left : this.state.x + "px" , top : pos + "px"}
        })
      }if(evt.key==="ArrowDown"){
        const pos=this.state.y + 5;
        this.setState({
          y : pos,
          ballPosition : {left : this.state.x + "px", top : pos + "px"}
        })
      }
    }
  }
  
  
  render() {
    return (
    <>
      <button className="start ballProvider" onClick={()=>{this.setState({ball:true})}}>Start</button>
      <h1 className="heading-timer">{this.state.time}</h1>
      <div className="hole"></div>
      <div className="ball" style={this.state.ballPosition}></div>
    </>
    );
  }
}

export default Timer;
