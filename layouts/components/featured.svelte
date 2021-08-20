<script>
  import { fade } from "svelte/transition";
  import Hoverable from "../scripts/hoverable.svelte";
  export let allFeatures, featuredPage, tagsList, catgList;

  function scrollDown() {
    window.scrollTo({
      top: 800,
      left: 0,
      behavior: "smooth",
    });
  }

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
</script>

{#key featureIdx}
<div transition:fade>
  <!-- {#each [features[featureIdx]] as { post } (featureIdx)} -->
  {#each allFeatures as post, i}
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
            class="flex flex-wrap items-center justify-center text-sm {featuredPage ==
            'Frame'
              ? 'md:mb-10 sm:mb-5'
              : 'mb-24'}"
          >
            <li class="px-2">
              <i class="las la-user-astronaut text-lg relative" />
              <a href={post.fields.author.url}>{post.fields.author.name}</a>
            </li>
            <li class="px-2">Updated: {post.fields.dateModified}</li>
            <li class="px-2">
              Categories:
              {#each post.fields.categories as catg, i}
                <a href="catgs/{catgList.indexOf(catg) + 1}" class="ml-0.5"
                  >{catg}{#if i < post.fields.categories.length - 1},
                  {/if}</a
                >
              {/each}
            </li>
            <li class="px-2">
              Tags:
              {#each post.fields.tags as tag, i}
                <a href="tags/{tagsList.indexOf(tag) + 1}" class="ml-0.5"
                  >{tag}{#if i < post.fields.tags.length - 1}, {/if}</a
                >
              {/each}
            </li>
          </ul>
        </div>
        <div class="col-lg-2" />
      </div>

      <!-- Carousel Overlay Text -->
      <button on:click={clickPrev} class="absolute m-2 left-2" style="top: 50%">
        <i class="" />
        <i
          class="accent las la-chevron-circle-left text-5xl rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100"
        />
      </button>
      <button
        type="button"
        on:click={clickNext}
        class="absolute m-2 right-2"
        style="top: 50%"
      >
        <i
          class="accent las la-chevron-circle-right text-5xl rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100"
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
                class="accent las la-chevron-circle-down text-5xl rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100"
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
    bottom: 3%;
  }
</style>
