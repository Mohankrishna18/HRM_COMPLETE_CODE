-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: 1_hrm_aws
-- ------------------------------------------------------
-- Server version	8.0.29

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
  KEY `fk_udated_by__client_master_idx` (`updated_by`),
  CONSTRAINT `fk_udated_by__client_master` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE SET NULL ON UPDATE CASCADE
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
  KEY `fk_updated_by_departmentMaster_idx` (`updated_by`),
  CONSTRAINT `fk_updated_by_departmentMaster` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departmentmaster`
--

LOCK TABLES `departmentmaster` WRITE;
/*!40000 ALTER TABLE `departmentmaster` DISABLE KEYS */;
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
  KEY `fk_updated_by__emp_master_idx` (`updated_by`),
  KEY `fk_department_name__designation_idx` (`department_name`),
  CONSTRAINT `fk_department_name__designation` FOREIGN KEY (`department_name`) REFERENCES `departmentmaster` (`department_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__designation` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designationmaster`
--

LOCK TABLES `designationmaster` WRITE;
/*!40000 ALTER TABLE `designationmaster` DISABLE KEYS */;
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
  KEY `fk_onboarding_id__emial_idx` (`onboarding_id`),
  KEY `fk_employee_id__email_idx` (`employee_id`),
  CONSTRAINT `fk_employee_id__email` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_onboarding_id__emial` FOREIGN KEY (`onboarding_id`) REFERENCES `onboarding` (`onboarding_id`) ON DELETE CASCADE ON UPDATE CASCADE
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
INSERT INTO `employee_id` VALUES (51);
/*!40000 ALTER TABLE `employee_id` ENABLE KEYS */;
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
  KEY `fk_employee_id__emp_attendance_idx` (`employee_id`),
  CONSTRAINT `fk_employee_id__emp_attendance` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
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
  `manager_approval` varchar(8) NOT NULL,
  `hr_approval` varchar(8) DEFAULT NULL,
  `leave_status` varchar(8) DEFAULT NULL,
  `reject_reason` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`employeeleave_id`),
  KEY `FK_EMPLOYEE_ID_EMPLOYEE_MASTER_idx` (`employee_id`),
  KEY `fk_updated_by__emp_leaves_idx` (`updated_by`),
  CONSTRAINT `FK_EMPLOYEE_ID__EMPLOYEE_MASTER` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__emp_leaves` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeeleaves`
--

LOCK TABLES `employeeleaves` WRITE;
/*!40000 ALTER TABLE `employeeleaves` DISABLE KEYS */;
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
  `flag` tinyint DEFAULT '0',
  `Password1` varchar(15) DEFAULT NULL,
  `Password2` varchar(15) DEFAULT NULL,
  `Password3` varchar(15) DEFAULT NULL,
  `change_password_date` datetime DEFAULT NULL,
  `Updated_by` varchar(10) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `user_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`employeelogin_id`),
  KEY `fk_employeelogin_employee_id_idx` (`employee_id`),
  KEY `fk_updated_by__emp_login_idx` (`Updated_by`),
  CONSTRAINT `fk_employee_id__emp_login` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__emp_login` FOREIGN KEY (`Updated_by`) REFERENCES `employeemaster` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeelogin`
--

LOCK TABLES `employeelogin` WRITE;
/*!40000 ALTER TABLE `employeelogin` DISABLE KEYS */;
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
  `primary_phone_number` varchar(13) DEFAULT NULL,
  `secondary_phone_number` varchar(13) DEFAULT NULL,
  `years_of_experience` varchar(2) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `blood_group` varchar(5) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `marital_status` varchar(7) DEFAULT NULL,
  `permanent_adress` varchar(25) DEFAULT NULL,
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
  `reporting_manager` varchar(10) DEFAULT NULL,
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
  KEY `fk_onboarding_id__emp_master_idx` (`onboarding_id`),
  KEY `fk_department_name__emp_master_idx` (`department_name`),
  KEY `fk_designation_name__emp_master_idx` (`designation_name`),
  CONSTRAINT `fk_department_name__emp_master` FOREIGN KEY (`department_name`) REFERENCES `departmentmaster` (`department_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_designation_name__emp_master` FOREIGN KEY (`designation_name`) REFERENCES `designationmaster` (`designation_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_onboarding_id__emp_master` FOREIGN KEY (`onboarding_id`) REFERENCES `onboarding` (`onboarding_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeemaster`
--

LOCK TABLES `employeemaster` WRITE;
/*!40000 ALTER TABLE `employeemaster` DISABLE KEYS */;
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
  KEY `fk_project_id_from_projectmaster_idx` (`project_id`),
  KEY `fk_employee_id__emp_project_map_idx` (`employee_id`),
  KEY `fk_updated_by__emp_project_map_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__emp_project_map` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_project_id_from_projectmaster` FOREIGN KEY (`project_id`) REFERENCES `projectmaster` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE,
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
  KEY `fk_projectid_idx` (`project_id`),
  KEY `fk_employee_id__emp_timesheet_idx` (`employee_id`),
  KEY `fk_updated_by__emp_time_sheet_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__emp_timesheet` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`),
  CONSTRAINT `fk_projectid` FOREIGN KEY (`project_id`) REFERENCES `projectmaster` (`project_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__emp_time_sheet` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`)
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
INSERT INTO `hibernate_sequence` VALUES (29);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holidaymaster`
--

LOCK TABLES `holidaymaster` WRITE;
/*!40000 ALTER TABLE `holidaymaster` DISABLE KEYS */;
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
  `module_status` tinyint NOT NULL DEFAULT '0',
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  PRIMARY KEY (`module_id`),
  KEY `fk_role_id_roles_idx` (`role_id`),
  KEY `fk_updated_by__module_master_idx` (`updated_by`),
  CONSTRAINT `fk_role_id_roles` FOREIGN KEY (`role_id`) REFERENCES `rolesmaster` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__module_master` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
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
  `designation` varchar(25) NOT NULL,
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
  `reporting_manager` varchar(10) DEFAULT NULL,
  `employment_type` varchar(30) DEFAULT NULL,
  `job_title` varchar(20) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `primary_skills` varchar(100) DEFAULT NULL,
  `secondary_skills` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`onboarding_id`),
  UNIQUE KEY `onboarding_id_UNIQUE` (`onboarding_id`),
  KEY `fk_designation__onboarding_idx` (`designation`),
  KEY `fk_employee_id__onboarding_idx` (`employee_id`),
  KEY `fk_updated_by__onboarding_idx` (`updated_by`),
  KEY `fk_department__onboarding_idx` (`department`),
  CONSTRAINT `fk_department__onboarding` FOREIGN KEY (`department`) REFERENCES `departmentmaster` (`department_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_designation__onboarding` FOREIGN KEY (`designation`) REFERENCES `designationmaster` (`designation_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_employee_id__onboarding` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__onboarding` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `onboarding`
--

LOCK TABLES `onboarding` WRITE;
/*!40000 ALTER TABLE `onboarding` DISABLE KEYS */;
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
INSERT INTO `onboarding_id` VALUES (18);
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
  KEY `fk_client_id_idx` (`client_id`),
  KEY `fk_updated_by_project_master_idx` (`updated_by`),
  CONSTRAINT `fk_client_id` FOREIGN KEY (`client_id`) REFERENCES `clientmaster` (`client_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by_project_master` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
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
-- Table structure for table `rolesmaster`
--

DROP TABLE IF EXISTS `rolesmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolesmaster` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  `role_status` tinyint NOT NULL DEFAULT '0',
  `updated_on` datetime NOT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name_UNIQUE` (`role_name`),
  KEY `fk_updated_by_users_idx` (`updated_by`),
  KEY `fk_updated_by_users_idx_` (`updated_by`),
  KEY `fk_updated_by_user_idx` (`updated_by`),
  CONSTRAINT `fk_updated_by__roles_master` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
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
  `r_m_m_id` int NOT NULL,
  `role_id` int NOT NULL,
  `module_id` int NOT NULL,
  `rmmid_status` tinyint NOT NULL,
  PRIMARY KEY (`r_m_m_id`),
  KEY `fk_role_id__rolesmodulesmap_idx` (`role_id`),
  KEY `fk_module_id__rolesmodulesmap_idx` (`module_id`),
  CONSTRAINT `fk_module_id__rolesmodulesmap` FOREIGN KEY (`module_id`) REFERENCES `modulemaster` (`module_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_role_id__rolesmodulesmap` FOREIGN KEY (`role_id`) REFERENCES `rolesmaster` (`role_id`)
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
  PRIMARY KEY (`u_id`),
  KEY `fk_updated_by__users_idx` (`updated_by`),
  KEY `fk_user_type__users_idx` (`user_type`),
  CONSTRAINT `fk_updated_by__users` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_type__users` FOREIGN KEY (`user_type`) REFERENCES `rolesmaster` (`role_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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
  UNIQUE KEY `employee_id_UNIQUE` (`employee_id`),
  KEY `fk_updated_by__user_roles_map_idx` (`updated_by`),
  KEY `fk_employee_id__user_roles_map_idx` (`employee_id`),
  KEY `fk_roles_id__user_roles_map_idx` (`roels_id`),
  CONSTRAINT `fk_employee_id__user_roles_map` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_roles_id__user_roles_map` FOREIGN KEY (`roels_id`) REFERENCES `rolesmaster` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__user_roles_map` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
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

-- Dump completed on 2022-05-31 23:44:33
