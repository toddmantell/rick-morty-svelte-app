export default character => `
query charactersQuery {
  characters(filter: {name: "${character}"}) {
    results {
      id
      name
      status
      species
      image
      type
			gender
			episode {
        id
        name
      }
    }
  }
}`;
