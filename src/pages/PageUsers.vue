<template>
  <q-page class="flex">
    <q-list bordered>
      <q-item v-for="user in users" :key="user.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption lines="1">{{ user.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      users: [ {
          id: 1,
          name: 'Ruddy Jedrzej',
          email: 'rjedrzej0@discuz.net',
          letter: 'R'
        }, {
          id: 2,
          name: 'Mallorie Alessandrini',
          email: 'malessandrini1@marketwatch.com',
          letter: 'M'
        }, {
          id: 3,
          name: 'Elisabetta Wicklen',
          email: 'ewicklen2@microsoft.com',
          letter: 'E'
        }, {
          id: 4,
          name: 'Seka Fawdrey',
          email: 'sfawdrey3@wired.com',
          letter: 'S'
        }
      ]
    }
  }
}
</script>
