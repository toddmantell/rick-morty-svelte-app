<script>
  import { characters } from "./stores";
  import CharacterCard from "./CharacterCard.svelte";
  import Spinner from "./Spinner.svelte";

  let characterName = "",
    characterInfo = [],
    foundCharacters = [],
    promise;

  function getCharacterInfo() {
    promise = fetchCharacters();
  }

  async function fetchCharacters() {
    foundCharacters = [];
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?name=" + characterName
    );

    const httpResult = await response.json();

    foundCharacters = [...foundCharacters, ...httpResult.results];

    await checkForMoreCharacters(httpResult);

    console.log("Character:", foundCharacters);
  }

  async function checkForMoreCharacters(httpResult) {
    if (httpResult.info.next) {
      const response = await fetch(httpResult.info.next);

      const result = await response.json();

      foundCharacters = result.results.length
        ? [...foundCharacters, ...result.results]
        : foundCharacters;

      checkForMoreCharacters(result);
    }
  }
</script>

<style>
  article {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<form>
  <input type="text" bind:value={characterName} />

  <p>{characterName || ''}</p>

  <button on:click|preventDefault={getCharacterInfo}>Find Character</button>
</form>

<!--Added await block so that the UI is smoother when the images load-->
{#await promise}
  <Spinner />
{:then value}
  <article>
    {#each foundCharacters as { name, image, location, origin }}
      <CharacterCard {name} {image} {location} {origin} />
    {:else}
      <div>Character Not Found</div>
    {/each}
  </article>
{:catch error}
  <!-- promise was rejected -->
  <p>There was an error: {error}</p>
{/await}
