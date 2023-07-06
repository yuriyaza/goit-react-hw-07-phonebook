import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactSlice = createSlice({
  name: 'contactState',

  initialState: {
    contacts: {
      items: [
        // Якщо на Backend даних немає - можна використати початкові
        // дані для демонстрації:
        // { id: 'id-1', name: 'Rosie Simpson', number: '685-941-0712' },
        // { id: 'id-2', name: 'Hermes Kline', number: '608-525-9356' },
        // { id: 'id-3', name: 'Eden Clements', number: '610-240-8476' },
        // { id: 'id-4', name: 'Annie Copeland', number: '587-817-7905' },
      ],
      error: null,
      isLoading: false,
    },
    filter: '',
  },

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending), (state, action) => {
        state.contacts.error = null;
        state.contacts.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled), (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      });
  },
});
