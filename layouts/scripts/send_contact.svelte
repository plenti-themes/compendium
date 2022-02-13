<script context="module">
  export async function send_contact(reqUrl, details) {
    if (!details.message) {
      // handle errors here
      return new Response("Form Error", {
        status: 400,
        statusText: "form incomplete",
      });
    }

    // Encode the form details
    const detailsEncoded = Object.entries(details)
      .map(
        ([key, value]) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(value)
      )
      .join("&");

    // Set the fetch options
    const reqOptions = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: detailsEncoded,
    };

    // Post the encoded form details to our API endpoint
    const email = await fetch(reqUrl, reqOptions);
    return email;
  }
</script>
