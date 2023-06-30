const { createApp } = Vue;

const app = createApp({
    data() {
        return {
        hello : 'Hello Vue!',
        name : 'Utente'
        }
    }
}).mount('#app');