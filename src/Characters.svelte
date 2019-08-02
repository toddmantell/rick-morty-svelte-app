<script>
  import CharacterCard from "./CharacterCard.svelte";
  export let foundCharacters;
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
  {#each foundCharacters as { name, image, location, origin }}
    <!--Before you show this, do an each with an if/else, then you can show how else makes this more succinct-->
    <CharacterCard {name} {image} {location} {origin} />
  {:else}
    <!-- This shouldn't show before you search -->
    <h3>Character Not Found</h3>
  {/each}
</article>
