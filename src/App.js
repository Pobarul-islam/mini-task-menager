import { Route, Routes } from 'react-router';
import './App.css';
import CreateTask from './CreateTask';
import Task from './Task';
import UsersList from './UsersList';

function App() {
  return (
    <div className="App mt-10">
     <h1 className='text-4xl font-bold'>Mini Task Menager</h1>
   
   <Routes>
    <Route path='/' element={<UsersList/>}></Route>
    <Route path='/task' element={<Task/>}></Route>
    <Route path='/createtask' element={<CreateTask/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
