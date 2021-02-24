import logo from './logo.svg';
import './App.css';
import Video from "./components/pages/Video";
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     {/* <h2>This is app component</h2> */}
     <Video/>
    </div>
    
  );
}

export default App;
