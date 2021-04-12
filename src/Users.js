import React from 'react'
import AWS from 'aws-sdk'
function Users() {
//     const BUCKET_NAME = "vireksbucket"
//     AWS.config.update({
//         accessKeyId: "AKIA3RTTNEZTEPI67TVK",
//         secretAccessKey: "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"
//       })
//       const s3 = new AWS.S3({
//         apiVersion: '2006-03-01',
//         params: {Bucket: BUCKET_NAME}
//       });
//       let get_keys_params = {
//         Bucket: BUCKET_NAME
//       }
//       let get_keys_params = {
//         Bucket: BUCKET_NAME,
//         Key: "User1.json"
//       }
//     //   s3.getObject(get_pic_params, function(err, data) {
//     //     if (err) {
//     //       console.log('There was an error getting a pic: ' + err.message);
//     //     } else {
//     //       console.log(data.Body.toString('utf-8'));
//     //     }
//     //   });
//       s3.listObjectsV2(get_pic_params, (err, data) => {
//         if (err) throw err;
//         console.log(data.Contents);
//        });
// //     const AWS = require('aws-sdk/global');

//  const S3 = require('aws-sdk/clients/s3');

//  AWS.config.update({ accessKeyId: 'AKIA3RTTNEZTEPI67TVK', secretAccessKey: 'vBEhOMuAV7t8Dtws1AQxSLlfT8LLozMfJ/aqaDs ', region: 'us-east-1' });
//  const s3 = new AWS.S3();

// const params = {
//   Bucket: 'vireksbucket',
//   Delimiter: '',
//   Prefix: '',
// };

//   s3.listObjectsV2(params, (err, data) => {
//   if (err) throw err;
//   console.log(data.Contents);
//  })
    return (
      
      <div><h1>Virtualization Project</h1></div>
    );
  }
  
  export default Users;