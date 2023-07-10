import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  endpoint: process.env['ENDPOINT'],
  region: process.env['REGION'],
  credentials: {
    accessKeyId: process.env['KEY'] as string,
    secretAccessKey: process.env['SECRET'] as string
  }
});

const file = Bun.file('./test.png');

const command = new PutObjectCommand({
  ACL: 'public-read',
  ContentType: file.type,
  Body: await file.arrayBuffer() as any,
  Bucket: process.env['BUCKET'],
  Key: globalThis.crypto.randomUUID()
});

const s3Response = await s3.send(command);

console.log(s3Response);
