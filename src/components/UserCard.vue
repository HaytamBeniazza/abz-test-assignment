<template>
  <article class="user-card">
    <img 
      :src="user.photo" 
      :alt="`${user.name} avatar`" 
      @error="onImageError"
    />
    <h3>{{ user.name }}</h3>
    <p>{{ user.position }}</p>
    <p>{{ user.email }}</p>
    <p>{{ user.phone }}</p>
  </article>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    onImageError(event) {
      // Fallback to default avatar if image fails to load
      event.target.src = 'https://via.placeholder.com/70x70/cccccc/666666?text=User'
    }
  }
}
</script>

<style lang="scss" scoped>
/* User card styles are handled globally in App.vue to match the original design exactly */
</style> 