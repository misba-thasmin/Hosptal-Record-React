import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import SearchPatient from './components/SearchPatient';
import RemovePatient from './components/RemovePatient';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
    
<AddPatient />
<SearchPatient />
<RemovePatient />
<ViewAll />


    </div>
  );
}

export default App;
