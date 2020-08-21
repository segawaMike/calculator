import React from 'react'
import'./index.css'
function Output (props){
	return(
		<div>
		<input style={{
			height:70,
			width:200,
			fontSize:45,
			border:'none',
			
		}} 
		tpye="text" 
		placeholder="0" 
		value={props.results} 
		disabled/>

		</div>
		)
}
export default Output