<script>
  import Meta from "./post_meta.svelte";
  export let projArry,
    uniqProjs,
    allProjs,
    projRangeHigh,
    projRangeLow,
    tagsList,
    catgList;
  export let complete = true;
  export let skipbody = true;
</script>

{#each uniqProjs as proj, i}
  {#if i >= projRangeLow && i < projRangeHigh}
    <div class="rounded-xl overflow-hidden shadow-md bg-secondary">
      <div class="flex-none lg:flex">
        <div class="mx-2 md:mx-6 mb-2 md:mb-3 my-1">
          {#each allProjs as post, p}
            {#if proj == post.fields.project}
              {#if projArry.find((pst) => pst.proj === proj).title == post.fields.title}
                <h2 class="header text-xl md:text-2xl lg:text-3xl my-5">
                  <span class="accent">Project:</span>
                  {proj}
                </h2>
              {/if}
              <div class="flex items-center mb-3">
                <img
                  class="inline-block object-cover rounded-md w-28 h-28"
                  src="assets/posts/{post.fields.image.src}"
                  alt={post.fields.image.alt}
                />
                <div class="inline-block ml-2">
                  <h3 class="header my-0 text-xl md:text-2xl">
                    <a href={post.path}>{post.fields.title}</a>
                  </h3>
                  <Meta {post} {tagsList} {catgList} {complete} {skipbody} />
                </div>
              </div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  {/if}
{/each}
