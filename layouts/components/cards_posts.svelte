<script>
  import Meta from "./post_meta.svelte";

  export let allPosts, postRangeHigh, postRangeLow, tagsList, catgList;
  export let complete = true;
  export let skipbody = false;
</script>

{#each allPosts as post, i}
  {#if i >= postRangeLow && i < postRangeHigh}
    <div class="rounded-lg overflow-hidden shadow-md bg-secondary">
      <img
        class="w-full md:h-52 lg:h-60 object-cover"
        src="assets/posts/{post.fields.image.src}"
        alt={post.fields.image.alt}
      />
      <div class="px-5 py-4">
        <h3 class="header mt-0 mb-2 text-xl md:text-2xl">
          <a href={post.path}>{post.fields.title}</a>
        </h3>
        <Meta {post} {tagsList} {catgList} {complete} {skipbody} />
      </div>
    </div>
  {/if}
{/each}
