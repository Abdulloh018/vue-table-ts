<template>
  <div>
    <table class="w-full border border-[#B8B8B8]">
      <thead class="border-b border-[#B8B8B8]">
        <tr class="bg-[#80ed99] text-[#262527]">
          <th class="relative py-2 text-xl font-semibold text-center px-2">User id</th>
          <th class="relative text-xl font-semibold text-start px-2">Name</th>
          <th class="relative text-xl font-semibold text-start px-2">Email</th>
          <th class="relative text-xl font-semibold text-start px-2">Phone</th>
          <th class="relative text-xl font-semibold text-start px-2">City</th>
          <th class="relative text-xl font-semibold text-start px-2">Company</th>
          <th class="relative text-xl font-semibold text-start px-2">Website</th>
        </tr>
      </thead>
      <tbody>
        <UserItem v-for="(user, index) in users" :key="index" :user="user" />
      </tbody>
    </table>
  </div>
</template>
<script setup>
import UserItem from '@/components/users/UsersItem.vue'


const props = defineProps(['users'])

</script>
<style scoped>
tbody tr:nth-child(odd) {
  background-color: #fff;
}
tbody tr {
  background-color: #c7f9cc;
}
</style>
