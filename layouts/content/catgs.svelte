<script>
  import Aside from "../components/aside.svelte";
  import PostList from "../components/list_catgs.svelte";

  // Variables passed in from "html.svelte" via "index.svelte"
  export let idxContent, allPosts, content, catgPosts, tagsPosts;

  let socialLinks = idxContent.socialLinks;
  $: catg = {
    name: content.fields.name,
    route: content.fields.route,
    posts: Object(catgPosts.filter((key) => key.name == content.fields.name)[0])
      .posts,
  };
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
            <PostList {catg} {catgPosts} {tagsPosts} />
          </div>
        </div>

        <!-- ------------------------------------------------------- -->
        <!-- Set the aside as the last column in the row             -->
        <!-- ------------------------------------------------------- -->
        <div class="w-full md:w-3/12 mb-lg-0 px-0">
          <Aside {allPosts} {catgPosts} {tagsPosts} {socialLinks} {catg} />
        </div>
      </div>
    </div>
    <div class="w-0 md:w-1/12 xl:w-2/12" />
  </section>
</div>
