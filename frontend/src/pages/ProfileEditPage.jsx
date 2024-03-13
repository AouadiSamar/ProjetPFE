import React, { useState, useEffect } from 'react';

function ProfileEditPage() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken"); // Assuming you store accessToken in localStorage
        const response = await fetch('/api/profile', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) throw new Error('Could not fetch user data');
        const data = await response.json();
        setUser(data);
        setName(data.name);
        setEmail(data.email);
        setIsSuccess(true);
        setMessage('Profile fetched successfully');
      } catch (error) {
        setError(error.message);
        setIsSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    if (avatar) {
      formData.append('avatar', avatar);
    }
    

    const accessToken = localStorage.getItem("accessToken"); // Retrieving the access token

    try {
      const response = await fetch('/api/profile/update', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Including the Authorization header
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Profile update failed');
      setIsSuccess(true);
      setMessage('Profile updated successfully');
    } catch (error) {
      setError(error.message);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="error-message">Error: {error}</p>}
      {isSuccess && <p className="success-message">{message}</p>}

      {user && (
        <>
          <h2>Profile Information</h2>
          <form onSubmit={handleProfileUpdate}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="avatar">Avatar:</label>
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </div>
            <button type="submit" disabled={isSubmitting}>Update Profile</button>
          </form>
        </>
      )}
    </div>
  );
}

export default ProfileEditPage;
