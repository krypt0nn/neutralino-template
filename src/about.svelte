<script lang="ts">
    import { Windows } from '@empathize/framework';
    import { onMount } from 'svelte';

    import { listFiles } from './ts/example';

    let files: string[] = [];

    listFiles().then((list) => files = list);

    // Show the window when all the content will be loaded
    onMount(() => {
        Windows.current.show();
    });
</script>

<main>
    <h1>This is an about window!</h1>

    {#each files as file}
        <p style="text-align: center">{file}</p>
    {/each}
</main>
