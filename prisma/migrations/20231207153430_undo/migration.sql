/*
  Warnings:

  - You are about to drop the column `menu_id` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `notes_menu_id` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `shipping_cost` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `subtotal` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `sum_menu_id` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Transaction` DROP FOREIGN KEY `Transaction_menu_id_fkey`;

-- AlterTable
ALTER TABLE `Transaction` DROP COLUMN `menu_id`,
    DROP COLUMN `notes_menu_id`,
    DROP COLUMN `shipping_cost`,
    DROP COLUMN `subtotal`,
    DROP COLUMN `sum_menu_id`,
    DROP COLUMN `total`;
