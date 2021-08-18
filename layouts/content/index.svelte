<script>
  import Featured from "../components/featured.svelte";
  import MainSection from "../components/main.svelte";

  // Variables passed in from "html.svelte"
  // * content: values for keys in "index.json"
  // * allPosts: values for keys in all posts
  // * theme: values passed in from layout content {...content.fields}
  export let allPosts, content, theme, tagsMap, catgsMap, tagsList, catgList;

  $: currentPage = content.pager;
  let featuredPage = theme.featuredPage;
  let allFeatures = allPosts.filter((content) => content.fields?.featured);
  let totalPosts = allPosts.length;
  let totalPages = Math.ceil(totalPosts / theme.postsPerPage);
  $: postRangeHigh = currentPage * theme.postsPerPage;
  $: postRangeLow = postRangeHigh - theme.postsPerPage;
</script>

<section class="flex flex-wrap items-center justify-between pb-11">
  <!-- ------------------------------------------------------- -->
  <!-- Loop through all the posts and process featured only    -->
  <!-- ------------------------------------------------------- -->
  {#if featuredPage == "Bleed" && currentPage <= 1}
    <div class="w-full row -mt-16">
      <Featured {allFeatures} {featuredPage} {tagsList} {catgList} />
    </div>
  {/if}

  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    {#if featuredPage == "Frame" && currentPage <= 1}
      <div class="w-full row mt-6 sm:mt-16">
        <Featured {allFeatures} {featuredPage} />
      </div>
    {/if}

    <!-- ------------------------------------------------------- -->
    <!-- Loop through all the posts and generate cards and aside -->
    <!-- ------------------------------------------------------- -->
    <div class="w-full">
      <MainSection
        {allPosts}
        {content}
        {postRangeHigh}
        {postRangeLow}
        {currentPage}
        {totalPages}
        {tagsMap}
        {catgsMap}
        {tagsList}
        {catgList}
      />
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
