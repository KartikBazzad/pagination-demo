import React from 'react';

function UserCard({ user }) {
  return (
    <div className='w-96'>
      <div className='card card-side bordered'>
        <div className='avatar p-4 flex items-center justify-center'>
          <div className=' rounded-btn w-24 h-24'>
            <img src={user.avatar} alt={user.first_name} />
          </div>
        </div>
        <div className='card-body'>
          <h2 className='card-title'>
            {user.first_name} {user.last_name}
          </h2>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
