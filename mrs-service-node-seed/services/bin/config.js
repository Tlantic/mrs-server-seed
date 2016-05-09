module.exports={
  port:8000,
  serviceName:"seed",
  seed: {
    bucket: 'mrs',
    designViews: 'seed',
    type: 'seed',
    defaultViews: {
      bucketName:'mrs',
      design: 'seed',
      viewQuery: 'by_appId'
    }
  }
};
