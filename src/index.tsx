import * as React from "react";
import {render} from "react-dom";
import Homepage from "./components/homepage";
import "./style.scss";

render(
    <Homepage></Homepage>,
    document.getElementById("llama-power")
);