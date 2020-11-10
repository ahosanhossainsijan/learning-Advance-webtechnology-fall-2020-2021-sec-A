-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2020 at 08:44 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node1`
--

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id` int(12) NOT NULL,
  `cname` varchar(100) NOT NULL,
  `jobname` varchar(100) NOT NULL,
  `joblocation` varchar(100) NOT NULL,
  `salary` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(12) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `companyname` varchar(100) NOT NULL,
  `contactno` varchar(100) NOT NULL,
  `type` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `password`, `companyname`, `contactno`, `type`) VALUES
(1, 'Sijan', 'sijan', '12345', 'tech', '12456789', 1),
(0, 'Sijan Ahosan', 'ahosan', '123', 'tech', '985542', 1),
(0, 'Sijan Ahosan', 'ahosan', '123', 'tech', '985542', 1),
(0, 'Sijan Ahosan', 'ahosan', '123', 'tech', '985542', 1),
(0, 'Sijan Ahosan', 'ahosan', '1234', 'tech', '985542', 2),
(0, 'Sijan Ahosan', 'ahosan', '1234', 'tech', '985542', 2),
(0, 'Sijan Ahosan', 'ahosan', '1234', 'tech', '985542', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
