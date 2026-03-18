// src/app/Store/ReduxToolkit/Store.ts

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slices/AuthSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  auth: authReducer,
})
 
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"], 
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
 
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = store.dispatch

// Usage =>   const user = useAppSelector((state) => state.auth.user)
