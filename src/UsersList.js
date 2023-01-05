import React from 'react'

function UsersList() {
  return (
    <div className='container'>
      <div className="card">
        <div className="card-title">
            <h2>User Listing</h2>
            <div className="card-body">
                <table className='table boarder'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UsersList
