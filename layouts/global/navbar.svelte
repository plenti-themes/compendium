<script>
  let menuShow = false;
  import { onMount } from "svelte";

  //   const toggleNavbar = () => {
  function toggleNavbar() {
    menuShow = !menuShow;
    // console.log(menuShow);
  }

  //   onMount(() => {
  //     const handleOutsideClick = (event) => {
  //       if (menuShow && !menu.contains(event.target)) {
  //         menuShow = false;
  //       }
  //     };

  //     const handleEscape = (event) => {
  //       if (menuShow && event.key === "Escape") {
  //         menuShow = false;
  //       }
  //     };

  //     // add events when element is added to the DOM
  //     document.addEventListener("click", handleOutsideClick, false);
  //     document.addEventListener("keyup", handleEscape, false);

  //     // remove events when element is removed from the DOM
  //     return () => {
  //       document.removeEventListener("click", handleOutsideClick, false);
  //       document.removeEventListener("keyup", handleEscape, false);
  //     };
  //   });
</script>

<div class="flex flex-wrap py-3 px-2">
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 content">
    <nav class="content flex flex-wrap items-center justify-between ">
      <!-- logo -->
      <h2 class="text-3xl font-bold">
        <i class="icofont-bird-alt" /><i>Compendium</i>
      </h2>

      <!-- hamburger -->
      <div class="text-3xl flex md:hidden">
        <button id="hamburger" type="button" on:click={toggleNavbar}>
          <i
            class="icofont-navigation-menu block {menuShow ? 'hidden' : 'flex'}"
          />
          <i class="icofont-close-squared-alt {menuShow ? 'flex' : 'hidden'}" />
        </button>
      </div>

      <!-- links -->
      <div
        class="md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 font-light {menuShow
          ? 'bg-gray-50'
          : 'hidden'}"
      >
        <a class="block md:inline-block px-2 py-2" href="/">Home</a>
        <a class="block md:inline-block px-2 py-2" href="/projects">Projects</a>
        <a class="block md:inline-block px-2 py-2" href="/about">About</a>
        <a class="block md:inline-block px-2 py-2" href="/contact">Contact</a>
        <span class="block md:inline-block px-2 py-2">
          <button class="" type="button">
            <i class="icofont-adjust" />
          </button>
        </span>
      </div>

      <!-- cta -->
    </nav>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</div>
