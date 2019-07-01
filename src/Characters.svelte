<script>
  import CharacterCard from "./CharacterCard.svelte";
  export let foundCharacters;
</script>

<style>
  article {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<article>
  {#each foundCharacters as { name, image, location, origin }}
    <CharacterCard {name} {image} {location} {origin} />
  {:else}
    <div>Character Not Found</div>
  {/each}
</article>
