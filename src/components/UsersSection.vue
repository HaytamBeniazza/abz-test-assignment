<template>
  <section id="users-section">
    <div class="container">
      <h2>Working with GET request</h2>
      
      <div v-if="loading" class="loading">
        Loading users...
      </div>
      
      <div v-else>
        <div class="user-grid">
          <UserCard 
            v-for="user in users" 
            :key="user.id" 
            :user="user" 
          />
        </div>
        
        <div v-if="hasMoreUsers" class="show-more">
          <button 
            class="btn btn--primary" 
            @click="loadMoreUsers"
            :disabled="loadingMore"
          >
            {{ loadingMore ? 'Loading...' : 'Show more' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserCard from './UserCard.vue'
import { apiService } from '../services/api'

export default {
  name: 'UsersSection',
  components: {
    UserCard
  },
  data() {
    return {
      users: [],
      currentPage: 1,
      totalPages: 1,
      loading: true,
      loadingMore: false,
      usersPerPage: 6
    }
  },
  computed: {
    hasMoreUsers() {
      return this.currentPage < this.totalPages
    }
  },
  async mounted() {
    await this.loadUsers()
  },
  methods: {
    async loadUsers(reset = false) {
      try {
        this.loading = reset ? true : this.loading
        const page = reset ? 1 : this.currentPage
        
        const response = await apiService.getUsers(page, this.usersPerPage)
        
        if (reset) {
          this.users = response.users
          this.currentPage = 1
        } else {
          this.users = response.users
        }
        
        this.totalPages = response.total_pages
        this.loading = false
      } catch (error) {
        console.error('Error loading users:', error)
        this.loading = false
      }
    },
    
    async loadMoreUsers() {
      try {
        this.loadingMore = true
        this.currentPage++
        
        const response = await apiService.getUsers(this.currentPage, this.usersPerPage)
        this.users.push(...response.users)
        this.totalPages = response.total_pages
        
        this.loadingMore = false
      } catch (error) {
        console.error('Error loading more users:', error)
        this.loadingMore = false
        this.currentPage-- // Revert page increment on error
      }
    },
    
    async refreshUsers() {
      await this.loadUsers(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  text-align: center;
  padding: 2rem;
  color: var(--text-light);
}
</style> 