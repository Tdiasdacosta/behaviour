const app = Vue.createApp({
  data() {
    return {
      index: 0,
      isFlipped: false,
      facts: facts
    };
  },
  methods: {
    move(direction) {
      this.index = (this.index + direction + this.facts.length) % this.facts.length;
      this.isFlipped = false;
    }
  }
});
app.mount('#app');
