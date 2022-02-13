export async function onRequestPost({ request, env }) {
  try {
    const reqUrl = "https://api.sendgrid.com/v3/mail/send";
    const ADDR = { email: env.SENDGRID_EMAIL, name: env.SENDGRID_NAME };
    const GEO = {
      'Provider': request.cf.asOrganization || "",
      'Data Center': request.cf.colo || "",
      'Country': request.cf.country || "",
      'Time Zone': request.cf.timezone || "",
      'Region': request.cf.region || "",
      'City': request.cf.city || "",
    }

    // Convert encoded formData (input) to JSON (output)
    // https://developers.cloudflare.com/workers/examples/accessing-the-cloudflare-object
    // NOTE: Allows multiple values per key
    let input = await request.formData();
    let output = {};
    for (let [key, value] of input) {
      let tmp = output[key];
      if (tmp === undefined) {
        output[key] = value;
      } else {
        output[key] = [].concat(tmp, value);
      }
    }

    // Create forme message table
    let message = `<br />
      <table border=1px cellpadding=3px 
        style='border-collapse: collapse; font-family: sans-serif; font-size: 14px'>
        <tr>
          <td style='padding-right: 25px'><strong>Requestor</strong></td>
          <td style='padding-right: 10px'>${output.lastname}, ${output.firstname} 
            (<a href='mailto:${output.email}'>${output.email}</a>)</td>
        </tr>
        <tr>
          <td style='padding-right: 25px'><strong>Message</strong></td>
          <td style='padding-right: 10px'>${output.message}</td>
        </tr>`;

    // Append GEO object to message table
    for (let key in GEO) {
      message += `<tr>
          <td style='padding-right: 25px'><strong>${key}</strong></td>
          <td style='padding-right: 10px'>${GEO[key]}</td>
        </tr>`;
    }
    message += "</table>";

    // Setup the SengGrid post body
    const reqData = {
      personalizations: [{ to: [ADDR] }],
      from: ADDR,
      subject: output.subject,
      // reply_to: ADDR,
      // template_id: "", // add template ID (created inside SendGrid)
      content: [
        {
          type: "text/html",
          value: message,
        },
      ],
    };

    // Structure the request options
    const reqOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.SENDGRID_TOKEN}`,
        'Content-Type': "application/json",
      },
      body: JSON.stringify(reqData),
    };

    const submit = await fetch(reqUrl, reqOptions);
    return submit;
  } catch (err) {
    return new Response("Error parsing JSON content", {
      status: 400,
      statusText: "JSON parsing error!",
    });
  }
}
