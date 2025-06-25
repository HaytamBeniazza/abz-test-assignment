<template>
  <nav class="navbar">
    <div class="container navbar__inner">
      <a href="#" class="brand">
        <img src="https://img.icons8.com/fluency-systems-regular/48/000000/sparkling.png" alt="logo" />
        TestTask
      </a>
      <div class="nav-actions">
        <button class="btn btn--ghost" @click="scrollToUsers">Users</button>
        <button class="btn btn--primary" @click="scrollToSignup">Sign up</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    scrollToUsers() {
      const element = document.querySelector('#users-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToSignup() {
      const element = document.querySelector('#registration-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background: #ffffff;
  border-bottom: 2px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.75rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--yellow);
}

.brand img {
  width: 24px;
  height: 24px;
}

.nav-actions {
  display: flex;
  gap: 0.75rem;
}
</style> 