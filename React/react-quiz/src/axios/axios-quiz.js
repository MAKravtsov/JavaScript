import axios from 'axios'

// Чтобы постоянно полностью не прописывать URL
export default axios.create({
    baseURL: 'https://react-quiz-12e39-default-rtdb.firebaseio.com/'
})