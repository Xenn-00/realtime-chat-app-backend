import { GraphQLScalarType } from "graphql";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  parseValue(value: any) {
    return new Date(value);
  },
  serialize(value: any) {
    return value.toISOString();
  },
});

const resolvers = {
  Date: dateScalar,
};

export default resolvers;
