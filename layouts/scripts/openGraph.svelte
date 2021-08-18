<!-- Ogp: The Open Graph protocol -->
<!-- SEO for social networks -- https://ogp.me/ -->
<script>
  export let url,
    site_name,
    locale,
    isArticle,
    page_title,
    description,
    image_url,
    image_alt,
    author_site,
    dateCreated,
    dateModified;
</script>

<meta property="og:url" content={url} />
<meta property="og:site_name" content={site_name} />
<meta property="og:locale" content={locale} />
<meta property="og:type" content={isArticle ? "article" : "website"} />
<meta property="og:title" content={page_title} />
<meta property="og:description" content={description} />
{#if image_url}
  <meta property="og:image" content={image_url} />
  <meta property="og:image:alt" content={image_alt} />
  <!-- og:image -- Use images with a 1.91:1 ratio and minimum 
         recommended dimensions of 1200x630 for optimal clarity 
         across all devices. -->
  <!-- <meta property="og:image:width" content="1200" />
         <meta property="og:image:height" content="630" /> -->
{/if}
{#if isArticle}
  <meta property="article:publisher" content={site_name} />
  <meta property="article:author" content={author_site} />
  <meta property="article:published_time" content={dateCreated} />
  <meta property="article:modified_time" content={dateModified} />
{/if}
