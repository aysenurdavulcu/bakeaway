import React from "react";
import { Link } from "react-router-dom";
class ResultPage extends React.Component {
  render() {
    return (
      <div id= "landing">
        <h2 id="slogan">stuff and bakes</h2>
  <label>
    Zipcode: 
    <input type="text" name="Zipcode"maxLength= "5"/>
  </label>
      </div>
    )
  }
}

export default ResultPage;