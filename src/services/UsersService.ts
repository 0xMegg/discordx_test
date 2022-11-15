import { Prisma, User } from "@prisma/client";
import { singleton } from "tsyringe";
import { prisma } from "../database/prisma.js";

@singleton()
export class UsersService {
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data });
  }
}
