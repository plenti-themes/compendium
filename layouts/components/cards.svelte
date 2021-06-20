<script>
  export let allPosts, postRangeHigh, postRangeLow;
</script>

{#each allPosts as post, i}
  {#if i >= postRangeLow && i < postRangeHigh}
    <div class="rounded-lg overflow-hidden shadow-md bg-secondary">
      <img
        class="w-full md:h-52 lg:h-60 object-cover"
        src="/assets/{post.fields.image.src}"
        alt={post.fields.image.alt}
      />
      <div class="px-5 py-4">
        <h3 class="header mb-2">
          <a href={post.path}>{post.fields.title}</a>
		</h3>
        <ul class="text-meta flex flex-wrap mb-4">
          <li class="px-1 inline-flex">
            <i class="las la-user-astronaut text-base" />
            <a href={post.fields.author.url}>{post.fields.author.name}</a>
          </li>
          <li class="px-1 inline-flex">Date : {post.fields.date}</li>
          <li class="px-1 inline-flex">
            Categories :
            {#each post.fields.categories as catg, i}
              <a href="/categories/{catg}" class="ml-1"
                >{catg}{#if i < post.fields.categories.length - 1},
                {/if}</a
              >
            {/each}
          </li>
          <li class="px-1 inline-flex">
            Tags :
            {#each post.fields.tags as tag, i}
              <a href="/tags/{tag}" class="ml-1"
                >{tag}{#if i < post.fields.tags.length - 1}, {/if}</a
              >
            {/each}
          </li>
        </ul>
        <p class="text-base">
          {post.fields.body.substring(0, 175)}
          <span class="font-bold">...</span>
        </p>
        <article class="border-0">
          <div class="mb-4">
            <p class="mb-6" />
            <a href={post.path} class="btn-outline hover:white"
              >Continue Reading</a
            >
          </div>
        </article>
      </div>
    </div>
  {/if}
{/each}
