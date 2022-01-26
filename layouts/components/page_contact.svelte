<script>
  import { createEventDispatcher } from "svelte";
  // Aside component for search, categories, and tags
  import Aside from "./aside.svelte";

  // Variables passed in from "html.svelte"
  export let idxContent, allPosts, catgPosts, tagsPosts;

  // Variables passed in from "index.svelte"
  export let title, articleBody;

  let dispatch = createEventDispatcher();
  let tname = title.split(" ");
  let socialLinks = idxContent.socialLinks;
  let subject = idxContent.name + ": Contact Form";
  let reqUrl = "/api/mail";
  let submit;

  // What: Setup the default form data object
  // Why:  Define JSON payload for sending emails
  // How:  Initiate attributes with empty strings and then bind values
  //       from form submission to keys using svelte
  let formData = {
    email: "",
    firstname: "",
    lastname: "",
    subject: "",
    ip: "",
    message: "",
  };

  // What: Posts the form submissions to our api
  // Why:  Deploy emails using WebWorkers instead of a server
  // TODO:
  //  * develop API route for email sends
  //  * setup Cloudflare worker to fetch from API route
  //  * complete serverless function for sending contact request
  //  * develop Sendgrid API for deploying emails from Webworker
  async function handleOnSubmit() {
    // dispatch("eventPostMail", { text: "Pass mail body to API" });
    formData.subject = subject;

    // Use fetch method to GET ip data for request options
    // await fetch("https://jsonip.com", { mode: "cors" })
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     formData.ip = data.ip;
    //   });

    // Structure the request options
    const reqOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    };

    // Use fetch method to PUT the form data on our API route
    submit = await fetch(reqUrl, reqOptions)
      .then((resp) => {
        // Parse Response instance data into a useable
        // format using ".json()"
        // resp.json();
        console.log("resp: ", resp);
      })
      .then((data) => {
        // Log the parsed version of the JSON returned
        // from the endpoint.
        if (data) {
          console.log("Success: ", data); // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
</script>

<section class="section flex flex-wrap items-center justify-between">
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <div class="row md:flex md:flex-wrap">
      <div class="w-full md:w-9/12 mb-lg-0 px-0 sm:pr-10">
        <div class="rounded-xl overflow-hidden shadow-md bg-secondary">
          <div class="mx-2 md:mx-6 mb-2 md:mb-3 my-1">
            <h2 class="header text-xl md:text-2xl lg:text-3xl my-6">
              {#if tname.length > 1}
                <span class="accent" style="opacity: 1;"
                  >{tname[0].toUpperCase()}
                </span><span>{tname[1].toUpperCase()}</span>
              {:else}
                {title}
              {/if}
            </h2>
            <p class="mb-10">{articleBody}</p>
            <form
              id="contactform"
              method="post"
              action={reqUrl}
              class="w-full max-w-lg"
              on:submit|preventDefault={handleOnSubmit}
            >
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide header mb-2"
                    for="firstName"
                  >
                    First Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    bind:value={formData.firstname}
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide header mb-2"
                    for="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    bind:value={formData.lastname}
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide header mb-2"
                    for="email"
                  >
                    E-mail
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    name="email"
                    type="email"
                    placeholder="Jane.Doe@example.net"
                    required
                    bind:value={formData.email}
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide header mb-2"
                    for="messageBody"
                  >
                    Message
                  </label>
                  <textarea
                    class=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
                    name="message"
                    placeholder="Write something here..."
                    bind:value={formData.message}
                  />
                </div>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                  <button class="btn-outline mb-6 px-4 rounded" type="submit">
                    Send
                  </button>
                </div>
                <div class="block tracking-wide header mb-6 px-4">
                  {#if submit}
                    {#await submit}
                      <p>Sending...</p>
                    {:then resp}
                      <!-- <pre>🎉 Done! Response: WIP}</pre> -->
                    {/await}
                  {/if}
                </div>
                <div class="md:w-2/3" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- ------------------------------------------------------- -->
      <!-- Set the aside as the last column in the row             -->
      <!-- ------------------------------------------------------- -->
      <div class="w-full md:w-3/12 mb-lg-0 px-0">
        <Aside {allPosts} {catgPosts} {tagsPosts} {socialLinks} />
      </div>
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
