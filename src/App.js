import React, { useState, useEffect, useCallback } from 'react'

const App = () => {
  const [sayi, setSayi] = useState(0);
  const [theme, setTheme] = useState("dark");

  const getItems = useCallback((increment) => {
    return [sayi + increment, sayi + increment + 1, sayi + increment + 2]
  }, [sayi])

  const backgroundColor = theme === "dark" ? "#000" : "#fff";

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <React.Fragment>
      <input type="number" value={sayi} onChange={e => setSayi(parseInt(e.target.value))} />
      <button onClick={() => handleTheme()} style={{ background: `${backgroundColor}` }}> Tema Değiştir</button>
      <ItemsList getItems={getItems} />
    </React.Fragment>
  )
}

const ItemsList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("İtemleri güncelliyorum.")
  }, [getItems]);

  return (
    <div>
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}
export default App;