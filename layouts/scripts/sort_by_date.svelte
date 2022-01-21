<script context="module">
  export const sortByDate = (items, sortDate, order) => {
    // Default sort posts created by newest first
    var sortDate = typeof sortDate != "undefined" ? order : "created";
    var order = typeof order != "undefined" ? order : "newest";

    items.sort((a, b) => {
      if (sortDate == "modified") {
        // Use modified date for sort
        let dateA = new Date(a?.fields?.dateModified);
        let dateB = new Date(b?.fields?.dateModified);

        return order == "oldest" ? dateA - dateB : dateB - dateA;
      } else {
        // Use create date for sort
        let dateA = new Date(a?.fields?.dateCreated);
        let dateB = new Date(b?.fields?.dateCreated);

        return order == "oldest" ? dateA - dateB : dateB - dateA;
      }
    });

    // return the sorted object
    return items;
  };
</script>
