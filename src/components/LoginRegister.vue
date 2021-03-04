<template>
  <q-form>
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
