import logo from './logo.svg';
import './App.css';
import Welcome from './Componentss'; // Assuming the correct path to the Welcome component

function App() {
  return (
    <div className="App">
      <Welcome name="Rahul" greeting="hello" />
    </div>
  );
}

export default App;
