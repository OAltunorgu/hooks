import React from 'react'
import useLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage("name", () => {
    return "Oğulcan";
  });
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}
export default App;