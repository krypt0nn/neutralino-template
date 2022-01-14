<script lang="ts">
    import { Windows } from '@empathize/framework';

    import { onMount } from 'svelte';

    import logo from './assets/svelte.png';

    import Counter from './components/Counter.svelte';

    // Show the window when all the content will be loaded
    onMount(() => {
        Windows.current.show();
    });
</script>

<main>
    <img src={logo} alt="Svelte Logo" />

    <h1>Hello Typescript!</h1>

    <Counter />

    <button on:click={() => Windows.open('about', { hidden: true })}>Show me the about window!</button>

    <p>
        Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.
    </p>

    <p>
        Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
        the officially supported framework, also powered by Vite!
    </p>
</main>
