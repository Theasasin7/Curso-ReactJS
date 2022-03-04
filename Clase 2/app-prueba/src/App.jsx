import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer item="Hello i'm an item from ItemListContainer."/>
    </>
  );
}

export default App;
