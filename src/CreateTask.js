import React, { useEffect, useState } from 'react'

function CreateTask() {
    const [createTask, setCreateTask] = useState("");
  
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        const message = e.target.message.value;
        const assigned_to = e.target.assignedto.value;
        const assigned_name = e.target.assignedname.value;
        const created_on = e.target.createdon.value;
        const due_date = e.target.duedate.value;
        const priority = e.target.priority.value;
        const alltaskInput = {
          id,
          message,
          assigned_to,
          assigned_name,
          created_on,
          due_date,
          priority,
        };
        fetch('https://devza.com/tests/tasks/list',
         {
          method: 'POST',
          headers: { AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a' },
          body: JSON.stringify(alltaskInput)
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
    }
    
  return (
    <div>
      <div>
        <div className="">
          <form onSubmit={handleOnSubmit}>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Id</span>
                    </label>
                    <input
                      type="text"
                      placeholder="ID"
                      name="id"
                      className="input input-bordered"
                    />
                  </div>
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
                      name="assignedname"
                      placeholder="assigned_name"
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
                      type="text"
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
                      type="text"
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

export default CreateTask
