<script lang="ts">
    export let items: { value: string, title: string }[];
</script>

<ul>
    {#each items as item}
        <li value={item.value}>{item.title}</li>
    {/each}
</ul>
