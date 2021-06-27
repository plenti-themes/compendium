<script>
  // Import Svelte component classes
  import Head from "./head.svelte";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";

  export let isDark = false;
  export let content, layout, allContent, allLayouts, env;
  let indexContent = allContent.filter((content) => content.path == "/")[0].fields;
</script>

<html lang="en">
  <Head {indexContent} {env} />
  <body>
    <!-- Setup sticky nav menu at the top -->
    <header
      class="{isDark ? 'dk-theme' : 'lt-theme'} bg-primary sticky top-0 z-50"
      style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10), 0 2px 4px 0 rgba(0, 0, 0, 0.20);"
    >
      <!-- reference the Navbar class from import above -->
      <Navbar bind:isDark />
    </header>

    <main class="{isDark ? 'dk-theme' : 'lt-theme'} bg-background">
      <!-- loop through the layout components specified by the field items
		   in the index.json (content folder).  Svelte components with 
		   corresponding names must be in the layouts/components folder.  -->
      <svelte:component
        this={layout}
        {...content.fields}
        {allContent}
        {allLayouts}
        {content}
        {isDark}
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
