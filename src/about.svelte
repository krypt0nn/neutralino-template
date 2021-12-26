<script lang="ts">
    import { onMount } from 'svelte';

    import Window from './ts/neutralino/Window';

    import Counter from './components/Counter.svelte';

    // Show the window when all the content will be loaded
    onMount(() => {
        Window.current.show();
    });
</script>

<main>
    <h1>This is an about window!</h1>

    <Counter />
</main>
