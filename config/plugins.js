module.exports = {
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 1000,
      introspection: true,
      apolloServer: {
        tracing: true,
      },
    },
  },
};
