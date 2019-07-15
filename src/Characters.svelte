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
</style>

<article>
  {#each foundCharacters as { name, image, location, origin }}
    <!--Before you show this, do an each with an if/else, then you can show how else makes this more succinct-->
    <CharacterCard {name} {image} {location} {origin} />
  {:else}
    <div>Character Not Found</div>
  {/each}
</article>
