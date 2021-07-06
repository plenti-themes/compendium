<!-- The Open Graph protocol -- https://ogp.me/ -->
<script>
  export let site_name, title, desc, image, env, path;

  export let post_url, image_url;
  if (env.local) {
	  post_url = path;
	  image_url = "assets/" + image.src;
  } else {
	  post_url = env.baseurl + path;
	  image_url = env.baseurl + "assets/" + image.src;
  }
</script>

<meta property="og:site_name" content={site_name} />
<meta property="og:title" content={title} />
<meta property="og:description" content={desc} />
<meta property="og:url" content={post_url} />
<meta property="og:image" content={image_url} />
<meta property="og:type" content="article" />
<meta property="article:publisher" content={site_name} />
<meta property="article:section" content="Posts" />
<!-- <meta property="article:tag" content="Coding" /> -->

<!-- og:image -- Use images with a 1.91:1 ratio and minimum recommended dimensions of 1200x630 for optimal clarity across all devices. -->
