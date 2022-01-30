<script context="module">
  export function geo() {
    // Use fetch method to GET ip data for request options
    const address = fetch("https://jsonip.com", { mode: "cors" })
      .then((resp) => resp.json())
      .then((data) => {
        return data.ip;
      });

    return address;
  }
</script>
