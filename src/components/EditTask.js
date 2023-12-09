import React, { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom';

const EditTask = ({ modal, toggle, editTask, taskItem }) => {

  const modalRef = useRef();
  const navigate = useNavigate();


  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('High');
  const [description, setDescription] = useState('');

  console.log(taskItem);

  useEffect(() => {

    setTitle(taskItem.Title)
    setPriority(taskItem.Priority)
    setDescription(taskItem.Description)

  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {}
    tempObj['Title'] = title
    tempObj['Priority'] = priority
    tempObj['Description'] = description
    editTask(tempObj)
  }

  return (
    <>
      {(modal &&
        <div ref={modalRef} onClick={() => navigate('/tasklist')} className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 flex justify-center items-center">

          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* <!-- Modal content --> */}

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}

              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Update Your Task
                </h3>
                <button type="button" onClick={toggle} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>


              {/* <!-- Modal body --> */}

              <form className="p-4 md:p-5 ">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type task name" required="" />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority level </label>
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option value="High ">High</option>
                      <option value="Medium ">Medium</option>
                      <option value="Lower">Low</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write task description here"></textarea>
                  </div>
                </div>

                <div className='flex mr-3 gap-3'>
                  <button type='submit' onClick={handleUpdate} className="  text-white items-center bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Update
                  </button>
                  <button onClick={toggle} className=" text-white items-center bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Cancel
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditTask;