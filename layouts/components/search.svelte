<script>
  import PostMeta from "./post_meta.svelte";
  export let allPosts;

  // Post Meta configuration values
  const pm = {
    author: false,
    date_modified: true,
    date_created: false,
    description: false,
    catg_tags: false,
    continue: false,
  };

  let value = "";
</script>

<div class="row">
  <h4 class="header mt-0"><span>Search</span></h4>
  <span class="flex flex-wrap items-center" role="search">
    <input
      class="appearance-none block w-full bg-gray-100 border text-gray-700 border-gray-400 mb-5 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
      id="search"
      role="searchbox"
      placeholder="Search articles..."
      bind:value
    />
  </span>
  <div class="row">
    {#if value.length >= 3}
      <!-- {#each allPosts as post} -->
      {#each allPosts as post, i}
        {#if post.fields.articleBody
          .toLowerCase()
          .includes(value.toLowerCase()) || post.fields.title
            .toLowerCase()
            .includes(value.toLowerCase())}
          <div class="flex items-center mb-5">
            <img
              class="inline-block object-cover rounded-full w-16 h-16"
              src="media/posts/{post.fields.image.src}"
              alt={post.fields.image.alt}
            />
            <div class="inline-block ml-2">
              <h5 class="header mt-0 mb-1">
                <a href={post.path}>{post.fields.title}</a>
              </h5>
              <div class="text-meta flex flex-wrap" role="complementary">
                <PostMeta {post} {pm} />
              </div>
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </div>
</div>
