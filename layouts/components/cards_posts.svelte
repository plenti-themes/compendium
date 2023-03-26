<script>
  import { sortByDate } from "../scripts/sort_by_date.svelte";
  import PostMeta from "./post_meta.svelte";

  // Post Meta configuration values
  const pm = {
    author: false,
    date_modified: true,
    date_created: true,
    description: true,
    catg_tags: true,
    continue: true,
  };

  export let allPosts, postRangeHigh, postRangeLow, catgPosts, tagsPosts;
</script>

{#each sortByDate(allPosts, "modified") as post, i}
  {#if i >= postRangeLow && i < postRangeHigh}
    <div class="rounded-lg overflow-hidden shadow-md bg-secondary">
      <img
        class="w-full md:h-52 lg:h-60 object-cover"
        src="media/posts/{post.fields.image.src}"
        alt={post.fields.image.alt}
      />
      <div class="px-5 py-4">
        <h3 class="header mt-0 mb-1 text-xl md:text-2xl">
          <a href={post.path}>{post.fields.title}</a>
        </h3>
        <div class="text-meta flex flex-wrap" role="complementary">
          <PostMeta {post} {catgPosts} {tagsPosts} {pm} />
        </div>
      </div>
    </div>
  {/if}
{/each}
