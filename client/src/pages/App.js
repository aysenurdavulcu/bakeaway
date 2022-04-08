import React from "react";
import { Link } from "react-router-dom";
class App extends React.Component {
  render() {
    
    return (
      <div id= "landing">
        <h2 id="slogan">Cakes and bakes</h2>
        <form>
  <label>
    Zipcode: 
    <input type="text" name="Zipcode"maxLength= "5"/>
  </label>
</form>
      </div>
    )
  }
}

export default App;
