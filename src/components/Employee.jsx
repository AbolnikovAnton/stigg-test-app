import React, {useEffect, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [employeeById, setEmployeeById] = useState([]);

    useEffect(() => {
        fetch('https://interview-booking-api.herokuapp.com/api/bookings')
            .then(response => response.json())
            .then(data => setEmployees(data))
    }, []);

    function getEmployee(id) {
        // console.log(employees)
        const employeeArr = employees.filter(item => item.employee?.id === id)

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
                            <SearchOutlined/>
                        </IconButton>
                    ),
                }}
                id="outlined-basic"
                label="Search for salesperson"
                variant="outlined"
                sx={{
                    width: 500,
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
                {employees.map((item) =>
                    <tr key={item.id}>
                        {item.firstName}
                    </tr>
                )}
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Employee;
