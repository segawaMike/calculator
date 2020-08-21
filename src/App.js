import React from 'react'
import Output from './Output.js'
import Keys  from './Keys.js'
import './index.css'

class App extends React.Component{
	constructor(){
		super()
		this.state={
			results:"",

		}

		this.buttonPressed = this.buttonPressed.bind(this)
		this.buttonEval = this.buttonEval.bind(this)
		this.buttonDelete = this.buttonDelete.bind(this)
		this.buttonClear = this.buttonClear.bind(this)
	}
	buttonPressed = buttonName => {
		
		this.setState(prevState => ({ results:prevState.results + buttonName} ));

	}
	buttonEval(){
		
		 this.setState( (prevState) => ({
		 	results: prevState.results === "" ? '': eval(prevState.results).toString()
		 }));
	

	}
	buttonDelete(){
		this.setState(prevState => ({
			results: prevState.results.length <= 1 ? '' : prevState.results.slice(0,-1)
		}));

	}
	buttonClear(){
		this.setState(({
			results:0
		}));
	}
	render(){
		const deco ={
			height:65,
			width:65,
			color:'white',
			backgroundColor:"#12CBC4",
			borderRadius:"20%",
			margin:3
		}

		return(
			<div className="main">
			<Output results={this.state.results}/>
			<div className="">
			<button style={deco}  name="C" onClick={this.buttonDelete}>C</button>
			<button style={deco}  name="AC" onClick={this.buttonClear}>AC</button>
			<button style={deco}  name="=" onClick={this.buttonEval}>=</button>
			</div>
			<Keys buttonPressed = {this.buttonPressed}/>
			</div>
		)
	}
}

export default App