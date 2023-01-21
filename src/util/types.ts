import { Prisma, PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";
import { PubSub } from "graphql-subscriptions";
import { Context } from "graphql-ws/lib/server";
import {
  conversationPopulated,
  participantPopulated,
} from "../graphql/resolvers/conversations";
import { messagePopulated } from "../graphql/resolvers/message";

// Server config

export interface GraphQLContext {
  session: Session | null;
  prisma: PrismaClient;
  pubsub: PubSub;
}

export interface SubcriptionContext extends Context {
  connectionParams: {
    session?: Session;
  };
}

export interface Session {
  user?: User;
  expires: ISODateString;
}
// Users

export interface User {
  id: string;
  username: string;
  image: string;
  email: string;
  emailVerified: boolean;
  name: string;
}

export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}

// Conversations

export type ConversationPopulated = Prisma.ConversationGetPayload<{
  include: typeof conversationPopulated;
}>;

export type ParticipantPopulated = Prisma.ConversationParticipantGetPayload<{
  include: typeof participantPopulated;
}>;

export interface ConversationCreatedSubsciptionPayload {
  conversationCreated: {
    conversation: ConversationPopulated;
  };
}
export interface ConversationUpdatedSubscriptionPayload {
  conversationUpdated: {
    conversation: ConversationPopulated;
  };
}

/* Messages */

export interface SendMessageArguments {
  id: string;
  conversationId: string;
  senderId: string;
  body: string;
}

export interface MessageSentSubscriptionPayload {
  messageSent: MessagePopulated;
}

export type MessagePopulated = Prisma.MessageGetPayload<{
  include: typeof messagePopulated;
}>;
