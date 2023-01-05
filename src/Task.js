import React, { useState } from 'react'

function Task() {
    const [task, setTask] = useState("");
    useState(()=>{
        fetch('https://devza.com/tests/tasks/list', {
          method: 'GET',
          headers: { AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a' },
        })
          .then((res) => res.json())
          .then((data) => setTask(data));
           
    },[])
   
  return (
    <div>
      <h1 className="text-3xl font-bold">Task</h1>
      <div className='grid grid-cols-3 gap-5 ml-10'>
        {task?.tasks?.map((task) => {
          return (
            <div key={task} className="card w-96 bg-base-100 shadow-xl ">
              <div className="card-body">
                <h1>{task.id}</h1>
                <h2 className="card-title">{task.message}</h2>
                <p>{TextTrackList.assigned_to}</p>
                <p>{task.assigned_name}</p>
                <p>{task.created_on} </p>
                <p>{task.due_date} </p>
                <p>{task.priority} </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Task
