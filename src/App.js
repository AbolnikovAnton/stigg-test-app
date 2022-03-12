import './App.css';
import {useEffect, useState} from "react";
import Employee from "./components/Employee";
import {TopStats, TopStatsBar} from './components/Styled'


function App() {
    const [bookingsSnapshot, setBookingsSnapshot] = useState([]);

    useEffect(() => {
        fetch('https://interview-booking-api.herokuapp.com/api/booking-snapshot')
            .then(response => response.json())
            .then(data => setBookingsSnapshot(data))
    }, []);

    // console.log(bookingsSnapshot)

    return (
        <div>
            <TopStatsBar>
                <TopStats>Checked In {bookingsSnapshot.checkedIn}</TopStats>
                <TopStats>Reserved Rooms {bookingsSnapshot.reservedRooms}</TopStats>
                <TopStats>Available Rooms {bookingsSnapshot.availableRooms}</TopStats>
                <TopStats>Week Availability {bookingsSnapshot.weekAvailabilityPercent}%</TopStats>
            </TopStatsBar>
            <Employee/>

        </div>
    )
    // ;
}

export default App;
