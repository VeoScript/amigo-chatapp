<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab === 'register'"
      v-model="formData.name"
      class="q-mb-md"
      outlined
      label="Name" />
    <q-input
      v-model="formData.email"
      class="q-mb-md"
      outlined
      type="email"
      label="Email" />
    <q-input
      v-model="formData.password"
      class="q-mb-md"
      outlined
      type="password"
      label="Password" />
    <div class="row">
      <q-space />
      <q-btn
      type="submit"
      color="primary"
      :label="tab" />
    </div>
  </q-form>
</template>

<script>
export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      if (this.tab === 'login') {
        console.log('Login the user')
      }
      else {
        console.log('Register the user')
      }
    }
  }
}
</script>
