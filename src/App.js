import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import SearchPatient from './components/SearchPatient';
import RemovePatient from './components/RemovePatient';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
    
<BrowserRouter>
<Routes>
  <Route  path="/Home" element={<Home />} />
  <Route  path="/" element={<AddPatient />} />
 <Route  path="/Search" element={<SearchPatient />} />
  <Route  path="/Remove" element={<RemovePatient />} />
   <Route  path="/View" element={<ViewAll />} />
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
