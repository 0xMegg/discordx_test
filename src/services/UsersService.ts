import { Prisma, User } from "@prisma/client";
import { singleton } from "tsyringe";
import { prisma } from "../database/prisma";

@singleton()
export class UsersService {
  async createUsers(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data });
  }

  async upsertUser(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.upsert({
      where: { discordId: data.discordId },
      update: {},
      create: { discordId: data.discordId },
    });
  }

  async findUserName(discordId: string): Promise<User | null> {
    const displayName = await prisma.user.findUnique({
      where: { discordId: discordId },
    });
    return displayName;
  }
}
