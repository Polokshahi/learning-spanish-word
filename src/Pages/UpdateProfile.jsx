import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../Provider/AuthProvider';


const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !photoURL) {
        setError('Please fill out all fields.');
        return;
    }

  
    updateProfile(user, { displayName: name, photoURL })
        .then(() => {
   
            setUser({ ...user, displayName: name, photoURL });
      
            navigate('/my_profile');
        })
        .catch((err) => {
         
            setError('Failed to update profile. Please try again.');
        });
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">
          Update Your Profile
        </h1>
        {error && (
          <div className="mb-4 text-red-500 text-center">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition w-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
