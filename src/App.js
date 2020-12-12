import './App.css';
import NavBar from './NavBar/NavBar';
import Banner from './Banner';
import Contact from './Contact';
import BookDisplay from './BookDisplay'
import { BreakpointProvider } from 'react-socks';

function App() {
  return (
    <div className="App">   

                <NavBar /> 

                <Banner />

                <BookDisplay />

                <Contact />
              
        
      </div>
  );
}

export default App;
