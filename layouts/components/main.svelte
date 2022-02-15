<script>
  // Variables passed in from "html.svelte"
  export let allPosts, catgPosts, tagsPosts, content, baseurl;
  // Variables passed in from "index.svelte"
  export let postRangeHigh, postRangeLow, currentPage, totalPages;

  // Aside component for search, categories, and tags
  import Aside from "../components/aside.svelte";
  // Cards component for all posts.
  import Cards from "../components/cards_posts.svelte";
  import Pagination from "../components/paginate.svelte";

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
          {catgPosts}
          {tagsPosts}
          {postRangeHigh}
          {postRangeLow}
        />
      </div>

      <!-- ------------------------------------------------------- -->
      <!-- Paginate each page as necessary                         -->
      <!-- ------------------------------------------------------- -->
      <div class="row mt-8 md:pr-10 mb-6 sm:mb-0">
        <Pagination {content} {currentPage} {totalPages} {baseurl} />
      </div>
    </div>

    <!-- ------------------------------------------------------- -->
    <!-- Set the aside as the last column in the row             -->
    <!-- ------------------------------------------------------- -->
    <div class="w-full md:w-3/12 mb-lg-0 px-0">
      <Aside {allPosts} {catgPosts} {tagsPosts} {socialLinks} />
    </div>
  </div>
</section>
