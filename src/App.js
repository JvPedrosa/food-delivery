import './App.css';
import Content from './components/Content';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
        <BrowserRouter> 
            <Content />    
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
