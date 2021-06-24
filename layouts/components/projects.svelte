<script>
  import Aside from "../components/aside.svelte";
  import Cards from "../components/cards.svelte";
  import Pagination from "../components/paginate.svelte";

  export let allContent, title, content;

  let projectsPerPage = 6;

  $: currentPage = content.pager;
  let allPosts = allContent.filter((content) => content.type == "posts");
  let totalPosts = allPosts.length;
  let totalPages = Math.ceil(totalPosts / projectsPerPage);
  $: postRangeHigh = currentPage * projectsPerPage;
  $: postRangeLow = postRangeHigh - projectsPerPage;
  let allSocial = allContent.filter((content) => content.path == "/")[0].fields
    .theme.social;
</script>

<div class="w-0 md:w-1/12 xl:w-2/12" />
<div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
<section id="projects">
    <div class="row md:flex md:flex-wrap">
      <div class="w-full md:w-9/12 mb-5 mb-lg-0 px-0">
        <div class="text-lg mb-8 text-center">
          <h2 class="header">{title} Page</h2>
        </div>
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
</div>
<div class="w-0 md:w-1/12 xl:w-2/12" />
