import App from '../about.svelte';

declare const Neutralino;

Neutralino.init();

const app = new App({
    target: document.getElementById('app')!
});

export default app;
