<template>
  <div>
    <table class="w-full border border-[#B8B8B8]">
      <thead class="border-b border-[#B8B8B8]">
        <tr class="bg-[#80ed99] text-[#262527]">
          <th class="relative py-2 text-xl text-center font-semibold px-2">Post&nbsp;id</th>
          <th class="relative text-xl font-semibold text-start px-2">Title</th>
          <th class="relative text-xl font-semibold text-start px-2">Body</th>
          <th class="px-4">Edit</th>
          <th class="px-4">Delete</th>
        </tr>
      </thead>
      <tbody>
        <PostsItem v-for="(post,index ) in store.postsList" :key="post.id" :post="post" :index="index+1" />
      </tbody>
    </table>
  </div>
</template>
<script setup>
import {  onMounted } from 'vue'
import { usePostsStore } from '@/store/posts'
import PostsItem from '@/components/posts/PostsItem.vue'

const props = defineProps(['userId'])

const store = usePostsStore()

const userId = props.userId

onMounted(async() => {
  await getPosts()
  console.log(store.postsList);
})

const getPosts = async () => {
  try {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    store.setPostsList(await data.json())
  } catch (error) {
    console.log(error);
  }
}
</script>
<style scoped>
tbody tr:nth-child(odd) {
  background-color: #fff;
}
tbody tr {
  background-color: #c7f9cc;
}
</style>
