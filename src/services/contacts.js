import axios from 'axios'

export default class Contact {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }
  addContact(contact) {
    
    return axios.post('contacts', {
      first_name: contact.firstName,
      last_name: contact.lastName,
      email: contact.email,
      number: contact.number
    })
  }
  getAllContacts() {
    return axios.get('contacts')
  }
  deleteContact(id) {
    return axios.delete(`contacts/${id}`)
  }
}
    
export const contacts = new Contact()