<script>
  import { characters } from "./stores";
  import Characters from "./Characters.svelte";
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
    flex-direction: column;
  }

  h2 {
    text-align: center;
  }

  form {
    display: inline-block;
  }

  div {
    display: block;
    text-align: center;
  }

  input {
    margin-top: 5px;
    border-radius: 6px;
  }

  button {
    display: block;
    margin-left: 50px;
    background-color: #000;
    color: green;
    font-weight: bold;
    border-radius: 6px;
  }

  button:hover {
    box-shadow: 0 4px 8px 0 grey;
  }
</style>

<article>
  <div>
    <form>
      <h2>Wubbalubbadubdub!</h2>
      <label for="character-name">Character Name:</label>
      <input
        id="character-name"
        type="text"
        placeholder="Enter Character Name"
        bind:value={characterName} />
      <button on:click|preventDefault={getCharacterInfo}>Find Character</button>
    </form>
  </div>
  <!--Added await block so that the UI is smoother when the images load-->
  {#await promise}
    <Spinner />
  {:then value}
    <Characters {foundCharacters} />
  {:catch error}
    <!-- promise was rejected -->
    <p>There was an error: {error}</p>
  {/await}

</article>
