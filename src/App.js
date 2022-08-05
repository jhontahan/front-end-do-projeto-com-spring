import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  //Documentação de como fazer classes e funções


  // state = {
  //   numero1 : '',
  //   numero2 : '',
  //   resultado : ''
  // }

  // somar = () => {
  //   const resultado = parseInt(this.state.numero1) + parseInt(this.state.numero2)
  //   this.setState({resultao : resultado})
    
  // }

  // render(){
  //   return(
  //     <div>
  //       <label>Número 1:</label>
  //       <input type="text" value={this.state.numero1} 
  //              onChange={(e) => this.setState({numero1: e.target.value})}></input>
  //       <br/>
  //       <label>Número 2:</label>
  //       <input type="text" value={this.state.numero2} 
  //              onChange={(e) => this.setState({numero2: e.target.value})}></input>

  //       <br/>
  //       <button onClick={this.somar}>Somar</button>

  //       O resultado é: {this.state.resultado}
  //     </div>
  //   )
  // }

  render (){
    return (
      <div>
        <button type="button" className="btn btn-primary">Primary</button>
      
      </div>
    )
  }

}

export default App;
