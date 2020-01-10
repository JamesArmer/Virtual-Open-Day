-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2019 at 05:18 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `questions`
--

-- --------------------------------------------------------

--
-- Table structure for table `cs_questions`
--

CREATE TABLE `cs_questions` (
  `qID` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `votes` int(11) NOT NULL,
  `category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cs_questions`
--

INSERT INTO `cs_questions` (`qID`, `question`, `answer`, `votes`, `category`) VALUES
(1, 'How many exams are there in first year?', '4 each semester.', 0, 'Exams'),
(2, 'What do you need to pass the year?', '40% for the year grants a third.', 0, 'General'),
(3, 'Which modules can I choose from in first year?', 'Optional modules are not available for the first year.', 0, 'Modules'),
(4, 'I have no programming experience. Will the coursework be difficult?', 'You will be taught everything from scratch, building up to being able to complete the coursework tasks.', 0, 'Coursework'),
(5, 'What are the entry requirements?', 'AAA (AAB if you have an A in computer science/computing),34-32 (5 in maths at Standard/Higher Level or GCSE maths, 5 (B) or above).', 0, 'General'),
(6, 'What is the policy when you do not meet entry requirements?', 'For offer holders not meeting the entry requirements, the decision on wether or not to admit them is done on a case by case basis.', 0, 'General'),
(7, 'What is the difference between BCS accreditation and BEng?', 'BEng has to be accredited by an outside body. However in practice they are basically identical', 0, 'General'),
(8, 'What programming languages are used in teaching?', 'In the first year the modules will cover, ARM,C,Java,PHP,SQL, and Haskell.', 0, 'Teaching'),
(9, 'What AI modules do we teach?', 'The University offers several AI modules over the 3/4 year period.', 0, 'Modules'),
(10, 'Do I need to know how to program before I come to Nottingham?', 'No, you will be taught everything from scratch, building up to being able to complete the coursework tasks.', 0, 'General'),
(11, 'How big is the CS school?', 'There are approximately 200 students per year.', 0, 'General'),
(12, 'What is the class size for teaching?', 'This depends on modules choices, class sizes can range from 20 to 200. However in the first year no modules can be chosen meaning the class size is generally about 200', 0, 'General'),
(13, 'What is the coursework load like?', 'Courseworks start out slow as an understanding of coding needs to be taught before the coursework can be assigned. This means that the coursework generally builds up towards the end of a term', 0, 'Coursework'),
(14, 'What are the contact hours like?', 'This depends on module choices. However generally there are about 18 contact hours per week. This hours are split up into lectures, labs and tutorials.', 0, 'Modules'),
(15, 'What resources are available to help me?', 'In the first year there are weekly meetings with a tutor in small groups. As well as this student services has resources to help you. ', 0, 'General'),
(16, 'What happens if I miss a lecture/lab/tutorial?', 'This is dependent on module choice, however most modules have a Moodle page where they publish lecture notes, lab instructions, and tutorial worksheets. As well as this a lot of lecturers record their lectures.', 0, 'Teaching'),
(17, 'Do I need a laptop?', 'No. They are not necessary in lectures, and labs are held in a computer lab that has desktops for students to use. As well as this if a laptop is necessary they can be borrowed from the university.', 0, 'General'),
(18, 'How many hours of work will I have?', 'One credit is typically equivalent to 10 hours so approximately 1200 hours for the year, or 600 hours per semester. ', 0, 'General'),
(19, 'How many exams will I have?', 'This depends on modules although approximately 4 per semester.', 0, 'Exams'),
(20, 'Is there a preference between Windows, MacOS, or Linux.?', 'No, there are virtual machines setup that give access to any tools necessary for a coursework.', 0, 'General');




--
-- Indexes for dumped tables
--

--
-- Indexes for table `cs_questions`
--
ALTER TABLE `cs_questions`
  ADD PRIMARY KEY (`qID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cs_questions`
--
ALTER TABLE `cs_questions`
  MODIFY `qID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
