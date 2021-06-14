<script>
  import { onMount } from "svelte";

  function scrollTo() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
</script>

<div class="flex flex-wrap items-center justify-between pb-4 pt-2">
  <div class="content w-full text-center">
    <!-- <a href="" id="scrollTop"> -->
    <button type="button" on:click={scrollTo}>
      <i class="icofont-circled-up text-4xl mt-2 mb-2" />
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
      <a target="_blank" rel="noopener noreferrer" href="https://icofont.com/"
        >IcoFont</a
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
