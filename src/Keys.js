import React from 'react'
import'./index.css'
class Keys extends React.Component{
	constructor(){
		super()
	}
	buttonPressed = e =>{
		this.props.buttonPressed(e.target.name);
	};
	render(){
		const deco ={
			height:65,
			width:65,
			color:'white',
			backgroundColor:"#12CBC4",
			margin:3,
			borderRadius:"50%"

			
		}
		const deco1 ={
			height:65,
			width:"65px",
			color:'white',
			backgroundColor:"#12CBC4",
			margin:3,
			borderRadius:"20%"
		}
		const deco2 ={
			height:65,
			width:"65px",
			color:'white',
			backgroundColor:"#12CBC4",
			margin:3,
			marginBottom:5,
			borderRadius:"20%"
		}
		return(

			<container>
			<div>
			<button style={deco} name="1" onClick={this.buttonPressed}>1</button>
			<button style={deco} name="2" onClick={this.buttonPressed}>2</button>
			<button style={deco} name="3" onClick={this.buttonPressed}>3</button>
			</div>

			<div>
			<button style={deco} name="4" onClick={this.buttonPressed}>4</button>
			<button style={deco} name="5" onClick={this.buttonPressed}>5</button>
			<button style={deco} name="6" onClick={this.buttonPressed}>6</button>
			</div>

			<div>
			<button style={deco} name="7" onClick={this.buttonPressed}>7</button>
			<button style={deco} name="8" onClick={this.buttonPressed}>8</button>
			<button style={deco} name="9" onClick={this.buttonPressed}>9</button>
			</div>

			<div>
			<button style={deco} name="0" onClick={this.buttonPressed}>0</button>
			<button style={deco1} name="+" onClick={this.buttonPressed}>+</button>
			<button style={deco1} name="-" onClick={this.buttonPressed}>-</button>
			</div>
			<div>
			<button style={deco2} name="*" onClick={this.buttonPressed}>*</button>
			<button style={deco2} name="/" onClick={this.buttonPressed}>/</button>
			<button style={deco2} name="." onClick={this.buttonPressed}>.</button>
			</div>

			</container>


			);
	}
}
export default Keys 