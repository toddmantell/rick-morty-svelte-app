<script>
  export let name, origin, location, image;
</script>

<style>
  /* @media () */
  figure {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: auto;
    width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 10px;
    overflow: hidden; /*needed, otherwise the image doesn't get cropped by the border radius*/
  }

  figure:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .container {
    padding: 2px 16px;
  }

  .attribute {
    font-weight: bold;
  }

  .attribute-value {
    color: orange;
  }
</style>

<figure>
  <img src={image} alt={`${name}-image`} />
  <div class="container">
    <h3>{name}</h3>
    <div>
      <p class="attribute">Original Dimension:</p>
      <p class="attribute-value">{origin.name}</p>

    </div>
    <div>
      <p class="attribute">Current Location:</p>
      <p class="attribute-value">{location.name}</p>
    </div>
    <div />
  </div>
</figure>
