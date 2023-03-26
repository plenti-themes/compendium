<script>
  import SEO from "../scripts/SEO.svelte";

  // Values passed in from "html.svelte"
  export let idxContent, content, baseurl;
  let isPost;

  // Defne key value for SEO updates
  $: isPost = content.type === "posts" ? true : false;
</script>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />

  {#key isPost}
    <SEO {idxContent} {content} {baseurl} />
  {/key}

  <base href={baseurl} />

  <!-- Fix hydration -->
  <script type="module" src="spa/core/main.js"></script>

  <link rel="icon" type="image/svg+xml" href="logo.svg" />
  <link rel="stylesheet" href="tailwind.global.css" />

  {#if idxContent.theme.codeHighlighting}
    <link rel="stylesheet" href="prism.css" />
  {/if}

  {#if idxContent.theme.mathTypesetting}
    <link rel="stylesheet" href="katex.min.css" />
  {/if}

  <link rel="stylesheet" href="spa/bundle.css" />
</head>
