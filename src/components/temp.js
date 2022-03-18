const array = fetch('https://interview-booking-api.herokuapp.com/api/bookings')
    .then(response => response.json())
    .then(data => setData(data))

const helper = {};

array.forEach((arrElement, idx) => {
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
            (helper[arrElement.employee.id].rooms[arrElement.roomType] || 0) + hours;
        helper[arrElement.employee.id].biggestRoom =
            helper[arrElement.employee.id].biggestRoom || arrElement.roomType;
        Object.keys(helper[arrElement.employee.id].rooms).forEach((keyRoom) => {
            if (
                helper[arrElement.employee.id].rooms[
                    helper[arrElement.employee.id].biggestRoom
                    ] < helper[arrElement.employee.id].rooms[arrElement.roomType]
            ) {
                helper[arrElement.employee.id].biggestRoom = arrElement.roomType;
            }
        });
    }
});
const formattedArray = Object.keys(helper).map((keyHelper) => {
    return { ...helper[keyHelper] };
});
const sortedArray = formattedArray.sort(
    (a, b) => b.bookedHours - a.bookedHours
);


console.log(helper);
console.log(formattedArray);
console.log(sortedArray);
const array = fetch('https://interview-booking-api.herokuapp.com/api/bookings')
    .then(response => response.json())
    .then(data => setData(data))

const helper = {};

array.forEach((arrElement, idx) => {
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
            (helper[arrElement.employee.id].rooms[arrElement.roomType] || 0) + hours;
        helper[arrElement.employee.id].biggestRoom =
            helper[arrElement.employee.id].biggestRoom || arrElement.roomType;
        Object.keys(helper[arrElement.employee.id].rooms).forEach((keyRoom) => {
            if (
                helper[arrElement.employee.id].rooms[
                    helper[arrElement.employee.id].biggestRoom
                    ] < helper[arrElement.employee.id].rooms[arrElement.roomType]
            ) {
                helper[arrElement.employee.id].biggestRoom = arrElement.roomType;
            }
        });
    }
});
const formattedArray = Object.keys(helper).map((keyHelper) => {
    return { ...helper[keyHelper] };
});
const sortedArray = formattedArray.sort(
    (a, b) => b.bookedHours - a.bookedHours
);


console.log(helper);
console.log(formattedArray);
console.log(sortedArray);
