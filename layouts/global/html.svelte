<script>
  // Import Svelte component classes
  import Head from "./head.svelte";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";

  export let content, layout, allContent, allLayouts, env;
  let title = allContent.filter((content) => content.path == "/")[0].fields.title;
</script>

<html lang="en">
  <Head {title} {env} />
  <body>
    <!-- Setup sticky nav menu at the top -->
    <header class="sticky top-0 z-50 border-bottom border-2 bg-white">
      <!-- reference the Navbar class from import above -->
      <Navbar />
    </header>

    <main class="bg-gray-50">
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

    <footer class="border-top border-2 bg-white">
      <!-- reference the Footer class from import above -->
      <Footer />
    </footer>
  </body>
</html>

<style>
</style>
