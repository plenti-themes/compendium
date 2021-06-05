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

<section class="section-sm pb-0">
  <div class="container">
    <div class="row">
      {#each [features[featureIdx]] as { slider } (featureIdx)}
        <div class="content col-lg-12 mb-20">
          <!-- Svelte Carousel Image -->
          <div class="relative rounded-lg overflow-hidden">
            <img
              class=""
              style="filter: brightness(60%)"
              transition:fade
              src={slider.image.url}
              alt={slider.image.alt}
            />

            <!-- Carousel Overlay Text -->
            <div class="absolute row w-full text-center m-0 feature">
              <div class="col-lg-2" />
              <div class="col-lg-8">
                <h2
                  class="mb-3 md:mb-4 lg:mb-5 text-2xl sm:text-3xl md:text-4xl"
                >
                  <a href={slider.link} class="post-title" tabindex={featureIdx}
                    >{slider.title}</a
                  >
                </h2>
                <ul
                  class="list-inline post-meta text-center text-sm md:mb-10 sm:mb-5"
                >
                  <li class="list-inline-item">
                    <i class="fas fa-user" />
                    <a href="/sveltebook/author/john-doe/" tabindex={featureIdx}
                      >John Doe</a
                    >
                  </li>
                  <li class="list-inline-item">Date : {slider.meta.date}</li>
                  <li class="list-inline-item">
                    Categories :
                    <a
                      href="/sveltebook/categories/four-seasons"
                      class="ml-1"
                      tabindex={featureIdx}
                      >Four seasons
                    </a>
                  </li>
                  <li class="list-inline-item">
                    Tags : <a
                      href="/sveltebook/tags/seasons"
                      class="ml-1"
                      tabindex={featureIdx}
                      >Seasons
                    </a>
                    ,<a
                      href="/sveltebook/tags/new"
                      class="ml-1"
                      tabindex={featureIdx}
                      >New
                    </a>
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
                class="fas fa-chevron-circle-left text-4xl md:text-5xl lg:text-6xl rounded-full overflow-hidden bg-white bg-clip-content text-yellow-700 opacity-40 hover:opacity-80"
              />
            </button>
            <button
              type="button"
              on:click={clickNext}
              class="next absolute m-2 right-2"
              style="top: 45%"
            >
              <i
                class="fas fa-chevron-circle-right text-4xl md:text-5xl lg:text-6xl rounded-full overflow-hidden bg-white bg-clip-content text-yellow-700 opacity-40 hover:opacity-80"
              />
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
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
