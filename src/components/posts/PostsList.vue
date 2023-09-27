<template>
  <div>
    <table class="w-full border border-[#B8B8B8]">
      <thead class="border-b border-[#B8B8B8]">
        <tr class="bg-[#80ed99] [&>*]:text-xl [&>*]:text-start [&>*]:font-semibold [&>*]:px-2">
          <th class="py-2">Post&nbsp;id</th>
          <th>Title</th>
          <th>Body</th>
          <th>Edit</th>
          <th>Delete</th>
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
