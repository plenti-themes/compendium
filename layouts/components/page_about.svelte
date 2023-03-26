<script>
  import Hoverable from "../scripts/hoverable.svelte";
  export let title, image, hero, splash, articleBody;

  function scrollDown() {
    window.scrollTo({
      top: 900,
      left: 0,
      behavior: "smooth",
    });
  }
</script>

<!-- Hero section -->
<div id="hero" class="w-full grid grid-cols-2 relative">
  <div
    class="pl-2 md:pl-6 lg:pl-10 xl:pl-16 w-screen-30 sm:w-screen-40 md:w-screen-50 lg:w-screen-60 xl:w-screen-80 absolute bottom-10 sm:bottom-1/4"
  >
    <h2 class="header text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
      {hero.pre}<span class="accent-b">{hero.accent}</span><br />{hero.post}
    </h2>
    <h3 class="tag text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      {hero.tagline}
    </h3>
  </div>
  <div />
  <div>
    <img
      class="w-full object-cover object-bottom h-screen-40 sm:h-screen-60 md:h-screen-70 lg:h-screen-80 xl:h-screen-90"
      src="media/pages/{image.src}"
      alt={image.alt}
    />
    <cite class="text-meta"
      >{@html image.citation.replaceAll(
        "<a ",
        "<a target='blank' rel='noopener' "
      )}</cite
    >
  </div>
  <Hoverable let:hovering>
    <button
      type="button"
      on:click={scrollDown}
      class="absolute bottom-0 sm:bottom-10 md:bottom-20"
      style="left: 25%; transform: translate(-50%);"
    >
      <span class="inline-block {hovering ? 'animate-bounce' : ''}">
        <i
          class="accent las la-chevron-circle-down text-5xl lg:text-6xl rounded-full overflow-hidden bg-clip-content opacity-80 hover:opacity-100"
        />
      </span>
    </button>
  </Hoverable>
</div>

<!-- About section -->
<div id="about" class="relative">
  <div class="w-full pt-16">
    <img
      class="w-full object-center object-cover h-screen-80 lg:h-screen-90"
      style="filter: brightness(60%)"
      src="media/pages/{splash.src}"
      alt={splash.alt}
    />
  </div>
  <div
    class="absolute ml-2 md:ml-12 xl:mt-6 bg-black bg-opacity-50 w-screen-45 sm:w-screen-70 lg:w-screen-80 h-screen-70"
    style="top: 14%; overflow-y: auto;"
  >
    <div class="w-full text-lg px-6 pt-10">
      <h2 class="accent text-white text-4xl">{title}</h2>
    </div>
    <p class="text-white text-md sm:text-lg lg:text-xl 2xl:text-2xl px-6 py-6">
      {@html articleBody}
    </p>
  </div>
</div>
<cite class="text-meta relative block">
  {@html splash.citation.replaceAll("<a ", "<a target='blank' rel='noopener' ")}
</cite>
