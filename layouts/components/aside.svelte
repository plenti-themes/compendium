<script>
  import Search from "../components/search.svelte";
  import Social from "../components/social.svelte";

  export let catg, tag, allPosts, socialLinks, catgPosts, tagsPosts;
</script>

<aside class="w-full">
  <div class="pl-0 pl-lg-4">
    <!-- Search -->
    <Search {allPosts} />

    <!-- Social -->
    <Social {socialLinks} />

    <!-- categories -->
    <div class="row">
      <h4 class="header mb-1"><span>Categories</span></h4>
      <ul class="text-aside mb-4">
        {#each Object(catgPosts) as {page, name, length}}
          <li class="flex{catg == name ? ' active' : ''}">
            <a href="catgs/{page}">{name} ({length})</a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- tags -->
    <div class="row">
      <h4 class="header mb-1 w-full flex">Tags</h4>
      <ul class="text-aside mb-4">
        {#each Object(tagsPosts) as {page, name, length}}
          <li class="flex{tag == name ? ' active' : ''}">
            <a href="tags/{page}">{name} ({length})</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</aside>

<style>
  .active {
    color: var(--accent);
  }
</style>