import axios from 'axios'

export const fetchEngineer = search => ({
    type: "FETCH_ENGINEER",
    payload: axios.get(`http://localhost:3000/api/v1/engineers${search}`)
})

export const addEngineer = data => ({
    type: "CREATE_ENGINEER",
    payload: axios.post(`http://localhost:3000/api/v1/engineer`, data)
})

export const editEngineer = (id,data) => ({
    type: "EDIT_ENGINEER",
    payload: axios.patch(`http://localhost:3000/api/v1/engineer/${id}`, data),
    id
})
export const deleteEngineer = id => ({
    type: "DELETE_ENGINEER",
    payload: axios.delete(`http://localhost:3000/api/v1/engineer/${id}`),
    id
})