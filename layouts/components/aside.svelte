<script>
  import Search from "../components/search.svelte";
  import Social from "../components/social.svelte";

  export let allPosts, socialLinks, catgPosts, tagsPosts;
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
          <li class="flex">
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
          <li class="flex">
            <a href="tags/{page}">{name} ({length})</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</aside>
