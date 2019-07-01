<script>
  import { onMount } from "svelte";
  import { characters } from "./stores";
  import Chooser from "./Chooser.svelte";
  export let name;

  // onMount(async () => {
  //   const result = await fetch("https://rickandmortyapi.com/api/character");

  //   const fetchedCharacters = await result.json();
  //   console.log(fetchedCharacters);

  //   fetchedCharacters.results.length &&
  //     characters.update(() => [...fetchedCharacters.results]);
  // });
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>The Rick and Morty Tracker</h1>

<Chooser />
