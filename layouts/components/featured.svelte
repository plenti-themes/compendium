<script>
  import { fade } from "svelte/transition";
  import { sortByDate } from "../scripts/sort_by_date.svelte";
  import Hoverable from "../scripts/hoverable.svelte";
  import PostMeta from "../components/post_meta.svelte";

  export let allFeatures, featuredPage, catgPosts, tagsPosts;
  export let complete = true;
  export let skipbody = true;

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
        <div id="featureImage" class="w-full">
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
          id="featureOverlayText"
          class="feature w-full absolute row m-0 px-16"
        >
          <div class="col-lg-2" />
          <div class="col-lg-8">
            <h2
              class="w-full text-center pb-3 md:pb-4 lg:pb-5 text-3xl sm:text-4xl md:text-5xl"
            >
              <a href={post.path} class="">{post.fields.title}</a>
            </h2>
            <ul
              class="flex flex-wrap items-center justify-center text-sm md:text-md lg:text-lg {featuredPage ==
              'Frame'
                ? 'md:mb-10 sm:mb-5'
                : 'mb-24'}"
            >
              <li class="px-0 mt-0">
                <i
                  class="las la-user-astronaut text-lg md:text-xl lg:text-2xl relative"
                />
              </li>
              <PostMeta {post} {catgPosts} {tagsPosts} {complete} {skipbody} />
            </ul>
          </div>
          <div class="col-lg-2" />
        </div>

        <!-- Carousel Overlay Text -->
        <button
          on:click={clickPrev}
          class="absolute m-2 left-2"
          style="top: 50%"
        >
          <i class="" />
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
          <button
            type="button"
            on:click={scrollDown}
            class="absolute"
            style="bottom: 5%; left: 50%; transform: translate(-50%);"
          >
            <Hoverable let:hovering>
              <span class="inline-block {hovering ? 'animate-bounce' : ''}">
                <i
                  class="accent las la-chevron-circle-down text-5xl lg:text-6xl  rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100"
                />
              </span>
            </Hoverable>
          </button>
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
  }
  .feature a:hover {
    color: var(--accent);
  }
  .feature {
    bottom: 10%;
  }
  ul {
    font-family: Anton, sans-serif;
    font-weight: 300;
  }
</style>
