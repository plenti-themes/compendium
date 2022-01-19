<script>
  import { get_description } from "../scripts/get_description.svelte";
  export let post, catgPosts, tagsPosts, complete, skipbody;

  let path = post.path;
  let author_url = post.author_url ?? post.fields.author.url;
  let author_name = post.author_name ?? post.fields.author.name;
  let dateCreated = post.dateCreated ?? post.fields.dateCreated;
  let dateModified = post.dateModified ?? post.fields.dateModified;
  let tags = post.tags ?? post.fields.tags;
  let catgs = post.catgs ?? post.fields.categories;
  let cardBody = skipbody
    ? "skip"
    : get_description(post.fields.articleBody, 170);
</script>

<li class="mr-2 my-0 inline-flex">
  <a href={author_url}>{author_name}</a>
</li>
{#if complete}
  <li class="mr-2 my-0 inline-flex">
    Created: {dateCreated}
  </li>
{/if}
<li class="mr-2 my-0 inline-flex">
  Updated: {dateModified}
</li>
{#if complete}
  <br />
  <li class="mr-2 my-0 inline-flex">
    Categories:
    {#each catgs as catg, i}
      {#each Object(catgPosts) as { page, name }}
        {#if catg == name}
          <a href="catgs/{page}" class="ml-0.5">
            {name}{#if i < catgs.length - 1},{/if}
          </a>
        {/if}
      {/each}
    {/each}
  </li>
  <li class="mr-2 my-0 inline-flex">
    Tags:
    {#each tags as tag, i}
      {#each Object(tagsPosts) as { page, name }}
        {#if tag == name}
          <a href="tags/{page}" class="ml-0.5">
            {name}{#if i < tags.length - 1},{/if}
          </a>
        {/if}
      {/each}
    {/each}
  </li>
{/if}
{#if cardBody !== "skip"}
  <p class="text-base mb-8">
    {@html cardBody}
  </p>
  <article class="border-0">
    <div class="mb-4">
      <p class="mb-6" />
      <a href={path} class="btn-outline hover:white">Continue Reading</a>
    </div>
  </article>
{/if}
