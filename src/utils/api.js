import axios from 'axios';

function fetchUsers(pageNumber) {
  return axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
}

export { fetchUsers };
