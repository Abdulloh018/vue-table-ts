<template>
  <div class="max-w-[1200px] w-full mx-auto py-10">
    <h1 class="text-4xl text-[#42B883] mb-10">Vue 3, Composition Api, Typescript</h1>
    <UsersList :users="users" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useUsersStore } from '@/store/users'

import UsersList from '@/components/users/UsersList.vue'

const store = useUsersStore()

const users = ref([])

const getUsers = async () => {
  try {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await data.json()
    store.setUsersList(users.value)
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

getUsers()
</script>
<style></style>
