<script>
  // Import Svelte component classes for all content
  import Head from "./head.svelte";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";
  import { catgs_tags } from "../scripts/catgs_tags.svelte";
  import { get_description } from "../scripts/get_description.svelte";

  // Set the bind variable for capturing light/dark theme state
  export let isDark, isArticle, page_title, description, path;

  // Plenti system variables
  // * allContent: consolidated content data (public/spa/ejected/content.js)
  // * allLayouts: list of layout files
  // * content: key values from specific content file
  // * layout: layout for the specific content file
  // * env: state values from "plenti.json"
  export let allContent, allLayouts, content, layout, env;

  // Capture key values from "index.json" for theming and ogp content.
  export let idxContent = allContent.filter((key) => key.path == "/")[0].fields;
  // Capture key content for all posts.
  export let allPages = allContent.filter((key) => key.type == "pages");
  export let allPosts = allContent.filter((key) => key.type == "posts");
  export let image, dateCreated, dateModified;

  // Define SEO metadata depending whether post or not
  if (content.type === "posts") {
    isArticle = true;
    page_title = content.fields.title;
    description = get_description(content.fields.articleBody, 160);
    path = content.path + "/";
    image = {
      src: "assets/posts/" + content.fields.image.src,
      alt: content.fields.image.alt,
    };
    dateCreated = content.fields.dateCreated;
    dateModified = content.fields.dateModified;
  } else {
    isArticle = false;
    page_title = idxContent.title;
    description = idxContent.description;
    path = "";
    image = {
      src: "assets/" + idxContent.SEO.image,
      alt: page_title,
    };
  }

  // Assign the two maps
  let metaVals = catgs_tags(allPosts);
  export let tagsMap = new Map(Object.entries(metaVals.tagsObj));
  export let catgsMap = new Map(Object.entries(metaVals.catgObj));

  // Create the sort arrays for the Aside links
  export let tagsList = Array.from(tagsMap.keys()).sort();
  export let catgList = Array.from(catgsMap.keys()).sort();
</script>

<html lang="en">
  <!-- Setup meta, styles, scripts, and SEO -->
  <Head
    {idxContent}
    {allPages}
    {content}
    {path}
    {env}
    {page_title}
    {isArticle}
    {description}
    {image}
    {dateCreated}
    {dateModified}
  />

  <!-- Setup sticky nav menu at the top -->
  <header
    class="{isDark ? 'dk-theme' : 'lt-theme'} bg-primary sticky top-0 z-50"
    style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10), 0 2px 4px 0 rgba(0, 0, 0, 0.20);"
  >
    <!-- reference the Navbar class from import above -->
    <Navbar bind:isDark {allPages} {idxContent} />
  </header>

  <body class="{isDark ? 'dk-theme' : 'lt-theme'} bg-main">
    <main>
      <svelte:component
        this={layout}
        {...content.fields}
        {idxContent}
        {description}
        {allLayouts}
        {allPosts}
        {content}
        {isDark}
        {env}
        {tagsMap}
        {catgsMap}
        {tagsList}
        {catgList}
      />
    </main>
  </body>

  <footer class="{isDark ? 'dk-theme' : 'lt-theme border-t-2'} bg-primary">
    <!-- reference the Footer class from import above -->
    <Footer />
  </footer>
</html>
