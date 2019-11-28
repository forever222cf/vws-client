export default {
  STORAGE_KEY: 'bc-storage',
  API_SERVER: process.env.NODE_ENV === 'production' ? 'https://vws-server.herokuapp.com/candidates' : 'http://localhost:712/candidates',
  API: {
    GET_CANDIDATES: '/getAll',
    CREATE_CANDIDATE: '/create',
    GET_RANDOM_CANDIDATE: '/getRandom'
  }
}
