<script>
  // Import Svelte component classes for all content
  import Head from "./head.svelte";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";

  // Bind variable for capturing light/dark theme state
  export let isDark = false;

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
  export let allPosts = allContent.filter((key) => key.type == "posts");
</script>

<html lang="en">
  <Head {idxContent} {env} />
  <body>
    <!-- Setup sticky nav menu at the top -->
    <header
      class="{isDark ? 'dk-theme' : 'lt-theme'} bg-primary sticky top-0 z-50"
      style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10), 0 2px 4px 0 rgba(0, 0, 0, 0.20);"
    >
      <!-- reference the Navbar class from import above -->
      <Navbar bind:isDark />
    </header>

    <main class="{isDark ? 'dk-theme' : 'lt-theme'} bg-main">
      <svelte:component
        this={layout}
        {...content.fields}
		{idxContent}
		{allPosts}
        {allLayouts}
        {content}
        {isDark}
		{env}
      />
    </main>

    <footer class="{isDark ? 'dk-theme' : 'lt-theme border-t-2'} bg-primary">
      <!-- reference the Footer class from import above -->
      <Footer />
    </footer>
  </body>
</html>

<style>
</style>
