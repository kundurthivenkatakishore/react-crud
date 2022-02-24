import logo from './logo.svg';
import './App.css';
import Create from './Create'
import Read from './Read'
import Update from './Update'
import {Routes,Route} from 'react-router-dom' //importing routes and route to traverse the page components

function App() {
  return (
    //setting the route paths 
    <>
    <div className='header'><h2>React Crud Operations</h2></div>
    <Routes>
      <Route exact path='/' element={<Create/>}/> 
      <Route exact path='/Read' element={<Read/>}/>
      <Route exact path='/Update' element={<Update/>}/>
    </Routes>
    </>
  );
}

export default App;
