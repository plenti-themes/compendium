<script>
  export let socialLinks;

  // -------------------------------------------------------------
  // BUG?: svelte #each loop is not functional with socialLinks
  // Following js function to parse socialLinks into array arrSocial
  // -------------------------------------------------------------
  let arrSocial = [];
  function printSocial() {
    for (let i in socialLinks) {
      if (socialLinks[i].enabled) {
        arrSocial.push({ src: socialLinks[i].src, ico: socialLinks[i].ico });
      }
    }
  }
  $: printSocial();
</script>

<div class="row">
  <h4 class="header mt-2 mb-1">Social Links</h4>
  <div class="mb-4">
    {#each arrSocial as { src, ico }}
      <a target="_blank" rel="noopener" href={src}>
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
