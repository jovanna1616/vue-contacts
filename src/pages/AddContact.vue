<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input class="form-control" type="text" placeholder="First name" v-model="contact.firstName" v-focus-on:write.name="focus">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input class="form-control" type="text" placeholder="Last name" v-model="contact.lastName">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input class="form-control" type="email" placeholder="Email" v-model="contact.email">
      </div>
      <div class="form-group">
        <label for="number">Number</label>
        <input class="form-control" type="number" placeholder="Number" v-model="contact.number">
      </div>
      <button type="submit" class="btn btn-primary">Create contact</button>
    </form>
    <!-- <div v-demo="'EEEEE'"></div> -->
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
        focus: false
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
