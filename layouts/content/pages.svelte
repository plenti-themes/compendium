<script>
  export let idxContent,
    allLayouts,
    allPosts,
    content,
    pageType,
    enabled,
    title,
    image,
    hero,
    splash,
    articleBody,
    catgPosts,
    tagsPosts;

  const getComponent = function () {
    try {
      return allLayouts[
        "layouts_components_page_" + pageType.toLowerCase() + "_svelte"
      ];
    } catch (e) {
      return false;
    }
  };
</script>

{#if enabled}
  <div class="w-full py-6 sm:py-16">
    <svelte:component
      this={getComponent()}
      {idxContent}
      {content}
      {allPosts}
      {title}
      {image}
      {hero}
      {splash}
      {articleBody}
      {catgPosts}
      {tagsPosts}
    />
  </div>
{/if}
