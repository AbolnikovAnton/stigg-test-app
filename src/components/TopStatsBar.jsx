import React from 'react';
import {useEffect, useState} from "react";
import {TopStats, TopStatsBar} from "./Styled";
import Employee from "./Employee";

const TopStatsBarCircle = () => {

    const [bookingsSnapshot, setBookingsSnapshot] = useState([]);

    useEffect(() => {
        fetch('https://interview-booking-api.herokuapp.com/api/booking-snapshot')
            .then(response => response.json())
            .then(data => setBookingsSnapshot(data))
    }, []);


    return (
        <div>
            <TopStatsBar>
                <TopStats>Checked In {bookingsSnapshot.checkedIn}</TopStats>
                <TopStats>Reserved Rooms {bookingsSnapshot.reservedRooms}</TopStats>
                <TopStats>Available Rooms {bookingsSnapshot.availableRooms}</TopStats>
                <TopStats>Week Availability {bookingsSnapshot.weekAvailabilityPercent}%</TopStats>
            </TopStatsBar>
        </div>
    )

}

export default TopStatsBarCircle;