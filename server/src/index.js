const { readFileSync } = require("fs");
const { ApolloServer, gql } = require("apollo-server");
const { prisma } = require("./generated/prisma-client");

const typeDefs = gql(readFileSync(__dirname.concat("/schema.graphql"), "utf8"));

const resolvers = {

};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { prisma }
});

server.listen().then({ url }) => {
    console.log(`Server ready at ${url}`);
}
