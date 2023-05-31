import { configureStore } from "@reduxjs/toolkit";

import seatReducer from './seatSlice'

let store = configureStore({reducer:{seat:seatReducer}});

export default store;
