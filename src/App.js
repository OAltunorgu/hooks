import ReadMore from "./components/ReadMore";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReadMore
          text={"Selam Ben Oğulcan. 24 Yaşındayım. :) "}
          max={10}
        />
      </header>
    </div>
  );
}

export default App;
