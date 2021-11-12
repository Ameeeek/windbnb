import './App.css';
import './index.css';
import './tailwind.css';
import NavItems from './components/navItems'
import Navbar from './components/navbar';
import Stay from './components/stay'
function App() {
  return (
    <div className="container p-4">
      <Navbar>  <NavItems/> </Navbar>
      <Stay/>
      <Stay/>
    </div>
  );
}

export default App;
