---
title: Getting Started
description: A guide in my new Starlight docs site.
---

## Accessing the API

To use the data of the Slimepedia API you simply need to make a GET http request using the link below followed by the desired endpoint.

```
https://slimepedia-api.vercel.app/api/{endpoint}
```

The endpoint will dictate what type of data you will be receiving.

#### Example:
The following is a simple example on how to make a Slimepedia API call using JavaScript fetch.

``` js
fetch("https://slimepedia-api.vercel.app/api/slimes/7")
    .then(response => response.json())
```
In this example, the endpoint is `slimes/7`, meaning the expected data to be received is from the slime of `"id": 7`. The response is structured as a JSON object, as follows:

``` json
{
  "id": 7,
  "name": "Crystal Slime",
  "diet": [
    "Vegetables"
  ],
  "favoriteFood": "Odd Onion",
  "habitat": "Indigo Quarry",
  "features": [
    "Produces sharp crystal spikes",
    "Beautiful and dangerous"
  ]
}
```

You can check all the endpoints in the page [Endpoints Reference]().