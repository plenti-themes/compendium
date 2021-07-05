<script>
  export let projArry, uniqProjs, allProjs, projRangeHigh, projRangeLow;
</script>

{#each uniqProjs as proj, i}
  <div class="rounded-xl overflow-hidden shadow-md bg-secondary">
    <div class="flex-none lg:flex">
      {#if i >= projRangeLow && i < projRangeHigh}
        <div class="mx-2 md:mx-6 mb-2 md:mb-3">
          {#each allProjs as post, p}
            {#if proj == post.fields.project}
              {#if projArry.find((pst) => pst.proj === proj).title == post.fields.title}
                <h2 class="header text-lg md:text-xl lg:text-2xl"><i>Project</i>: {proj}</h2>

              {/if}
              <div class="flex items-center mb-3">
                <img
                  class="inline-block object-cover rounded-md w-28 h-28"
                  src="/assets/{post.fields.image.src}"
                  alt={post.fields.image.alt}
                />
                <div class="inline-block ml-2">
                  <h3 class="header mb-1 text-base md:text-lg lg:text-xl">
                    <a href={post.path}>{post.fields.title}</a>
                  </h3>
                  <ul class="text-meta flex flex-wrap">
                    <li class="mr-2 inline-flex">
                      <i class="las la-user-astronaut text-base relative" />
                      <a href={post.fields.author.url}
                        >{post.fields.author.name}</a
                      >
                    </li>
                    <li class="mr-2 inline-flex">Created : {post.fields.dateCreated}</li>
                    <li class="mr-2 inline-flex">Updated : {post.fields.dateModified}</li>
                  </ul>
                  <ul class="text-meta flex flex-wrap">
                    <li class="mr-2 inline-flex">
                      Categories:
                      {#each post.fields.categories as catg, i}
                        <a href="/categories/{catg}" class="ml-1">
                          {catg}{#if i < post.fields.categories.length - 1},
                          {/if}
                        </a>
                      {/each}
                    </li>
                    <li class="mr-2 inline-flex">
                      Tags:
                      {#each post.fields.tags as tag, i}
                        <a href="/tags/{tag}" class="ml-1">
                          {tag}{#if i < post.fields.tags.length - 1}, {/if}
                        </a>
                      {/each}
                    </li>
                  </ul>
                </div>
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/each}
