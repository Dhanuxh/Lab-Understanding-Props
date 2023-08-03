
import "./App.css"
import DataComponent from "./component/DataComponent";
import elephant from './images/elephant.jpeg'
function App() {


  return (
    <div className="main">
      <h1>Kalvium</h1>
      <div className="container">
        <DataComponent image={elephant} />
        <DataComponent image={elephant} />
        <DataComponent image={elephant} />
        <DataComponent image={elephant} />

      </div>
    </div>
  );
}

export default App;