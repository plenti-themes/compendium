<script>
  import PostMeta from "./post_meta.svelte";

  export let allPosts, postRangeHigh, postRangeLow, tagsList, catgList;
  export let complete = true;
  export let skipbody = false;

  // Sort posts in descending order
  $: allPosts.sort(function (a, b) {
    return (
      new Date(b.fields.dateModified).getTime() -
      new Date(a.fields.dateModified).getTime()
    );
  });
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
        <h3 class="header mt-0 mb-1 text-xl md:text-2xl">
          <a href={post.path}>{post.fields.title}</a>
        </h3>
        <ul class="text-meta flex flex-wrap">
          <li class="mx-0 -mt-1 text-meta inline-flex">
            <i class="las la-user-astronaut text-lg" />
          </li>
          <PostMeta {post} {tagsList} {catgList} {complete} {skipbody} />
        </ul>
      </div>
    </div>
  {/if}
{/each}
