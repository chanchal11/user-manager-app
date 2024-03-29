import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { Container, Typography } from '@mui/material';
import { User } from '../types';

const Toolbar: React.FC = () => {
  const users = useSelector((state: RootState) => state.users);
  const locations : string[] = Array.from(new Set(users.map((user: User) => user.location)));

  return (
    <Container>
      {locations.map(location => (
        <Typography key={location} variant="body1">
          {location}: {users.filter((user: User) => user.location === location).length} users
        </Typography>
      ))}
    </Container>
  );
};

export default Toolbar;
