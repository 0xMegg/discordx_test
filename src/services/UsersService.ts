import { Prisma, User } from "@prisma/client";
import { singleton } from "tsyringe";
import { prisma } from "../database/prisma.js";
import "reflect-metadata";

@singleton()
export class UsersService {
  async createUsers(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data });
  }
}
