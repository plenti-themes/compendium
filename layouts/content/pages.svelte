<script>
  import About from "../components/about.svelte";
  export let page, title, image, hero, splash, articleBody;
</script>

<section class="w-full flex flex-wrap items-center justify-between py-16">
  {#if page == "about"}
    <!-- -------------------- -->
    <!-- Custom About page    -->
    <!-- -------------------- -->
    <About {title} {image} {hero} {splash} {articleBody} />
  {:else}
    <!-- -------------------- -->
    <!-- Default page logic   -->
    <!-- -------------------- -->
    <div class="w-0 md:w-1/12 xl:w-2/12" />
    <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
      <div class="relative rounded-lg overflow-hidden">
        <div class="mb-2">
          <h2 class="header">{title} Page</h2>
        </div>
      </div>
    </div>
    <div class="w-0 md:w-1/12 xl:w-2/12" />
  {/if}
</section>
