import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UsersList() {

  
    const [user, setUser] = useState("");
    useEffect(()=>{
        fetch('https://devza.com/tests/tasks/listusers', {
          method: 'GET',
          headers: { AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a' },
        })
          .then((res) => res.json())
          .then((data) => setUser(data));
    },[])

  return (
    <div className="overflow-x-auto">
     

      {/* User List  */}
      <div className="grid grid-cols-3 gap-5 ml-10 mt-10">
        {user?.users?.map((user) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={user.picture} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{user.id}</h2>
                <p>{user.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsersList
