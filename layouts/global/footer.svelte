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
  <div class="content w-full text-center">
    <button type="btn-round" on:click={scrollTop}>
	  <i
		class="las la-chevron-circle-up text-4xl md:text-5xl rounded-full overflow-hidden bg-white bg-clip-content text-yellow-700 opacity-50 hover:opacity-80"
	  />
    </button>
<!-- </a> -->
    <p class="font-normal">
      © Copyright 2021. All rights reserved.<br />
      Designed and developed by Roberto Rivera.<br />
      Powered by
      <a target="_blank" rel="noopener noreferrer" href="https://plenti.co/"
        >Plenti</a
      >
      of
      <a target="_blank" rel="noopener noreferrer" href="https://svelte.dev/"
        >Svelte</a
      >,
      <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/line-awesome"
        >Line Awesome</a
      >
      and
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://tailwindcss.com/">tailwindcss</a
      >.
    </p>
  </div>
</div>
