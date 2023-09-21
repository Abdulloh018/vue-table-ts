import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    postsList: [],
    currentPost: {}
  }),
  actions: {
    setPostsList(value) {
      this.postsList = value
      console.log(value, 'posts');
    },
    getCurrentPost(id) {
      this.currentPost = this.postsList.find(post => post.id === id)
    },
    setEditedPost(data) {
      this.postsList = this.postsList.map(post => post.id === data.id ? post = data : post)
    },
    deletePost(id) {
      this.postsList = this.postsList.filter(post => post.id !== id)
      console.log(this.postsList, 'list');
    },
    setAddedPost(data) {
      this.postsList.push(data)
      console.log(this.postsList, 'added');
    }
  }
})