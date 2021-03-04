<template>
  <q-form>
    <q-input
      v-model="formData.name"
      outlined
      label="Name" />
    <q-input
      v-model="formData.email"
      outlined
      type="email"
      label="Email" />
    <q-input
      v-model="formData.password"
      outlined
      type="password"
      label="Password" />
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
  }
}
</script>
