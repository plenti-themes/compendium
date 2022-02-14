<script>
  import { fade } from "svelte/transition";
  import { sortByDate } from "../scripts/sort_by_date.svelte";
  import Hoverable from "../scripts/hoverable.svelte";
  import PostMeta from "../components/post_meta.svelte";

  export let allFeatures, featuredPage, catgPosts, tagsPosts;

  // Post Meta configuration values
  const pm = {
    author: true,
    date_modified: true,
    date_created: true,
    description: false,
    catg_tags: true,
    continue: false,
    feature: true,
  };

  let featureIdx = 0;

  $: maxFeatures = allFeatures.length;

  function clickPrev() {
    if (featureIdx == 0) {
      // block of code to be executed if the condition is true
      featureIdx = maxFeatures - 1;
    } else {
      // block of code to be executed if the condition is false
      featureIdx = (featureIdx - 1) % maxFeatures;
    }
  }

  function clickNext() {
    if (featureIdx == maxFeatures) {
      // block of code to be executed if the condition is true
      featureIdx = 0;
    } else {
      // block of code to be executed if the condition is false
      featureIdx = (featureIdx + 1) % maxFeatures;
    }
  }

  function scrollDown() {
    window.scrollTo({
      top: 800,
      left: 0,
      behavior: "smooth",
    });
  }
</script>

{#key featureIdx}
  <div transition:fade>
    {#each sortByDate(allFeatures, "created") as post, i}
      <!-- Carousel Image -->
      <div
        id={i}
        class="w-full relative overflow-hidden 
		    {featuredPage == 'Frame' ? ' rounded-lg' : ''} 
		    {i == featureIdx ? '' : 'hidden'}"
      >
        <div id="featureImage-{i}" class="w-full">
          <img
            class="w-full {featuredPage == 'Frame'
              ? 'rounded-lg object-cover h-screen-70'
              : 'object-cover h-screen'}"
            style="filter: brightness(60%)"
            src="assets/posts/{post.fields.image.src}"
            alt={post.fields.image.alt}
          />
        </div>

        <!-- Carousel Overlay Text -->
        <div
          id="featureOverlayText-{i}"
          class="feature w-full absolute row m-0 px-16"
        >
          <div class="col-lg-2" />
          <div class="col-lg-8">
            <h2
              class="w-full text-center pb-3 md:pb-4 lg:pb-5 text-3xl sm:text-4xl md:text-5xl"
            >
              <a href={post.path} class="">{post.fields.title}</a>
            </h2>
            <div
              role="complementary"
              class="flex flex-wrap items-center justify-center text-center text-sm md:text-md lg:text-lg {featuredPage ==
              'Frame'
                ? 'md:mb-10 sm:mb-5'
                : 'mb-15'}"
            >
              <span class="meta">
                <PostMeta {post} {catgPosts} {tagsPosts} {pm} />
              </span>
            </div>
          </div>
          <div class="col-lg-2" />
        </div>
        <cite class="citation text-meta absolute">
          {@html post.fields.image.citation.replaceAll(
            "<a ",
            "<a target='blank' rel='noopener' "
          )}
        </cite>

        <!-- Carousel Overlay Text -->
        <button
          on:click={clickPrev}
          class="absolute m-2 left-2"
          style="top: 50%"
        >
          <i
            class="accent las la-chevron-circle-left text-5xl lg:text-6xl  rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100"
          />
        </button>
        <button
          type="button"
          on:click={clickNext}
          class="absolute m-2 right-2"
          style="top: 50%"
        >
          <i
            class="accent las la-chevron-circle-right text-5xl lg:text-6xl  rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100"
          />
        </button>

        {#if featuredPage == "Bleed"}
          <Hoverable let:hovering>
            <button
              type="button"
              on:click={scrollDown}
              class="absolute"
              style="bottom: 5%; left: 50%; transform: translate(-50%);"
            >
              <span class="inline-block {hovering ? 'animate-bounce' : ''}">
                <i
                  class="accent las la-chevron-circle-down text-5xl lg:text-6xl  rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100"
                />
              </span>
            </button>
          </Hoverable>
        {/if}
      </div>
    {/each}
  </div>
{/key}

<style>
  .feature {
    color: rgba(255, 255, 255, 0.9);
  }
  .feature a {
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(1, 1, 1, 0.15);
  }
  .feature a:hover {
    color: var(--accent);
  }
  .feature {
    bottom: 15%;
  }
  .citation {
    background-color: rgba(1, 1, 1, 0.15);
    color: rgba(255, 255, 255, 0.9);
    bottom: 3%;
    left: 5%;
  }
  .meta {
    background-color: rgba(1, 1, 1, 0.15);
    color: rgba(255, 255, 255, 0.8);
    font-family: Anton, sans-serif;
    font-weight: 200;
  }
  button {
    border-radius: 50%;
    background-color: rgba(1, 1, 1, 0.15);
  }
</style>
