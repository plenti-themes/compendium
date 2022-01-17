<script>
  // Variables passed in from "html.svelte"
  export let allPosts, content, tagsList, catgList;
  // Variables passed in from "index.svelte"
  export let postRangeHigh, postRangeLow, currentPage, totalPages;

  // Aside component for search, categories, and tags
  import Aside from "./aside.svelte";
  // Cards component for all posts.
  import Cards from "./cards_posts.svelte";
  import Pagination from "./paginate.svelte";

  let socialLinks = content.fields.socialLinks;
</script>

<section class="mt-6 sm:mt-16">
  <div class="row md:flex md:flex-wrap">
    <div class="w-full md:w-9/12 mb-lg-0 px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:pr-10">
        <!-- ------------------------------------------------------- -->
        <!-- Setup a Card for each post as necessary                 -->
        <!-- ------------------------------------------------------- -->
        <Cards
          {allPosts}
          {postRangeHigh}
          {postRangeLow}
          {tagsList}
          {catgList}
        />
      </div>

      <!-- ------------------------------------------------------- -->
      <!-- Paginate each page as necessary                         -->
      <!-- ------------------------------------------------------- -->
      <div class="row mt-8 md:pr-10 mb-6 sm:mb-0">
        <Pagination {content} {currentPage} {totalPages} />
      </div>
    </div>

    <!-- ------------------------------------------------------- -->
    <!-- Set the aside as the last column in the row             -->
    <!-- ------------------------------------------------------- -->
    <div class="w-full md:w-3/12 mb-lg-0 px-0">
      <Aside {allPosts} {socialLinks} {tagsList} {catgList} />
    </div>
  </div>
</section>
