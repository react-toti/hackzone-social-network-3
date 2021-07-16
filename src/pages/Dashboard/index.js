import React, { useEffect, useState } from 'react';
import api from '../../services/api';
// import { Container } from './styles';

function Dashboard() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/users');
      setProfiles(response.data);
    };

    getData();
  }, []);

  return (
    <>
      {profiles &&
        profiles.map(profile => (
          <div>
            <img src={profile.avatar} alt="Profile" />
            <p>{profile.name}</p>
          </div>
        ))}
    </>
  );
}

export default Dashboard;
