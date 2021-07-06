<script>
  export let idxContent, env;
  let base = env.local ? "/" : env.baseurl;
</script>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content={idxContent.description} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={idxContent.title} />
  <meta property="og:description" content={idxContent.description} />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={idxContent.title} />
  <meta name="twitter:description" content={idxContent.description} />

  <title>{idxContent.title}</title>

  <base href={base} />

  <!-- Fix hydration -->
  <script type="module" src="/spa/ejected/main.js"></script>

  <link rel="icon" type="image/svg+xml" href="assets/logo.svg" />
  <link rel="stylesheet" href="assets/tailwind.global.css" />

  {#if idxContent.theme.codeHighlighting}
    <link rel="stylesheet" href="assets/prism.css" />
  {/if}

  {#if idxContent.theme.mathTypesetting}
    <link rel="stylesheet" href="assets/katex.min.css" />
  {/if}

  <link rel="stylesheet" href="spa/bundle.css" />
</head>
