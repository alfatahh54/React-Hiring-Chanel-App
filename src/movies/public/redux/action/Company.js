import axios from 'axios'

export const fetchCompany = search => ({
    type: "FETCH_COMPANY",
    payload: axios.get(`http://localhost:3000/api/v1/companies${search}`)
})

export const addCompany = data => ({
    type: "CREATE_COMPANY",
    payload: axios.post(`http://localhost:3000/api/v1/company`, data)
})
export const editCompany = (id,data) => ({
    type: "EDIT_COMPANY",
    payload: axios.patch(`http://localhost:3000/api/v1/company/${id}`, data),
    id
})
export const deleteCompany = (id,data) => ({
    type: "DELETE_COMPANY",
    payload: axios.delete(`http://localhost:3000/api/v1/company/${id}`),
    id
})