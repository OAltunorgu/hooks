import React, { Component } from 'react'

class ClassSayac extends Component {
    state = {
        sayac: 0
    };

    arttir = () => {
        this.setState(prevState => ({
            sayac: prevState.sayac + 1
        }))
    }

    render() {
        const sayac = this.state;
        return (
            <div>
                <h1>Class Sayac(Class Kullanan)</h1>
                <h1>{this.state.sayac}</h1>
                <button onClick={this.arttir}>+1</button>
            </div>
        )
    }
}
export default ClassSayac;