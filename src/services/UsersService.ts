import { Prisma, User } from "@prisma/client";
import { singleton } from "tsyringe";
import { prisma } from "../database/prisma.js";

@singleton()
export class UsersService {
  async createUsers(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data });
  }

  async upsertUser(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.upsert({
      where: { discordId: data.discordId },
      update: {},
      create: { displayName: data.displayName, discordId: data.discordId },
    });
  }

  async findUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return prisma.user.findUniqueOrThrow({
      where: {},
    });
  }
}
