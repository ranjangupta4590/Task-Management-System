import React, { useState, useEffect } from 'react';
import CardModal from './CardModal';
import AddTask from './AddTask';
import { Link, useLocation } from 'react-router-dom';



const TaskList = () => {
  const location = useLocation();

  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    let arr = localStorage.getItem("tasks")

    if (arr) {
      let obj = JSON.parse(arr)
      // setTasks(obj)
      obj.sort((a, b) => priorityValue(a.Priority) - priorityValue(b.Priority));
      setTasks(obj);
    }
  }, [])

  const priorityValue = (priority) => {
    switch (priority) {
      case 'High':
        return 1;
      case 'Medium':
        return 2;
      case 'Lower':
        return 3;
      default:
        return 0;
    }
  };

  const saveTask = (taskObj) => {
    let tempList = tasks
    tempList.push(taskObj)
    localStorage.setItem("tasks", JSON.stringify(tempList))

    const sortedTasks = tempList.slice().sort((a, b) => priorityValue(a.Priority) - priorityValue(b.Priority));
    setTasks(sortedTasks);
    setShowModal(false)
  }

  const toggle = () => {
    setShowModal(!showModal);
  };



  const editList = (obj, index) => {
    let tempList = tasks
    tempList[index] = obj
    localStorage.setItem("tasks", JSON.stringify(tempList))

    setTasks(tempList);
    window.location.reload()
  }
  const deleteTask = (index) => {
    let tempList = tasks
    tempList.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(tempList))
    setTasks(tempList)
    window.location.reload()
  }


  return (
    <div className='mt-7'>

      <div className='w-[300px] mx-auto my-7'>


        <div className=" flex gap-4  justify-center items-center p-6 bg-white border border-gray-200 rounded-lg shadow-xl">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Add New Task</h5>

          <Link to='/addtask' state={{ previousLocation: location }} >
            <button onClick={toggle} data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-600 rounded-lg hover:bg-pink-800">
              New +
            </button>
          </Link>

        </div>
        <AddTask modal={showModal} toggle={toggle} save={saveTask} />

      </div>

      <div>
        <span className='font-bold border-2 rounded-md py-3 px-4 ml-10 text-white' >All Task</span>
      </div>
      <div className='ml-[100px] flex flex-wrap  gap-5'>

        {tasks && tasks.map((item, index) => <CardModal className="-z-50" taskItems={item} index={index} deleteTask={deleteTask} editList={editList} />)}

      </div>


    </div>
  );
};

export default TaskList;
