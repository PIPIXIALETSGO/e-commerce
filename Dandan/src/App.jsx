import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from "./Components/Nav/Nav";
import Index from "./Components/Pages/Index";
import ProductDetails from "./Components/Pages/ProductDetails";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
      </Routes>
    </>
  );
}

export default App;
