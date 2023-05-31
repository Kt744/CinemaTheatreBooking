import { createSlice } from "@reduxjs/toolkit";

let initialState={
    SeatData:[],
    selectedSeats:[],
    totalPrice:0,
    timer:null,
}
let seatSlice=createSlice({
    name:'seatSlice',
    initialState,
    reducers: {
        setSeatData:(state,action)=>{
            action.type="SET_SEATDATA"
            state.SeatData=action.payload
        },
        setSelectedSeats:(state,action)=>{
            const seatId=action.payload
            const seat=state.SeatData.find((s)=>s.id === seatId)
            if(seat) {
                state.selectedSeats=[...state.selectedSeats, seatId]
                state.totalPrice=state.selectedSeats.reduce((acc,id)=>acc+state.SeatData.find((s)=>s.id===id).price, 0)
            }
            state.timer=5
        },
        decrementCountdown:(state)=>{
            state.timer=state.timer-1;
        },
        clearSelectedSeats:(state)=>{
            state.selectedSeats=[],
            state.totalPrice=0
            state.timer=0;
        }
    }
})
export const {setSeatData,setSelectedSeats,clearSelectedSeats,decrementCountdown}=seatSlice.actions;
export default seatSlice.reducer;
