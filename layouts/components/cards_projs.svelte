<script>
  import PostMeta from "./post_meta.svelte";
  export let projList, projRangeHigh, projRangeLow, catgPosts, tagsPosts;

  // Post Meta configuration values
  const pm = {
    author: false,
    date_modified: true,
    date_created: true,
    description: false,
    catg_tags: true,
    continue: false,
  };

  let projTLDR = false;
</script>

{#each projList as proj, i}
  {#if i >= projRangeLow && i < projRangeHigh}
    <div class="rounded-xl overflow-hidden shadow-md bg-secondary">
      <div class="flex-none lg:flex">
        <div class="mx-2 md:mx-6 mb-2 md:mb-3 my-1">
          {#each proj.posts as post, p}
            <!-- print the project heading only once -->
            {#if p == 0}
              <h2 class="header text-xl md:text-2xl lg:text-3xl my-5">
                <span class="accent">Project:</span>
                {proj.name}
              </h2>
              <!-- print the TL;DR for the heading post -->
              {#if projTLDR}
                <p class="text-base mb-5">
                  {post.fields.articleBody.substring(
                    post.fields.articleBody.indexOf("<p>") + 3,
                    post.fields.articleBody.indexOf("<h2")
                  )}
                </p>
              {/if}
            {/if}
            <!-- print the project card -->
            <div class="flex items-center mb-3">
              <img
                class="inline-block object-cover rounded-md w-28 h-28"
                src="media/posts/{post.fields.image.src}"
                alt={post.fields.image.alt}
              />
              <div class="inline-block ml-2">
                <h3 class="header mt-0 mb-1 text-xl md:text-2xl">
                  <a href={post.path}>{post.fields.title}</a>
                </h3>
                <div class="text-meta flex flex-wrap" role="complementary">
                  <PostMeta {post} {catgPosts} {tagsPosts} {pm} />
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
{/each}
