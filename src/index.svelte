<script lang="ts">
    import { onMount } from 'svelte';

    import Window from './ts/neutralino/Window';

    import logo from './assets/svelte.png';

    import Counter from './components/Counter.svelte';
    import List from './components/List.svelte';

    const items = [
        { value: '1', title: 'test 1' },
        { value: '2', title: 'test 2' },
        { value: '3', title: 'test 3' }
    ];

    function about()
    {
        Window.open('about');
    }

    // Show the window when all the content will be loaded
    onMount(() => {
        Window.current.show();
    });
</script>

<main>
    <img src={logo} alt="Svelte Logo" />

    <h1>Hello Typescript!</h1>

    <Counter />

    <List items={items} />

    <button on:click={about}>Show me the about window!</button>

    <p>
        Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.
    </p>

    <p>
        Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
        the officially supported framework, also powered by Vite!
    </p>
</main>
