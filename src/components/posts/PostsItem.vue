<template>
  <tr
    class="relative text-start border-b border-[#B8B8B8] cursor-pointer shadow-2xl [&>*]:font-medium [&>*]:px-2"
  >
    <td class="py-2">{{ props.index }}</td>
    <td>{{ post.title }}</td>
    <td>{{ post.body }}</td>
    <td><button @click="editPost(post.id)" type="button" class="w-6 h-6"><EditSvg/></button></td>
    <td><button @click="deletePost(post.id)" type="button" class="w-6 h-6"><DeleteSvg/></button></td>
  </tr>
</template>
<script setup>
import { useModalStore } from '@/store/modals';
import { usePostsStore } from '@/store/posts';
import EditSvg from '@/assets/icons/edit.svg'
import DeleteSvg from '@/assets/icons/delete.svg'

const props = defineProps(['post', 'index'])

const modalStore = useModalStore()

const postsStore = usePostsStore()

const editPost = (id) => {
  modalStore.openEditModal()
  postsStore.getCurrentPost(id)
}

const deletePost = (id) => {
  postsStore.deletePost(id)
  console.log(id, 'udalit');
}
</script>
<style scoped>
tr:hover {
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.19);
  z-index: 10;
}
</style>
