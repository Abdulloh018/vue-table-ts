<template>
  <tr
    @click="toUserDetails"
    class="relative text-start border-b border-[#B8B8B8] cursor-pointer shadow-2xl [&>*]:px-2"
  >
    <td class="text-center  py-2">{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.address.city }}</td>
    <td>{{ user.company.name }}</td>
    <td>{{ user.website }}</td>
  </tr>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useUsersStore } from '../../store/users';

const router = useRouter()

const props = defineProps(['user'])

const store = useUsersStore()

const userId = props.user.id

const toUserDetails = (id) => {
  router.push({ name: 'userDetails', params: { id: userId } })
  store.setUserId(userId)
}
</script>
<style scoped>
tr:hover {
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.19);
  z-index: 10;
}
</style>
