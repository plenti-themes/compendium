<script>
  export let title, allContent, env;

</script>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />

  <title>{ title }</title>
  <base href="{ env ? "/" : env.baseurl }">

  <!-- Fix hydration -->
  <script type="module" src="/spa/ejected/main.js"></script>

  <link rel='stylesheet' href='/assets/global-tailwind.css'>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" type="image/svg+xml" href="/assets/logo.svg" />
  <link rel="stylesheet" href="/spa/bundle.css" />
  <link rel="stylesheet" href="/assets/icons8/css/line-awesome.min.css">
</head>
