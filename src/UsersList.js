import React, { useEffect, useState } from 'react';

function UsersList() {
  const [name, setName] = useState('');
  console.log(name);

  const [user, setUser] = useState('');
  useEffect(() => {
    fetch('https://devza.com/tests/tasks/listusers', {
      method: 'GET',
      headers: { AuthToken: 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a' },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <div>
        <input
          className="w-50 mt-10 border p-5 text-2xl shadow-lg"
          type="text"
          name=""
          placeholder="Search..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* User List  */}
      <div className="grid grid-cols-3 gap-5 ml-10 mt-10">
        {user?.users
          ?.filter((value) => {
            if (name === '') {
              return value;
            } else if (
              value.name.toLowerCase().includes(name.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          .map((user) => {
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

export default UsersList;
