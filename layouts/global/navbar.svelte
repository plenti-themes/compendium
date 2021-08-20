<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let allPages;
  export let isDark, theme, idxContent;

  let site_name = idxContent.name.split(" ");
  let menuShow = false;

  function toggleDark() {
    // Set the boolean
    isDark = !isDark;
    // Store the change as local storage value
    theme.set(isDark ? "dark" : "light");
  }

  function toggleNavbar() {
    menuShow = !menuShow;
  }

  onMount(() => {
    // Get the value out of storage on-load or set a sane default.
    theme = writable(localStorage.getItem("theme"));

    // Anytime the store changes, update the local storage value.
    theme.subscribe((value) => {
      localStorage.setItem("theme", value === "dark" ? "dark" : "light");
    });

    // Set the starting boolean
    isDark = localStorage.theme === "dark" ? true : false;

    const handleOutsideClick = (event) => {
      if (menuShow && !menu.contains(event.target)) {
        menuShow = false;
      }
    };

    const handleEscape = (event) => {
      if (menuShow && event.key === "Escape") {
        menuShow = false;
      }
    };

    // add events when element is added to the DOM
    document.addEventListener("click", handleOutsideClick, false);
    document.addEventListener("keyup", handleEscape, false);

    // remove events when element is removed from the DOM
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
      document.removeEventListener("keyup", handleEscape, false);
    };
  });
</script>

<div class="flex flex-wrap py-2 px-2	">
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12">
    <nav class="flex flex-wrap items-center justify-between">
      <!-- logo -->
      <h1 class="font-bold opacity-100 my-0 flex items-center">
        <img width="50" height="50" src="assets/logo.svg" alt="Logo" />
        <a class="ml-2 text-4xl menu" href=".">
          {#if site_name.length > 1}
            <span class="accent" style="opacity: 1;"
              >{site_name[0].toUpperCase()}</span
            ><span class="menu" style="border-bottom: 4px solid transparent;"
              >{site_name[1].toUpperCase()}</span
            >
          {:else}
            <span class="menu" style="border-bottom: 4px solid transparent;"
              >{idxContent.name}</span
            >
          {/if}
        </a>
      </h1>

      <!-- hamburger menu -->
      <div class="menu text-4xl flex md:hidden items-center">
        <button
          id="menu"
          type="button"
          class="focus:outline-none"
          on:click={toggleNavbar}
        >
          <i class="las la-bars{menuShow ? 'hidden' : ''}" />
          <i class="las la-window-close{menuShow ? '' : 'hidden'}" />
        </button>
      </div>

      <!-- links -->
      <div
        class="md:flex w-full md:w-auto text-right mt-5 md:mt-0 {menuShow
          ? 'bg-primary bg-opacity-70'
          : 'hidden'}"
      >
        <div class="text-xl">
          <a class="block md:inline-flex px-2 py-1 md:py-0" href="."
            ><span class="menu">Home</span></a
          >
          <a class="block md:inline-flex px-2 py-1 md:py-0" href="projs/"
            ><span class="menu">Projects</span></a
          >
          {#each allPages as page, i}
            {#if page.fields.enabled && page.fields.menu}
              <a class="block md:inline-flex px-2 py-1" href={page.path}
                ><span class="menu">{page.fields.pageType}</span></a
              >
            {/if}
          {/each}
          <button
            id="dark"
            type="button"
            class="inline-block md:inline-flex px-2 py-1 md:py-0"
            on:click={toggleDark}
            ><span class="menu"><i class="las la-adjust text-2xl" /></span
            ></button
          >
        </div>
      </div>

      <!-- cta -->
    </nav>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</div>
