import React from 'react'
import user from '../assets/user.jpg'


export default function Map() {

    const profiles = [
        {
          name: 'John Doe',
          image: {user},
        },
        {
          name: 'Jane Smith',
          image: {user},
        },
        {
          name: 'Bob Johnson',
          image: {user},
        }
      ];
      
  return (
    <div>
      {profiles.map(profile => (
        <Profile key={profile.name} name={profile.name} image={profile.image} />
      ))}
    </div>
  )
}

function Profile({ name, image }) {
    return (
      <div>
        <img  className='w-10 h-10 rounded-full' src={user} alt={name} />
        <h2>{name}</h2>
      </div>
    );
  }