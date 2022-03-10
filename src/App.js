import './App.css';
import {useEffect, useState} from "react";
import Employee from "./components/Employee";

function App() {
    // const [bookings, setBookings] = useState([]);

    // useEffect(() => {
    //     fetch('https://interview-booking-api.herokuapp.com/api/bookings')
    //         .then(response => response.json())
    //         .then(data => setBookings(data))
    // }, []);


    // console.log(bookings)

    return (
        <div>
            <Employee/>
        </div>
    )
        // ;
}

export default App;
