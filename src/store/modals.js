import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isEditModal: false,
    isAddModal: false
  }),
  actions: {
    openEditModal() {
      this.isEditModal = true
    },
    closeEditModal() {
      this.isEditModal = false
    },
    openAddModal() {
      this.isAddModal = true
    },
    closeAddModal() {
      this.isAddModal = false
    }
  }
})