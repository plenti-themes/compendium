<script>
  export let allPosts;

  let value = "";
</script>

<div class="row">
  <h4 class="h4 mb-2"><span>Search</span></h4>
  <span class="flex flex-wrap items-center">
    <form action="/search" class="widget-search">
      <input class="" placeholder="Search content..." bind:value />
    </form>
    <!-- <button type="submit" class="-mt-4" aria-label="Search Post">
      <i class="las la-search-2 btn-round inline-block ml-1" />
    </button> -->
  </span>
  <div class="row">
    <div class="content">
      {#if value.length >= 3}
        <!-- {#each allPosts as post} -->
        {#each allPosts as post, i}
          {#if post.fields.body.toLowerCase().includes(value.toLowerCase())}
            <div class="flex items-center mb-5">
              <img
                class="inline-block object-cover rounded-full w-16 h-16"
                src="/assets/{post.fields.image.src}"
                alt={post.fields.image.alt}
              />
              <div class="inline-block ml-2">
                <a class="h4" href={post.path}
                  >{post.fields.title}</a
                >
                <ul class="text-meta">
                  <li class="">
                    <i class="las la-user-astronaut text-base top-0.5 relative" />
                    <a href={post.fields.author.url}
                      >{post.fields.author.name}</a
                    >
                    - {post.fields.date}
                  </li>
                </ul>
              </div>
            </div>
          {/if}
        {/each}
      {/if}
    </div>
  </div>
</div>
