import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={children} alt="profile" />
      <h2>{fullName}</h2>
      <p>{profession}</p>
      <p>{bio}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'No profession available',
  handleName: (name) => alert(`Hello ${name}!`),
  children: '',
};

export default Profile;
