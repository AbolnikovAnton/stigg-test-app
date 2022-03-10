import React, {useEffect, useState} from 'react';

const Employee = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetch('https://interview-booking-api.herokuapp.com/api/bookings')
            .then(response => response.json())
            .then(data => setEmployee(data))
    }, []);

    function getEmployee (id) {
        const employeeArr =  employee.filter(item => item.employee.id == id)
        console.log(employeeArr)

        return employeeArr
    }

    return (
        <div>
            {console.log(getEmployee(4))}
        </div>
    );
};

export default Employee;


// if (item.employee.id == ){
//
// }