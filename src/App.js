import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://interview-booking-api.herokuapp.com/api/bookings')
            .then(response => response.json())
            .then(data => setBookings(data))
    }, []);


    console.log(bookings)

    return (
        <div>
            <ul>
                {bookings.map(item =>
                    <li key={item.id}>{item.id}</li>
                )}
            </ul>
        </div>
    )
        ;
}

export default App;
