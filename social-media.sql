-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 25, 2022 at 04:51 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `social-media`
--

-- --------------------------------------------------------

--
-- Table structure for table `follow`
--

CREATE TABLE `follow` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `followUserID` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `follow`
--

INSERT INTO `follow` (`id`, `userID`, `followUserID`, `created_at`) VALUES
(21, 11, 3, '2022-09-24 18:36:57');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `postID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `postID`, `userID`, `created_at`) VALUES
(222, 28, 11, '2022-09-23 18:21:18'),
(224, 29, 11, '2022-09-23 18:46:21'),
(226, 28, 3, '2022-09-23 18:49:22'),
(227, 29, 3, '2022-09-23 18:49:32'),
(228, 27, 3, '2022-09-23 18:49:34'),
(229, 3, 11, '2022-09-24 18:42:12'),
(230, 2, 11, '2022-09-24 18:42:13');

-- --------------------------------------------------------

--
-- Table structure for table `murmurs`
--

CREATE TABLE `murmurs` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `murmur` varchar(255) NOT NULL,
  `likeCount` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `murmurs`
--

INSERT INTO `murmurs` (`id`, `userID`, `murmur`, `likeCount`, `created_at`) VALUES
(2, 3, 'Hello MurMurs', 2, '2022-09-22 20:33:27'),
(3, 3, 'Hello MurMurs', 1, '2022-09-22 20:34:28'),
(4, 11, 'Hello Ashik', 0, '2022-09-23 13:38:22'),
(5, 11, 'Hello Ashik 1', 0, '2022-09-23 13:38:41'),
(6, 11, 'Hello Ashik 2', 0, '2022-09-23 13:38:46'),
(7, 11, 'Hello Ashik 3', 0, '2022-09-23 13:38:50'),
(8, 11, 'Hello Ashik 4', 0, '2022-09-23 13:38:55'),
(9, 11, 'Hello Ashik 5', 0, '2022-09-23 13:39:00'),
(10, 11, 'Hello Ashik 5', 0, '2022-09-23 13:39:03'),
(11, 11, 'Hello Ashik 7', 0, '2022-09-23 13:39:10'),
(12, 11, 'Hello Ashik 8', 0, '2022-09-23 13:41:01'),
(13, 11, 'Hello Ashik 9', 0, '2022-09-23 13:41:06'),
(14, 11, 'Hello Ashik 10', 0, '2022-09-23 13:41:12'),
(15, 11, 'Hello Ashik 11', 0, '2022-09-23 13:41:17'),
(16, 11, 'Hello Ashik 12', 0, '2022-09-23 13:41:21'),
(17, 11, 'Hello Ashik 13', 0, '2022-09-23 13:42:49'),
(18, 11, 'Hello Ashik 14', 0, '2022-09-23 13:42:55'),
(19, 11, 'Hello Ashik 15', 0, '2022-09-23 13:42:59'),
(20, 11, 'as', 0, '2022-09-23 13:43:27'),
(21, 11, 'hello dispatch', 0, '2022-09-23 15:18:14'),
(22, 11, 'hello dispacth', 0, '2022-09-23 15:19:07'),
(23, 11, 'helo ashik dispatch', 0, '2022-09-23 15:20:16'),
(24, 11, 'hellooo kbe jabooo', 0, '2022-09-23 15:21:24'),
(25, 11, 'hello test', 0, '2022-09-23 15:22:17'),
(26, 11, 'hello test12', 0, '2022-09-23 15:25:00'),
(27, 11, 'hello test12hello test12', 1, '2022-09-23 15:26:44'),
(28, 11, 'kyc', 2, '2022-09-23 15:29:22'),
(29, 11, 'kyc ashik', 2, '2022-09-23 15:30:03');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `userName` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `password` varchar(55) NOT NULL,
  `followerCount` int(11) NOT NULL,
  `followingCount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `userName`, `email`, `created_at`, `password`, `followerCount`, `followingCount`) VALUES
(3, 'ashik', 'ashik12', 'ashik@gmail.com', '2022-09-23 01:35:34', '123456', 1, 0),
(11, 'ashik mahmud', 'ashik1012@gmail.com', 'ashik1012@gmail.com', '2022-09-23 17:53:54', '123456', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `murmurs`
--
ALTER TABLE `murmurs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `follow`
--
ALTER TABLE `follow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=231;

--
-- AUTO_INCREMENT for table `murmurs`
--
ALTER TABLE `murmurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
