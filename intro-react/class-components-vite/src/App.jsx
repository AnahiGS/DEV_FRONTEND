import { Component, Fragment } from 'react'
import './App.css'

//1 entender las características de component
class App extends Component {
  state={
    counter:0
  }
  handleClick = (type) =>{
    if(type ==="inc") this.setState({ counter: this.state.counter +1});
    else{
      if(this.state.counter >0){
        this.setState({
          counter: this.state.counter -1.
        });
      }
    }
  }
  // handleClickIncrement = () =>{
  //   this.setState({counter: this.state.counter +1})
  // }
  // handleClickDecrement = () =>{
  //   this.setState({counter: this.state.counter -1})
  // }
  //2 poner el método render
  render (){

    //JSX
    return (
      <>
        <h3>React con class components </h3>
        <div className="App">
          <span> Contador {this.state.counter}</span>
          <div className="btn-section">
            <button onClick={() => this.handleClick("inc")}>Incrementar</button>
            <button onClick={() => this.handleClick ("dec")}>Decrementar</button>

          </div>
        </div>
      </>
      // <div className="App">
      //   <h3>React con class components </h3>
      // </div>
    );
  }
}
  

  


export default App
