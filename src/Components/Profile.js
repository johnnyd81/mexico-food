import React from 'react';
import '../css/Profile.css';


function Profile() {
  return(
    <div className="profile">
      <h2 className="info">Profile Information</h2>
      <form>
        <label>
          Name:<br />
          <input type="text" name="name" placeholder="name" />
        </label><br />
        <label>
          Surname:<br />
          <input type="text" name="surname" placeholder="surname" />
        </label><br />
        <label>
          Date of birth:<br />
          <input type="number" name="date-of-birth" placeholder="date of birth" />
        </label><br />
        <label>
          Email:<br />
          <input type="email" name="email" placeholder="email" />
        </label><br />
        <label>
          Telephone:<br />
          <input type="number" name="telephone" placeholder="telephone" />
        </label>
        <label>
          Home address:<br />
          <input type="text" name="address" placeholder="home address" />
        </label>
      </form>
    </div>
  )
}

export default Profile;