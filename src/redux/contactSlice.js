import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactSlice = createSlice({
  name: 'contactState',

  initialState: {
    contacts: {
      items: [
        // Якщо на Backend даних немає - використовуємо
        // початкові дані для демонстрації
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
    // addContact(state, actions) {
    //   state.contacts.items = [...state.contacts.items, actions.payload];
    // },
    // deleteContact(state, action) {
    //   state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
    // },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  // extraReducers: {
  //   [fetchContacts.pending](state, action) {
  //     console.log('pending');
  //     state.contacts.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     console.log('fulfilled');
  //     state.contacts.items = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     console.log('rejected');
  //   },
  // },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.error = null;
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(deleteContact.pending, state => {
        state.contacts.error = null;
        state.contacts.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      })

      .addCase(addContact.pending, state => {
        state.contacts.error = null;
        state.contacts.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.isLoading = false;
      });
  },
});
