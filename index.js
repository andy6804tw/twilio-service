const accountSid = 'ACd0341f061b31e4078ae0886fb7f66a31';
const authToken = 'e7127cdd0e7dd0a00abe58f02d428717';
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
  body: 'Hello from Node測試',
  to: '+886903515504',  // Text this number
  from: '+12052368925' // From a valid Twilio number
})
  .then((message) => console.log(message.sid))
  .catch((err) => {
    console.log(err);
  });;
