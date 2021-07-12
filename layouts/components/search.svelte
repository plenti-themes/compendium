<script>
  export let allPosts;

  let value = "";
</script>

<div class="row">
  <h4 class="header mt-0"><span>Search</span></h4>
  <span class="flex flex-wrap items-center">
    <input
      class="appearance-none block w-full bg-gray-100 border border-gray-400 mb-5 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
          .includes(value.toLowerCase())}
          <div class="flex items-center mb-5">
            <img
              class="inline-block object-cover rounded-full w-16 h-16"
              src="assets/posts/{post.fields.image.src}"
              alt={post.fields.image.alt}
            />
            <div class="inline-block ml-2">
              <h5 class="header my-0">
                <a href={post.path}>{post.fields.title}</a>
              </h5>
              <ul class="text-meta">
                <li class="">
                  <i class="las la-user-astronaut text-base relative" />
                  <a href={post.fields.author.url}>{post.fields.author.name}</a>
                  - {post.fields.dateCreated}
                </li>
              </ul>
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </div>
</div>
