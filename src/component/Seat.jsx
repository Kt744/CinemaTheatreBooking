import { useEffect, useState } from 'react';
import seatdata from './data';
import { setSeatData } from '../redux/seatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSeats } from '../redux/seatSlice';
import { Link } from "react-router-dom";

function Seat() {
    const dispatch=useDispatch();
    dispatch(setSeatData(seatdata))

    const seatdatas=useSelector((state)=>state.seat.SeatData)

    const selectedseats=useSelector((state)=>state.seat.selectedSeats)

    const handleClick=(id)=>{
        dispatch(setSelectedSeats(id))
    }
    return (
        <div className='seat-section'>
            <h2>Cinema theatre booking app</h2>
            <div className='seat-represent'>
                {
                seatdatas.map((row)=>{
                    return (        
                            <div className='seat-btn'>
                                <Link to="/summary">
                                <button
                                key={row.id}
                                onClick={()=>handleClick(row.id)}
                                disabled={row.booked || row.disable}
                                className={`seat ${row.booked? 'booked': ''}
                                ${selectedseats.includes(row.id)? 'selected':''}
                                `}
                                >{row.row}{row.id}
                                </button>
                                </Link>
                            </div>
                        )}   
                    )
                }
            </div>
        </div>
    )
}
export default Seat;
