<script>
  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
</script>

<div class="flex flex-wrap items-center justify-between pb-4 pt-2">
  <div class="w-full text-center">
    <button on:click={scrollTop}>
      <i
        class="las la-chevron-circle-up text-5xl md:text-6xl rounded-full overflow-hidden bg-clip-content opacity-70 hover:opacity-100 accent"
      />
    </button>
    <!-- </a> -->
    <div class="footnote mt-2" role="contentinfo">
      © Copyright 2022. All rights reserved.<br />
      Designed and developed by Roberto Rivera.<br />
      Powered by
      <a target="_blank" rel="noopener" href="https://plenti.co/"
        >Plenti</a
      >
      of
      <a target="_blank" rel="noopener" href="https://svelte.dev/"
        >Svelte</a
      >,
      <a
        target="_blank"
        rel="noopener"
        href="https://icons8.com/line-awesome">Line Awesome</a
      >
      and
      <a
        target="_blank"
        rel="noopener"
        href="https://tailwindcss.com/">tailwindcss</a
      >.
	</div>
  </div>
</div>
