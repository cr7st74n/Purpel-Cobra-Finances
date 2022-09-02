import decode from 'jwt-decode'

export function isAuthenticated() {
    const token = localStorage.getItem('token')

    if (!token) return false;
    if (token && decode(token).exp > Date.now() / 1000) return decode(token).data;
    return false;
}

export function logout() {
    localStorage.removeItem('token')
    window.location = '/'
}