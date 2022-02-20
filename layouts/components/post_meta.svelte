<script>
  import { get_excerpt } from "../scripts/get_excerpt.svelte";
  export let post, catgPosts, tagsPosts, pm;

  let path = post.path;
  let author_url = post.author_url ?? post.fields.author.url;
  let author_name = post.author_name ?? post.fields.author.name;
  let dateCreated = post.dateCreated ?? post.fields.dateCreated;
  let dateModified = post.dateModified ?? post.fields.dateModified;
  let title = post.dateModified ?? post.fields.title ?? "";
  let tags = post.tags ?? post.fields.tags;
  let catgs = post.catgs ?? post.fields.categories;
  let cardBody = pm.description
    ? get_excerpt(post.fields.articleBody, 170)
    : "";
</script>

<ul>
  {#if pm.author}
    <li class="mx-0 -mt-1 text-meta inline-flex">
      <i class="las la-user-astronaut{pm.feature ? ' feature' : ' standard'}" />
    </li>
    <li class="mr-2 my-0 inline-flex">
      <a href={author_url}>{author_name}</a>
    </li>
  {/if}
  {#if pm.date_created}
    <li class="mr-2 my-0 inline-flex">
      Created: {dateCreated}
    </li>
  {/if}
  {#if pm.date_modified}
    <li class="mr-2 my-0 inline-flex">
      Updated: {dateModified}
    </li>
  {/if}
  {#if pm.catg_tags}
    <li class="mr-2 my-0 inline-flex">
      Categories: {#each catgs as catg, i}
        {#each Object(catgPosts) as { path, name }}
          {#if catg == name}
            <a href={path} class="meta ml-0.5">
              {name}
            </a>{#if i < catgs.length - 1},{/if}
          {/if}
        {/each}
      {/each}
    </li>
    <li class="mr-2 my-0 inline-flex">
      Tags: {#each tags as tag, i}
        {#each Object(tagsPosts) as { path, name }}
          {#if tag == name}
            <a href={path} class="meta ml-0.5">
              {name}
            </a>{#if i < tags.length - 1},{/if}
          {/if}
        {/each}
      {/each}
    </li>
  {/if}
</ul>
{#if pm.description}
  <p class="text-base mb-8">
    {@html cardBody}
  </p>
{/if}
{#if pm.continue}
  <div class="mb-4">
    <a href={path} title="{title}" class="btn-outline hover:white">Continue Reading</a>
  </div>
{/if}

<style>
  .standard {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 3px;
  }
  .feature {
    color: rgba(255, 255, 255, 0.9);
    margin-top: 3px;
  }
  @media (max-width: 767px) {
    .feature {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
  @media (min-width: 768px) {
    .feature {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
  @media (min-width: 1024px) {
    .feature {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
  .meta {
    text-decoration: underline;
  }
</style>
