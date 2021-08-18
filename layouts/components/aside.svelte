<script>
  import { onMount } from "svelte";
  import Search from "../components/search.svelte";
  import Social from "../components/social.svelte";

  export let allPosts, socialLinks, tagsList, catgList;
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
        {#each catgList as catg, i}
          <li class="flex">
            <a href="catgs/{i + 1}">{catg}</a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- tags -->
    <div class="row">
      <h4 class="header mb-1 w-full flex">Tags</h4>
      <ul class="text-aside mb-4">
        {#each tagsList as tag, i}
          <li class="flex">
            <a href="tags/{i + 1}">{tag}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</aside>
