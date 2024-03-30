// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {


// Parse the query params
  let mode = event.queryStringParameters["hub.mode"];
  let token = event.queryStringParameters["hub.verify_token"];
  let challenge = event.queryStringParameters["hub.challenge"];

let statusCode = 200;
    // Check if a token and mode is in the query string of the request
   if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === "123-abc-456") {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
    }
       else { statusCode = 400}
  }

  return {
      statusCode,
      body: JSON.stringify({ message: `OK` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
