<script>
  import { onMount } from "svelte";
  let menuShow = false;
  export let idxContent, allProjs, allPages, isDark;
  
  let projsEnabled = allProjs[0].fields.enabled;

  function toggleDark() {
    isDark = !isDark;
  }

  function toggleNavbar() {
    menuShow = !menuShow;
  }

  onMount(() => {
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

<div class="flex flex-wrap py-3 px-2	">
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="menu w-full md:w-10/12 xl:w-8/12">
    <nav class="flex flex-wrap items-center justify-between">
      <!-- logo -->
      <h1 class="font-bold mt-0">
        <i class="accent {idxContent.logo} text-4xl relative" /><i
          ><a class="text-3xl" href=".">{idxContent.name}</a></i
        >
      </h1>

      <!-- hamburger menu -->
      <div class="text-4xl flex md:hidden align-items justify-content">
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
        class="menu md:flex w-full md:w-auto text-right mt-5 md:mt-0 {menuShow
          ? 'bg-primary bg-opacity-70'
          : 'hidden'}"
      >
        <div class="menu text-lg">
          <a class="block md:inline-flex px-2 py-1" href=".">Home</a>
          {#if projsEnabled}
            <a class="block md:inline-flex px-2 py-1" href="projects"
              >Projects</a
            >
          {/if}
          {#each allPages as page, i}
            {#if page.fields.enabled}
              <a class="block md:inline-flex px-2 py-1" href={page.path}
                >{page.fields.menu}</a
              >
            {/if}
          {/each}
          <button id="dark" type="button" on:click={toggleDark}>
            <i class="las la-adjust block md:inline-flex py-1 px-2 text-xl" />
          </button>
        </div>
      </div>

      <!-- cta -->
    </nav>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</div>
