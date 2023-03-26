<script>
  export let title, articleBody, image;
  let citation = image.citation === undefined ? false : true;

</script>

<section
  class="w-full section flex flex-wrap items-center justify-between  py-6 sm:py-16"
>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <div class="w-full relative">
      <img
        class=" w-full object-cover rounded-lg overflow-hidden h-screen-60"
        style="filter: brightness(60%)"
        src="media/pages/{image.src}"
        alt={image.alt}
      />
      <div class="absolute pl-2 md:pl-6" style="bottom: 10%;">
        <h2 class="header">
          <i
            class="text-2xl md:text-3xl lg:text-4xl accent las la-directions"
          />
          <span class="text-base md:text-xl lg:text-2xl text-white"
            >{title}</span
          >
        </h2>
        <div class="pl-8 md:pl-9 lg:pl-10">
          <i class="text-sm md:text-lg lg:text-xl text-white">{articleBody}</i>
        </div>
      </div>
      {#if citation}
        <cite class="text-meta">{@html image.citation}</cite>
      {/if}
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
