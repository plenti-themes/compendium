<script>
  export let idxContent, env;
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

  <base href={env.local ? "/" : env.baseurl} />

  <!-- Fix hydration -->
  <script type="module" src="/spa/ejected/main.js"></script>

  <link rel="icon" type="image/svg+xml" href="/assets/logo.svg" />
  <link rel="stylesheet" href="/assets/tailwind.global.css" />

  {#if idxContent.theme.codeHighlighting}
    <link rel="stylesheet" href="/assets/prism.css" />
  {/if}

  {#if idxContent.theme.mathTypesetting}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
      integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
      crossorigin="anonymous"
    />
  {/if}

  <link rel="stylesheet" href="/spa/bundle.css" />
</head>
