-- CreateTable
CREATE TABLE "Chraracters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mapsId" INTEGER NOT NULL,

    CONSTRAINT "Chraracters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "Xaxis1" INTEGER NOT NULL,
    "Xaxis2" INTEGER NOT NULL,
    "Yaxis1" INTEGER NOT NULL,
    "Yaxis2" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Position_characterId_key" ON "Position"("characterId");

-- AddForeignKey
ALTER TABLE "Chraracters" ADD CONSTRAINT "Chraracters_mapsId_fkey" FOREIGN KEY ("mapsId") REFERENCES "Maps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Chraracters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
