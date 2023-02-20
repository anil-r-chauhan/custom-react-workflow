// import { HelperForm } from 'custom-react-workflow';
import { HelperForm } from 'custom-react-workflow';
import './App.css';
import Newform from './NewForm.js';
import { WorkFlowform } from './WorkFLowform';
const NewData = require("./sdk.json")
const ApproverData = require("./approverList.json")

function App() {
  return (
  <>
  {/* <Newform loggedInUser={'john'} sdkConfigURL={'http://localhost:3000/'} client={"client"}/> */}
  {/* <HelperForm NewData={NewData} ApproverData={ApproverData} />  */}
  <WorkFlowform NewData={NewData} ApproverData={ApproverData}/>
  </>
  );
}

export default App;
