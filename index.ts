import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.BucketV2("pos-rocketseat-first-bucket", {
	bucket: "pos-rocketseat-first-bucket",
	tags: {
		IAC: "true",
	},
});

const ecr = new aws.ecr.Repository("pos-rocketseat-first-ecr", {
	name: "pos-rocketseat-first-ecr",
	imageTagMutability: "IMMUTABLE",
	tags: {
		IAC: "true",
	},
});

// Export the name of the bucket
export const bucketName = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
