<template>
  <header class="hero">
    <div class="hero__content container">
      <h1>Test assignment for front-end developer</h1>
      <p>
        A good front-end developer has skilled knowledge of HTML, CSS and JS with a vast understanding of user
        experience design. They are also curious, enjoy learning new technologies and like to deliver solutions quickly.
      </p>
      <button class="btn btn--primary" @click="scrollToSignup">Sign up</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
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
.hero {
  position: relative;
  min-height: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
}

.hero::before,
.hero::after {
  content: "";
  position: absolute;
  left: 50%;
  translate: -50%;
  width: var(--page-max-width);
  height: 100%;
}

.hero::before {
  background: url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2560&q=80") center / cover no-repeat;
  z-index: -2;
}

.hero::after {
  background: rgba(0, 0, 0, 0.35);
  z-index: -1;
}

.hero__content {
  max-width: 640px;
  padding-inline: 1rem;
}

.hero h1 {
  font-weight: 400;
  font-size: clamp(2rem, 4vw, 40px);
  line-height: 40px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 40px;
}
</style> 