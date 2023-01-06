import { Route, Routes } from 'react-router';
import './App.css';
import CreateTask from './CreateTask';
import Navbar from './Navbar';
import Task from './Task';
import UsersList from './UsersList';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Routes>
    <Route path='/' element={<UsersList/>}></Route>
    <Route path='/task' element={<Task/>}></Route>
    <Route path='/createtask' element={<CreateTask/>}></Route>
    <Route path='/editTask'></Route>
   </Routes>
    </div>
  );
}

export default App;
