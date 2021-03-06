---
title: Update a Story
---

Can be used to build migrations, updates if you changed your component structure, or if you only need to do a bulk action on all your content items. 

| Property | Description |
|---|---|
| `story` | Your full [story object](#core-resources/stories/the-story-object) |
| `force_update` | If '1' it will overwrite a locked story |
| `release_id` | Numeric ID of release (optional) |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/2141" httpMethod="PUT" :requestObject='{"story":{"name":"Story Name","slug":"story-name","id":2141,"content":{"component":"page","body":[]}},"force_update": 1}'></RequestExample>

You will receive a fully loaded [story object](#core-resources/stories/the-story-object) as response.
