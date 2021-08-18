<script context="module">
  export function get_description(articleBody, desc_length) {
    let desc_start = articleBody.indexOf("<p>");
    let desc_end = desc_start + desc_length;
    let desc =
      articleBody.substring(
        desc_start,
        Math.min(desc_end, articleBody.substring(0, desc_end).lastIndexOf(" "))
      ) + '<span class="font-bold"> ...</span></p>';

    return desc;
  }
</script>
