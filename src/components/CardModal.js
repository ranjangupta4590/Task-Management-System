import React, { useState } from 'react'
import EditTask from './EditTask';
import { Link, useLocation } from 'react-router-dom';


const CardModal = ({ taskItems, index, deleteTask, editList }) => {
  const location = useLocation();

  const [isChecked, setIsChecked] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }
  // console.log(taskItems);

  const editTask = (obj) => {
    editList(obj, index)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDelete = () => {
    deleteTask(index)
  }


  return (
    <>
      <div className='mt-7'>
        <div key={index} className="w-[400px]  bg-white border border-gray-200 rounded-lg ">
          <div className="flex py-3 rounded-t-md text-2xl justify-between  bg-gray-600">
            <div className="flex items-center ml-4">
              <input
                id={`checkbox-${index}`}
                type="checkbox"
                value=""
                className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded"
                onChange={handleCheckboxChange}
                checked={isChecked}
              />
              <label
                htmlFor={`checkbox-${index}`}
                className={`text-xl font-bold pl-3 ${isChecked ? 'line-through text-gray-500 dark:text-gray-900' : 'text-gray-900 dark:text-gray-300'}`}
              >
                {taskItems.Title}
              </label>
            </div>
            <div className='mr-4 text-md'><span>{taskItems.Priority}</span></div>
          </div>

          <div className='mx-3 text-black'>
            <p className='py-6 text-black'>{taskItems.Description}</p>
          </div>

          <div className="flex py-3 w-full justify-between rounded-b-md">
            <div></div>

            <div className='mr-4 flex gap-1'>
              <Link to={`/edit/${index}`} state={{ previousLocation: location }} ><button type="button"
                onClick={() => setModal(true)}
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                Edit
              </button>
              </Link>
              <button
                type="button"
                onClick={handleDelete}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <EditTask modal={modal} toggle={toggle} taskItem={taskItems} editTask={editTask} />
    </>
  )
}

export default CardModal;