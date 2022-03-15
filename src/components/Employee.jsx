import React, {useEffect, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

const Employee = () => {
    const [data, setData] = useState([]);
    const [employeeById, setEmployeeById] = useState([]);
    const [currentId, setCurrentId] = useState(-1);
    const [hours, setHours] = useState([]);
    const [roomtype, setRoomtype] = useState([]);

    useEffect(() => {
        fetch('https://interview-booking-api.herokuapp.com/api/bookings')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    function getEmployee(id) {

        const employeeArr = data.map(item => item.employee?.id)

        return setEmployeeById(employeeArr)
    }

    return (
        <React.Fragment>
            <h1>Salesperson Leaderboard</h1>
            <TextField
                fullWidth
                InputProps={{
                    endAdornment: (
                        <IconButton aria-label="search">
                            <SearchIcon fontSize='large'/>
                        </IconButton>
                    ),
                }}
                id="outlined-basic"
                label="Search for salesperson"
                variant="outlined"
                sx={{
                    maxWidth: '100%',
                }}/>

            <table>
                <thead>
                <tr>
                    <th>Place</th>
                    <th>Name</th>
                    <th>Total booked hours</th>
                    <th>Most sold room type</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) =>
                    <tr key={item.id}>
                        {item.id}
                        <td>
                            {item.firstName} {item.lastName}
                        </td>
                        <td>
                            {item.employee?.id}
                        </td>
                        <td>
                            {item.roomType}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Employee;
