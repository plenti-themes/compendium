<script>
  import Ogp from "./openGraph.svelte";
  import Twitter from "./twitter.svelte";
  import { get_description } from "../scripts/get_description.svelte";

  // Values passed in from post.svelte or index.svelte via "html.svelte"
  export let idxContent, content, env;

  // Defined here for use in the HTML below
  export let url,
    image_url,
    image_alt,
    page_title,
    isArticle,
    description,
    dateCreated,
    dateModified;

  // Define site-level attributes
  let site_name = idxContent.name;
  let site_url = idxContent.site + env.baseurl;
  let locale = idxContent.SEO.locale;
  let author = idxContent.SEO.author;
  let author_site = idxContent.SEO.author_site;
  let twitterUsername = idxContent.SEO.twitterUsername;

  // Generate SEO card based on post attributes
  if (content.type === "posts") {
    isArticle = true;
    page_title = content.fields.title;
    description = get_description(content.fields.articleBody, 160);
    url = site_url + content.path + "/";
    image_url = site_url + "assets/posts/" + content.fields.image.src;
    image_alt = content.fields.image.alt;
    dateCreated = content.fields.dateCreated;
    dateModified = content.fields.dateModified;
  // Generate SEO card based on About me page attributes
  } else if (content.path === "pages/about") {
    isArticle = true;
    page_title = idxContent.name + " | " + content.fields.title;
    description = content.fields.hero.tagline;
    url = site_url + content.path + "/";
    image_url = site_url + "assets/pages/" + content.fields.image.src;
    image_alt = content.fields.image.alt;
  // Default SEO card to site attributes
  } else {
    isArticle = false;
    page_title = idxContent.title;
    description = idxContent.description;
    url = site_url;
    image_url = site_url + "assets/" + idxContent.SEO.image;
    image_alt = page_title;
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
