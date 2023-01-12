import userResolvers from "./user";
import conversationResolvers from "./conversations";
import scalarResolvers from "./scalars";
import messageResolvers from "./message";
import merge from "lodash.merge";

const resolvers = merge(
  {},
  userResolvers,
  conversationResolvers,
  scalarResolvers,
  messageResolvers
);

export default resolvers;
