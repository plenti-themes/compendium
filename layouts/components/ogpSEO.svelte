<!-- The Open Graph protocol -- https://ogp.me/ -->
<script>
  export let site_name, title, body, image, path;
  let desc_len = 200;
</script>

<meta property="og:site_name" content={site_name} />
<meta property="og:title" content={title} />
<meta
  property="og:description"
  content={body.substring(0,
    Math.min(desc_len, body.substring(0, desc_len).lastIndexOf(" "))
  )}
/>
<meta property="og:url" content={path} />
<meta property="og:image" content={image.src} />
<meta property="og:type" content="article" />
<meta property="article:publisher" content={site_name} />
<meta property="article:section" content="Posts" />
<!-- <meta property="article:tag" content="Coding" /> -->

<!-- og:image -- Use images with a 1.91:1 ratio and minimum recommended dimensions of 1200x630 for optimal clarity across all devices. -->
