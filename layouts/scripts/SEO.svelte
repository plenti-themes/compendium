<script>
  import Ogp from "./openGraph.svelte";
  import Twitter from "./twitter.svelte";

  // Values passed in from post.svelte or index.svelte via "html.svelte"
  export let idxContent, description, env, isArticle;
  // Values passed in from head.svelte via html.svelte
  export let page_title, image, path, dateCreated, dateModified;
  // Defined here for use in the HTML below
  export let url, image_url, image_alt;

  let site_name = idxContent.name;
  let locale = idxContent.SEO.locale;
  let author = idxContent.SEO.author;
  let author_site = idxContent.SEO.author_site;
  let twitterUsername = idxContent.SEO.twitterUsername;
  let site_url = env.local ? "" : idxContent.site;

  url = site_url + env.baseurl + path;
  if (image) {
    image_url = site_url + env.baseurl + image.src;
    image_alt = image.alt;
  }
</script>

<!-- Page title and description -->
<title>{page_title}</title>
<meta name="description" content={description} />
<!-- OpenGraph Protocal -->
<Ogp
  {url}
  {site_name}
  {locale}
  {isArticle}
  {page_title}
  {description}
  {image_url}
  {image_alt}
  {author_site}
  {dateCreated}
  {dateModified}
/>
<!-- Twitter SEO tags -->
<Twitter {author} {image_url} {twitterUsername} />
