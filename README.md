# twilio (SMS service)

https://www.twilio.com/console

```bash
curl 'https://api.twilio.com/2010-04-01/Accounts/ACd0341f061b31e4078ae0886fb7f66a31/Messages.json' -X POST \
--data-urlencode 'To=+886984003918' \
--data-urlencode 'From=+12052368925' \
--data-urlencode 'Body=訊息測試' \
-u ACd0341f061b31e4078ae0886fb7f66a31:e7127cdd0e7dd0a00abe58f02d428717
```


```bash
201 - CREATED - The request was successful. We created a new resource and the response body contains the representation.
{
    "sid": "SMcdd080af5fa949568dd53eb57718f0a2",
    "date_created": "Wed, 28 Mar 2018 01:44:31 +0000",
    "date_updated": "Wed, 28 Mar 2018 01:44:31 +0000",
    "date_sent": null,
    "account_sid": "ACd0341f061b31e4078ae0886fb7f66a31",
    "to": "+886984003918",
    "from": "+12052368925",
    "messaging_service_sid": null,
    "body": "Sent from your Twilio trial account - 訊息測試",
    "status": "queued",
    "num_segments": "1",
    "num_media": "0",
    "direction": "outbound-api",
    "api_version": "2010-04-01",
    "price": null,
    "price_unit": "USD",
    "error_code": null,
    "error_message": null,
    "uri": "/2010-04-01/Accounts/ACd0341f061b31e4078ae0886fb7f66a31/Messages/SMcdd080af5fa949568dd53eb57718f0a2.json",
    "subresource_uris": {
        "media": "/2010-04-01/Accounts/ACd0341f061b31e4078ae0886fb7f66a31/Messages/SMcdd080af5fa949568dd53eb57718f0a2/Media.json"
    }
}
```

inspired by: https://swiftcafe.io/post/hacker
