import React, { useReducer } from 'react'
function App() {

  const initialState = {
    count: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'arttir':
        return { count: state.count + 1 };
      case 'azalt':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const arttir = () => {
    dispatch({ type: "arttir" });
  };

  const azalt = () => {
    dispatch({ type: "azalt" });
  };

  return (
    <div>
      <p>Sayaç: {state.count}</p>
      <button onClick={() => arttir()}>Arttır</button>
      <button onClick={() => azalt()}>Azalt</button>
    </div>
  )
}
export default App;