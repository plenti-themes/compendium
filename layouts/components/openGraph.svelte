<!-- The Open Graph protocol -- https://ogp.me/ -->
<script>
  export let site_name, title, desc, image, path;
</script>

<meta property="og:site_name" content={site_name} />
<meta property="og:title" content={title} />
<meta property="og:description" content={desc} />
<meta property="og:url" content={path} />
<meta property="og:image" content={image.src} />
<meta property="og:type" content="article" />
<meta property="article:publisher" content={site_name} />
<meta property="article:section" content="Posts" />
<!-- <meta property="article:tag" content="Coding" /> -->

<!-- og:image -- Use images with a 1.91:1 ratio and minimum recommended dimensions of 1200x630 for optimal clarity across all devices. -->
