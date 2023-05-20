-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2023 at 08:52 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'juneid gaffar', 'juneidgaff@gmail.com', '$2a$08$opQ6kknbObkWC8c.dlj2cu6EfJSZBxXm1MYHKKK.y94bLLs9pGtqC'),
(2, 'Sidi Sangare', 'sidisangare440@gmail.com', '$2a$08$cB3uLZgYE.lbfB1Qeo43jeqQh4g/aWI7RANli.ADfgVgru7IaJgj2'),
(3, 'Mamadou Sangare', 'msang007@gmail.com', '$2a$08$nEXh.TlPCgrNePRT3nwE4ePe1zk7Mpn.sE5hX7MucGhfNogkel1ve'),
(4, 'Mamadou Diaw', 'MamadDiaw55@gmail.com', '$2a$08$IuxOQ2w1RTZjiZrWK478YOWfB0lIOcQEcfgBGjr.oyVc1RvOrwCHe'),
(5, 'Mehdi', 'Mehdi@gmail.com', '$2a$08$nLj.XQREv9oCtQ0Xm6abM.Q/aH9BJMl56AQBZ/Q2I/0G8ZiKzHcuq'),
(6, 'Lobna Kaci', 'LobnaKac007@gmail.com', '$2a$08$kpo1Wy/YqqRcwCgac7ZlvOMAnmtCghXopWgL45AWBsjT.WLLRRFs.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
