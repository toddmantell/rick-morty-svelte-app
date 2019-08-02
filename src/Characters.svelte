<script>
  import CharacterCard from "./CharacterCard.svelte";
  export let foundCharacters = [];
</script>

<style>
  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  h3 {
    text-align: center;
  }
</style>

<article>
  {#if foundCharacters.length > 0}
    {#each foundCharacters as { name, image, location, origin }}
      <CharacterCard {name} {image} {location} {origin} />
    {/each}
  {:else}
    <h3>Character Not Found</h3>
  {/if}

</article>
