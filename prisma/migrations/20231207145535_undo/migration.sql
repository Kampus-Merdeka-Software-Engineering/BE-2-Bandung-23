/*
  Warnings:

  - Added the required column `menu_id` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes_menu_id` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shipping_cost` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotal` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sum_menu_id` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Transaction` ADD COLUMN `menu_id` INTEGER NOT NULL,
    ADD COLUMN `notes_menu_id` TEXT NOT NULL,
    ADD COLUMN `shipping_cost` INTEGER NOT NULL,
    ADD COLUMN `subtotal` INTEGER NOT NULL,
    ADD COLUMN `sum_menu_id` INTEGER NOT NULL,
    ADD COLUMN `total` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_menu_id_fkey` FOREIGN KEY (`menu_id`) REFERENCES `Menu`(`menu_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
