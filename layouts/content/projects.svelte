<script>
  import Aside from "../components/aside.svelte";
  import Groups from "../components/cardsGroup.svelte";
  import Pagination from "../components/paginate.svelte";

  export let allContent, content, page;

  $: currentPage = content.pager;
  let allPosts = allContent.filter((content) => content.type == "posts");
  let allProjs = allPosts.filter((content) => content.fields?.project != "");
  let projsPerPage = allContent.filter((content) => content.path == "/")[0]
    .fields.theme.projsPerPage;

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
  
  $: projRangeHigh = currentPage * projsPerPage;
  $: projRangeLow = projRangeHigh - projsPerPage;
  let allSocial = allContent.filter((content) => content.path == "/")[0].fields
    .socialLinks;
</script>

<section class="w-full flex flex-wrap items-center justify-between py-16">
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <section id="projects">
      <div class="row md:flex md:flex-wrap">
        <div class="w-full md:w-9/12 mb-5 mb-lg-0 px-0">
          <div class="grid grid-cols-1 gap-6 md:pr-10">
            <!-- ------------------------------------------------------- -->
            <!-- Setup a Card for each post as necessary                 -->
            <!-- ------------------------------------------------------- -->
            <Groups
              {projArry}
              {uniqProjs}
              {allProjs}
              {projRangeHigh}
              {projRangeLow}
            />
          </div>

          <!-- ------------------------------------------------------- -->
          <!-- Paginate each page as necessary                         -->
          <!-- ------------------------------------------------------- -->
          <div class="row mt-8 md:pr-10">
            <Pagination {currentPage} {totalPages} {page} />
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
</section>
