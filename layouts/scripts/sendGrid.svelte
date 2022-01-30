<script context="module">
  export function sendEmail(reqUrl, reqQry) {
    // TODO: resolve access to Environmental Variables
    return "work in progress!";
    if (!reqQry.email) {
      // return Response.redirect(url); // handle errors here
      return "Data incomplete!";
    }

    let message = "<p><strong>Client's Query</strong></p>";
    message += "<p><strong>Client</strong>: " + reqQry.lastname + ", ";
    message += reqQry.firstname + " (" + reqQry.email + ")</p>";
    message += "<p><strong>Subject</strong>: " + reqQry.subject + "</p>";
    message += "<p><strong>Message</strong>: " + reqQry.message + "</p>";

    const emailData = JSON.stringify({
      personalizations: [
        {
          to: [{ email: SENDGRID_TO }], // recipient of email
          dynamic_template_data: {
            name: "", // dynamic variable value for SendGrid Template
          },
        },
      ],
      from: {
        email: SENDGRID_ADDR, // address that you‘ve registered on sendgrid
        name: SENDGRID_NAME,
      },
      reply_to: { email: reqQry.email },
      subject: reqQry.subject,
      content: [
        {
          type: "text/html",
          value: message,
        },
      ],
      template_id: "", // add template ID (created inside SendGrid)
      // they can use variables
    });
    // console.log(emailData);

    // Structure the request options
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + SENDGRID_API_KEY,
      },
      body: emailData,
    };
    // console.log(reqOptions);

    // const email = await fetch(reqUrl, reqOptions);
    const email = "Testing...";
    return email;
  }
</script>
