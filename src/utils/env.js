export default {
  STORAGE_KEY: 'bc-storage',
  // 10.248.39.75
  API_SERVER: process.env.NODE_ENV === 'production' ? 'https://vws-server.herokuapp.com/candidates' : 'http://10.248.39.75:712/candidates',
  API: {
    GET_CANDIDATES: '/getAll',
    CREATE_CANDIDATE: '/create',
    GET_RANDOM_CANDIDATE: '/getRandom'
  }
}
