import {configureStore} from '@reduxjs/toolkit';
import formSlice from './features/Form/formSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        formSlice 
    }
});

export type RootState = ReturnType<typeof store.getState>; //might not need
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; //hook that may resolve types (basicly the same as useDispatch method)
