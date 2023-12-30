import './App.css';
import Navbar from "./components/Navbar"
import Place from './components/Place';
import Footer from './components/footer';
import Data from './Data';

// logo icon
import world from "./image/img_379611.png"
import pointer from "./image/placeholder.png"

function App() {
  // const dataset = Data.map((Data) => {                  //This is Arrow function
  //   return (
  //     <Place
  //       point={pointer} 
  //       details={Data}
  //     />
  //   );

  // })
  const dataset = Data.map(myDataFunction)
  function myDataFunction(elementItems) {
    return(
      <Place
        point = {pointer}
        details = {elementItems}
      />
    );
  }
  return (
    <div className='react--app--container'>
      <div className="nav--cont--bar">
        <Navbar img={world} />
      </div>
      <div className="app--container">
        {dataset}
      </div>
      <div className="app-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;