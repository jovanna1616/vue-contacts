<template>
  <div>
    <div class="card">
      <ul class="list-group list-group-flush" v-if="contact">
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ contact.first_name }} {{ contact.last_name }}</li>
        <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i> {{ contact.email }}</li>
        <li class="list-group-item"><i class="fas fa-phone fa-fw"></i> {{ contact.number }}</li>
        <button type="submit" @click="deleteContact()">Remove contact</button>
      </ul>
      <div class="card-body" v-else>
        &larr; Please select a contact you want to see or click
        <router-link to="/add-contact">here</router-link> to create a new contact.
      </div>
    </div>
  </div>
</template>

<script>
  import {
    contacts
  } from '../services/contacts.js'
  
  export default {
    props: ['contact'],
    methods: {
      deleteContact() {
        contacts.deleteContact(this.contact.id)
        this.$emit('deleteContact', this.contact)
      }
    }
  }
</script>
