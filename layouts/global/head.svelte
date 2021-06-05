<script>
  export let title;
</script>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />

  <title>{title}</title>

  <link rel="icon" type="image/svg+xml" href="/assets/logo.svg" />
  <link rel="stylesheet" href="/spa/bundle.css" />
  <link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap"
    rel="stylesheet"
  />

  <script type="module" src="/spa/ejected/main.js"></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"
    type="application/javascript"
    crossorigin="anonymous"
    defer="defer"
    data-search-pseudo-elements=""></script>
  <style>
    .notices p::before {
      display: none;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      content: "\f05a";
    }
  </style>
</head>
