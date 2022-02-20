<script>
  import PostMeta from "./post_meta.svelte";
  export let catg, catgPosts, tagsPosts;

  // Post Meta configuration values
  const pm = {
    author: false,
    date_modified: true,
    date_created: true,
    description: false,
    catg_tags: true,
    continue: false,
  };
</script>

<div class="rounded-xl overflow-hidden shadow-md bg-secondary mb-6">
  <div class="flex-none lg:flex">
    <div class="mx-2 md:mx-6 my-1">
      {#key catg}
        <h2 class="header text-xl md:text-2xl lg:text-3xl my-5">
          <span class="accent">Category:</span>
          {catg.name}
        </h2>
        {#each Object(catg.posts) as post}
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
              <div class="text-meta flex flex-wrap" role="complementary">
                <PostMeta {post} {catgPosts} {tagsPosts} {pm} />
              </div>
            </div>
          </div>
        {/each}
      {/key}
    </div>
  </div>
</div>
