export const addItem = (newItem) => ({
    type:'ADD_ITEM',
    payload: {
        name: newItem.name,
        type: newItem.type,
        price: newItem.price,
        link: newItem.link,
        img: newItem.img
    }
});

export const removeItem = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
});