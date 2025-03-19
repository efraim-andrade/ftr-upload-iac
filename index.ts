import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.BucketV2("pos-rocketseat-first-bucket", {
	bucket: "pos-rocketseat-first-bucket",
	tags: {
		IAC: "true",
	},
});

// const secondBucket = new aws.s3.BucketV2("pos-rocketseat-second-bucket", {
// 	bucket: "pos-rocketseat-second-bucket",
// 	tags: {
// 		IAC: "true",
// 	},
// });

const ecr = new aws.ecr.Repository("pos-rocketseat-first-ecr", {
	name: "pos-rocketseat-first-ecr",
	imageTagMutability: "IMMUTABLE",
	tags: {
		IAC: "true",
	},
});


export const firstBucketName = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

// export const secondBucketName = secondBucket.id;
// export const secondBucketInfo = secondBucket.bucket;
// export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
