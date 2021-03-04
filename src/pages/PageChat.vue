<template>
  <q-page class="flex column justify-end">
    <div class="q-pa-md column col">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-input
          v-model="newMessage"
          bg-color="white"
          class="full-width"
          outlined
          rounded
          label="Message..."
          dense>

          <template v-slot:after>
            <q-btn
              round
              dense
              flat
              color="white"
              icon="send" />
          </template>
        </q-input>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newMessage: '',
      messages: [
        {
          text: 'Hey babs how are you?',
          from: 'me'
        },
        {
          text: 'Good thanks babsy! How are you?',
          from: 'them'
        },
        {
          text: 'Im good babsy :)',
          from: 'me'
        }
      ]
    }
  }
}
</script>
