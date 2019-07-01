<style>
  article {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
  }
  img {
    margin: -75px 0 0 -75px;
    width: 200px;
    height: 200px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<article>
  <img src="Pickle_rick_transparent.png" alt="spinner" />
</article>
