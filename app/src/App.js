import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <>
      <div>
        <div className='row justify-content-center'>
          <div className="col title">  
            <strong>Say it with your Chess</strong>
          </div>
        </div>
      </div>
      <div className="container">
        <Board/>
      </div>
    </>
  );
}

export default App;
