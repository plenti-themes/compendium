<script>
  import PostMeta from "./post_meta.svelte";
  export let allPosts;
  export let complete = false;
  export let skipbody = true;

  let value = "";
</script>

<div class="row">
  <h4 class="header mt-0"><span>Search</span></h4>
  <span class="flex flex-wrap items-center">
    <input
      class="appearance-none block w-full bg-gray-100 border text-gray-700 border-gray-400 mb-5 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
      id="search"
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
              .includes(value.toLowerCase()) || 
             post.fields.title
              .toLowerCase()
              .includes(value.toLowerCase())}
          <div class="flex items-center mb-5">
            <img
              class="inline-block object-cover rounded-full w-16 h-16"
              src="assets/posts/{post.fields.image.src}"
              alt={post.fields.image.alt}
            />
            <div class="inline-block ml-2">
              <h5 class="header mt-0 mb-1">
                <a href={post.path}>{post.fields.title}</a>
              </h5>
              <ul class="text-meta flex flex-wrap">
                <li class="mx-0 -mt-1 text-meta inline-flex">
                  <i class="las la-user-astronaut text-lg" />
                </li>
                <PostMeta {post} {complete} {skipbody} />
              </ul>
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </div>
</div>
