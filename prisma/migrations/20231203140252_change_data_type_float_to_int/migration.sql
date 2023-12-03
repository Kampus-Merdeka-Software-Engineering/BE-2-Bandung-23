-- AlterTable
ALTER TABLE `menu` MODIFY `menu_price` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `transaction` MODIFY `subtotal` INTEGER NOT NULL,
    MODIFY `shipping_cost` INTEGER NOT NULL,
    MODIFY `total` INTEGER NOT NULL;
