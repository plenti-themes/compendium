<script context="module">
  // What: Generic sort function for posts with parameters for altering
  //       default outcomes
  // Why:  DRY functionality for sorting posts across various page types
  
  export const sortByDate = (items, sortDate, order) => {
    // What: Set default values
    // Why:  Sort function should work with only the post object provided
    // How:  Set default sort on posts created by newest first
    var sortDate = typeof sortDate != "undefined" ? order : "created";
    var order = typeof order != "undefined" ? order : "newest";

    items.sort((a, b) => {
      if (sortDate == "modified") {
        // What: Sort by most recently modified posts
        // Why:  Option to highlight older posts that were recently updated
        // How:  Use modified date for sort
        let dateA = new Date(a?.fields?.dateModified);
        let dateB = new Date(b?.fields?.dateModified);

        return order == "oldest" ? dateA - dateB : dateB - dateA;
      } else {
        // What: Sort by most recently created posts
        // Why:  Highlight only newly created posts
        // How:  Use create date for sort
        let dateA = new Date(a?.fields?.dateCreated);
        let dateB = new Date(b?.fields?.dateCreated);

        return order == "oldest" ? dateA - dateB : dateB - dateA;
      }
    });

    // return the sorted object
    return items;
  };
</script>
