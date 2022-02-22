import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            counter: 0
        };
    }

    //Component ilk render edilince componentDidMount çağrılır. Component ilk render edilince ve sadece 1 kez çalışır.
    componentDidMount() {
        document.title = `${this.state.counter}`
    }

    //Her render edilince çağrılan bir metoddur. 
    componentDidUpdate(prevProps, prevState) {
        console.log("Güncelleniyor.");
        //Burada biz herhangi bir başka değişim yapsakta çağırıldığı için koşullu kullanımı görelim.
        if (prevState.counter !== this.state.counter) {
            console.log("Counter Güncelleniyor.");
            document.title = `${this.state.counter}`
        }
    }

    increaseCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>Class Component ile Sayaç Örneği</h1>
                <h1>{this.state.counter}</h1>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={this.increaseCounter}>+1</button>
            </div>
        )
    }
}
export default ClassCounter;
