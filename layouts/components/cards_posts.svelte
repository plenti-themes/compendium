<script>
  import { sortByDate } from '../scripts/sort_by_date.svelte';
  import PostMeta from "./post_meta.svelte";

  export let allPosts, postRangeHigh, postRangeLow, catgPosts, tagsPosts;
  export let complete = true;
  export let skipbody = false;
</script>

{#each sortByDate(allPosts, "modified") as post, i}
  {#if i >= postRangeLow && i < postRangeHigh}
    <div class="rounded-lg overflow-hidden shadow-md bg-secondary">
      <img
        class="w-full md:h-52 lg:h-60 object-cover"
        src="assets/posts/{post.fields.image.src}"
        alt={post.fields.image.alt}
      />
      <div class="px-5 py-4">
        <h3 class="header mt-0 mb-1 text-xl md:text-2xl">
          <a href={post.path}>{post.fields.title}</a>
        </h3>
        <ul class="text-meta flex flex-wrap">
          <li class="mx-0 -mt-1 text-meta inline-flex">
            <i class="las la-user-astronaut text-lg" />
          </li>
          <PostMeta {post} {catgPosts} {tagsPosts} {complete} {skipbody} />
        </ul>
      </div>
    </div>
  {/if}
{/each}
