-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: hrm_prod_with_data
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendancelog`
--

DROP TABLE IF EXISTS `attendancelog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendancelog` (
  `employee_id` varchar(10) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`employee_id`,`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendancelog`
--

LOCK TABLES `attendancelog` WRITE;
/*!40000 ALTER TABLE `attendancelog` DISABLE KEYS */;
/*!40000 ALTER TABLE `attendancelog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientmaster`
--

DROP TABLE IF EXISTS `clientmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientmaster` (
  `client_id` int NOT NULL AUTO_INCREMENT,
  `client_name` varchar(30) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `status` int DEFAULT NULL,
  `location` varchar(55) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`client_id`),
  KEY `fk_updated_by__clientmaster_idx` (`updated_by`),
  CONSTRAINT `fk_updated_by__clientmaster` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientmaster`
--

LOCK TABLES `clientmaster` WRITE;
/*!40000 ALTER TABLE `clientmaster` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departmentmaster`
--

DROP TABLE IF EXISTS `departmentmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departmentmaster` (
  `department_id` int NOT NULL AUTO_INCREMENT,
  `department_name` varchar(25) NOT NULL,
  `department_status` tinyint NOT NULL DEFAULT '0',
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  PRIMARY KEY (`department_id`),
  UNIQUE KEY `department_name_UNIQUE` (`department_name`),
  KEY `fk_updated_by__departmentmaster_idx` (`updated_by`),
  CONSTRAINT `fk_updated_by__departmentmaster` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departmentmaster`
--

LOCK TABLES `departmentmaster` WRITE;
/*!40000 ALTER TABLE `departmentmaster` DISABLE KEYS */;
INSERT INTO `departmentmaster` VALUES (2,'Application Development',0,NULL,NULL),(3,'web Development',0,NULL,NULL),(4,'SoftwareDeveloper',0,NULL,NULL);
/*!40000 ALTER TABLE `departmentmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `designationmaster`
--

DROP TABLE IF EXISTS `designationmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `designationmaster` (
  `designation_id` int NOT NULL AUTO_INCREMENT,
  `designation_name` varchar(25) NOT NULL,
  `department_name` varchar(25) NOT NULL,
  `designation_status` tinyint NOT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`designation_id`),
  UNIQUE KEY `designation_name_UNIQUE` (`designation_name`),
  KEY `fk_department_name__designationmaster_idx` (`department_name`),
  KEY `fk_updated_by__designationmaster_idx` (`updated_by`),
  CONSTRAINT `fk_department_name__designationmaster` FOREIGN KEY (`department_name`) REFERENCES `departmentmaster` (`department_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__designationmaster` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designationmaster`
--

LOCK TABLES `designationmaster` WRITE;
/*!40000 ALTER TABLE `designationmaster` DISABLE KEYS */;
INSERT INTO `designationmaster` VALUES (1,'Web Developer','web Development',0,'2022-05-04 00:00:00','ATPL00050'),(2,'IT Manager','web Development',1,'2022-05-04 00:00:00','ATPL00050'),(3,'Software_Developer','SoftwareDeveloper',1,'2022-05-09 00:00:00','ATPL00050'),(12,'Application developer','web Development',0,'2022-05-05 00:00:00','ATPL00050');
/*!40000 ALTER TABLE `designationmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email`
--

DROP TABLE IF EXISTS `email`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `email` (
  `id` int NOT NULL,
  `content_type` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `onboarding_id` varchar(15) DEFAULT NULL,
  `mail_bcc` varchar(255) DEFAULT NULL,
  `mail_cc` varchar(255) DEFAULT NULL,
  `mail_content` varchar(255) DEFAULT NULL,
  `mail_subject` varchar(255) DEFAULT NULL,
  `mail_to` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `employee_id` varchar(10) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_onboarding_id__email_idx` (`onboarding_id`),
  KEY `fk_employee_id__email_idx` (`employee_id`),
  CONSTRAINT `fk_employee_id__email` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_onboarding_id__email` FOREIGN KEY (`onboarding_id`) REFERENCES `onboarding` (`onboarding_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email`
--

LOCK TABLES `email` WRITE;
/*!40000 ALTER TABLE `email` DISABLE KEYS */;
/*!40000 ALTER TABLE `email` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_id`
--

DROP TABLE IF EXISTS `employee_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_id` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_id`
--

LOCK TABLES `employee_id` WRITE;
/*!40000 ALTER TABLE `employee_id` DISABLE KEYS */;
INSERT INTO `employee_id` VALUES (96);
/*!40000 ALTER TABLE `employee_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_profile`
--

DROP TABLE IF EXISTS `employee_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_profile` (
  `id` varchar(255) NOT NULL,
  `data` longblob,
  `employee_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_profile`
--

LOCK TABLES `employee_profile` WRITE;
/*!40000 ALTER TABLE `employee_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeeattendance`
--

DROP TABLE IF EXISTS `employeeattendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeeattendance` (
  `employeeattendance_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` varchar(10) DEFAULT NULL,
  `employee_first_name` varchar(25) DEFAULT NULL,
  `employee_middle_name` varchar(25) DEFAULT NULL,
  `employee_last_name` varchar(25) DEFAULT NULL,
  `date` datetime NOT NULL,
  `punch_in` datetime DEFAULT NULL,
  `punch_out` datetime DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`employeeattendance_id`),
  KEY `fk_employee_id__employeeattendance_idx` (`employee_id`),
  KEY `fk_updated_by__employeeattendance_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__employeeattendance` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__employeeattendance` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeeattendance`
--

LOCK TABLES `employeeattendance` WRITE;
/*!40000 ALTER TABLE `employeeattendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `employeeattendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeeleaves`
--

DROP TABLE IF EXISTS `employeeleaves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeeleaves` (
  `employeeleave_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` varchar(10) NOT NULL,
  `leave_type` varchar(15) NOT NULL,
  `from_date` datetime NOT NULL,
  `to_date` datetime NOT NULL,
  `number_of_days` int NOT NULL,
  `leave_reason` varchar(255) NOT NULL,
  `attachments` mediumblob,
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `manager_approval` varchar(8) DEFAULT NULL,
  `hr_approval` varchar(8) DEFAULT NULL,
  `leave_status` varchar(8) DEFAULT NULL,
  `reject_reason` varchar(100) DEFAULT NULL,
  `reporting_manager` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employeeleave_id`),
  KEY `fk_employee_id__employeeleaves_idx` (`employee_id`),
  KEY `fk_updated_by__employeeleaves_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__employeeleaves` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__employeeleaves` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeeleaves`
--

LOCK TABLES `employeeleaves` WRITE;
/*!40000 ALTER TABLE `employeeleaves` DISABLE KEYS */;
INSERT INTO `employeeleaves` VALUES (38,'ATPL00070','Annual','2022-06-14 05:30:00','2022-06-04 05:30:00',-9,'FVVB',NULL,NULL,NULL,NULL,NULL,'approved',NULL,'ATPL00090'),(46,'ATPL00070','Annual','2022-06-08 05:30:00','2022-06-10 05:30:00',3,'Sick1',NULL,NULL,NULL,NULL,NULL,'pending',NULL,'ATPL00090'),(47,'ATPL00070','Annual','2022-06-16 05:30:00','2022-06-17 05:30:00',2,'sick',NULL,NULL,NULL,NULL,NULL,'rejected','your linit of leaves exceeded','ATPL00090'),(48,'ATPL00066','Annual','2022-06-24 05:30:00','2022-06-26 05:30:00',3,'birthday',NULL,NULL,NULL,NULL,NULL,'pending',NULL,'ATPL00090');
/*!40000 ALTER TABLE `employeeleaves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeelogin`
--

DROP TABLE IF EXISTS `employeelogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeelogin` (
  `employeelogin_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `user_name` varchar(25) DEFAULT NULL,
  `Password` varchar(15) DEFAULT NULL,
  `updated_on` date DEFAULT NULL,
  `flag` tinyint DEFAULT NULL,
  `Password1` varchar(15) DEFAULT NULL,
  `Password2` varchar(15) DEFAULT NULL,
  `Password3` varchar(15) DEFAULT NULL,
  `change_password_date` datetime DEFAULT NULL,
  `Updated_by` varchar(10) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `user_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`employeelogin_id`),
  KEY `fk_employee_id__employeelogin1_idx` (`employee_id`),
  KEY `fk_updated_by__employeelogin1_idx` (`Updated_by`),
  CONSTRAINT `fk_employee_id__employeelogin1` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__employeelogin1` FOREIGN KEY (`Updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeelogin`
--

LOCK TABLES `employeelogin` WRITE;
/*!40000 ALTER TABLE `employeelogin` DISABLE KEYS */;
INSERT INTO `employeelogin` VALUES (2,'ATPL00050','sandhya.bandaru@arshaa.com','Sandhya6650','userSa6650','2022-05-09',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(5,'ATPL00058','devichandrika.k@arshaa.com','Devi6724','userDi6724','2022-05-16',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(6,'ATPL00063','muralikrishna.marthula@arshaa.com','Murali2859','userMi2859','2022-05-16',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(7,'ATPL00064','muralikrishna.miriyala@arshaa.com','MohanMurali5004','userMi5004','2022-05-16',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(8,'ATPL00065','nikhil.mudheraj@arshaa.com','Nikhil7048','userNl7048','2022-05-16',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(9,'ATPL00066','Sravya.kotakonda@arshaa.com','Sravya7879','userSa7879','2022-05-16',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(14,'ATPL00067','Mohankrishna.madanapu@arshaa.com','Mohan5898','userMn5898','2022-05-16',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(15,'ATPL00068','bhavani.gudala@arshaa.com','Bhavani8423','userBi8423','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(16,'ATPL00069','madhuri.allapureddy@arshaa.com','Madhuri6528','userMi6528','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(17,'ATPL00070','khalid.mohammad@arshaa.com','Quazi6830','userQi6830','2022-05-17',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(18,'ATPL00071','chiranjeevi.gyara@arshaa.com','Chiranjeevi7351','userCi7351','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(19,'ATPL00072','manohar.chimata@arshaa.com','Manohar5985','userMr5985','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(20,'ATPL00073','snehal.jambhulkar@arshaa.com','Snehal2851','userSl2851','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(21,'ATPL00074','saivineethkumar.sattineni@arshaa.com','SaiVineeth8249','userSh8249','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(22,'ATPL00075','vineela.lalaji@arshaa.com','VINEELA5927','userVA5927','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(23,'ATPL00076','chetan.basava@arshaa.com','CHETAN4656','userCN4656','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(24,'ATPL00077','akhil.rathipelly@arshaa.com','Akhil1607','userAl1607','2022-05-17',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(25,'ATPL00078','sriveda.annaparthi@arshaa.com','Sriveda9729','userSa9729','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(26,'ATPL00079','chandusai.gaddam@arshaa.com','Chandu4816','userCu4816','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(27,'ATPL00080','sridivya.gouraram@arshaa.com','Sri6618','userSi6618','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(28,'ATPL00081','muneendra.samsani@arshaa.com','Muneendra6664','userMa6664','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(30,'ATPL00083','maheshbabu.jangam@arshaa.com','Mahesh5585','userMh5585','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(31,'ATPL00084','sudheerkumar.agnur@arshaa.com','Sudheer7948','userSr7948','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(32,'ATPL00085','raviteja.pabbala@arshaa.com','Ravi4815','userRi4815','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(33,'ATPL00086','punnama.aravind@arshaa.com','Aravind2494','userAd2494','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(34,'ATPL00087','seethamsha.mule@arshaa.com','Seethamsha4307','userSa4307','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(35,'ATPL00088','faisal.azam@arshaa.com','Azam5328','userAm5328','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(36,'ATPL00089','meher.jyothi@arshaa.com','Meher6748','Hradmin@123','2022-05-17',1,NULL,NULL,NULL,NULL,NULL,0,'hradmin'),(37,'ATPL00090','revanth.kumar@arshaa.com','Revanth2996','userRh2996','2022-05-17',1,NULL,NULL,NULL,NULL,NULL,0,'manager'),(38,'ATPL00091','rajkumar.kolluri@arshaa.com','Rajkumar8654','userRr8654','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(39,'ATPL00092','vinod.satavalli@arshaa.com','Vinod8239','taa@123','2022-05-17',1,NULL,NULL,NULL,NULL,NULL,0,'taa'),(40,'ATPL00093','srimukha.lingampally@arshaa.com','Srimukha3526','userSa3526','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(41,'ATPL00094','dheeraj.kosaraju@arshaa.com','DHEERAJ9317','userDJ9317','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(42,'ATPL00095','rajesh.pulagora@arshaa.com','Rajesh6651','userRh6651','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee');
/*!40000 ALTER TABLE `employeelogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeemaster`
--

DROP TABLE IF EXISTS `employeemaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeemaster` (
  `employee_id` varchar(10) NOT NULL,
  `onboarding_id` varchar(15) DEFAULT NULL,
  `date_of_joining` date DEFAULT NULL,
  `first_name` varchar(25) DEFAULT NULL,
  `middle_name` varchar(25) DEFAULT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `primary_phone_number` varchar(13) DEFAULT NULL,
  `secondary_phone_number` varchar(13) DEFAULT NULL,
  `years_of_experience` varchar(2) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `blood_group` varchar(5) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `marital_status` varchar(7) DEFAULT NULL,
  `permanent_adress` varchar(150) DEFAULT NULL,
  `permanent_state` varchar(25) DEFAULT NULL,
  `permanent_country` varchar(25) DEFAULT NULL,
  `permanent_pincode` varchar(6) DEFAULT NULL,
  `current_adress` varchar(30) DEFAULT NULL,
  `current_state` varchar(25) DEFAULT NULL,
  `current_country` varchar(25) DEFAULT NULL,
  `current_pincode` varchar(6) DEFAULT NULL,
  `postgraduation_board_of_university` varchar(50) DEFAULT NULL,
  `postgraduation_institute_name` varchar(50) DEFAULT NULL,
  `postgraduation_institute_city` varchar(30) DEFAULT NULL,
  `postgraduation_course_name` varchar(25) DEFAULT NULL,
  `postgraduation_joining_year` date DEFAULT NULL,
  `postgraduation_passed_year` date DEFAULT NULL,
  `postgraduation_grade` varchar(6) DEFAULT NULL,
  `graduation_board_of_university` varchar(50) DEFAULT NULL,
  `graduation_institute_name` varchar(50) DEFAULT NULL,
  `graduation_institute_city` varchar(30) DEFAULT NULL,
  `graduation_course_name` varchar(30) DEFAULT NULL,
  `graduation_joining_year` date DEFAULT NULL,
  `graduation_passed_year` date DEFAULT NULL,
  `graduation_grade` varchar(6) DEFAULT NULL,
  `intermediate_board_of_university` varchar(50) DEFAULT NULL,
  `intermediate_college_name` varchar(30) DEFAULT NULL,
  `intermediate_college_city` varchar(25) DEFAULT NULL,
  `intermediate_course_name` varchar(30) DEFAULT NULL,
  `intermediate_joining_year` date DEFAULT NULL,
  `intermediate_passed_year` date DEFAULT NULL,
  `intermediate_grade` varchar(6) DEFAULT NULL,
  `ssc_board_of_university` varchar(50) DEFAULT NULL,
  `ssc_school_name` varchar(50) DEFAULT NULL,
  `ssc_school_city` varchar(25) DEFAULT NULL,
  `ssc_course_name` varchar(25) DEFAULT NULL,
  `ssc_joining_year` date DEFAULT NULL,
  `ssc_passed_year` date DEFAULT NULL,
  `ssc_grade` varchar(6) DEFAULT NULL,
  `previous_company1_name` varchar(50) DEFAULT NULL,
  `previous_company1_designation` varchar(30) DEFAULT NULL,
  `previous_company1_joining_date` date DEFAULT NULL,
  `previous_company1_relieving_date` date DEFAULT NULL,
  `previous_company1_employee_id` varchar(25) DEFAULT NULL,
  `previous_company1_gross_salary` double DEFAULT NULL,
  `previous_company1_type_of_employment` varchar(30) DEFAULT NULL,
  `previous_company1_reason_for_relieving` varchar(25) DEFAULT NULL,
  `previous_company2_name` varchar(50) DEFAULT NULL,
  `previous_company2_designation` varchar(30) DEFAULT NULL,
  `previous_company2_joining_date` date DEFAULT NULL,
  `previous_company2_relieving_date` date DEFAULT NULL,
  `previous_company2_employee_id` varchar(10) DEFAULT NULL,
  `previous_company2_gross_salary` double DEFAULT NULL,
  `previous_company2_type_of_employment` varchar(30) DEFAULT NULL,
  `previous_company2_reason_for_relieving` varchar(25) DEFAULT NULL,
  `previous_company3_name` varchar(50) DEFAULT NULL,
  `previous_company3_designation` varchar(30) DEFAULT NULL,
  `previous_company3_joining_date` date DEFAULT NULL,
  `previous_company3_relieving_date` date DEFAULT NULL,
  `previous_company3_employee_id` varchar(10) DEFAULT NULL,
  `previous_company3_gross_salary` double DEFAULT NULL,
  `previous_company3_type_of_employment` varchar(30) DEFAULT NULL,
  `previous_company3_reason_for_relieving` varchar(25) DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `employee_status` tinyint NOT NULL,
  `reporting_manager` varchar(50) DEFAULT NULL,
  `department_name` varchar(25) DEFAULT NULL,
  `designation_name` varchar(25) DEFAULT NULL,
  `employment_type` varchar(30) DEFAULT NULL,
  `passport_no` varchar(10) DEFAULT NULL,
  `passport_expiry_date` date DEFAULT NULL,
  `profile_photo` mediumblob,
  `job_title` varchar(20) DEFAULT NULL,
  `primary_skills` varchar(100) DEFAULT NULL,
  `secondary_skills` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `fk_onboarding_id__employeemaster1_idx` (`onboarding_id`),
  KEY `fk_department_name__employeemaster1_idx` (`department_name`),
  CONSTRAINT `fk_onboarding_id__employeemaster1` FOREIGN KEY (`onboarding_id`) REFERENCES `onboarding` (`onboarding_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeemaster`
--

LOCK TABLES `employeemaster` WRITE;
/*!40000 ALTER TABLE `employeemaster` DISABLE KEYS */;
INSERT INTO `employeemaster` VALUES ('ATPL00050',NULL,'2022-05-09','Sandhya','Rekha','Bandaru','sandhya.bandaru@arshaa.com','properties','7780106482',NULL,'2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'ATPL00090','SoftwareDeveloper','Software_Developer',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00058',NULL,'2021-11-15','Devi','Chandrika','Kadiyala','devichandrika.k@arshaa.com','human resources management','8143245444','7799578261','2','1997-09-18','o+','female','Single','NehruNagar 2nd line, Guntur','AndhraPradesh','India','522001','Sri Pallavi Hostel, Madhapur','Telengana','India','500001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'JNTUK','St.Mary\'s Womens Engineering College','Guntur','Computer Science & Engineering','1970-01-01','1970-01-01','A','BOI',NULL,NULL,'MPC','1970-01-01','1970-01-01','A','SSC',NULL,NULL,'State Syllabus','1970-01-01','1970-01-01','B',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee','2022-05-16 17:52:28',0,'ATPL00090','BFSA','Full Stack Developer',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00063',NULL,NULL,'Murali','Krishna','Marthula','muralikrishna.marthula@arshaa.com','human resources management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-16 18:50:10',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00064',NULL,'2021-12-01','Mohan Murali','Krishna','Miriyala','muralikrishna.miriyala@arshaa.com','human resources management','9880105452','7729927397','1','1998-01-10','AB-','Male','Single','vizag','Andhra Pradesh','India','521215','6-89, Rampur','Telangana','India','500081','JNTUK','VIT','Bhimavaram','Mechanical','2019-01-08','2020-12-04','67','JNTUK','VIT','Bhimavaram','Mechanical',NULL,NULL,'78','BIEAP','Narayana','Vijayawada','MPC','2013-01-02','2015-05-05','67','BSE','Narayana','Reddigudem','General','2012-01-06','2013-12-31','92','Arshaa Technologies Pvt.Ltd','Software Developer','2021-12-16','2022-01-13','ATPL018',NULL,'Full Time Employment ','xxxxxx','Capgemini','UI Developer','2022-02-02','2022-03-10','12345',NULL,'Freelancer ','xxxxx','TCS','UI','2020-05-02','2022-01-06','123456',NULL,'Part Time','xxxxx',NULL,'2022-05-16 18:52:59',0,'ATPL00090',NULL,NULL,NULL,'ASD4512','2024-01-02',NULL,NULL,'React','Java'),('ATPL00065',NULL,NULL,'Nikhil','Kumar','Istharakula','nikhil.mudheraj@arshaa.com','human resources management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-16 19:00:07',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00066',NULL,NULL,'Sravya','','kotakonda','Sravya.kotakonda@arshaa.com','human resources management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-16 19:01:50',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00067',NULL,NULL,'Mohan','Krishna','Madanapu','Mohankrishna.madanapu@arshaa.com','human resources management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-16 19:26:19',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00068',NULL,NULL,'Bhavani','Gudala','Madanapu','bhavani.gudala@arshaa.com','human resources management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 15:57:01',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00069',NULL,NULL,'Madhuri','','Allapureddy','madhuri.allapureddy@arshaa.com','human resources management','9550682114',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:01:39',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00070',NULL,NULL,'Quazi','Mohammad','Khalid','khalid.mohammad@arshaa.com','human resources management','8839884540',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:03:39',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00071',NULL,NULL,'Chiranjeevi','','Gyara','chiranjeevi.gyara@arshaa.com','DEP','8143139417',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:05:06',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00072',NULL,NULL,'Manohar','','Chimata','manohar.chimata@arshaa.com','properties','9908816733',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:07:16',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00073',NULL,NULL,'Snehal','','Jambhulkar','snehal.jambhulkar@arshaa.com','human resources management','8329733653',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:09:19',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00074',NULL,NULL,'SaiVineeth','Kumar','Sattineni','saivineethkumar.sattineni@arshaa.com','properties','9908216181',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:12:37',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00075',NULL,NULL,'VINEELA','','MALAJI','vineela.lalaji@arshaa.com','testing','7780586496',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:14:19',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00076',NULL,NULL,'CHETAN','','BASAVA','chetan.basava@arshaa.com','DEP','7892006272',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:16:07',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00077',NULL,NULL,'Akhil','','Rathipelly','9550916455','DEP','','','1','2001-06-06','B+','Male','Single','Hyderabad','Hyderabad','India','500029','','','','','','','','',NULL,NULL,'','','','','',NULL,NULL,'','',NULL,NULL,'',NULL,NULL,'','',NULL,NULL,'',NULL,NULL,'','','',NULL,NULL,'',NULL,'','','','',NULL,NULL,'',NULL,'','','','',NULL,NULL,'',NULL,'','',NULL,'2022-05-17 16:17:30',0,'ATPL00090',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00078',NULL,NULL,'Sriveda','','Annaparthi','sriveda.annaparthi@arshaa.com','DEP','9550916455',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:23:38',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00079',NULL,NULL,'Chandu','Sai','Gaddam','chandusai.gaddam@arshaa.com','DEP','9676351831',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:26:30',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00080',NULL,NULL,'Sri','Divya','Gouraram','sridivya.gouraram@arshaa.com','human resources management','7036980262',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:28:14',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00081',NULL,NULL,'Muneendra','','Samsani','muneendra.samsani@arshaa.com','DEP','9676087365',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:29:25',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00083',NULL,NULL,'Mahesh','Babu','Jangam','maheshbabu.jangam@arshaa.com',NULL,'8688660121',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:33:06',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00084',NULL,NULL,'Sudheer','Kumar','A','sudheerkumar.agnur@arshaa.com',NULL,'8688660121',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:36:35',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00085',NULL,NULL,'Ravi','Teja','Pabbala','raviteja.pabbala@arshaa.com',NULL,'8688660121',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:39:27',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00086',NULL,NULL,'Aravind','','Punnam','punnama.aravind@arshaa.com',NULL,'6303746589',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:43:57',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00087',NULL,NULL,'Seethamsha','','Mule','seethamsha.mule@arshaa.com',NULL,'9177255162',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:46:54',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00088',NULL,NULL,'Azam','','MD','faisal.azam@arshaa.com',NULL,'9097367200',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:52:11',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00089',NULL,NULL,'Meher','Jyothi','Chaduvula','meher.jyothi@arshaa.com',NULL,'9985106199',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:59:02',0,NULL,'Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00090',NULL,NULL,'Revanth','Kumar','Mudidana','revanth.kumar@arshaa.com',NULL,'7093113123',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:00:04',0,NULL,'Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00091',NULL,NULL,'Rajkumar','','Kolluri','rajkumar.kolluri@arshaa.com',NULL,'9866325349',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:02:03',0,NULL,'Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00092',NULL,NULL,'Vinod','Kumar','Satavalli','vinod.satavalli@arshaa.com',NULL,'9030067714',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:03:46',0,NULL,'Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00093',NULL,NULL,'Srimukha','','Lingampally','srimukha.lingampally@arshaa.com',NULL,'8978448739',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:05:10',0,NULL,'Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00094',NULL,NULL,'DHEERAJ','','KOSARAJU','dheeraj.kosaraju@arshaa.com',NULL,'9133456899',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:06:37',0,NULL,'Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00095',NULL,NULL,'Rajesh','','Pulagora','rajesh.pulagora@arshaa.com',NULL,'6302306082',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:10:03',0,NULL,'Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `employeemaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeeprojectmapping`
--

DROP TABLE IF EXISTS `employeeprojectmapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeeprojectmapping` (
  `employeeproject_id` int NOT NULL AUTO_INCREMENT,
  `project_id` int NOT NULL,
  `employee_id` varchar(10) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  PRIMARY KEY (`employeeproject_id`),
  KEY `fk_project_id__emp_project_map_idx` (`project_id`),
  KEY `fk_employee_id__emp_project_map_idx` (`employee_id`),
  KEY `fk_updated_by__emp_project_map_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__emp_project_map` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_project_id__emp_project_map` FOREIGN KEY (`project_id`) REFERENCES `projectmaster` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__emp_project_map` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeeprojectmapping`
--

LOCK TABLES `employeeprojectmapping` WRITE;
/*!40000 ALTER TABLE `employeeprojectmapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `employeeprojectmapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employeetimesheet`
--

DROP TABLE IF EXISTS `employeetimesheet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeetimesheet` (
  `employeetimesheet_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` varchar(10) NOT NULL,
  `project_id` int NOT NULL,
  `timesheet_date` datetime NOT NULL,
  `timesheet_hours` double NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` tinyint DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  PRIMARY KEY (`employeetimesheet_id`),
  KEY `fk_employee_id__employeetimesheet_idx` (`employee_id`),
  KEY `fk_project_id__employeetimesheet_idx` (`project_id`),
  KEY `fk_updated_by__employeetimesheet_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__employeetimesheet` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_project_id__employeetimesheet` FOREIGN KEY (`project_id`) REFERENCES `projectmaster` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__employeetimesheet` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeetimesheet`
--

LOCK TABLES `employeetimesheet` WRITE;
/*!40000 ALTER TABLE `employeetimesheet` DISABLE KEYS */;
/*!40000 ALTER TABLE `employeetimesheet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employmenttype`
--

DROP TABLE IF EXISTS `employmenttype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employmenttype` (
  `employment_type_id` int NOT NULL,
  `employment_type_name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`employment_type_id`),
  UNIQUE KEY `employment_type_name_UNIQUE` (`employment_type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employmenttype`
--

LOCK TABLES `employmenttype` WRITE;
/*!40000 ALTER TABLE `employmenttype` DISABLE KEYS */;
INSERT INTO `employmenttype` VALUES (1,'contract'),(2,'full time employment'),(3,'intern');
/*!40000 ALTER TABLE `employmenttype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (49);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `holidaymaster`
--

DROP TABLE IF EXISTS `holidaymaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `holidaymaster` (
  `holiday_id` int NOT NULL AUTO_INCREMENT,
  `holiday_title` varchar(45) NOT NULL,
  `holiday_date` datetime NOT NULL,
  `updated_on` date NOT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`holiday_id`),
  KEY `fk_updated_by__holidaymaster_idx` (`updated_by`),
  CONSTRAINT `fk_updated_by__holidaymaster` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holidaymaster`
--

LOCK TABLES `holidaymaster` WRITE;
/*!40000 ALTER TABLE `holidaymaster` DISABLE KEYS */;
INSERT INTO `holidaymaster` VALUES (1,'sankranthi','2023-01-13 00:00:00','2022-05-27',NULL),(2,'dasara','2022-10-05 00:00:00','2022-05-28',NULL),(3,'deepavali','2022-10-24 00:00:00','2022-05-31',NULL),(4,'Diwali','2022-06-01 05:30:00','2022-06-02',NULL),(5,'qlwnd','2022-06-16 05:30:00','2022-06-02',NULL),(6,'gandhi jayanthi','2022-06-16 05:30:00','2022-06-02',NULL),(7,'gandhi jayanthi','2022-06-16 05:30:00','2022-06-02',NULL);
/*!40000 ALTER TABLE `holidaymaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaveentitlement`
--

DROP TABLE IF EXISTS `leaveentitlement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaveentitlement` (
  `leave_type` varchar(20) NOT NULL,
  `no_of_days` int DEFAULT NULL,
  PRIMARY KEY (`leave_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaveentitlement`
--

LOCK TABLES `leaveentitlement` WRITE;
/*!40000 ALTER TABLE `leaveentitlement` DISABLE KEYS */;
INSERT INTO `leaveentitlement` VALUES ('Annual',24);
/*!40000 ALTER TABLE `leaveentitlement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulemaster`
--

DROP TABLE IF EXISTS `modulemaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modulemaster` (
  `module_id` int NOT NULL AUTO_INCREMENT,
  `module_name` varchar(45) NOT NULL,
  `role_id` int DEFAULT NULL,
  `module_status` tinyint NOT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  PRIMARY KEY (`module_id`),
  KEY `fk_updated_by__modulemaster_idx` (`updated_by`),
  CONSTRAINT `fk_updated_by__modulemaster` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulemaster`
--

LOCK TABLES `modulemaster` WRITE;
/*!40000 ALTER TABLE `modulemaster` DISABLE KEYS */;
/*!40000 ALTER TABLE `modulemaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `onboarding`
--

DROP TABLE IF EXISTS `onboarding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `onboarding` (
  `onboarding_id` varchar(15) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `middle_name` varchar(25) DEFAULT NULL,
  `last_name` varchar(25) NOT NULL,
  `designation` varchar(25) DEFAULT NULL,
  `department` varchar(25) DEFAULT NULL,
  `date_of_joining` date DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(13) NOT NULL,
  `Years_of_experience` varchar(2) NOT NULL,
  `employee_id` varchar(10) DEFAULT NULL,
  `approved_status` tinyint DEFAULT NULL,
  `rejected_status` tinyint DEFAULT NULL,
  `waitingforapproval_status` tinyint DEFAULT NULL,
  `onboard_date` datetime DEFAULT NULL,
  `approved_date` datetime DEFAULT NULL,
  `reject_date` datetime DEFAULT NULL,
  `Updated_on` date DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  `reporting_manager` varchar(50) DEFAULT NULL,
  `employment_type` varchar(30) DEFAULT NULL,
  `job_title` varchar(20) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `primary_skills` varchar(100) DEFAULT NULL,
  `secondary_skills` varchar(100) DEFAULT NULL,
  `employee_type` varchar(255) DEFAULT NULL,
  `skill_set` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`onboarding_id`),
  UNIQUE KEY `onboarding_id_UNIQUE` (`onboarding_id`),
  KEY `fk_employee_id__onboarding_idx` (`employee_id`),
  KEY `fk_updated_by__onboarding_idx` (`updated_by`),
  KEY `fk_designation__onboarding_idx` (`designation`),
  KEY `fk_department__onboarding_idx` (`department`),
  CONSTRAINT `fk_designation__onboarding` FOREIGN KEY (`designation`) REFERENCES `designationmaster` (`designation_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_employee_id__onboarding` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `onboarding`
--

LOCK TABLES `onboarding` WRITE;
/*!40000 ALTER TABLE `onboarding` DISABLE KEYS */;
INSERT INTO `onboarding` VALUES ('OBD00017','Sandhya','Rekha','Bandaru','Software_Developer','SoftwareDeveloper','2022-05-09','sandhyabandaru15@gmail.com','7780106482','2',NULL,1,0,0,'2022-05-09 00:00:00',NULL,NULL,'2022-05-09',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00020','Murali','Krishna','Marthula',NULL,'Software',NULL,'muralikrishna.marthula@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 18:49:08',NULL,NULL,'2022-05-16','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00021','Mohan Murali','Krishna','Miriyala',NULL,'Software',NULL,'muralikrishna.miriyala@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 18:52:31',NULL,NULL,'2022-05-16','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00022','Nikhil','Kumar','Istharakula',NULL,'Software',NULL,'nikhil.mudheraj@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 18:59:59',NULL,NULL,'2022-05-16','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00023','Sravya','','kotakonda',NULL,'Software',NULL,'Sravya.kotakonda@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 19:01:35',NULL,NULL,'2022-05-16','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00024','Mohan','Krishna','Madanapu',NULL,'Software',NULL,'Mohankrishna.madanapu@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 19:25:57',NULL,NULL,'2022-05-16','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00025','Bhavani','','Gudala',NULL,'Software',NULL,'bhavani.gudala@arshaa.com','9880105452','1',NULL,0,0,0,'2022-05-17 15:56:50',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00026','Madhuri','','Allapureddy',NULL,'Software',NULL,'madhuri.allapureddy@arshaa.com','9550682114','1',NULL,1,0,0,'2022-05-17 16:01:28',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00027','Quazi','Mohammad','Khalid',NULL,'Software',NULL,'khalid.mohammad@arshaa.com','8839884540','1',NULL,1,0,0,'2022-05-17 16:03:32',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00028','Chiranjeevi','','Gyara',NULL,'Software',NULL,'chiranjeevi.gyara@arshaa.com','8143139417','1',NULL,1,0,0,'2022-05-17 16:04:50',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00029','Manohar','','Chimata',NULL,'Software',NULL,'manohar.chimata@arshaa.com','9908816733','1',NULL,1,0,0,'2022-05-17 16:06:09',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00030','Snehal','','Jambhulkar',NULL,'Software',NULL,'snehal.jambhulkar@arshaa.com','8329733653','1',NULL,1,0,0,'2022-05-17 16:09:04',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00031','SaiVineeth','Kumar','Sattineni',NULL,'Software',NULL,'saivineethkumar.sattineni@arshaa.com','9908216181','1',NULL,1,0,0,'2022-05-17 16:12:24',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00032','VINEELA','','MALAJI',NULL,'Software',NULL,'vineela.lalaji@arshaa.com','7780586496','1',NULL,1,0,0,'2022-05-17 16:14:04',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00033','CHETAN','','BASAVA',NULL,'Software',NULL,'chetan.basava@arshaa.com','7892006272','1',NULL,1,0,0,'2022-05-17 16:15:59',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00034','Akhil','','Rathipelly',NULL,'Software',NULL,'akhil.rathipelly@arshaa.com','9550916455','1',NULL,1,0,0,'2022-05-17 16:17:21',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00035','Sriveda','','Annaparthi',NULL,'Software',NULL,'sriveda.annaparthi@arshaa.com','9550916455','1',NULL,1,0,0,'2022-05-17 16:23:27',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00036','Chandu','Sai','Gaddam',NULL,'Software',NULL,'chandusai.gaddam@arshaa.com','9676351831','1',NULL,1,0,0,'2022-05-17 16:26:19',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00037','Sri','Divya','Gouraram',NULL,'Software',NULL,'sridivya.gouraram@arshaa.com','7036980262','1',NULL,1,0,0,'2022-05-17 16:28:06',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00038','Muneendra','','Samsani',NULL,'Software',NULL,'muneendra.samsani@arshaa.com','9676087365','1',NULL,1,0,0,'2022-05-17 16:29:17',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00039','Mahesh','Babu','Jangam',NULL,'Software',NULL,'maheshbabu.jangam@arshaa.com','8688660121','1',NULL,1,0,0,'2022-05-17 16:32:47',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00040','Sudheer','Kumar','A',NULL,'Software',NULL,'sudheerkumar.agnur@arshaa.com','8688660121','1',NULL,1,0,0,'2022-05-17 16:36:21',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00041','Ravi','Teja','Pabbala',NULL,'Software',NULL,'raviteja.pabbala@arshaa.com','8688660121','1',NULL,1,0,0,'2022-05-17 16:39:18',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00042','Aravind','','Punnam',NULL,'Software',NULL,'punnama.aravind@arshaa.com','6303746589','1',NULL,1,0,0,'2022-05-17 16:43:44',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00043','Seethamsha','','Mule',NULL,'Software',NULL,'seethamsha.mule@arshaa.com','9177255162','1',NULL,1,0,0,'2022-05-17 16:46:43',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00044','Azam','','MD',NULL,'Software',NULL,'faisal.azam@arshaa.com','9097367200','1',NULL,1,0,0,'2022-05-17 16:51:38',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00045','Meher','Jyothi','Chaduvula',NULL,'Software',NULL,'meher.jyothi@arshaa.com','9985106199','1',NULL,1,0,0,'2022-05-17 16:58:52',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00046','Revanth','Kumar','Mudidana',NULL,'Software',NULL,'revanth.kumar@arshaa.com','7093113123','1',NULL,1,0,0,'2022-05-17 16:59:56',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00047','Rajkumar','','Kolluri',NULL,'Software',NULL,'rajkumar.kolluri@arshaa.com','9866325349','1',NULL,1,0,0,'2022-05-17 17:01:07',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00048','Vinod','Kumar','Satavalli',NULL,'Software',NULL,'vinod.satavalli@arshaa.com','9030067714','1',NULL,1,0,0,'2022-05-17 17:03:39',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00049','Srimukha','','Lingampally',NULL,'Software',NULL,'srimukha.lingampally@arshaa.com','8978448739','1',NULL,1,0,0,'2022-05-17 17:05:02',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00050','DHEERAJ','','KOSARAJU',NULL,'Software',NULL,'dheeraj.kosaraju@arshaa.com','9133456899','1',NULL,1,0,0,'2022-05-17 17:06:29',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00051','Rajesh','','Pulagora',NULL,'Software',NULL,'rajesh.pulagora@arshaa.com','6302306082','1',NULL,1,0,0,'2022-05-17 17:09:56',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `onboarding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `onboarding_id`
--

DROP TABLE IF EXISTS `onboarding_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `onboarding_id` (
  `next_val` bigint DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `onboarding_id`
--

LOCK TABLES `onboarding_id` WRITE;
/*!40000 ALTER TABLE `onboarding_id` DISABLE KEYS */;
INSERT INTO `onboarding_id` VALUES (52);
/*!40000 ALTER TABLE `onboarding_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectmaster`
--

DROP TABLE IF EXISTS `projectmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projectmaster` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `client_id` int DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `location` varchar(55) DEFAULT NULL,
  `rate` double DEFAULT NULL,
  `priority` varchar(25) DEFAULT NULL,
  `teammembers` int DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  KEY `fk_client_id__projectmaster_idx` (`client_id`),
  KEY `fk_updated_by__projectmaster_idx` (`updated_by`),
  CONSTRAINT `fk_client_id__projectmaster` FOREIGN KEY (`client_id`) REFERENCES `clientmaster` (`client_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__projectmaster` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectmaster`
--

LOCK TABLES `projectmaster` WRITE;
/*!40000 ALTER TABLE `projectmaster` DISABLE KEYS */;
/*!40000 ALTER TABLE `projectmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotionhistory`
--

DROP TABLE IF EXISTS `promotionhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotionhistory` (
  `promotion_history_id` int NOT NULL,
  `employee_id` varchar(10) DEFAULT NULL,
  `designation_name` varchar(25) DEFAULT NULL,
  `updated_on` date DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`promotion_history_id`),
  KEY `fk_employee_id__promotionhistory_idx` (`employee_id`),
  KEY `fk_updated_by__promotionhistory_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__promotionhistory` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__promotionhistory` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotionhistory`
--

LOCK TABLES `promotionhistory` WRITE;
/*!40000 ALTER TABLE `promotionhistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotionhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reporting_manager_master`
--

DROP TABLE IF EXISTS `reporting_manager_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reporting_manager_master` (
  `reportingmanagerid` int NOT NULL AUTO_INCREMENT,
  `employee_id` varchar(255) DEFAULT NULL,
  `reportingmanager` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`reportingmanagerid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reporting_manager_master`
--

LOCK TABLES `reporting_manager_master` WRITE;
/*!40000 ALTER TABLE `reporting_manager_master` DISABLE KEYS */;
INSERT INTO `reporting_manager_master` VALUES (1,'ATPL00090','Revanth');
/*!40000 ALTER TABLE `reporting_manager_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolesmaster`
--

DROP TABLE IF EXISTS `rolesmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolesmaster` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) NOT NULL,
  `role_status` tinyint NOT NULL,
  `updated_on` datetime NOT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name_UNIQUE` (`role_name`),
  KEY `fk_updated_by_user_idx` (`updated_by`),
  CONSTRAINT `fk_updated_by__rolesmaster` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolesmaster`
--

LOCK TABLES `rolesmaster` WRITE;
/*!40000 ALTER TABLE `rolesmaster` DISABLE KEYS */;
/*!40000 ALTER TABLE `rolesmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolesmodulesmapping`
--

DROP TABLE IF EXISTS `rolesmodulesmapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolesmodulesmapping` (
  `rmmid` int NOT NULL,
  `role_id` int NOT NULL,
  `module_id` int NOT NULL,
  `rmmid_status` tinyint NOT NULL,
  PRIMARY KEY (`rmmid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolesmodulesmapping`
--

LOCK TABLES `rolesmodulesmapping` WRITE;
/*!40000 ALTER TABLE `rolesmodulesmapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `rolesmodulesmapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `u_id` int NOT NULL AUTO_INCREMENT,
  `employee_id` varchar(10) DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  `user_name` varchar(25) DEFAULT NULL,
  `user_type` varchar(45) DEFAULT NULL,
  `designation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`u_id`),
  KEY `fk_employee_id__users_idx` (`employee_id`),
  KEY `fk_updated_by__users_idx` (`updated_by`),
  KEY `fk_user_type__users_idx` (`user_type`),
  CONSTRAINT `fk_updated_by__users` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_type__users` FOREIGN KEY (`user_type`) REFERENCES `rolesmaster` (`role_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,NULL,'Devi5510',NULL,NULL),(2,NULL,NULL,'Devi6669',NULL,NULL),(4,'ATPL00063',NULL,'Murali2859',NULL,NULL),(5,'ATPL00064',NULL,'Mohan Murali5004',NULL,NULL),(6,'ATPL00065',NULL,'Nikhil7048',NULL,NULL),(7,'ATPL00066',NULL,'Sravya7879',NULL,NULL),(8,'ATPL00067',NULL,'Mohan5898',NULL,NULL),(9,'ATPL00068',NULL,'Bhavani8423',NULL,NULL),(10,'ATPL00069',NULL,'Madhuri6528',NULL,NULL),(11,'ATPL00070',NULL,'Quazi6830',NULL,NULL),(12,'ATPL00071',NULL,'Chiranjeevi7351',NULL,NULL),(13,'ATPL00072',NULL,'Manohar5985',NULL,NULL),(14,'ATPL00073',NULL,'Snehal2851',NULL,NULL),(15,'ATPL00074',NULL,'SaiVineeth8249',NULL,NULL),(16,'ATPL00075',NULL,'VINEELA5927',NULL,NULL),(17,'ATPL00076',NULL,'CHETAN4656',NULL,NULL),(18,'ATPL00077',NULL,'Akhil1607',NULL,NULL),(19,'ATPL00078',NULL,'Sriveda9729',NULL,NULL),(20,'ATPL00079',NULL,'Chandu4816',NULL,NULL),(21,'ATPL00080',NULL,'Sri6618',NULL,NULL),(22,'ATPL00081',NULL,'Muneendra6664',NULL,NULL),(23,'ATPL00082',NULL,'Muneendra376',NULL,NULL),(24,'ATPL00083',NULL,'Mahesh5585',NULL,NULL),(25,'ATPL00084',NULL,'Sudheer7948',NULL,NULL),(26,'ATPL00085',NULL,'Ravi4815',NULL,NULL),(27,'ATPL00086',NULL,'Aravind2494',NULL,NULL),(28,'ATPL00087',NULL,'Seethamsha4307',NULL,NULL),(29,'ATPL00088',NULL,'Azam5328',NULL,NULL),(30,'ATPL00089',NULL,'Meher6748',NULL,NULL),(31,'ATPL00090',NULL,'Revanth2996',NULL,NULL),(32,'ATPL00091',NULL,'Rajkumar8654',NULL,NULL),(33,'ATPL00092',NULL,'Vinod8239',NULL,NULL),(34,'ATPL00093',NULL,'Srimukha3526',NULL,NULL),(35,'ATPL00094',NULL,'DHEERAJ9317',NULL,NULL),(36,'ATPL00095',NULL,'Rajesh6651',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersrolesmapping`
--

DROP TABLE IF EXISTS `usersrolesmapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersrolesmapping` (
  `user_id` int NOT NULL,
  `roels_id` int NOT NULL,
  `employee_id` varchar(10) DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `fk_role_id__usersrolesmapping_idx` (`roels_id`),
  KEY `fk_employee_id__usersrolesmapping_idx` (`employee_id`),
  KEY `fk_updated_by__usersrolesmapping_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__usersrolesmapping` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_role_id__usersrolesmapping` FOREIGN KEY (`roels_id`) REFERENCES `rolesmaster` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__usersrolesmapping` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_id__usersrolesmappiing` FOREIGN KEY (`user_id`) REFERENCES `users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersrolesmapping`
--

LOCK TABLES `usersrolesmapping` WRITE;
/*!40000 ALTER TABLE `usersrolesmapping` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersrolesmapping` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-09 13:13:07
