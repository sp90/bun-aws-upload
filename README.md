# bun-aws-upload

This is the replicate the error that is happening in the `@aws-sdk/client-s3` package

Was found in the canary version of bun 🍞 `0.6.14`

To install dependencies:

* Install - `bun install`
* Configure `.env` with credentials for your s3 bucket
* Run - `bun run index.ts`


This is the error i recieved

```bash
Documents/dev/bun-aws-upload via 🍞 v0.6.14 via  v20.0.0 
❯ bun run index.ts
[0.06ms] ".env"
TimeoutError: Connection timed out after 0 ms
```

What should happen is that it should upload in this example i use the `bun.file` api which ofc makes it unable to run in node. 

But essentially reading a file in node and doing the same works.

I found a similar issue mentioned in the deno repo

Link to the ticket: https://github.com/denoland/deno/issues/18932
Link to the resolve on their end: https://github.com/denoland/deno/issues/18932#issuecomment-1530466970

Maybe they're related maybe they they're not.