<template>
  <tr
    @click="toUserDetails"
    class="relative text-start border-b border-[#B8B8B8] cursor-pointer shadow-2xl"
  >
    <td class="text-center text-[#36454F] text-base py-2 font-medium px-2">{{ user.id }}</td>
    <td class="text-[#36454F] text-base font-medium px-2">{{ user.name }}</td>
    <td class="text-[#36454F] text-base font-medium px-2">{{ user.email }}</td>
    <td class="text-[#36454F] text-base font-medium px-2">{{ user.phone }}</td>
    <td class="text-[#36454F] text-base font-medium px-2">{{ user.address.city }}</td>
    <td class="text-[#36454F] text-base font-medium px-2">{{ user.company.name }}</td>
    <td class="text-[#36454F] text-base font-medium px-2">{{ user.website }}</td>
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
