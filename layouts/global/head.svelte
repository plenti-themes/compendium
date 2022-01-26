<script>
  import SEO from "../scripts/SEO.svelte";

  // Values passed in from "html.svelte"
  export let idxContent, allPages, content, env;
  let base = env.local ? "/" : env.baseurl;
  let isPost;

  // Defne key value for SEO updates
  $: isPost = content.type === "posts" ? true : false;

  // Set flag to enable contact serverless function
  let enableContact = allPages.filter((key) => key.path === "pages/contact")[0]
    .fields.enabled;
</script>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />

  {#key isPost}
    <SEO {idxContent} {content} {env} />
  {/key}

  <base href={base} />

  <!-- Fix hydration -->
  <script type="module" src="spa/ejected/main.js"></script>

  <link rel="icon" type="image/svg+xml" href="assets/logo.svg" />
  <link rel="stylesheet" href="assets/tailwind.global.css" />

  {#if enableContact}
    <!-- Setup contacts assets as needed -->
  {/if}

  {#if idxContent.theme.codeHighlighting}
    <link rel="stylesheet" href="assets/prism.css" />
  {/if}

  {#if idxContent.theme.mathTypesetting}
    <link rel="stylesheet" href="assets/katex.min.css" />
  {/if}

  <link rel="stylesheet" href="spa/bundle.css" />
</head>
