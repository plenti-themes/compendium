<script>
  export let author, image_url, twitterUsername;

  // let cardType = "summary_large_image";
  let cardType = "summary";
</script>

<meta name="twitter:card" content={cardType} />
{#if image_url}
  <meta name="twitter:image" content={image_url} />
{/if}
{#if twitterUsername}
  <meta name="twitter:creator" content={twitterUsername} />
  <meta name="twitter:site" content={twitterUsername} />
{/if}
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content={author} />
