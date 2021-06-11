<script>
  export let title, image, body, author, date, categories, tags;
</script>

<section
  class="section content flex flex-wrap items-center justify-between py-16"
>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <div class="row">
      <div class="relative rounded-lg overflow-hidden">
        <img class="" src="/assets/{image.src}" alt={image.alt} />
		<span class="content-meta">{@html image.reference.replaceAll("<a ", "<a target='blank' rel='noopener noreferrer'")}</span>

      </div>
      <div class="content font-bold text-xl mt-6 mb-2">
        <h2 class="h2">{title}</h2>
      </div>
      <ul class="content-meta flex flex-wrap mb-4">
        <li class="px-1">
		  <i class="icofont-user"></i>
          <a href={author.url}>{author.name}</a>
        </li>
        <li class="px-1">Date : {date}</li>
        <li class="px-1">
          Categories:
          {#each categories as catg, i}
            <a href="/categories/{catg}" class="content ml-1">
              {catg}{#if i < categories.length - 1}, {/if}
            </a>
          {/each}
        </li>
        <li class="px-1">
          Tags:
          {#each tags as tag, i}
            <a href="/tags/{tag}" class="ml-1">
              {tag}{#if i < tags.length - 1}, {/if}
            </a>
          {/each}
        </li>
      </ul>
      <p class="text-gray-700 text-base">
        {@html body}
      </p>
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
