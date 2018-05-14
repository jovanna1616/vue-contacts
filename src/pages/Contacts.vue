<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <ContactList :contacts="contacts" />
      </div>
      <div class="col-8">
        <ContactDetails :contact="routeContact" @deleteContact="handleDeletedContact" />
      </div>
    </div>
  </div>
</template>

<script>
  import ContactList from '../components/ContactList.vue'
  import ContactDetails from '../components/ContactDetails.vue'
  import {
    contacts
  } from '../services/contacts.js'
  
  import axios from 'axios';
  
  export default {
    components: {
      ContactList,
      ContactDetails
    },
    data() {
      return {
        contacts: []
      }
    },
    created() {
      this.getContact();
    },
    computed: {
      routeContact() {
        return this.contacts.find(contact => contact.id == this.$route.params.id)
      }
    },
    created() {
      contacts.getAllContacts()
        .then(response => {
          this.contacts = response.data
        }).catch(error => {
          console.log(error)
        })
    },
    methods: {
      handleDeletedContact(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1)
      }
    }
  }
</script>
