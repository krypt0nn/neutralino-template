<script lang="ts">
    let count: number = 0;
</script>

<button on:click={() => count++}>
    Clicks: {count}
</button>

<style src="../sass/components/counter.sass" lang="sass"></style>
