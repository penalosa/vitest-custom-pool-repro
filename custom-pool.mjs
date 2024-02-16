export default (ctx) => {
  return {
    name: 'custom',
    async runTests(specs) {
      console.log(JSON.stringify(specs[0][0].config.poolOptions, null, 2));
    },
  };
};
