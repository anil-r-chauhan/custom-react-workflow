import "./sdk.js"
import Workflow from './sdk.js';

function Newform(props) {
  const Newform = new Workflow();
  return (
  <>
    {Newform.draw({...props})} 
  </>
  );
}

export default Newform;
