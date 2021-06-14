<script>
  import Aside from "../components/aside.svelte";
  import Pagination from "../components/paginate.svelte";
  export let allPosts, postRangeHigh, postRangeLow, currentPage, totalPages;
</script>

<section class="pb-10 mt-16">
  <div class="row md:flex md:flex-wrap">
    <div class="w-full md:w-9/12 mb-5 mb-lg-0 px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:pr-10">
        {#each allPosts as post, i}
          {#if i >= postRangeLow && i < postRangeHigh}
            <!--Card -->
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img
                class="w-full md:h-52 lg:h-60 object-cover"
                src="/assets/{post.fields.image.src}"
                alt={post.fields.image.alt}
              />
              <div class="px-5 py-4">
                <div class="content font-bold text-lg mb-2">
                  <a class="post-title" href={post.path}>{post.fields.title}</a>
                </div>
                <ul class="content flex flex-wrap post-meta mb-4 content-meta">
                  <li class="px-1">
                    <i class="icofont-user" />
                    <a href={post.fields.author.url}
                      >{post.fields.author.name}</a
                    >
                  </li>
                  <li class="px-1">Date : {post.fields.date}</li>
                  <li class="px-1">
                    Categories :
                    {#each post.fields.categories as catg, i}
                      <a href="/categories/{catg}" class="ml-1"
                        >{catg}{#if i < post.fields.categories.length - 1},
                        {/if}</a
                      >
                    {/each}
                  </li>
                  <li class="px-1">
                    Tags :
                    {#each post.fields.tags as tag, i}
                      <a href="/tags/{tag}" class="ml-1"
                        >{tag}{#if i < post.fields.tags.length - 1}, {/if}</a
                      >
                    {/each}
                  </li>
                </ul>
                <p class="text-base">
                  {post.fields.body.substring(0, 175)}
                  <span class="font-bold">...</span>
                </p>
                <article class="border-0">
                  <div class="mb-4">
                    <p class="mb-6" />
                    <a href={post.path} class="btn-outline hover:white"
                      >Continue Reading</a
                    >
                  </div>
                </article>
              </div>
            </div>
          {/if}
        {/each}
      </div>

      <!-- ------------------------------------------------------- -->
      <!-- Paginate each page as necessary                         -->
      <!-- ------------------------------------------------------- -->
      <div class="row mt-8 md:pr-10">
        <Pagination {currentPage} {totalPages} />
      </div>
    </div>

    <!-- Set the aside as the last column in the row -->
	<Aside {allPosts} />
  </div>
</section>
