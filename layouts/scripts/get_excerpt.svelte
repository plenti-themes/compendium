<script context="module">
  // What: Post excerpt to set as description
  // Why:  Excerpt artice body to describe what the post is about on
  //       "complementary" elements and SEO sites
  // How:  Select the first paragraph in a post up to specified length
  export function get_excerpt(articleBody, desc_length) {
    // find the first bit of content
    let desc_start = articleBody.indexOf("<p>")+3;

    // strip out any markup from the excerpt
    let desc_text = articleBody
      .substr(desc_start, 300)
      .replace(/(<([^>]+)>)/gi, "")
      .substr(0, desc_length);

    // Find the position of the last complete word
    desc_length = Math.min(
      desc_length,
      desc_text.substr(0, desc_length).lastIndexOf(" ")
    );

    // Trim off any incomplete words and add an ellipsis
    let desc =
      desc_text.substr(0, desc_length) + '<span class="font-bold"> ...</span>';

    return desc;
  }
</script>
