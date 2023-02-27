import React from 'react'

import HelperLibrary from 'custom-react-form'
import 'custom-react-form/dist/index.css'

const App = () => {
  const HelperForm = new HelperLibrary();
  return <div>{HelperForm.draw({NewData:[],ApproverData:[]})}</div>
}

export default App
