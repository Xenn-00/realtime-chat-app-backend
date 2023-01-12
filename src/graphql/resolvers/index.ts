import userResolvers from "./user";
import conversationResolvers from "./conversations";
import scalarResolvers from "./scalars";
import merge from "lodash.merge";

const resolvers = merge(
  {},
  userResolvers,
  conversationResolvers,
  scalarResolvers
);

export default resolvers;
