<script>
  import Featured from "../components/featured.svelte";
  import Sections from "../components/sections.svelte";
  import Pagination from "../components/pagination.svelte";

  export let allContent, content, fields;

  $: currentPage = content.pager;
  let allPosts = allContent.filter((content) => content.type == "posts");
  let allFeatures = allPosts.filter((content) => content.fields?.featured);
  let totalPosts = allPosts.length;
  let totalPages = Math.ceil(totalPosts / fields.postsPerPage);
  $: postRangeHigh = currentPage * fields.postsPerPage;
  $: postRangeLow = postRangeHigh - fields.postsPerPage;
</script>

<section class="flex flex-wrap items-center justify-between py-16">
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <!-- ------------------------------------------------------- -->
    <!-- Loop through all the posts and process featured only    -->
    <!-- ------------------------------------------------------- -->
    <div class="row">
      <Featured {allFeatures} />
    </div>

    <!-- ------------------------------------------------------- -->
    <!-- Loop through all the posts and generate cards and aside -->
    <!-- ------------------------------------------------------- -->
    <div class="row">
      <Sections {allPosts} {postRangeHigh} {postRangeLow} />
    </div>

    <!-- ------------------------------------------------------- -->
    <!-- Paginate each page as necessary                         -->
    <!-- ------------------------------------------------------- -->
    <div class="row">
      <Pagination {currentPage} {totalPages} />
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
