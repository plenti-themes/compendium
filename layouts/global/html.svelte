<script>
  // Import Svelte component classes for all content
  import Head from "./head.svelte";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";
  import { catgs_tags } from "../scripts/catgs_tags.svelte";

  // Set the bind variable for capturing light/dark theme state
  export let isDark;

  // Plenti system variables
  // * allContent: consolidated content data (public/spa/ejected/content.js)
  // * allLayouts: list of layout files
  // * content: properties from the specific content file
  // * layout: layout for the specific content file
  // * env: state values from "plenti.json"
  export let allContent, allLayouts, content, layout, env;

  // Capture key values from "index.json" for links, theming and SEO content.
  export let idxContent = allContent.filter((key) => key.path == "/")[0].fields;

  // Capture key content for all posts.
  export let allPages = allContent.filter((key) => key.type == "pages");
  export let allPosts = allContent.filter((key) => key.type == "posts");

  // Create the list of posts by tags and categories
  let ctObj = catgs_tags(allPosts);
  export let catgPosts = Object(ctObj["catgs"]);
  export let tagsPosts = Object(ctObj["tags"]);
  export let baseurl = env.local ? "/" : env.baseurl;
</script>

<html lang="en" class="bg-primary {isDark ? 'dk-theme' : 'lt-theme'}">
  <!-- Setup the template meta, styles, scripts, and SEO -->
  <Head {idxContent} {allPages} {content} {baseurl} />

  <!-- Setup the template content -->
  <body>
    <!-- Setup sticky nav menu at the top -->
    <header
      class="bg-primary sticky top-0 z-50"
      style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10), 0 2px 4px 0 rgba(0, 0, 0, 0.20);"
    >
      <!-- reference the Navbar class from import above -->
      <Navbar bind:isDark {allPages} {idxContent} {content} />
    </header>

    <!-- Setup the template main content -->
    <main class="bg-main">
      <svelte:component
        this={layout}
        {...content.fields}
        {idxContent}
        {allLayouts}
        {allPosts}
        {catgPosts}
        {tagsPosts}
        {content}
        {isDark}
        {baseurl}
      />
    </main>

    <!-- Setup the template footer content -->
    <footer class="bg-primary{isDark ? '' : ' border-t-2'}">
      <!-- reference the Footer class from import above -->
      <Footer />
    </footer>
  </body>
</html>
