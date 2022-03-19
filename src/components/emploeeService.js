
const HOUR_IN_MILS = 1000 * 60 * 60;

export const getEmployee = (data) => {
    const employee = {};

    data.forEach((arrElement) => {
        if (arrElement.employee?.id) {
            const currentId = arrElement.employee.id;

            const name = getEmployeeName(employee, currentId, arrElement);


            const hours = bookedHours(arrElement);
            const rooms = updateRoomsType(employee, currentId, arrElement);

            const newEmp = {
                name,
                bookedHours: (employee[currentId]?.bookedHours || 0)  + hours,
                rooms,
                mostSoldRoomType: employee[currentId]?.mostSoldRoomType || arrElement.roomType,
            }

            updateMostSoldRating(newEmp, currentId, arrElement);

            employee[currentId] = newEmp;
        }
    });

    const formattedArray = Object.values(employee)
    const sortedArray = formattedArray.sort(
        (a, b) => b.bookedHours - a.bookedHours
    );

    return sortedArray;
}

const getDate = (dateStr) => new Date(dateStr.split("-").reverse().join("-"));

const bookedHours = (arrElement) => {
    const checkInDate = getDate(arrElement.checkInDate);
    const checkOutDate = getDate(arrElement.checkOutDate)
    return  (checkOutDate - checkInDate) / HOUR_IN_MILS;
}

const updateMostSoldRating = (employee, currentId, arrElement) => {
    Object.keys(employee.rooms).forEach((keyRoom) => {
        if (
            employee.rooms[
                employee.mostSoldRoomType
                ] < employee.rooms[arrElement.roomType]
        ) {
            employee.mostSoldRoomType = arrElement.roomType;
        }
    });
}

const updateRoomsType = (employee, currentId, arrElement) => {
    const rooms = employee[currentId]?.rooms || {};
    rooms[arrElement.roomType] =
        (employee[currentId]?.rooms[arrElement.roomType] || 0) + 1;
    return rooms;
}

const getEmployeeName = (employee, currentId, arrElement) => {
    return employee[currentId]?.name || arrElement.employee.lastName + " " + arrElement.employee.firstName;
}