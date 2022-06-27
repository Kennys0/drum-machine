import './App.css';
import Boton from './components/botones';
import Controls from './components/controls';

function App() {
  return (
    <div className="drum-machine">
      <div className='buttons'>
        <Boton /> <Boton /> <Boton />
        <Boton /> <Boton /> <Boton />
        <Boton /> <Boton /> <Boton />
      {/* Un compenente que se pueda utilizar para todos los botones Q, W, E, A, S, D, Z, X, C*/}
      </div>
      <div className='display'>
        <Controls />
      </div>
    </div>
  );
}

export default App;
