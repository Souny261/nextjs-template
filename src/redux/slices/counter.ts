import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialStateProps = {
    count: number
}

const initialState: InitialStateProps = {
    count: 0
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        },
    }
})

export const { increment, decrement, reset } = CounterSlice.actions
export default CounterSlice.reducer
