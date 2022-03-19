import React, {useEffect, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {getEmployee} from "./emploeeService";

const Employee = () => {
    const [employeeById, setEmployeeById] = useState([]);
    const [employeeName, setEmployeeName] = useState(null);

    useEffect(() => {
        fetch('https://interview-booking-api.herokuapp.com/api/bookings')
            .then(response => response.json())
            .then(data => getEmployeeData(data))
    }, []);

   const getEmployeeData = (data) => {
       const empList = getEmployee(data);
       setEmployeeById(empList);
   }

    return (
        <React.Fragment>
            <h1>Salesperson Leaderboard</h1>
            <TextField
                onChange={(e) => {
                    setEmployeeName(e.target.value)
                }}
                fullWidth
                InputProps={{
                    endAdornment: (
                        <IconButton aria-label="search">
                            <SearchIcon fontSize='large'/>
                        </IconButton>
                    ),
                }}
                id="outlined-basic"
                label='Search for salesperson'
                variant="outlined"
                sx={{
                    maxWidth: '100%',
                }}/>

            <table>
                <thead>
                <tr className='table-header'>
                    <th>Place</th>
                    <th>Name</th>
                    <th>Total booked hours</th>
                    <th>Most sold room type</th>
                </tr>
                </thead>
                <tbody>
                {employeeById.map((item, idx) =>
                    <tr
                        key={idx}
                        className=
                            {employeeName && item.name.toLowerCase().includes(employeeName.toLowerCase())
                                ? 'item-found' : employeeName ? 'd-none': ''}>
                        <td>
                            {idx + 1}
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.bookedHours} hours
                        </td>
                        <td>
                            {item.mostSoldRoomType.toLowerCase().replace('_', ' ')}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Employee;
