<script>
  export let allPosts, postRangeHigh, postRangeLow;
</script>

{#each allPosts as post, i}
  {#if i >= postRangeLow && i < postRangeHigh}
    <div class="rounded-lg overflow-hidden shadow-lg">
      <img
        class="w-full md:h-52 lg:h-60 object-cover"
        src="/assets/{post.fields.image.src}"
        alt={post.fields.image.alt}
      />
      <div class="px-5 py-4">
        <div class="content font-bold text-lg mb-2">
          <a class="" href={post.path}>{post.fields.title}</a>
        </div>
        <ul class="content text-meta flex flex-wrap mb-4">
          <li class="px-1">
            <i class="las la-user-astronaut text-base top-0.5 relative" />
            <a href={post.fields.author.url}>{post.fields.author.name}</a>
          </li>
          <li class="px-1">Date : {post.fields.date}</li>
          <li class="px-1">
            Categories :
            {#each post.fields.categories as catg, i}
              <a href="/categories/{catg}" class="ml-1"
                >{catg}{#if i < post.fields.categories.length - 1},
                {/if}</a
              >
            {/each}
          </li>
          <li class="px-1">
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
