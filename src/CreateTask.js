import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

function CreateTask() {
  const [createTask, setCreateTask] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const message = e.target.message.value;
    const due_date = date;
    const assigned_name = e.target.assigned_name.value;

    const formdata = new FormData();
    formdata.append('message', message);
    formdata.append('due_date', due_date);
    formdata.append('priority', '2');
    formdata.append('assigned_to', '1');
    formdata.append('assigned_name', assigned_name);

    fetch('https://devza.com/tests/tasks/create', {
      method: 'POST',
      headers: { AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a' },
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          toast.success('New Task Assigned Success');
          e.target.reset();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold'>Create Task</h1>
        <div className="">
          <form onSubmit={handleOnSubmit}>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Message</span>
                    </label>
                    <input
                      type="text"
                      name="message"
                      placeholder="message"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">assigned to</span>
                    </label>
                    <input
                      type="text"
                      name="assignedto"
                      placeholder="assigned_to"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">assigned_name</span>
                    </label>
                    <input
                      type="text"
                      name="assigned_name"
                      placeholder="Assigned name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">created_on</span>
                    </label>
                    <input
                      type="text"
                      name="createdon"
                      placeholder="created_on"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">due_date</span>
                    </label>
                    <input
                      type="number"
                      placeholder="due_date"
                      name="duedate"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">priority</span>
                    </label>
                    <input
                      type="number"
                      name="priority"
                      placeholder="priority"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
