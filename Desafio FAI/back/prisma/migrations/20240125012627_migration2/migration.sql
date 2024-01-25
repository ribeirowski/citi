-- DropForeignKey
ALTER TABLE "UserMatch" DROP CONSTRAINT "UserMatch_matchId_fkey";

-- DropForeignKey
ALTER TABLE "UserMatch" DROP CONSTRAINT "UserMatch_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserMatch" ADD CONSTRAINT "UserMatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMatch" ADD CONSTRAINT "UserMatch_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match"("id") ON DELETE CASCADE ON UPDATE CASCADE;
