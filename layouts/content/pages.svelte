<script>
  import About from "../components/about.svelte";
  import Contact from "../components/contact.svelte";
  export let idxContent,
    allPosts,
    menu,
    enabled,
    title,
    image,
    hero,
    splash,
    articleBody;

  let socialLinks = idxContent.socialLinks;
</script>

<div class="w-full py-16">
  {#if (menu == "About" && enabled)}
    <!-- -------------------- -->
    <!-- Custom About page    -->
    <!-- -------------------- -->
    <About {title} {image} {hero} {splash} {articleBody} />
  {:else if (menu = "Contact" && enabled)}
    <!-- -------------------- -->
    <!-- Default page logic   -->
    <!-- -------------------- -->
    <Contact {idxContent} {allPosts} {socialLinks} {title} {articleBody} />
  {:else}
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
</div>
