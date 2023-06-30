const { createApp } = Vue;

const app = createApp({
    data() {
        return {
        hello : 'Hello Vue!'
        }
    }
}).mount('#app');