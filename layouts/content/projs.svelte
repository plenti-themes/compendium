<script>
  import Aside from "../components/aside.svelte";
  import Cards from "../components/cards_projs.svelte";
  import Pagination from "../components/paginate.svelte";

  // Variables passed in from "html.svelte" via "index.svelte"
  export let idxContent, allPosts, content, tagsList, catgList;

  $: currentPage = content.pager;
  let allProjs = allPosts.filter((content) => content.fields?.project != "");
  let socialLinks = idxContent.socialLinks;
  let projsPerPage = idxContent.theme.projsPerPage;

  let projArry = [];
  let projList = [];
  allProjs.forEach((element) => {
    projArry.push({
      proj: element.fields.project,
      title: element.fields.title,
    });
    projList.push(element.fields.project);
  });

  let uniqProjs = [...new Set(projList)];
  let totalProjs = uniqProjs.length;
  let totalPages = Math.ceil(totalProjs / projsPerPage);

  // Setting variable for pagination logic.
  let totalProjPages = totalPages;
  console.log(totalProjPages);

  $: projRangeHigh = currentPage * projsPerPage;
  $: projRangeLow = projRangeHigh - projsPerPage;
</script>

<div class="w-full py-6 sm:py-16">
  <section class="w-full flex flex-wrap items-center justify-between">
    <div class="w-0 md:w-1/12 xl:w-2/12" />
    <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
      <div class="row md:flex md:flex-wrap">
        <div class="w-full md:w-9/12 mb-lg-0 px-0">
          <div class="grid grid-cols-1 gap-6 md:pr-10">
            <!-- ------------------------------------------------------- -->
            <!-- Setup a Card for each post as necessary                 -->
            <!-- ------------------------------------------------------- -->
            <Cards
              {projArry}
              {uniqProjs}
              {allProjs}
              {projRangeHigh}
              {projRangeLow}
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
    </div>
    <div class="w-0 md:w-1/12 xl:w-2/12" />
  </section>
</div>
