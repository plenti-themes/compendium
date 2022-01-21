<script>
  import Aside from "../components/aside.svelte";
  import Cards from "../components/cards_projs.svelte";
  import Pagination from "../components/paginate.svelte";

  // Variables passed in from "html.svelte" via "index.svelte"
  export let idxContent, allPosts, content, catgPosts, tagsPosts;

  $: currentPage = content.pager;
  let allProjs = allPosts.filter((content) => content.fields?.project != "");
  let socialLinks = idxContent.socialLinks;
  let projsPerPage = idxContent.theme.projsPerPage;
  let projsSort = idxContent.theme.projsSort;
  let uniqProjs = [...new Set(allProjs.map((key) => key.fields.project))];
  let projList = [];

  // Create a grouped object array (projList) of projects
  uniqProjs.forEach((proj) => {
    let group = allProjs.filter((key) => key.fields.project == proj);

    // What: sort the posts within the projects
    if (projsSort == "Date") {
      // Sort projects posts alphabetically by name
      group.sort((a, b) => {
        return a.path.localeCompare(b.path);
      });
    } else {
      // Sort projects posts by newest first
      group.sort((a, b) => {
        return new Date(b.modified) - new Date(a.modified);
      });
    }

    // What: Identify the most recent post date in a project
    // Why:  Enable ability to list the most-recent projects first
    let maxDate = [
      ...new Set(group.map((key) => key.fields.dateModified)),
    ].reduce(function (a, b) {
      return a > b ? a : b;
    });
    let obj = {
      name: proj,
      modified: maxDate,
      posts: group,
    };
    projList.push(obj);
  });

  // What: Sort the projccts
  if (projsSort == "Date") {
    // Sort projects by newest first
    projList.sort((a, b) => {
      return new Date(b.modified) - new Date(a.modified);
    });
  } else {
    // Sort projects alphabetically by name
    projList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  let totalProjs = uniqProjs.length;
  let totalPages = Math.ceil(totalProjs / projsPerPage);

  // Setting variable for pagination logic.
  let totalProjPages = totalPages;
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
              {projList}
              {projRangeHigh}
              {projRangeLow}
              {catgPosts}
              {tagsPosts}
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
          <Aside {allPosts} {socialLinks} {catgPosts} {tagsPosts} />
        </div>
      </div>
    </div>
    <div class="w-0 md:w-1/12 xl:w-2/12" />
  </section>
</div>
