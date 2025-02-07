-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for user
CREATE DATABASE IF NOT EXISTS `user` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `user`;

-- Dumping structure for table user.contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `submitted_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table user.contacts: ~9 rows (approximately)
INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `submitted_at`) VALUES
	(1, 'mark', 'lll@gmail.com', '786786', '2025-02-07 14:10:50'),
	(2, 'saew', 'lll@gmail.com', '63534535', '2025-02-07 14:11:58'),
	(3, 'esrwr', 'lll@gmail.com', 'erwe', '2025-02-07 15:16:21'),
	(4, 'qw', 'lll@gmail.com', 'asd', '2025-02-07 15:18:54'),
	(5, '12321', 'lll@gmail.com', '12313', '2025-02-07 15:21:36'),
	(6, '12321', 'lll@gmail.com', '1321', '2025-02-07 15:22:23'),
	(7, 'sad', 'lll@gmail.com', 'sfdsdf', '2025-02-07 15:23:07'),
	(8, 'sad', 'lll@gmail.com', 'XX', '2025-02-07 15:24:19'),
	(9, 'qwe', 'lll@gmail.com', '158', '2025-02-07 15:26:28');

-- Dumping structure for table user.datauser
CREATE TABLE IF NOT EXISTS `datauser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table user.datauser: ~3 rows (approximately)
INSERT INTO `datauser` (`id`, `email`, `password`) VALUES
	(1, 'chitmad28@gmail.com', '$2a$10$vDYXNh25NyRtIBnOrX//NOIgydtXHvfIZQ777H74KbYw7Gvx6H9K6'),
	(2, 'lll@gmail.com', '$2a$10$mJTIxoNWQOtNORP4aM3Nu.RzIvdeOsbOs9E.gIb9VSKFu0/F9whCK'),
	(3, 'sdad@gmail.com', '$2a$10$FWdqIbP8/zxGt0vRgySlaOMqg0p5eW1pJd44L7E162ljLfRy/GoSi');

-- Dumping structure for view user.users
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `users` (
	`id` INT(11) NOT NULL,
	`email` VARCHAR(1) NOT NULL COLLATE 'utf8mb4_general_ci',
	`password` VARCHAR(1) NOT NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `users`;

;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
