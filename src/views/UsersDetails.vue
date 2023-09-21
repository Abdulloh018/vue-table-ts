<template>
  <div class="max-w-[1200px] mx-auto py-10">
    <div class="userCard bg-white p-5 mb-10">
      <h2 class="text-3xl mb-4 font-bold">User {{ user?.id }} Details</h2>
      <div class="grid grid-cols-3 gap-5">
        <div class="flex items-center gap-2">
          <p class="text-[20px] font-semibold">Name:</p>
          <p class="text-base font-medium">{{ user?.name }}</p>
        </div>
        <div class="flex items-center gap-2">
          <p class="text-[20px] font-semibold">Email:</p>
          <p class="text-base font-medium">{{ user?.email }}</p>
        </div>
        <div class="flex items-center gap-2">
          <p class="text-[20px] font-semibold">City:</p>
          <p class="text-base font-medium">{{ user?.address.city }}</p>
        </div>
        <div class="flex items-center gap-2">
          <p class="text-[20px] font-semibold">Street:</p>
          <p class="text-base font-medium">{{ user?.address.street }}</p>
        </div>
        <div class="flex items-center gap-2">
          <p class="text-[20px] font-semibold">Company:</p>
          <p class="text-base font-medium">{{ user?.company.name }}</p>
        </div>
        <div class="flex items-center gap-2">
          <p class="text-[20px] font-semibold">Website:</p>
          <a :href="user?.website" target="_blank" class="text-base font-medium">{{ user?.website }}</a>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-end mb-4">
        <button @click="addPost" class="rounded-md py-2 px-4 bg-[#80ed99] flex items-center gap-2"><PlusSvg /> <span class="text-white font-medium">Add</span></button>
      </div>
      <PostsList :userId="userId" />
    </div>
  </div>
  <div class="relative">
    <EditPostsModal v-if="modalStore.isEditModal" />
    <AddPostModal v-if="modalStore.isAddModal" />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useModalStore } from '@/store/modals';
import { useUsersStore } from '@/store/users';
import PlusSvg from '@/assets/icons/plus.svg'
import AddPostModal from '@/components/modals/AddPostModal.vue'
import EditPostsModal from '@/components/modals/EditPostModal.vue'
import PostsList from '@/components/posts/PostsList.vue'

const modalStore = useModalStore()

const userStore = useUsersStore()

const route = useRoute()


const user = ref(null)

const userId = route.params.id

onMounted(() => {
  if(!userStore.usersList.length) {
    getUser()
  } else {
    user.value = userStore.getUserByID(+userId)
    console.log(user.value, userId, 'onmounted');
  }
})

const getUser = async () => {
  try {
    let data = await fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    user.value = await data.json()
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}

const addPost = () => {
  console.log('added');
  modalStore.openAddModal()
}


</script>
<style scoped>
.userCard {
  box-shadow: -4px 4px 25px 0px rgba(34, 60, 80, 0.2);
}
</style>
