import { Client } from "minio";

export const minioClient = new Client({
  endPoint: "localhost",
  port: 9000,
  useSSL: false,
  accessKey: "minioadmin",
  secretKey: "minioadmin",
});

export const getBucket = async (bucketName: string) => {
  try {
    const exists = await minioClient.bucketExists(bucketName);
    if (!exists) {
      await minioClient.makeBucket(bucketName);
      console.log(`Bucket "${bucketName}" created successfully.`);
    } else {
      console.log(`Bucket "${bucketName}" already exists.`);
    }
  } catch (error) {
    console.error(`Error in getBucket:`, error);
    throw error;
  }
};
