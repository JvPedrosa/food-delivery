import './App.css';
import Content from './components/Content';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
