import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';

function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <div className='' >
      
      
      <div className='w-full border-b-2 shadow-md text-center text-2xl text-white py-5'>
        <span>Task Management System</span>
      </div>

      <div className='mx-10'>

        {/* <TaskList/> */}
        <Routes location={previousLocation || location}>
          <Route path="/" exact element={<TaskList />} />
          <Route path="/tasklist" exact element={<TaskList />} />
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
