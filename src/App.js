import ClassSayac from "./components/ClassSayac";
import FunctionSayac from "./components/FunctionSayac";

//Amacımız bir sayaç uygulamasını useState kullanarak yazacağız. 0'dan başlatıp arrtıracağız. 
//Bunu hem class component nasıl yaparım hem de useState hook kullanarak nasıl yaparım diye 2 şekildede yapacağız.
//FunctionSayacta useState hookunu kullanacağız.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassSayac />
        <FunctionSayac />
      </header>
    </div>
  );
}

export default App;
