import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { deleteUser, fetchUsers, updateUser } from '../redux/actions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Autocomplete, TextField } from '@mui/material';

const UserTable: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const handleDelete = (userId: string) => {
    dispatch(deleteUser(userId));
  };

  const handleLocationChange = (userId: string, newLocation: string) => {
    dispatch(updateUser(userId, { location: newLocation }));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [] )

  return (
    <TableContainer component={Paper} style={{minWidth: 'max-content'}} >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Hobby</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.hobby}</TableCell>
              <TableCell>{user.createdAt}</TableCell>
              <TableCell>
                <Autocomplete
                  value={user.location}
                  onChange={(_, newValue) => {
                    if (typeof newValue === 'string') {
                      handleLocationChange(user.id, newValue);
                    } else if (newValue && newValue.inputValue) {
                      handleLocationChange(user.id, newValue.inputValue);
                    } else {
                      handleLocationChange(user.id, newValue);
                    }
                  }}
                  id="location-select"
                  options={[
                    "ABU DHABI",
                    "AMSTERDAM",
                    "AUSTIN",
                    "BARCELONA",
                    "BENGALURU",
                    "BRASÍLIA",
                    "BRUSSELS",
                    "BUENOS AIRES",
                  ]}
                  sx={{ width: 200 }}
                  renderInput={(params) => <TextField {...params} variant="standard" />}
                />
              </TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
