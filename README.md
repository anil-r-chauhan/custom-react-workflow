# custom-react-form

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/custom-react-form.svg)](https://www.npmjs.com/package/custom-react-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-react-form
```

## Usage

```jsx
import HelperLibrary from 'custom-react-workflow';
import React, { useEffect } from 'react'

function Example() {
    const HelperForm = new HelperLibrary(NewData,"vendex");
    let htmlElementId = "new";
    useEffect(() => {
      if(htmlElementId){
        HelperForm.draw({NewData,ApproverData},htmlElementId)
      }
    }, [htmlElementId])
  return (
    <div id="new"></div>     
  )
}

export default Example
```

## License

MIT © [anil-r-chauhan](https://github.com/anil-r-chauhan)
