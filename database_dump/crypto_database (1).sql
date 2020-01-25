-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2020 at 06:17 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crypto_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `global_status`
--

CREATE TABLE `global_status` (
  `status_id` int(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status_code` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `global_status`
--

INSERT INTO `global_status` (`status_id`, `description`, `status_code`) VALUES
(1, 'Unactive User', 0),
(2, 'Active User', 1),
(5, 'two factor authentication disabled', 3),
(6, 'two factor authentication enabled', 4),
(7, 'Purchase Transaction ', 5),
(8, 'Withdraw Transaction ', 6),
(9, 'Transaction Pending', 7),
(10, 'Transaction Approved', 8),
(11, 'Transaction Declined', 9);

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `txn_id` int(10) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `in_amount` varchar(255) NOT NULL DEFAULT '0',
  `out_amount` varchar(255) NOT NULL DEFAULT '0',
  `in_currency` varchar(255) DEFAULT NULL,
  `out_currency` varchar(255) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`txn_id`, `user_id`, `in_amount`, `out_amount`, `in_currency`, `out_currency`, `created`, `status`) VALUES
(4, '2', '45.25', '2354.23659', 'USD', 'BTC', '2020-01-25 17:02:17', '8'),
(5, '2', '6.17', '8.298', 'USD', 'ETH', '2020-01-25 17:08:07', '8');

-- --------------------------------------------------------

--
-- Table structure for table `social_links`
--

CREATE TABLE `social_links` (
  `social_link_id` int(100) NOT NULL,
  `user_id` int(100) DEFAULT NULL,
  `links` varchar(255) DEFAULT NULL COMMENT 'Each link is separated by semicolon(;)'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `txn_id` int(10) NOT NULL,
  `txn_no` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `in_amount` varchar(255) DEFAULT NULL,
  `out_amount` varchar(255) DEFAULT NULL,
  `in_currency` varchar(255) DEFAULT NULL,
  `out_currency` varchar(255) DEFAULT NULL,
  `txn_type` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `txn_type_id` varchar(255) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`txn_id`, `txn_no`, `user_id`, `in_amount`, `out_amount`, `in_currency`, `out_currency`, `txn_type`, `description`, `txn_type_id`, `created`, `status`) VALUES
(2, 'PUR1579971737', '2', '45.25', '2354.23659', 'USD', 'BTC', '5', NULL, '4', '2020-01-25 17:02:17', '8'),
(3, 'PUR1579972087', '2', '6.17', '8.298', 'USD', 'ETH', '5', '8.298ETH Purchased for 6.17USD', '5', '2020-01-25 17:08:07', '8');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(100) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `citizenship` varchar(255) DEFAULT NULL,
  `investment_amount` varchar(255) DEFAULT NULL,
  `two_factor_auth_status` int(10) NOT NULL DEFAULT '3' COMMENT '3: disable;4:enable',
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(10) NOT NULL DEFAULT '0',
  `login_status` int(10) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `first_name`, `last_name`, `date_of_birth`, `phone`, `country`, `citizenship`, `investment_amount`, `two_factor_auth_status`, `email`, `password`, `created`, `status`, `login_status`) VALUES
(1, 'John', 'Doe', NULL, NULL, NULL, NULL, NULL, 3, 'johnDoe@gmail.com', 'Abcd@123', '2019-12-23 21:20:56', 0, 0),
(2, 'Rupam', 'Jana', '--', '9958745632', '', '', '', 3, 'developer.rupam@gmail.com', 'Abcd@123', '2020-01-13 22:27:55', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `global_status`
--
ALTER TABLE `global_status`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`txn_id`);

--
-- Indexes for table `social_links`
--
ALTER TABLE `social_links`
  ADD PRIMARY KEY (`social_link_id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`txn_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `global_status`
--
ALTER TABLE `global_status`
  MODIFY `status_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `txn_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `social_links`
--
ALTER TABLE `social_links`
  MODIFY `social_link_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `txn_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
