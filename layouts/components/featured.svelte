<script>
  export let features;
  import { fade } from "svelte/transition";

  let featureIdx = 0;

  function clickNext() {
    alert(featureIdx);
    featureIdx = (featureIdx + 1) % features.length;
  }
  function clickPrev() {
    alert(featureIdx);
    featureIdx = (featureIdx - 1) % features.length;
  }
</script>

<section class="content flex flex-wrap items-center justify-between py-16">
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <div class="row">
      {#each [features[featureIdx]] as { slider } (featureIdx)}
        <div class="content col-lg-12">
          <!-- Carousel Image -->
          <div class="relative rounded-lg overflow-hidden">
            <img
              class=""
              style="filter: brightness(60%)"
              transition:fade
              src={slider.image.url}
              alt={slider.image.alt}
            />

            <!-- Carousel Overlay Text -->
            <div class="absolute row w-full m-0 feature px-16">
              <div class="col-lg-2" />
              <div class="col-lg-8">
                <h2
                  class="text-center mb-3 md:mb-4 lg:mb-5 text-2xl sm:text-3xl md:text-4xl"
                >
                  <a href={slider.link} class="post-title">{slider.title}</a>
                </h2>
                <ul class="flex flex-wrap items-center justify-center post-meta text-sm md:mb-10 sm:mb-5">
                  <li class="px-1">
                    <i class="fas fa-user" />
                    <a href={slider.author.url}>{slider.author.name}</a>
                  </li>
                  <li class="px-1">Date : {slider.date}</li>
                  <li class="px-1">
                    Categories :
                    {#each slider.categories as catg, i}
                      <a href="/categories/{catg}" class="ml-1"
                        >{catg}{#if i < slider.categories.length - 1}, {/if}</a
                      >
                    {/each}
                  </li>
                  <li class="px-1">
                    Tags :
                    {#each slider.tags as tag, i}
                      <a href="/tags/{tag}" class="ml-1"
                        >{tag}{#if i < slider.tags.length - 1}, {/if}</a
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
              style="top: 45%"
            >
              <i
                class="fas fa-chevron-circle-left text-3xl sm:text-4xl lg:text-5xl rounded-full overflow-hidden bg-white bg-clip-content text-yellow-700 opacity-40 hover:opacity-80"
              />
            </button>
            <button
              type="button"
              on:click={clickNext}
              class="next absolute m-2 right-2"
              style="top: 45%"
            >
              <i
                class="fas fa-chevron-circle-right text-3xl sm:text-4xl lg:text-5xl rounded-full overflow-hidden bg-white bg-clip-content text-yellow-700 opacity-40 hover:opacity-80"
              />
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>

<style>
  .content {
    color: rgba(255, 255, 255, 0.9);
  }
  .content a {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
  }
  .content a:hover {
    color: rgba(180, 83, 9, 0.9);
  }
  .feature {
    bottom: 3%;
  }
</style>
