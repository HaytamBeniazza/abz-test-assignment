<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import UsersSection from './components/UsersSection.vue'
import RegistrationSection from './components/RegistrationSection.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    UsersSection,
    RegistrationSection
  },
  methods: {
    handleUserRegistered() {
      // Refresh users list when a new user is registered
      if (this.$refs.usersSection) {
        this.$refs.usersSection.refreshUsers()
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <Navbar />
    <Hero />
    <UsersSection ref="usersSection" />
    <RegistrationSection @user-registered="handleUserRegistered" />
  </div>
</template>

<style lang="scss">
/* Nunito font import */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');

/* =====================
   DESIGN TOKENS
   ===================== */
:root {
  /* Layout */
  --page-max-width: 1200px;

  /* Brand colours */
  --yellow: #f4e041;
  --yellow-hover: #ffe302;
  --grey: #b4b4b4; /* also used as disabled + form border */
  --cyan: #00bdd3; /* radio */
  --text-main: #333;
  --text-light: #666;
}

/* =====================
   GLOBAL RESET
   ===================== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

body {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 26px;
  color: var(--text-main);
  background: #fafafa;
}

/* =====================
   GENERIC LAYOUT WRAPPER
   ===================== */
.container {
  width: 100%;
  max-width: var(--page-max-width);
  padding-inline: 1rem;
  margin-inline: auto;
}

/* =====================
   BUTTONS
   ===================== */
.btn {
  display: inline-block;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1.75rem;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background 0.2s ease, opacity 0.2s ease;
}

.btn--primary {
  background: var(--yellow);
  color: #000;
}

.btn--primary:hover {
  background: var(--yellow-hover);
}

.btn--primary:disabled {
  background: var(--grey);
  cursor: not-allowed;
  opacity: 0.8;
}

.btn--ghost {
  background: transparent;
  border: 2px solid var(--yellow);
  color: var(--yellow);
}

.btn--ghost:hover {
  background: #fff6c2;
}

/* =====================
   SECTION SPACING
   ===================== */
section {
  padding-block: 3.5rem;
}

section h2 {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 2rem;
}
</style>
