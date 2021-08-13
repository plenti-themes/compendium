<!-- The Open Graph protocol -- https://ogp.me/ -->
<script>
  // Values passed in from "html.svelte" via post.svelte
  export let idxContent, env;
  // Content field Values passed in via layout content {...content.fields}
  export let title, desc, image, path;
  // Defined here for use in teh HTML below
  export let post_url, image_url;

  let site_name = idxContent.title;
  let site_url = env.local ? "" : idxContent.site;

  post_url = site_url + env.baseurl + path;
  image_url = site_url + env.baseurl + "assets/posts/" + image.src;
</script>

<meta property="og:site_name" content={site_name} />
<meta property="og:title" content={title} />
<meta property="og:description" content={desc} />
<meta property="og:url" content={path} />
<meta property="og:image" content={image_url} />
<meta property="og:type" content="article" />
<meta property="article:publisher" content={site_name} />
<meta property="article:section" content="Posts" />
<!-- <meta property="article:tag" content="Coding" /> -->

<!-- og:image -- Use images with a 1.91:1 ratio and minimum recommended dimensions of 1200x630 for optimal clarity across all devices. -->
