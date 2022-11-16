import { PrismaPromise, User } from "@prisma/client";
import { singleton } from "tsyringe";
import { prisma } from "../database/prisma";
import { UsersService } from "./UsersService";

@singleton()
export class MimixService {
  constructor(private usersService: UsersService) {}

  // mint(discordId: string, amount: number): Promise<User> {
  //   const userData = this.usersService.findUserName(discordId);
  //   const displayName = userData.displayName;
  //   return prisma.user.upsert({
  //     where: { discordId },
  //     update: { mimix: { increment: amount } },
  //     create: { displayName, discordId, mimix: amount },
  //   });
  // }
  mint(discordId: string, amount: number): Promise<User> {
    return prisma.user.upsert({
      where: { discordId },
      update: { mimix: { increment: amount } },
      create: { discordId, mimix: amount },
    });
  }

  // show(discordId: string): PrismaPromise<User> {
  //   return prisma.user.upsert({
  //     where: { discordId },
  //     update: {},
  //     create: { name, discordId }
  //   });
  // }

  // async give(amount: number, sender: string, receiver: string): Promise<void> {
  //   const { mimix } = await this.usersService.upsertUser({ discordId: sender });

  //   if (amount > points) {
  //     throw new Error(
  //       `Not enough BANANA points. <@${sender}> has ${points} BANANA, you tried to give <@${receiver}> ${amount} BANANA`
  //     );
  //   }

  //   await prisma.$transaction([
  //     this.add(sender, -amount),
  //     this.add(receiver, amount),
  //     prisma.pointTransaction.create({
  //       data: {
  //         amount,
  //         sender: {
  //           connect: { discordId: sender }
  //         },
  //         receiver: {
  //           connect: { discordId: receiver }
  //         }
  //       }
  //     })
  //   ]);

  //   PointLogger.send(`[Give Transaction] - ${sender} gave ${receiver} **${amount}** BANANA`);
  // }
}
