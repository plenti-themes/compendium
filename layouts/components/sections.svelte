<script>
  import Aside from "../components/aside.svelte";
  import Cards from "../components/cards.svelte";
  import Pagination from "../components/paginate.svelte";

  export let allContent, postRangeHigh, postRangeLow, currentPage, totalPages;
  let allPosts = allContent.filter((content) => content.type == "posts");
  let allSocial = allContent.filter((content) => content.path == "/")[0].fields
    .theme.social;
</script>

<section class="mt-16">
  <div class="row md:flex md:flex-wrap">
    <div class="w-full md:w-9/12 mb-5 mb-lg-0 px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:pr-10">
        <!-- ------------------------------------------------------- -->
        <!-- Setup a Card for each post as necessary                 -->
        <!-- ------------------------------------------------------- -->
        <Cards {allPosts} {postRangeHigh} {postRangeLow} />
      </div>

      <!-- ------------------------------------------------------- -->
      <!-- Paginate each page as necessary                         -->
      <!-- ------------------------------------------------------- -->
      <div class="row mt-8 md:pr-10">
        <Pagination {currentPage} {totalPages} />
      </div>
    </div>

    <!-- ------------------------------------------------------- -->
    <!-- Set the aside as the last column in the row             -->
    <!-- ------------------------------------------------------- -->
    <div class="w-full md:w-3/12 mb-5 mb-lg-0 px-0">
      <Aside {allPosts} {allSocial} />
    </div>
  </div>
</section>
