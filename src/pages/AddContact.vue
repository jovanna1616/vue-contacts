<template>
  <div>
    <form v-validate="validationConfig">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input 
          class="form-control" 
          placeholder="First name" 
          v-model="contact.firstName" 
          >
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input 
        class="form-control" 
        placeholder="Last name" 
        v-model="contact.lastName">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input 
        class="form-control" 
        placeholder="Email" 
        v-model="contact.email"
        id="email">
      </div>
      <div class="form-group">
        <label for="number">Number</label>
        <input 
        class="form-control" 
        placeholder="Number" 
        v-model="contact.number">
      </div>
      <button type="text" class="btn btn-primary">Create contact</button>
    </form>
  </div>
</template>

<script>
  import {
    contacts
  } from '../services/contacts.js'
  export default {
    data() {
      return {
        contact: {
          firstName: '',
          lastName: '',
          email: '',
          number: ''
        },
        validationConfig: {
          validationRules: {
            email: ['required', 'email']
          },
          submitCallback: () => {
            console.log('eee');
            this.onSubmit()
          }
        }
      }
    },
    methods: {
      onSubmit() {
        this.contact.number = parseInt(this.contact.number)
        contacts.addContact(this.contact)
          .then(response => {
            this.$router.push('/contacts')
          }).catch(error => {
            console.log('error', error)
          })
      }
    }
  }
</script>
