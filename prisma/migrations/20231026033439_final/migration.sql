-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Movie" (
    "movie_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "story" INTEGER NOT NULL,
    "characters" INTEGER NOT NULL,
    "acting" INTEGER NOT NULL,
    "action" INTEGER NOT NULL,
    "cinematography" INTEGER NOT NULL,
    "overall" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Movie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
