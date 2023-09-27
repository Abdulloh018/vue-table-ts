<template>
  <div>
    <table class="w-full border border-[#B8B8B8]">
      <thead class="border-b border-[#B8B8B8]">
        <tr class="bg-[#80ed99] text-[#262527] [&>*]:text-xl [&>*]:font-semibold [&>*]:text-start [&>*]:px-2">
          <th class="py-2">User id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>City</th>
          <th>Company</th>
          <th>Website</th>
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
