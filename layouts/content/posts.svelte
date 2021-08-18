<script>
  // Aside component for search, categories, and tags
  import Aside from "../components/aside.svelte";

  // Values passed in from "html.svelte"
  export let idxContent, allPosts, tagsList, catgList;

  // Content field Values passed in via layout content {...content.fields}
  export let articleBody,
    title,
    image,
    author,
    dateCreated,
    dateModified,
    categories,
    tags;

  let socialLinks = idxContent.socialLinks;
</script>

<section
  class="section flex flex-wrap items-center justify-between py-6 sm:py-16"
>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <div class="row flex flex-wrap">
      <div class="relative mb-8 w-full">
        <img
          class="rounded-lg overflow-hidden w-full h-screen-70 object-cover object-center"
          src="assets/posts/{image.src}"
          alt={image.alt}
        />
        <span class="text-meta"
          >{@html image.citation.replaceAll(
            "<a ",
            "<a target='blank' rel='noopener noreferrer'"
          )}</span
        >
      </div>
      <div class="w-full md:w-9/12 mb-5 sm:mb-0 px-0 md:pr-10">
        <h1 class="header mb-2">{title}</h1>
        <ul class="text-meta flex flex-wrap">
          <li class="px-1 inline-flex">
            <i class="las la-user-astronaut text-base relative" />
            <a href={author.url}>{author.name}</a>
          </li>
          <li class="px-1 inline-flex">Created : {dateCreated}</li>
          <li class="px-1 inline-flex">Updated : {dateModified}</li>
        </ul>
        <ul class="text-meta flex flex-wrap mb-6">
          <li class="px-1 inline-flex">
            Categories:
            {#each categories as catg, i}
              <a href="catgs/{catgList.indexOf(catg) + 1}" class="ml-1">
                {catg}{#if i < categories.length - 1},
                {/if}
              </a>
            {/each}
          </li>
          <li class="px-1 inline-flex">
            Tags:
            {#each tags as tag, i}
              <a href="tags/{tagsList.indexOf(tag) + 1}" class="ml-1">
                {tag}{#if i < tags.length - 1}, {/if}
              </a>
            {/each}
          </li>
        </ul>
        <p>
          {@html articleBody}
        </p>
      </div>

      <!-- Aside  -->
      <div class="w-full md:w-3/12 mb-5 mb-lg-0 px-0">
        <Aside {allPosts} {socialLinks} {tagsList} {catgList} />
      </div>
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
