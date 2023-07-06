import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contactState',

  initialState: {
    contacts: {
      items: [
        // Якщо на Backend даних немає - використовуємо
        // початкові дані для демонстрації
        { id: 'id-1', name: 'Rosie Simpson', number: '758-737-0979' },
        { id: 'id-2', name: 'Hermione Kline', number: '211-792-1896' },
        { id: 'id-3', name: 'Eden Clements', number: '551-240-3374' },
        { id: 'id-4', name: 'Annie Copeland', number: '205-226-1087' },
      ],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    addContact(state, actions) {
      state.contacts.items = [...state.contacts.items, actions.payload];
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
