<script>
  export let allPosts, postRangeHigh, postRangeLow;
</script>

{#each allPosts as post, i}
  {#if i >= postRangeLow && i < postRangeHigh}
    <div class="rounded-lg overflow-hidden shadow-md bg-secondary">
      <img
        class="w-full md:h-52 lg:h-60 object-cover"
        src="/assets/{post.fields.schema.image.src}"
        alt={post.fields.schema.image.alt}
      />
      <div class="px-5 py-4">
        <h3 class="header mb-2">
          <a href={post.path}>{post.fields.schema.title}</a>
		</h3>
        <ul class="text-meta flex flex-wrap mb-4">
          <li class="px-1 inline-flex">
            <i class="las la-user-astronaut text-base" />
            <a href={post.fields.schema.author.url}>{post.fields.schema.author.name}</a>
          </li>
          <li class="px-1 inline-flex">Date : {post.fields.schema.date}</li>
          <li class="px-1 inline-flex">
            Categories :
            {#each post.fields.schema.categories as catg, i}
              <a href="/categories/{catg}" class="ml-1"
                >{catg}{#if i < post.fields.schema.categories.length - 1},
                {/if}</a
              >
            {/each}
          </li>
          <li class="px-1 inline-flex">
            Tags :
            {#each post.fields.schema.tags as tag, i}
              <a href="/tags/{tag}" class="ml-1"
                >{tag}{#if i < post.fields.schema.tags.length - 1}, {/if}</a
              >
            {/each}
          </li>
        </ul>
        <p class="text-base">
          {@html post.fields.body.substring(0, Math.min(175, post.fields.body.substring(0, 175).lastIndexOf(" ")))}
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
