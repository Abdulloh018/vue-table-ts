<template>
  <div
    class="fixed top-0 left-0 right-0 z-30 w-full h-full"
    style="background: rgba(0, 0, 0, 0.27)"
  >
    <div
      class="w-[60%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#FBFBFB] pt-10 px-6 pb-6"
    >
      <h2 class="text-2xl mb-6">{{ form.id }} Postni Edit qilish</h2>
      <div class="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label for="text" class="text-xl">title</label>
          <textarea
            v-model="form.title"
            type="text"
            class="w-full rounded-xl border border-[#bbbb] py-2 px-3"
          />
        </div>

        <div>
          <label for="text" class="text-xl">body</label>
          <textarea
            v-model="form.body"
            type="text"
            class="w-full rounded-xl border border-[#bbbb] py-2 px-3"
          />
        </div>
      </div>
      <button @click="closeModal" class="absolute right-6 top-6 cursor-poninter"><CloseSvg/></button>
      <div @click="submit" class="flex justify-end">
        <button class="rounded-lg bg-[#80ed99] py-2 px-6">Submit</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useModalStore } from '../../store/modals'
import { usePostsStore } from '../../store/posts'
import CloseSvg from '@/assets/icons/close.svg'

const modalStore = useModalStore()
const postStore = usePostsStore()

const form = ref({
  id: 0,
  title: '',
  body: '',
  userId: 0
})

const closeModal = () => {
  modalStore.closeEditModal()
}

if (postStore.currentPost) {
  form.value = postStore.currentPost
  console.log(form.value.id);
}

const submit = () => {
  try {
    fetch('https://jsonplaceholder.typicode.com/posts/' + form.value.id, {
    method: 'PUT',
    body: JSON.stringify(form.value),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
      .then((response) => response.json())
      .then((json) => postStore.setEditedPost(json));
  } catch (error) {
    console.log(error);
  } finally {
    modalStore.closeEditModal()
  }
}
</script>
<style></style>
