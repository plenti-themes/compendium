<script>
  // Import Svelte component classes
  import Head from "./head.svelte";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";

  export let isDark = false;
  export let content, layout, allContent, allLayouts, env;
  let title = allContent.filter((content) => content.path == "/")[0].fields
    .title;
</script>

<html lang="en">
  <Head {title} {env} />
  <body>
    <!-- Setup sticky nav menu at the top -->
    <header
      class="{isDark
        ? 'dk-content'
        : 'lt-content border-b-2'} bg-primary sticky top-0 z-50"
    >
      <!-- reference the Navbar class from import above -->
      <Navbar bind:isDark />
    </header>

    <main class="{isDark ? 'dk-content' : 'lt-content'} bg-background">
      <!-- loop through the layout components specified by the field items
		   in the index.json (content folder).  Svelte components with 
		   corresponding names must be in the layouts/components folder.  -->
      <svelte:component
        this={layout}
        {...content.fields}
        {allContent}
        {allLayouts}
        {content}
      />
    </main>

    <footer
      class="{isDark
        ? 'dk-content'
        : 'lt-content border-t-2'} bg-primary"
    >
      <!-- reference the Footer class from import above -->
      <Footer />
    </footer>
  </body>
</html>

<style>
</style>
