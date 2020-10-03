import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7955b.firebaseio.com/'
});

export default instance;
 