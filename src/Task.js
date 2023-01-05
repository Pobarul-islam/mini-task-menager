import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Task() {
  const [refech, setFetch] = useState();
  const [task, setTask] = useState('');
  useEffect(() => {
    fetch('https://devza.com/tests/tasks/list', {
      method: 'GET',
      headers: { AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a' },
    })
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [refech]);

  const deleteTask = (id) => {
    const formdata = new FormData();
    formdata.append('taskid', id);
    fetch('https://devza.com/tests/tasks/delete', {
      method: 'POST',
      headers: { AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a' },
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setFetch(data);
          toast.success(data.message);
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Task</h1>
      <div className="grid grid-cols-3 gap-5 ml-10">
        {task?.tasks?.map((task, index) => {
          return (
            <div key={index} className="card w-96 bg-base-100 shadow-xl ">
              <div className="card-body">
                <h1>{task.id}</h1>
                <h2 className="card-title">{task.message}</h2>
                <p>{TextTrackList.assigned_to}</p>
                <p>{task.assigned_name}</p>
                <p>{task.created_on} </p>
                <p>{task.due_date} </p>
                <p>{task.priority} </p>
                <div className="card-actions justify-between">
                  <button
                    className="btn btn-error"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/task/${task.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Task;
