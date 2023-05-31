import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedSeats, decrementCountdown } from "../redux/seatSlice";

function Summary() {
    // 1
    const selectedseats = useSelector((state) => state.seat.selectedSeats)
    const TotalPrice = useSelector((state) => state.seat.totalPrice)

    // 2
    const dispatch = useDispatch();
    const endTime = useSelector((state) => state.seat.timer)

    useEffect(() => {
        if (endTime > 0) {
            const timerId = setInterval(() => {
                dispatch(decrementCountdown())
            }, 1000)
            return () => clearInterval(timerId)
        } else {
            dispatch(clearSelectedSeats());
        }
    }, [endTime, dispatch])

    return (
        <div className='summary-section'>
            <h2>Summary of seats</h2>
            <div className='summary-section-content'>
            {selectedseats.length > 0 && (
            <div className='summary-section-items'>
                <div className='summary-section-items1'>Selected seats :{selectedseats.join(', ')}</div>
                <div className='summary-section-items2'>Price: {TotalPrice}</div>
                <div className='summary-section-items3'>{endTime > 0 && <p>Time remaining:{endTime}</p>}</div>
            </div>
            )}
            </div>
        </div>
    )
}
export default Summary;
