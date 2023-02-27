import * as React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import WorkFlowList from "./WorkFlowList";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppMainStyle } from "./theme/AppMainStyles";
import theme from "./theme/theme";
import WorkFlow from "./Workflow";

export default class HelperLibrary {
  constructor(sdk_config_file = {}, client = "vendex") {
    this.sdk_config_file = sdk_config_file;
    this.client = client;
  }

  draw(props, htmlElementId = null) {
    const componentEle = (
      <ThemeProvider theme={theme}>
        <div>
          <CssBaseline>
            {AppMainStyle}
            <WorkFlow {...props} />
          </CssBaseline>
        </div>
      </ThemeProvider>
    );
    let element = document.getElementById(`${htmlElementId}`);
    if (htmlElementId) {
      if (element) {
        return createRoot(element).render(componentEle);
      }
    }

    return componentEle;
  }
  drawList(props, htmlElementId = null) {
    const componentEle = (
      <ThemeProvider theme={theme}>
        <div>
          <CssBaseline>
            {AppMainStyle}
            <WorkFlowList {...props} />
          </CssBaseline>
        </div>
      </ThemeProvider>
    );
    let element = document.getElementById(`${htmlElementId}`);
    if (htmlElementId) {
      if (element) {
        return createRoot(document.getElementById(`${htmlElementId}`)).render(
          componentEle
        );
      }
    }
    return componentEle;
  }
}
