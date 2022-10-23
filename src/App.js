import './App.css';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import Data from './data.js';
function App() {
  const cards = Data.map(elem=>{
    return(
      <Card
      title={elem.title}
      location={elem.location}
      googleMapsUrl={elem.googleMapsUrl}
      startDate={elem.startDate}
      endDate={elem.endDate}
      description={elem.description}
      imageUrl={elem.imageUrl}
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      {cards}
    </div>
  );
}

export default App;
