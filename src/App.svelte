<script>
  import { onMount } from "svelte";
  import { characters } from "./stores";
  import Chooser from "./Chooser.svelte";
  export let name;
</script>

<style>
  h1 {
    color: #000;
  }
</style>

<h1>The Rick and Morty Tracker</h1>

<Chooser />
