<script>
  export let allSocial;

  // -------------------------------------------------------------
  // BUG?: svelte #each loop is not functional with allSocial
  // Following js function to parse allSocial into array arrSocial
  // -------------------------------------------------------------
  let arrSocial = [];
  function printSocial() {
    for (let i in allSocial) {
      if (allSocial[i].enabled) {
        arrSocial.push({ src: allSocial[i].src, ico: allSocial[i].ico });
      }
    }
  }
  $: printSocial();
</script>

<div class="row">
  <h4 class="header mb-1">Social Links</h4>
  <div class="mb-4">
    {#each arrSocial as { src, ico }}
      <a target="_blank" rel="noopener noreferrer" href={src}>
        <button class="btn-round mx-0.5">
          <i
            class="{ico} font-medium {ico == 'lab la-keybase'
              ? 'text-3xl pb-0.5'
              : 'text-2xl pt-0.5'}"
          />
        </button>
      </a>
    {/each}
  </div>
</div>
