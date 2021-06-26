<script>
  export let projArry, uniqProjs, allProjs, projRangeHigh, projRangeLow;
</script>

{#each uniqProjs as proj, i}
  <div class="rounded-xl overflow-hidden shadow-md bg-secondary">
    <div class="flex-none lg:flex">
      {#if i >= projRangeLow && i < projRangeHigh}
        <div class="px-2 md:px-6 pt-2 md:pt-6 pb-2 md:pb-4">
          {#each allProjs as post, p}
            {#if proj == post.fields.project}
              {#if projArry.find((pst) => pst.proj === proj).title == post.fields.title}
                <h2 class="header pb-2 text-lg md:text-xl lg:text-2xl"><i>Project</i>: {proj}</h2>

              {/if}
              <div class="flex items-center py-2">
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
                    <li class="pr-2 inline-flex">
                      <i class="las la-user-astronaut text-base relative" />
                      <a href={post.fields.author.url}
                        >{post.fields.author.name}</a
                      >
                    </li>
                    <li class="pr-2 inline-flex">Date : {post.fields.date}</li>
                  </ul>
                  <ul class="text-meta flex flex-wrap">
                    <li class="pr-2 inline-flex">
                      Categories:
                      {#each post.fields.categories as catg, i}
                        <a href="/categories/{catg}" class="ml-1">
                          {catg}{#if i < post.fields.categories.length - 1},
                          {/if}
                        </a>
                      {/each}
                    </li>
                    <li class="pr-2 inline-flex">
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
