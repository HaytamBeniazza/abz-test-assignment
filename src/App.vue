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

#app {
  width: 100%;
  margin: 0;
  padding: 0;
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

/* =====================
   USER CARDS
   ===================== */
.user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

@media (min-width: 992px) {
  .user-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.user-card {
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  text-align: center;
  padding: 20px;
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

.user-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.user-card p {
  font-size: 14px;
  color: var(--text-light);
  margin-bottom: 5px;
  line-height: 22px;
}

.show-more {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

/* =====================
   FORM STYLES
   ===================== */
form {
  max-width: 400px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field input[type="text"],
.field input[type="email"],
.field input[type="tel"],
.field input[type="file"],
.field select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--grey);
  border-radius: 4px;
  font-size: 0.95rem;
}

/* Radio accent */
input[type="radio"] {
  accent-color: var(--cyan);
}

.position-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.position-list label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.agree {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}
</style>
