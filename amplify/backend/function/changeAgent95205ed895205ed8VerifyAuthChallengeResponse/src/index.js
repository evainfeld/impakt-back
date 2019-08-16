/*
  this file will loop through all js modules which are uploaded to the lambda resource,
  provided that the file names (without extension) are included in the "MODULES" env variable.
  "MODULES" is a comma-delimmited string.
*/

exports.handler = async (event) => {
  const modules = process.env.MODULES.split(',');
  modules.forEach(async md => {
    const { handler } = require(md);
    return await handler(event);
  });
};