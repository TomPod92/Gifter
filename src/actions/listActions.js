import database from "../firebase/firebase.js";

export const addItem = newItem => ({
  type: "ADD_ITEM",
  payload: {
    id: newItem.id,
    person: newItem.person,
    name: newItem.name,
    price: newItem.price,
    link: newItem.link,
    note: newItem.note,
    booked: false,
    bookedBy: ''
  }
});

export const startAddItem = (newItem = {}) => {
  return dispatch => {
    database
      .ref("gifts")
      .push(newItem)
      .then(ref => {
        dispatch(addItem({ id: ref.key, ...newItem }));
      });
  };
};

export const removeItem = id => ({
  type: "REMOVE_ITEM",
  payload: id
});

export const startRemoveItem = id => {
  return dispatch => {
    database.ref(`gifts/${id}`).remove()
    .then(() => {
        dispatch(removeItem(id));
    });
  };
};

export const setItems = gifts => ({
  type: "SET_ITEMS",
  payload: gifts
});

export const startSetItems = () => {
  return dispatch => {
    database.ref("gifts").on("value")
    .then(snapshot => {
        const gifts = [];

        snapshot.forEach(current => {
            gifts.push({ id: current.key, ...current.val() });
        });

        dispatch(setItems(gifts));
    });
  };
};

export const bookItem = (updatedItem) => ({
    type: 'BOOK_ITEM',
    payload: updatedItem
})

export const startBookItem = (updatedItem) => {
    return dispatch => {
        database.ref(`gifts/${updatedItem.id}`).update({booked: updatedItem.booked, bookedBy: updatedItem.bookedBy})
        .then( () => {
            dispatch(bookItem(updatedItem));
        })
    }
}
