<template>
  <article class="user-card">
    <img 
      :src="user.photo" 
      :alt="`${user.name} avatar`" 
      @error="onImageError"
    />
    <h3 :title="user.name" class="user-name">{{ truncatedName }}</h3>
    <p :title="user.position" class="user-position">{{ truncatedPosition }}</p>
    <p :title="user.email" class="user-email">{{ truncatedEmail }}</p>
    <p :title="user.phone" class="user-phone">{{ user.phone }}</p>
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
  computed: {
    truncatedName() {
      return this.truncateText(this.user.name, 30)
    },
    truncatedPosition() {
      return this.truncateText(this.user.position, 35)
    },
    truncatedEmail() {
      return this.truncateText(this.user.email, 30)
    }
  },
  methods: {
    truncateText(text, maxLength) {
      if (!text) return ''
      if (text.length <= maxLength) return text
      return text.slice(0, maxLength - 3) + '...'
    },
    onImageError(event) {
      // Fallback to default avatar if image fails to load
      event.target.src = 'https://via.placeholder.com/70x70/cccccc/666666?text=User'
    }
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  text-align: center;
  padding: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.user-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.user-card img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto 20px;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
}

.user-name {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-card p {
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 5px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-card p:last-child {
  margin-bottom: 0;
}

.user-position {
  font-weight: 500;
}

.user-email {
  color: var(--text-main);
}
</style> 