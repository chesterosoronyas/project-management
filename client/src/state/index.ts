import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface initialStateTypes{
    isSiderbarCollapsed:boolean;
    isDarkMode:boolean;
}

const initialState:initialStateTypes={
    isSiderbarCollapsed:false,
    isDarkMode:false
};

export const globalSlice=createSlice({
    name:"global",
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state,action:PayloadAction<boolean>)=>{
            state.isSiderbarCollapsed=action.payload
        },
        setIsDarkMode:(state,action:PayloadAction<boolean>)=>{
            state.isDarkMode=action.payload
        }
    },
});

export const {setIsDarkMode,setIsSidebarCollapsed}=globalSlice.actions;

export default globalSlice.reducer;

