import React, { Component } from 'react'
import SayHello from './components/SayHello';

class App extends Component {
  state = {
    show: true
  }

  handleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <button onClick={this.handleShow}>{show ? "Sakla" : "Göster"}</button>
        {show && <SayHello />}
      </div>
    )
  }
}
export default App;