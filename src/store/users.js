import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    usersList: [],
    userId: 0
  }),
  actions: {
    setUsersList(value) {
      this.usersList = value
      console.log(value, 'users');
    },
    setUserId(id) {
      this.userId = id
    },
    getUserByID(id) {
      return this.usersList.find(item => item.id === id)
    }
  }
})