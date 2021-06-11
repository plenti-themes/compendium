<script>
  export let title, body, image, reference;
</script>

<section
  class="section content flex flex-wrap items-center justify-between py-16"
>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <div class="relative rounded-lg overflow-hidden">
      <img class="" src="/assets/{image.src}" alt={image.alt} />
	  <span class="content-meta">{@html image.reference}</span>

      <div class="content font-bold text-lg mb-2 my-6">
        <h2 class="h2">{title}</h2>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
