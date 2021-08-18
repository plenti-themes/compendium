<script>
  // Aside component for search, categories, and tags
  import Aside from "./aside.svelte";
  // import { onMount } from "svelte";

  // Variables passed in from "html.svelte"
  export let idxContent, allPosts, tagsList, catgList;
  // Variables passed in from "index.svelte"
  export let title, articleBody;

  let socialLinks = idxContent.socialLinks;
  let addrFrom = "";
  let nameFrst = "";
  let nameLast = "";
  let subject = idxContent.name
  let msgBody = "";

  // TODO: complete serverless function for sending contact request
  function contactSend(addrFrom, nameFrst, nameLast, msgBody) {
    const msgData = JSON.stringify({
      addr: addrFrom,
      frst: nameFrst,
      last: nameLast,
      subj: subject,
      body: msgBody,
    });

    console.log(msgData);

    // Setup XML connection request
    const API_URL = "https://";
    const xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    // Send message
    xhr.open("POST", API_URL + "mail/send");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(msgData);
  }
</script>

<section class="section flex flex-wrap items-center justify-between">
  <div class="w-0 md:w-1/12 xl:w-2/12" />
  <div class="w-full md:w-10/12 xl:w-8/12 px-2 md:px-0">
    <div class="row md:flex md:flex-wrap">
      <div class="w-full md:w-9/12 mb-lg-0 px-0">
        <div class="">
          <h2 class="header text-2xl mt-0 mb-6">{title}</h2>
          <p class="mb-10">{articleBody}</p>
        </div>
        <form id="contactform" class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide header mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                bind:value={nameFrst}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide header mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                bind:value={nameLast}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide header mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder="Jane.Doe@example.net"
                required
                bind:value={addrFrom}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide header mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                class=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
                id="message"
                placeholder="Write something here..."
                bind:value={msgBody}
              />
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <button
                class="btn-outline mb-6 px-4 rounded"
                id="submit"
                type="submit"
                on:click={contactSend}
              >
                Send
              </button>
            </div>
            <div class="md:w-2/3" />
          </div>
        </form>
      </div>

      <!-- ------------------------------------------------------- -->
      <!-- Set the aside as the last column in the row             -->
      <!-- ------------------------------------------------------- -->
      <div class="w-full md:w-3/12 mb-lg-0 px-0">
      <Aside {allPosts} {socialLinks} {tagsList} {catgList} />
      </div>
    </div>
  </div>
  <div class="w-0 md:w-1/12 xl:w-2/12" />
</section>
