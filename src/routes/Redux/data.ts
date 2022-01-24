export const reduxExample = [
  {
    title: 'store.js',
    code: `
// mock a redux store
const mockReduxStore = (reducer) => {
 let state = { counters: 0 }, listeners = [];
 
 const getState = () => state; // return current latest states
 const dispatch = (action) => {
   state.counters = reducer(state.counters, action); // dispatch send new data to reducer function
   listeners.forEach(listener => listener()); // when states updated, we need to notify every listener we have new state updated !!!!, so we call each of listener and tell them a new state updated result !!
   // console.log('counters value? ', state.counters);
 }
 
 const subscribe = (listener) => {
   listeners.push(listener); // add new listener into listeners array
   return () => {
     listeners = listeners.filter(l => l !== listener); // remove listener to current listeners array (also called: unsubscribe listener)
   }
 }
 // listeners are used to tracking changes, when changes are requested by dispatch function, list
 
 dispatch({}); // we want to make initial state populated !!!!
 
 return { getState, dispatch, subscribe };
};
 
var store = mockReduxStore(counterReducer);
 
export default store;

// reference: https://egghead.io/lessons/react-redux-store-methods-getstate-dispatch-and-subscribe
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const reduxSecondExample = [
  {
    title: 'counterSlice.js',
    code: `
// This is currently the modern way of manage the react states, features I discovered so far,
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
 
export interface CounterState {
 value: number
}
 
const initialState: CounterState = {
 value: 0,
}
 
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})
 
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
 
export default counterSlice.reducer;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const reduxPoints = [
  'automatically imported redux-devtools-extension',
  'automatically imported redux thunk middleware',
];

export const reduxThirdExample = [
  {
    title: 'pokemonApi.js',
    code: `
// For functional file:
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon } from './types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => \`pokemon/\${name}\`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'store.js',
    code: `
// For store:
import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './services/pokemon'
 
export const store = configureStore({
 reducer: {
   // Add the generated reducer as a specific top-level slice
   [pokemonApi.reducerPath]: pokemonApi.reducer,
 },
 // Adding the api middleware enables caching, invalidation, polling,
 // and other useful features of \`rtk-query\`.
 middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(pokemonApi.middleware),
})
 
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see \`setupListeners\` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];
