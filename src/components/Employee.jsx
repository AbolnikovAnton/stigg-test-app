import React, {useEffect, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

const Employee = () => {
    const [employeeById, setEmployeeById] = useState([]);
    const [employeeName, setEmployeeName] = useState(null);

    useEffect(() => {
        fetch('https://interview-booking-api.herokuapp.com/api/bookings')
            .then(response => response.json())
            .then(data => getEmployee(data))
    }, []);

    // const

    const getEmployee = (data) => {
        const helper = {};

        data.forEach((arrElement, idx) => {
            if (arrElement.employee?.id) {
                helper[arrElement.employee.id] = helper[arrElement.employee.id] || {
                    name: arrElement.employee.lastName + " " + arrElement.employee.firstName,
                    bookedHours: 0
                };
                let checkInDate = new Date(
                    arrElement.checkInDate.split("-").reverse().join("-")
                );
                let checkOutDate = new Date(
                    arrElement.checkOutDate.split("-").reverse().join("-")
                );
                let hours = (checkOutDate - checkInDate) / 1000 / 60 / 60;
                helper[arrElement.employee.id].bookedHours =
                    helper[arrElement.employee.id].bookedHours + hours;
                helper[arrElement.employee.id].rooms =
                    helper[arrElement.employee.id].rooms || {};
                helper[arrElement.employee.id].rooms[arrElement.roomType] =
                    (helper[arrElement.employee.id].rooms[arrElement.roomType] || 0) + 1;
                helper[arrElement.employee.id].mostSoldRoomType =
                    helper[arrElement.employee.id].mostSoldRoomType || arrElement.roomType;
                Object.keys(helper[arrElement.employee.id].rooms).forEach((keyRoom) => {
                    if (
                        helper[arrElement.employee.id].rooms[
                            helper[arrElement.employee.id].mostSoldRoomType
                            ] < helper[arrElement.employee.id].rooms[arrElement.roomType]
                    ) {
                        helper[arrElement.employee.id].mostSoldRoomType = arrElement.roomType;
                    }
                });
            }
        });

        const formattedArray = Object.values(helper)
        const sortedArray = formattedArray.sort(
            (a, b) => b.bookedHours - a.bookedHours
        );

        return setEmployeeById(sortedArray)
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
                <tr>
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
