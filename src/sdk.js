import { Autocomplete, Button, TextField } from "@mui/material";

class Workflow{
	constructor(name){
    	this.name=name;
    }
	draw(props){
		function handleSubmit () {
			alert("submit called")
		}
		console.log(props,"propssss")
    	return <>
			  <h1>Called from sdk</h1>
			<Button variant="contained" onClick={() => handleSubmit()}>submit</Button>
			{props.jsxRulesFields.map((el,i) => el)}
		</>
    }
}

export default Workflow;

