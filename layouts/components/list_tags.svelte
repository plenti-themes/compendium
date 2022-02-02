<script>
  import PostMeta from "./post_meta.svelte";
  export let tag, catgPosts, tagsPosts;
  export let complete = true;
  export let skipbody = true;
  let Posts;

  $: Posts = Object.values(tagsPosts.filter((key) => key.name == tag)[0].posts);
</script>

{#key tag}
  <div class="rounded-xl overflow-hidden shadow-md bg-secondary mb-6">
    <div class="flex-none lg:flex">
      <div class="mx-2 md:mx-6 my-1">
        <h2 class="header text-xl md:text-2xl lg:text-3xl my-5">
          <span class="accent">Tag:</span>
          {tag}
        </h2>
        {#each Posts as post}
          <div class="flex items-center my-4">
            <img
              class="inline-block object-cover rounded-md w-28 h-28"
              src="assets/posts/{post.img_src}"
              alt={post.img_alt}
            />
            <div class="inline-block ml-2">
              <h3 class="header my-0 text-xl md:text-2xl">
                <a href={post.path}>{post.title}</a>
              </h3>
              <ul class="text-meta flex flex-wrap">
                <li class="mx-0 -mt-1 text-meta inline-flex">
                  <i class="las la-user-astronaut text-lg" />
                </li>
                <PostMeta
                  {post}
                  {catgPosts}
                  {tagsPosts}
                  {complete}
                  {skipbody}
                />
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/key}
