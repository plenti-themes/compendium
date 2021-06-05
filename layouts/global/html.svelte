<script>
  // Import Svelte component classes
  import Head from "./head.svelte";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";

  export let content, layout;
</script>

<html lang="en">
  <Head title="SvelteBook | Personal Blog Template" />
  <body>
    <header class="sticky-top border-bottom border-2 bg-white">
      <!-- reference the Navbar class from import above -->
      <Navbar />
    </header>

    <main class="bg-gray-50">
      <!-- loop through the layout components specified by the field items
		   in the index.json (content folder).  Svelte components with 
		   corresponding names must be in the layouts/components folder.  -->
      <svelte:component this={layout} {...content.fields} />
    </main>

    <footer class="footer section-sm pb-4 pt-2 border-top border-2 bg-white">
      <!-- reference the Footer class from import above -->
      <Footer />
    </footer>
  </body>
</html>

<style>
</style>
