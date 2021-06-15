<script>
  import { fade } from "svelte/transition";
  export let allFeatures, featuredPage;

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

<!-- {#each [features[featureIdx]] as { post } (featureIdx)} -->
  {#each allFeatures as post, i}
    <div class="content">
      <!-- Carousel Image -->
      <div
        id={i}
        class="feature relative overflow-hidden 
		  {featuredPage == 'Frame' ? ' rounded-lg' : ''} 
		  {i == featureIdx ? 'flex' : 'hidden'}"
      >
        <img
          class="w-full {featuredPage == 'Frame' ? 'rounded-lg' : 'object-cover h-screen'}"
          style="filter: brightness(60%)"
          transition:fade
          src="/assets/{post.fields.image.src}"
          alt={post.fields.image.alt}
        />

        <!-- Carousel Overlay Text -->
        <div class="absolute row w-full m-0 feature px-16">
          <div class="col-lg-2" />
          <div class="col-lg-8">
            <h2
              class="text-center mb-3 md:mb-4 lg:mb-5 text-2xl sm:text-3xl md:text-4xl"
            >
              <a href={post.path} class="post-title">{post.fields.title}</a>
            </h2>
            <ul
              class="flex flex-wrap items-center justify-center post-meta text-sm md:mb-10 sm:mb-5"
            >
              <li class="px-1">
                <i class="icofont-user" />
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
          </div>
          <div class="col-lg-2" />
        </div>

        <button
          on:click={clickPrev}
          class="prev absolute m-2 left-2"
          style="top: 50%"
        >
          <i class="" />
          <i
            class="icofont-circled-left text-3xl sm:text-4xl lg:text-5xl rounded-full overflow-hidden bg-white bg-clip-content text-yellow-700 opacity-40 hover:opacity-80"
          />
        </button>
        <button
          type="button"
          on:click={clickNext}
          class="next absolute m-2 right-2"
          style="top: 50%"
        >
          <i
            class="icofont-circled-right text-3xl sm:text-4xl lg:text-5xl rounded-full overflow-hidden bg-white bg-clip-content text-yellow-700 opacity-40 hover:opacity-80"
          />
        </button>
      </div>
    </div>
  {/each}

  <style>
    .feature {
      color: rgba(255, 255, 255, 0.9);
    }
    .feature a {
      font-weight: 600;
      color: rgba(255, 255, 255, 0.9);
    }
    .feature a:hover {
      color: rgba(180, 83, 9, 0.9);
    }
    .feature {
      bottom: 3%;
    }
  </style>
