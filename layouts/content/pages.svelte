<script>
  export let title, image, hero, splash, body, author, date;
</script>

<section>

  <!-- Hero section -->
  <div id="hero" class="w-full grid grid-cols-2 pt-16 relative">
    <div
      class="pl-2 md:pl-6 lg:pl-10 xl:pl-16 w-screen-30 sm:w-screen-40 md:w-screen-60 lg:w-screen-70 xl:w-screen-80 absolute"
      style="top: 40%"
    >
      <h2
        class="header text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        {hero.pre}<span class="accent-b">{hero.accent}</span><br />{hero.post}
      </h2>
      <span class="content text-xl sm:text-2xl md:text-4xl">{hero.tagline}</span
      >
    </div>
    <div />
    <div>
      <img
        class="w-full object-cover object-bottom h-screen-40 sm:h-screen-60 md:h-screen-70 lg:h-screen-80 xl:h-screen-90"
        src="/assets/{image.src}"
        alt={image.alt}
      />
      <span class="text-meta"
        >{@html image.reference.replaceAll(
          "<a ",
          "<a target='blank' rel='noopener noreferrer'"
        )}</span
      >
    </div>
  </div>

  <!-- About section -->
  <div id="about" class="relative">
    <div class="w-full pt-16">
      <img
        class="object-center object-cover w-full h-screen-80 lg:h-screen-90 xl:h-full"
        style="filter: brightness(60%)"
        src="/assets/{splash.src}"
        alt={splash.alt}
      />
    </div>
    <div
      class="absolute ml-2 md:ml-12 xl:mt-6 bg-black bg-opacity-50 w-screen-40 sm:w-screen-70 xl:w-screen-80 h-screen-70 lg:h-screen-80"
      style="top: 14%; overflow-y: auto;"
    >
      <div class="content w-full font-bold text-lg px-6 pt-10">
        <h2 class="accent text-white text-4xl font-extrabold ">{title}</h2>
      </div>
      <p class="text-white text-md sm:text-lg xl:text-2xl px-6 py-6">
        {@html body}
      </p>
    </div>
  </div>
  <div class="text-meta">
	{@html splash.reference.replaceAll(
	  "<a ",
	  "<a target='blank' rel='noopener noreferrer'"
	)}
  </div>
  <div class="pt-16"></div>
</section>
