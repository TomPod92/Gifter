export const login = (uid = 123) => ({
    type: 'LOGIN',
    payload: uid
});

export const logout = () => ({
    type: 'LOGOUT'
});