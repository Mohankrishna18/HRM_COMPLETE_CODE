-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: hrm_schema
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
-- Table structure for table `bands`
--

DROP TABLE IF EXISTS `bands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bands` (
  `band_id` int NOT NULL AUTO_INCREMENT,
  `band_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`band_id`),
  UNIQUE KEY `band_name_UNIQUE` (`band_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bands`
--

LOCK TABLES `bands` WRITE;
/*!40000 ALTER TABLE `bands` DISABLE KEYS */;
/*!40000 ALTER TABLE `bands` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departmentmaster`
--

LOCK TABLES `departmentmaster` WRITE;
/*!40000 ALTER TABLE `departmentmaster` DISABLE KEYS */;
INSERT INTO `departmentmaster` VALUES (9,'Web Development',0,NULL,NULL),(10,'Application Development',0,NULL,NULL),(11,'HR Department',0,NULL,NULL),(12,'TAA ',0,NULL,NULL);
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
  `department_id` int NOT NULL,
  PRIMARY KEY (`designation_id`),
  UNIQUE KEY `designation_name_UNIQUE` (`designation_name`),
  KEY `fk_updated_by__designationmaster_idx` (`updated_by`),
  KEY `fk_department_name__designationmaster_idx` (`department_name`),
  CONSTRAINT `fk_department_name__designationmaster` FOREIGN KEY (`department_name`) REFERENCES `departmentmaster` (`department_name`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__designationmaster` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designationmaster`
--

LOCK TABLES `designationmaster` WRITE;
/*!40000 ALTER TABLE `designationmaster` DISABLE KEYS */;
INSERT INTO `designationmaster` VALUES (43,'Full Stack Developer','Web Development',0,'2022-06-21 00:00:00',NULL,9),(44,'HR Admin','HR Department',0,'2022-06-21 00:00:00',NULL,11),(45,'Application Developer','Application Development',0,'2022-06-21 00:00:00',NULL,10),(46,'Full Stack Trainee','Application Development',0,'2022-06-21 00:00:00',NULL,10);
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
INSERT INTO `employee_id` VALUES (128);
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
INSERT INTO `employee_profile` VALUES ('b122b788-8e64-4375-9429-fe1a1cc3355a',_binary '�\��\�\0�\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342			\r\r2!!22222222222222222222222222222222222222222222222222��\0\�\�\"\0�\��\0\0\0\0\0\0\0\0\0\0	\n\0\0\0}\0!1AQa\"q2���#B��R\��$3br�	\n\Z%&\'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz�����������������������������������\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�����������\0\0\0\0\0\0\0	\n\0\0w\0!1AQaq\"2�B����	#3R�br\�\n$4\�%�\Z&\'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz������������������������������������\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�����������\�\0\0\0?\0��QIJ*@(��\0Z(��\n(��\n(��\n(��\n(��\nZJZ\0(���\n(�\��SI\���\�g5F�U�ӑ�\��XtA\�4|`^\���C\�tOwlW��\�W�\��YW�w\��䮵i\�ܙeg\�O\'4\�[\�7\�\'��`\�\�\�6\�~5\�^�\�\�y�#�1\�p]; ,r{zTBf\�d\�ަ�T�\�n<a*��ȸ���\�\�\�\"�ݎs��*ǎv\��S�\�U��yc\�+#������PHD�{#HQ�}NՋk�`�\'̹�\�x_ ��� ��\�\�\�\��\�\�?/>Z��\� �b���]\�qjɲU(\�$pG��\0^�m���(<.~e+�~u�\�\�\�V`���\�\'޵�?,�F1�������ʅs��բ~���<\n\��DMe�Guy��ˆdb	\�(s\�{֫^\��+\�Iq�\�\��p\Zg{�\�H<0\�I�\�\\=��4o�6\��v\�[\�됈��S\�� p3�\0\�qhfإ\�T�\�`�|���8��y\�5 ;4Rh�\�I�Z\0(��\0(��\0(��\0(��\0(��\0(��\0(��\0(��\0�t���(�0��(�QE\0QE\0QE\0QE\0QE\n(��\n(��G,�\Z�{T7���m��\�B�\�$�j�x�\�Y��ܐ�v\�~�Ҹͽw\�\�\�W�\�L�\�\�\�\\��]\�\�d�RōP�\�|�l�s�UC+7�k ,<\�P�\��P��婜\�sH]B\�z�\'�]�)�\'ڃ�d\�Z��\�4\�\�L	W8\�B\rZ�\�\�ʮ�c��QE:�\0�G��˓�\\�\Z,�Wq<k\�{�x\�g�I\�E�ͳ�\�\��\0:\�EHЂr\�\�\��rVpOJ	5!����b \���F�yБ��?��_\���TI \�<0\�<]�\�	\�E+\0�y�F\�ïB;�\�KƎA(;�\0\�f�y�6\�q���!vٷ\�\�\0iA)����\r\��\�㙤��s�x��1��\�ْ�X�P}kcM�m\�$Y��z{���&�҅�3Ý�d+��\�\�koK�i�W�\�O=+�ӤA9�.\�-�\�9\�үY��r\��3�;Vr�\\ꕁ�u�6�8UFy\�W㞵ޖ�R�i\\�(�EPEPEPEPEPEPEPc�(��p�0��(�QE\0QE\0QE\0QE\0QE\n(�\�\0x��c^�\�`;�\Z\�H\�\���*/k�\�6�\�S3p�^Q�j\�wv�\�\�+|\�U����\�jSe��\\\0xAXR܆�\�Ӿj��$�\�\0�w15����\�cۯJ`��`~��9�\�I\�qLC�v\�lҔ b�v��9T}?\ZLaA8ǽH��\�`+=\��\0��x\��x\�^��X�v�\�9\�2����\�ϏL\�\�Ve�;�gD8�\�Y$D;#� v�{�\�lX�JG�1R\0�\�NS\�S�ޕW\�ظW\�OC\�,\�6\��\�7f�(�\�\'�\�q\�EƐ\�,��z��\�O���\�0���\�-%pZE\�Ti�j�\�[ ۥ+��\�*\���c|���*�\��9��pǧ\�?)�\�\�F<\�\n���\�\�S\�\�\�!�U�Qv.\�ϭ&\�}>��s�8S�\�=\�8��[\�\�\n�\n�PN\�~;W/�v�V\�\�prG&��,C\�ܞ�\�\�:�i湀\�p��O�Ԙ8Y�a��Z\�\�e�i63�q�q�rkP\�D���\�L�|Vm\r3n�e�GC\�J\\�\�^\�ˬ\�\�\�\�<�~`�8�mZ\�P�z��\�\�\�X�h�dS��b��\�c�*d`\�\"��uQL�(��(��(��(��(��(��(���!�EP!h��\0(��\0(��\0(��\0(��KT\�`\�\�\�\�ᰪ8叠�7Z[I<\�d�k\�<M\�ծN]��\���4�oY�Q��Y��:\�zV�<g\"�%,O5\�q]1VCNi�\�\np>�4\�.8��N>c\�OI\�\"��/ZD#,Is�\\c�;pQ��\�M\�\�OS\�L�H$���gA�)�\���|\�{\�\�\�\�KO\�~EQ/�ɧy�i�i��C\�)\n;\�T\�2\�-���b\�n\�\�@�����\�&���\�.A��rw3\��Rc�\����q������Gɕ`F1S\�B��8!F>Zݴ�U$\�~���h�����*FI|����⚚XޮF��\�\�[�U�ƥ\�q��*9�\�At\���\�\\Y�\�\�>�^�1c�m\�r\�t��U�q9<���A\�ͿG���\�LK\�t�RKlEM�\0�\'��W���]w\�s�����{.�u\�C\���Y\�.]�\�\�1�pz\��թb��t�jH@\Z�\�\�8���u$1\�\0q�z���R����X\�p	��mʴ�)\��\�Oڹ66d�\�$�E(aNG�\�S[^�YJ\�W��~\�TLfUY�mȑ�\�\�z�\�3<r�=�G�\0_�T�\�#d�\n������\�#�\�;�\�{%ʌ#�\�\�]22ʟ\�S޳jŏGWU\0�f\�O^*\�9�\0�QE1Q@Q@Q@Q@Q@��O�\��]\�ȳH\�\"\�\'�\�!�EP!h��\0(��\0(��QE\0(��P\ZT\�$T���q���\�x\�\�ms3\�@؆\��\�\�\��|ջ��2W!�I\��\�kݫ���\�\�4�y��\r=s\�X\nJ\�\�\�(\0�zS��\�\�)�v\�6�H\�mP\0\�Ss�)��\�\�!\'\�sށ�;��eE�y\\-{ry�n\�\�O\�HNiHڹ4\�NhХ��K\�\�aiQr\�#\�H�s\�hږ\r�y�\�ڨ�䁂=\�gO�21����$ˌN�\�\�1��=�ⶠ\�OC�\�J\�\��W��\�[qBÐqXI�5b\�j\n�?:�c8\�\n�0q\�XARC/=TS\�J� sR*\ZyRhFH�W#Ң�\"\�t<u�/.��@?/Zh��k��J� 9\n=�\Z�slE(\�c�޺��Y�	ӡ�{�m�\�8�\�H�5e�\r�\�\'\�\�$\��L�\0\��\0Z�\r���\�GRGSUnm\\�K�U̅\�T�\�#\�H\�x$\�S�\�\�A��^�y\�޸ɒH	�b\�R{iA�W�\�QJJ\�zP\�\�˞\�M��\�c��\�i��WВ�k95}�,$\�\�8\�f�Ҋ�8\��\0\�RSQE\0QE\0QE\0QE\0QE��6\��FX������^O�^mV\�M\�W\�\ns\�x��\�\�sN{�:�($�EPEPEP0��(\0\�+\�<q����	\���緰�C�AL\��\�5���9b�e 1\�S�{\�E]�9i�\�c\�\Z�\��\�͚UO^�І��L?*n\�I�Θ\0OZx\�j�(9\�)��`7\�\�|1�\�\�!\�X\�{\�9;ԮFj\"H�v\Z\�w\0p(\�s�R��H�\0\�SG\�x\�6��j\�\�0A#�)64��\�y\�?�8��\�\�qD#�Q�\��\�\�=3\�t�lb�A�>����\�����8`\�\�I��P��=1WUFq�+&\�LEQ\�֦U\�=�@1A��S�F)�b�11\�\�1@�\�g�J�=�s\�h\�t�X�\�6�H��\�zp�v��SJ{\ZC9k\�|�q�k���KYwFr����\�۫��k�\�4�Dg�eq\�\�,M�n�\�s+�m`x�Ͻz��-�k��W ��:�\�^H\�\�!V]���\��Ř|ͨ!}O�֜�\�z]����F�GcV\�\�V%�ȸ�K�\�*ɂ3\�\��\�ʑ��\�fH�(��Q@Q@Q@Q@+`\�&V#\�V\�=���\���	\�\�Q\�\�\Z�K��ͪ\�G��+�\���\�z?�\�M֋\��5S\�R��@�sEA\"\�E\0QE\0QE(����Fn�8�J���J�FF�\�Vf\�,z\n�\�\�,:Q��\�0ϰ���ss\�iMj2�@�$\�;\�>�\�=�\Z�q\�OZ\�d�ӆ=\�1��h@y\�ǒI��S�n~�\\	b\�l�U�\��\�K�*B\���‰\�\�|w\�h,3M��\�X�P\�\�\n� �Sq�U�^G���q�K_(\'�kcI�,\�\��V��20\�\�f�{+1\Z�\�v�VS��bZ��	\�\�s�V��(�\�\r\�:\�\�\�?Ҵ\�1�������F9\�z�*;J��\�ӊ�h!�@��@\�	�\\R\�@������AK@	�ъZ(�J�ym\�\�\�TG�#(=���}n\�K[��w\��\�Y1\�\�\�$y�D�6�\�[��9=+\�\�_.V�zV\�wCgk�꬞Rm��8$`�\�W}�HC����z�&飺�nbT\�s\�O\��ק�r\�\\X*7*\���\0=�\n\�J̓z�lg()ԉ\n(��\n(��\n(��\n(��<�Ė\�m\�I�UI\���\��\�\�\�e7�\0���\�u�m&\0eK\'\���\�����\�H\�ӌ�j��G��Zj:�B\�@��Q@Q@£�\�q3�p3֞O��J\�p\�m\�	\\M(#\���\0p^8\�>\�~m\�*c�m,9\�ǭpr�3��\�x�\�[��!�4!T`t\0b�I$\�D\�1����\�NA\�{U��9�\�i?�΀Tc4�s\03J��T}Xf��sR\�G�F\��3p<�c�\�qҀ\�l@g�i�9�f\�إ�(�1�>��m\0��\�?J�mgu\�]&�fY\�d`x\�j$\�o�zV�\0O�V\�k�N��\�h\n&\�1�{[r��\���v\�\�nȚ\�-��j�\"�S�1Hɱ�c?Zp\�K�\\S�\�\�� ��b��%:��	E�\0QE\0��M\�J)��\�-\�\��Fy/�lZ\��\�	�b=+��1��=j�\��࢑��!Î�ע�J�\�zϿ*ɖ\�\�A8��ך�\�c�WC\�\�\�*U��\'�\�\�&����\�\�u�j�\�V~X��GC��j�DQL�(��(��(�KƖ�\�H����ğ�C��\0J\�|;r-��i~	�<W�j��+�q�2&_Ҽ�	�\"\�Оz�Q\�h�D9�\�Tt\�\�ƙk19/�}�WE@P(�AEPFh����jJ�\�P2��K{tmaܐ���`i���m�\�6B*�\�\�[�5�\0P\0�d����\�fwp\�օ�1�M\�\\�3nf9\'ޱ�<ֆ�X\�\�瞵�\�uEY=�j@p�q\�3�\�<d�4�\\�\�wg���38������\�T��aLQ�S��@̀�R\�֐r3@����qɫ�r)�/����il]���\�Kv4�n\�Zu�g�I\�N��]6řT\"mQ�$rj����\�;�[\������+	J\�\�\�Z��Ġc�qLU\�KPb\�\n~)�b�)�-R\� ����Q@ �4�b�E)�\0QE���%/�S\�>�l.t�\\�+`��r����#îc1\\ȇ���WtiB]�[��\0t�\�Sx�\�\�j��\�q�\�u�7�09\�\����\�\�:4\�&��!\�$gc7�/�g�`r��kóoNFD�9>��7�1�ǥaԁ\�QE1Q@Q@Q@g¼�P���ul2rzc9��\�r��^}\�\�Ly�#G\�y҈\�R:�\\,\�$*LyC���V\�C�w�\�z�J\�q1Դ�����)	\�\Z\�\"��dguϩ�K����Q��a\�9�W�Oȑ�~X̛�\�^y��S��ɮ+\��\�JHP�\�\�з\�o��\��;��L�\�X�=*�WR\��7�+�~���)	$\��dՄ^:Th=�P1@\�v���A8�@X\��;��\nLv��qR[\�e��ZL��l\�\�8���\�B\���Y\\v\�5WD\�T��*\�\�=벶�j\0\0�G5��}�\"�a�\"�j\�\n�9��QY�6\�J��LZ�u�\�o���q\�W�h\"ƏJ\�?��em�\ng�i�k\00I\\&s�\�4�)ц��\��ܷR\�\�ޭ��2]@\�\\\�~t\�\�f�H_Fz0�\�s֐]�������\�*��VP��Ҥs�{P$��\ZZ\'z(\�E \n\\�\nJ)�>i(�B\�R��KMuʚ`�-��MV\�`$�� w�\0�\\š\�&q]\�ĈO\�\�\�\�)S�\"��%\�\�:\�[C\�\�^�}�,�y�8�+�N�\��\�`�H��1�sՖC\�\�?�vct�I{���)�QE\0QE\0QE\0C(\�}+��ŕ\�\�C4L~��\�:\�$\�+\�Й|=9U\�be�C\�\�M!�\�n��o\�l*�z��^O�\�\�jֲ�۵Ԓ\�\�½\\UHl}- \�EI\"\�s\�p3Lp{�@�{FB\���dD\��\nv5#6�\0�Aǭfj��\r\n��\�\nEE]\�}���+\0��򏩮ŗ77Jdd{Npx���J\�\�3���{\�;\�ڝʬ���\�\�U\�t*JǟM�\�\�\�PGZ\�5�2�Kbp<W e%OQ]�\�e\rQ�O��֜MQ��3K�=)�\��S�qHb�T�6�j\�Ԉ2\�Ԋ�cG_J\�t=,\� ,�b�\��\�V�eێx\�\ZU��5�`\�d�+)ϡ\�\�\\�cl\0t�8׌~t\�\�*px�P�\�*�t�7*�\�qQ�����\���\�6�\��+\Zf�\��\�\�ϰ�Cn�\�$�Qj6�~�\"�F�)�\�`\'	5��\�\��Տ��~u\�Il6|�+�튭-��1�\�8ܵW����@���G<�\�Q�\��C	��\�\�\�\�>�E�/cc�gi��Ȼ��ѻn�=$}=���J\�;{�\"\�9\�>\�q�\��F���>\�b\0\�H=}\�$\�\�\�,Fr�=���(�\�2t���\�\�jL�#���i!.F	\�\�W �\�\�\�\�9��\�\�%xcB�_үXNB�Õ\���\�&�\�n��\0\�[F\�b[?�`Y��V\�D\0~4\�g%b^(�����\�L\0�\ZMԙ��\�@(6iO#]e�	����\�\�\����D\���\��\�\�&N	\�GJ�/ۋ�\�\�$�\�}@\���\�����x.?�m\r�U�L\�v\�xܝ�������W^�\��\�\\o�U�\�(bϺ6\r\�L��u\�ڹ{Tv\���X�%�(��DQ@Q@Q@I\�U{�դ�\�\�D+���\'AMHg���4�\\��{�^�c8���u�\��5֠�\�N�\�.�<r3�k����w�\��\0�n\�\�<f�Cf���)jI�C��\0!g�5`����H ��\�0\n\�ۜ<��4�p\0���g	1\�\0y�;P/<� oq��\�<�C6��̈t\�p\�\�f\�ǰ��\�W���\�#��TU�jY#\r�\�h4�t6aI�y�uP6\�\�g<q��\�F䊣\�\��zƪ\0񃌌(�*�-R�-��2O\�[Rfu�2�\�\�b���=)�\�[\�g�H:�Қ:S�v��4<u\�\�[�/3\0�s\�Ex+�\�]���T8���[��8\�\�\����r�\��Wak@\0*���\�F1޶��\�\�٤��4��\�OA\�)�2�\�,b�\�gҟ�\nC%1j7x\�\'˜\��H\�P?\Z�6�knHyW>�\�\�U�.\�c�qMl��\�]{\�l[\�\�I\�R0?Z�\�\�DdZD�\�\'�\n\�_\'h�\�S���\"mST�%��\�;1�\0\n��˵\\���\r�,R�4f�9U	-T�Ђ\rB|B�\�xO�\�X�\�;��AVh׃���?Z�%Wq�\�\�\�\r[�\�\��\�P�\0U�zUx\�\0��Vӊv2�\'jJ\\\�_�\�A\��h �\�v�i�\0*6\�#�N[��k�\�H,2X���H\�y�\�ڍ�P�NNj��j�q`\\�U\�\�\ngh\�޹mB�$c��\������s�mn<��\0\�Z\�,\�<\�=�\�q�p.O�3��O\�Q\�y��`b�@RG��g���é\�kǖms$K\����Ҷ\�59w*I#�ޕͧ��A,d2t\'#��jұ�\�\��6�ck+���Ǔ�#?�o\�\�\�=�Ț\�\�b\�Yr\�aL\�9=�\0�k\��1A;�\�}k��\�\�)i���$(��\0(��\0(��\0���f\����\�5\Z��3��|\ro�\�8%\�[Xc��\0\"��\�T\�X�\�H�dc����_\��-�\�˛i�0\�bx:f�\�(�\�#&s\��U}���)iJZ�B��l��s��b����rjC~\�,��\�\�����\�\n\�*\'<��\�+6D\�ѓ\�pH�mMد!+0S��H\�i�틥�FY�\�R#�.\�Hס�\�Gl>^�W�\�Z�UM�\�y<g�\�<Y\�7�}��\�y\�\�\��\�H�v]\�\0:��5a=�l�$R �WdU�\0\0z�Üf�2hg�J�2Y�\�F~b8�M2\�Mp���M�1�,\�Y<�§�������q����gi�hڎ\�|��j\�\�b\�\��k	��\�,ZõE^Q\�)�1��Efc\'�\���3N9\�W�p(�w�\�_�*s��\�L�9R~��s��\�&��b�\�u+�ٖ\"!�X�\�f��a��pK�\�-\�5��-\�9\�=*�\�q�\�&�gH\�\�z\��\�QEKE�<�5�go�F?x��<A�\�Ʋ+!L�q\���j\��\���\�<֝��5�NVKw�\�fDs��8��ZӖ&L|>1Ԥ�U�2\�\�zMNxDk�[�V<c�\�ڸ\�����\0C�J�\"��\�y�l[�NXn#W\�0\�\�D\�B��2\\E�\�\�D���9=�\�Z\Zׇ��\�=H\�\�ģ�;�̆o:0\�\�/QQ�\�	s+��\�\�9&��<+\�@�1[�g��)\Zp�\�եUxU�PsH\0�#���kcɹ�~F\�\\�Z[뤅N[\�j>\"�6)ocҕ�k�W(<�Y3iK9$u=rj�\�3�g\�\�ִmuC��8=\�=Q�F{�~�bt\�}j\�\�\�~`0z�\�giyo2�W\���V\0�S\�fl�\�\�E�o�;��x�+\�\���R�Pk���0��ƹ\�,O\�m#v��<v�R���\�oc��\��|�\�kR\�v\�B;\��\�2c\�\�0<����\�֍��z\�\�T-\�����������(\0��(\0��(���\�H\�\rF)�\�;Qw\��\�\�r\�\\g\�s^oaq�K\�y�`\�0\�u��\rz\�щ�x������[���\�\�G�H�\0sϯ4���\�.�\�Y�\����\�W*D�dKE\0U�\'�\�#ީ\��_�N\�ёsX���z\"�L�\�l�@\�QI�\r\�v��h\�|��\�\'��\�\�Jӛcf\�l�#�jӻ�mv\�\�U95\���\�ھ�\�Aع�\�A�pWgF\�iV��̙��$�\�֯\�k�\nZF\\�\�\n\����j\��8,H�1�\0׭æ�O:s��ʂG�v�:\�\�\�\�\�ڪ8\���òvV`ӒK�\�Oo�\�Y��(\�\\q��i�(� �\�x~\�v�?{�k��\��\�\�,)�\�3z5���\��B2+z\�8\�Yz@+�c\�Vո�Gҹ\�sdꢥ����\nX\�F�Ѷ�\\ϖ\�wN*�\�yGЎ��R�x3\�2�\�vKI�\�Q�N3Q��\�kvX885[\�\�~C���^k���y-�G(\'*ǆ�s\�\�B\�a\�\\wC^�\��0E \0*�جq>\��$�\�bX�2\�\�r;ץ>�o�U?CX�3����R���\�}MK�d�4٪�����̪�Y��s\Z���S����X!\�\�E��\0\�F�\�{qB5�yK\Z,H\�\�\�:\Z\�X\�6j��Ķ\��!T�\�:\�o�\�R&l�\0\�\Z�*FTԑ\����\�MKU/e��\�4�np�%\�$��\�`$\0v��NK\�;pٸq\�\�z\Zݻ�{�.\�y3dw\��\�\�a��\�+X$o)r�m��nd��\�L\Z��\�\0U�3\�\ry/�\�h\�|\�V\�O�U��\0�r\�7��´�߼*{s\�\�g�D�\�k7ەb\�r8#i�i)���\�l\�1�6�t\�p�o\�K4$nrXpGCR\�^�\�\�\�TX�*\�s\�\\m�\�֗q.�vwƜ�\� �k+_b�������\�+.�z��\�\�$l~+�\0֫V�\�\r\�\��=\�i>�H\"�y�,��-J\"LнR\�xB��L�\�5fȖ����T=)�\�e��DT\���ȓi\'$ƿʎ�wд)iJQTHQE\0QE\0QE\0\�ң%D:\�\�\�^(�X|As\Z\�C�\'>\�\\קW\�F]F\���\�1�|E8\�3s��-q�s��G\��?�tu\�|?�?鰶~m���9��܊\�QE \Z\�\�8\�XӀQ\�G� !�g�=�m1ʹ$\�\"vu��\�4;�O��-�\"\�\�\�+\��d\�:ao�G\�\r�\0y��\���\�+�k�\\\�2ĹRO�Et\Z}�~y�Jjg\�\�W�\���i�bR��3p9��u�x�\�\�)8\�L�g��\�P)X�ba�W��L�\�n\'��\0#�M\�U�Cd\'�c\'��\�q\��V^�l`&<d&\"�+�h\�\�)�;�\�\\������|���U��[�\n\���H\�\�+c�םX��)�Gџu��ÓEAGb֙�%\�����V\�\�JƲ K0\�\�\�[�V\"�mzT��C��sA�:S���)�1HE:�m2J\�=\0���D�����R2\�V\��\�Z���Z\�Wt��\�H\�x&\�Q5��2~��x\��XzR+�\�]-ر��\�B���\�T�\�n`M0s#�7z�\�Aڥ��#�\�\�t}*QLQ�N( q�.|L��63HE;v<\�\�]Z%\�*H\�\�v��z�\\|\�\�1dM\�Ǡץ\�\�-JB~\�p����\���z\Z�\�\��RW8H&��u\�\��;�����\�\\�+�ܱ(�z�\�-V\�\�P\�\�$u�[{�\�U��C�Ҕ\�L��:I\�\��B��y\�+ʮRK�V[�w$��\�PzWm<�Q!Y;�\rd��\�s���O��\nIؘ\�\�\�5\��Q\����\�tv\�\�/N�%��Ԝ\�x<�7�T��hQ�q�kb\�%�HnNH��g7�0yɨ--\�\�fU�\�X\'h\�zTpg��\� �t���� ��(\0��(\0��(��\Z��\�\�HW5\�xL��0̧�b�\0\n\�j��i�\�\Z\�܌\���:���\0\�y\Z�����q^�;W�i\�}��\�\���$\��\0�ׯ��\\ta�U!�h���\rn�\�|W{,zhH8�\�����w?�t\�\�&��\�\\^�\�I\�;��\�g��}Jз\Z1�\�;\�\�e�FM���8-�s]\�\�;\0TV�x�\�O�ݹ��\� ����pH\�\�R�\�nwd�\�C:)\���]\�\�o�Q\�4�`�Y��\�8\����-�G�)\�`��03Kq���\�\�:�+�\�\�)5ܪ���ج�Jc=�b2\�:�\��\�\�jvp\�\�\�P-�689\�\\��	�,x�u\�J��\�щle \�{\�鉁A�-\�\�T�Bk�М�\\\�S�¶����C��G\�&�협X�U5eo\�FӚֵn��3\�\�CS-@����A�&)\��Ҟ)�\nZAKLA�B)�#+���t�\�Zi��\�\��O!sҬIHwd\":\nxA\�O����E/j���Q`��\�-P#;S�[�ջ�+ډ2�)R:�\�ȹ��J�%�\�3��Pk\�\����z�����w|\�A\�i�8a�p�BAۚ\r9ʑȯ�-�U\�aFGJ�;uZ� J�\"$�W�w)#\�j\���u���\��҇m\�P~4̘12g�\�\�\�R ��1@��å�QLAEPEPEPi�a��\��ԀZ?���\�~Ϩ][�C\�+\'<w��b�SB�\�\�\�\�b\0�GҸ_Z,^ g8T�5|��\0�]W�oE֚\��6\�\�ɭ%�)�\r�AFq�̒��\'�d\�	\�\�\\�\�C]I,jc��7c���\�u@\�-�J��g>�\\��r\�\�\�@\�\�1�\�x\�E4�\�\�Ya\n��A\0+R�9u3:\0Y?\Z\�@�\�|g+��\���˵�\\\�y���V�Ï\��\�ʃ�*�+�v\�c��Q\\�X�@���\�c+\�\�O�e�w9\n�\�A\�{�\�6���\��\\޵j\�\�\�U8끒�n\�ZYf\�ch=�?\�Lh�Y��`\�X�\�n08�hZ�\"\�\r�1�:\�Vސ6\�;㚡t�Q\�1;/\�v��^p@sVޅ������d\���\�\�\roYH9\�\\\�5�\�[G\�����A�;�\��@�\�{\Z\�\�N�*��҃\n�TK\�5 4\�c\�Jp�Ҏ�\��(�\�HiOZN�\0\�M=iƘ~��B\�4\�҂(\�1I�Ri�(��\�\0-.8�ӱ@��^�ՃP��4�\�\ZPNX\�R�p\�;�Q�x�\�KL�)\�J�\0�犑~\�B���)�-\n(\0��(\0��(\0��(��߅IL~��A\�\�\�{\�i\�\�l\�K�4m\�~��\�oܘ�i-H\0K\�z���\0�]/�\�\�\�9��A�Bk��\�\�\���\�ߏ�a\'�\�A\��Նz�\'���\�j	3ueXd\�lm\�=}+�q3\�7!f7A�<n�ƺ�R5�\�L�\�#b8\�k8\�;-5�\"\�>R{\'�\nL\�I\�Ǵƿ0\�Q\�PټQ\�n%B��\�&�P���Im\�B�s\�XW�f==�x�{ˀCN��~T�VԒ\�3r�>n��=G\�*��I�[n��7Cv\�}����\�+�ֵ�\�U敤\�p0=O\�\�t���}�V\'s\\`�\0\�M\�\�\�vZ�\�\�ck`��}��\�Z�\��\�\n���W^�Z\�\"\�&eGRs\�v\�?�q��:j-�\��\�=Nq�)E\\\�.���Pݼ��\�W�	\�q�\�\�\�iX�\�R1�\�t6j�����9+\"�\��Y�ub�qp��4\��V�\"�\�n\�%��\�-\�a��jlD����2TC�J��Y\"Ԁ\�@�O��4��J)�\����R\�C4��Bi\r!�\�N\�\�l\n�\�\\\�P\�Hx��`TÁ�lQ�ZI\�Q���p%�\�ӑF*@�\�&\�#vjE\�O\�F\�PR\�\nwjd�=j)� ԭ֘\�b���j^\�\nqR�\�!�iE%\�.*E���\�*�	�ES�Rf�\�!h�4����֐�$�95�d��m�\�\�6���)\\\rL挊\�2Om>b1��q��0\�3D�܊.\�c�}2C��iݩ��@\�\��\��O��=$����\�$ѣ;I#<��\0֯j\�^I�ۘ5\���	\�\\�ǚ�\�4z���{Xf~b�5�\�{��\�\� �ǖq\�[j^\�*j����\�p+4&\�Ř+\�Bw�\��\Z\�\�r\�\�UP\�\� Q���0>S@\�\�\�O�S\nUq��\�R\�\��\0�F\��r�\�\�\�뚵��,�nOΧ�\"�_\�\�&F�\��V!��rI4!�q\�H�\��]cy_n�9 }}�ς|Ki���<�3�|��}:j��#:�\�ųd�\��\�pk�v˒1ֵQ\�[��\�\�wz��4�2y��ߌ�\�\�?�p\�ݭƮpn\�c>��\���\�eV�\���>\�\�AIP\�s\�]5���\�sv�\�p+~\�U�\�\�w�\\���\0�g3n����V�mj�;F\��WYj6ƣ\�\�7�\����Pw�\�z\n\�\�㊆D\�B�\�R\rF�(�b\�\�OZm(�D��\r0S�;�:�LѺ�j7`)�U$��\�jI\\Y$,v�Οdri�%[Q\�$6\�8t�\�M\�1\�T���=)�V!\�>�@�W�\�53č\�\�f�S\�+u\"�֬n$�\�_3����j�60k\"}&\�q\�cp\�qPFn4��%\���)\\����\ZuU�a\"\� \�۩\�ɫ\nO&�Ґ�A$�n\0�!\��RU!)/�VU�hE4KG�\�\�\�R�D�s�njjd�����QE\0S[v\�ۍ\�\�5���\�(�ۿPS\�#�+�]N\�\�b\�v��>�Z\�\�K�6�_\�`q\�>[\�$�\�FP��\�\��\�5��Z\�Y��\�U=3\�&�v+��\�b�\�\\\�N9=jZ�mq�uo��<�\�V7�\�\��C\n�^&��\�2��\rZx\�LZx�0�<񵹵֣�\\\�\�c\�\�u\�x�\�4S�\�R�O�`G�\�8\�8�x\�}�ݹep���Q]x�<�u�5�F Q��\�\�^�D�#��z\�[pf]�o-���#]	\�Y����etÏ�\�\�HFwۡ�\�\�\��,�\�÷皊\�\�\�0U��\�F\�\��4��\��d�\�\r\�)d\�A\�\�sT�My�m5\��y/�� P�)q�\�$\�\�\�I1\�2zd\���ך�p\�)�x#\"��дE0n�T@�q8\�&8\�ޘ�:�9ZX�*:ֽ���3,\�\��+\'\�\�\�@�bk|/�t�:����ű\�X��\�\�����\�w\�\�sWЌqY��\�}*qҠ����Q\�Lp��t�PH�b�))i�ZcS�S_�*\�\�8�\0Za�V�\�Q\��4�4!��J>^9iM�f�\�f�d�i�\�zSZC펃��V\�䊝�EW��h.#m���_�yǥ[�@�Φ\�\�\�7�d��B��I\�P�3OW��-m��\��Ջg$sUs�\�Ks��Ah\'|\nz.\��T\�Y$#�i�0>�\�h�QE15\�\"3�@\�4\�TuR\�\�\�3�dz�\�\�\n7��\�JÄ�\�j�\\�U}\�\����Y��\�\�\�\�\�;�V����V0k�\�q\�*lحs3\���\�T�[8�\�JB� ��Z\��(aЊGE�p\�z\Z,2-�����A�BC��3T�(f��<\�I��\�R�|��(�a�H\�t\�\��@1i☽qO�+3\�V��@���N\�ˏU\�*Ӡ�Ad�h�\Z\�캭���F\�ǎk\�z�GJ�\��m�1m/��?7���\�\ZU\�\���[��\���\�S*E��MB\�\�! �\�J\�\�d��@H#�v5$���[->E\�\�\��)Ƿ5\�x��Y#�\�\�\�9\�\�\�N��k��]�+��h\��)\�A�O\�_\�潍��D6��$\��\�\�jZ9\�FEܱ�#f;�zVq9�W҉/&~>gc\�N�H�Z\�\r�\�⟎*>�g�J�q\�f�\'G\��d�\�7B\�;\�\�+z\�\�\�]�1�\�5\�=θlOe6\�<��Z�0\�P43�\riA\'��H��3V�\�Vr?\0���\�s\"\�ju0i��@���4f��\�L��O\�1�SBS�\\�\�\�-\�3��}�[�u�.-)%\\8\�\'��o�5��f\�\�H�pzV�z��t���9�5	�\�\�q\�\Z[}#P���;�YЋ؏ʤ1��\0׬��mR\�`@\�\�Aiq\ZP$ҋȍ/�&}h�\�=+���2\�\��7Ch%X\�\����\�H�T��gy�\��R4X9lJQ{Tf0A\�S��&T\�v\�)\r\"C�5��\�\�\"cS���\�\�\��.y�ZZjkے\�\�8��U��\�}8��\08�h1�4\�H\�:ՕLIb4\�sO�Hűh��	\n)3\�.h\0=i��\�U�2��zu%\028\�%\�\Z*E��\�\�Ky\�*dF~��>��kV�b�\�eQć\'\�I�5���\�$\"i�\�	��JڮkM��#C��\'񮓭$*G��%\�\�*n\���\� \r\�\��V��\\\�޴��(�9_~�\����)��\�\�h�Ɯ(�QE\0y�-��\�e��(�=�\�:\�<#t&У��LW\�\�k\�֬\�67\n��z�\��f�\\1�\�ճ�lUt)\�v�,yz\nl\��W�q�J�;A\�\0U9\�)#\�\�j㏭I%yl\�\�D�	A�8ϡ�\'\�k]N\�Y	;�A9\�\�ֽn\�_!�U\���\�^\"�C\"*\0��c����;\�Cr\�\�\�ArG�BN*G\�\�j\"x�Ѓ �\�>&;�\��Œ/��\�\�q��;%5o¸\r�\�\�ƽ\�1\Z�\\�\�\�\�>Xr:\�h\�2�\�0G*a:VCN\�\�J����b��\�\��e\�	\�\�G�Cf�G%XW�\�H�4��n�.i�;4\�\�K�B3@\�=ݩb�/j�%<(\r�\"��J��5km3m0L���GcڭG.>\\R\\S|�)�rSR�W@G�V{�!\�L���\"��m_\��\�X�o\���\�q�cڴ�\�\�\0Qr�ُui{)X�s���{B\"(\�\�\�2\�9��*�fd�@\�&c��$Q�U\�zV��;W\�N*\�K��\�D�\�=\�hWsn#�Q1,�\�*\�(��oZh\�L\\�2x��2:W\��Kf\�gc�9c�\n��\�<�9�CN\�\\\�c����\�9\�Z(\�I@R���\�M��n�\�x�\�\�\�\Z{�\0�\���O\�\�r.D�}\�\�\�j��-ޟ�A$�3,c8\�\�~3�\�\r�x\�P��\r0M�c�\�}Mq����\�5\�Ť<\0>\�\�;V�\0���\�i6	d`���¯\��F�\�h���-ַ�\�w.|���\�\�WX�\Z(P�ן\�F\�75�eXѣ�w�fG��ӇJi?1�P1h���\�q6�+�\0L~x�C\�&\�_EcĀ�\���A\�-�٥\�@K\��|q���+7{k�Y��97�^j�ŭ�b�}���	���\�c�36	\�\�ڣ�o��x\�\�\�ďn��(��\r�Ƹbq�RE���K�pm\�2\�{�\�|Kn�f���\�\�!q�Xp?+�\\̎\�1��ϰ\�\�p^\'�`ӧ%�u4�\0끞?0����H��㊬瞵pƾfXw#�Qn�\�T����3=�Fk�T�qI�՝���\"\��\�kd��rMsZ\\J�85\�Z�W4�:��s��h�Ҝ����ngMI8\�Fh��j<`��<)�fA�j�9�Xݣ|\�_�l\�(�\0�\�H���\rJ�:S��D\�\�ޣSR)\�\ZN\�4sN�!\r%;\ZFFi3�sRcژ˞ԀL�ҚN)� \�	&��aI\�z21L�\�\�\�;\nM A��\�Cޞ��\�b��oA���Z�\��2Q\��\�Cc\�\�ػ�\�ϵdx�R�\�\�\��6\�&	\������\�e�{;s�%2o\����r+�\�|F��\�>;b.\�\�3�M;Ɏ\�\�_��c\�~y\�9��r[\�\�aA��\�?��\�!\�\�k�VF,D�d�\0\�5n9\����z\�(��v۷Z��Y�Q[\��nl\�\�5\�ZFa��20U\0?Z\��)�\�q*_\�)X#bЮ~���\�nzT�\�mB�=+�׼g�h,\�K!�\�nD1��g���\�7\�8#i%uD^K1��x�\�4�e��\Z\�J�\�p?\�\�׼]�kͶYv����\��>�λ\��\�4��j\�S���\�4�\�\�f\�4\�ǒH�\�\�\�O+d�\0\�p�U�#R�N��\�3��\�/�T=*\"J6E\r]X.}�_Ǫ\�^\�\0Y%A\�\�\��NW&���~,\ZE\�\�\�3Iq�\�6��Ӟk\�1�B�H\�9\�\\��L�\�袑�}\�QI\'(p\�A8\��zހ�=k\������{\�l���	\��u\�\�B�OA^g\�(U5\�&6��1>�\�J�\��nq�\0մ��pS�\�&���r4��|\�]\�C\�\��V�.�M;\��b����\�t��\��Ӏ}O�\0^�\�V\"VeDa\�$lK�[�?S\\W�W\�VV��W\�9?{\�\0�\�4�d�\�1?Q\\g����F�\0<�]A� !N;�<݆c!\������-��B� c�T�|�\�<�\��<3jn/\�\��A\�z\� \�\�\�\�}�O�	%;�\�83vE\�Wf��AJ�\�]\r�ȶ�q[��W+z�\'\"�m9�HW�W +Q2g9�{i���!�gI\0 \�*Z2\�Z,�⢒!�E�\r�`F3V\�\�=\�0��\�r*h�\�j暿�W�k\'\"I\�;�8�\�\�Uc��jʰ4\�3jè����!1I�uF�\�u�4�P;�L$(�\�\�SzP;�ہH\r<\�\�R\�\�̗���ꦥ\�m+R���¬\�X\����VߊF�\�C\�hԐ\�\���#\�Z\�\��y\�\�&QF{J��92\�_l�\r\�bUx\�\�&Ӟ\0\��\�sSL~\��\�U���\�bn99�.OJ�����\��Fd���LJX�[�\�q�\�\�\"\�\\e\�\�\�21\�\�Ҩ閗O%�skݙ\�v\�s\�]\��\�o<piZg\�n��g9>�T\�\�,ji�n��m��\�\�##\��`�� a#�yf>�ɩ\"y`JT�9*0+\�|\��\\6�c#-�,VgV\�V��\n�\�촋�+��]g�ъ�e\�n�A�\��5\�J\�\�\�%��%�$\�M ��.y\�5\����\�\�\�34�W\�Ȥ�):\�H\�.OzBr:\�f�\�Ռm�]V�\�\�_J�[XeC\Z�@�wc\�{W%FjZLg\��QEr��^ƁD�tzA@�,*^\�\Z\�)\'�3�\��\�5\�x\�\�u��\�p��?Q�����\�\�0��e��\�\�z4�rЩ�c\��\0��\�\�\'\�\�\'V�Ȓ\��0p?\n\�\�Etg\��\�\�j�\�?@\�\�Nq��OTx\n8R�{�\�T�\�_$>A&\�O�\��v�\�ӂY��(\��Ww!m\�FG\�Ȯ7Ɠt��T$�)~U\�\�\�Qď-���\�C�q׌U�\�\�\r�\�b�Q��?J\�]\�\�Z�P�%R��ݎ½N\� �\0q�����X>\�/�\�G\�\�*+���\�>��G�\�\�\�A��(\�Ӡ�������\�c�ai⚢�)��v�\�5�i\�\�\"� \�GZ�����\�D\�I��*�`�U\�(r��\�ڢt\�AAjET�\�\�R���\�rH�\�+׊EZ\����^�PÓX��T�(y4Ȕ.n�\�tw9����Td\�b\��\��C��5nh\�@4\�K�\�Y�^i\\\'���\�F0F�,��`;\�\�[Y�\�,\�\�\�\�\�\�wr\�\�W�\�\�֫�=\�\� � \�\�V��\�cOPԥ�\��\�\�M\���ڳ�-�\�3�^s\�G� zԲ$,�Vb�\���R!����FX9Q�S�V\�Ş���\�jRJ�2ÔA�dzqPˠ\���Zj2L\�\�;.\�\�\0z�\�\�m�i&-��+�=�x�dX\�\�\��q&�x���v�~{\��O\�ƙ���m��z�\�=Mr��#�l\�\��\0Lp˞}\��z\�_�\�J�w�\�Y�;���\�\�\���\0�6���>ۻ�c�����\\}k\�Y�0I$Vω���R{\�\�V%\�r?\Z\��I\�a\"�M4��I��C��\Z:�I@���R\�\�!J\�\�K�h#\"����p�\�҆3\�j(�\��\����1jI?՚�M\0<S0I<�O�^8�1�\�\�G@\0�.�3[K\0��\�\�x� m\�\�|\��\�\�\�\�\�hƈx.�;w+���^�g8�Ӓ\�6w�\��\�^w�iR��N\���F\0g�֥��m��-l	&��\�u\�+F�t{9I]f��y|\'l�T��#<�ǥy\�o\�\�y�iV\�I#\�1���\�\�\0t�\�\"\�\"�Eo��&�\� �YӮ�\�,�\��\0\�Ny�˫�i]�s�\�\���˱\�\08\�N?���I�ڑ5\�$�\�hS\�}}Mki6\";4�\�<��$��\�[��X�\�\�t�)\�q���a�\n�\nԂ<P\�ȫ\�fS\�tk\�Z�j$Z�8�Kd�t���N\�aG4��\\SY���]����sW6�P\�\"�+�f�x�*\�\�\�w(�=�Za�\���ɚaL�\�R*)t\�~�:]0?JVOj��f�\�\\[\��R�\�=\�Vm\���\�t���\�\�A�֬\\�s�{\�\�\�>��\\���ϡ��$����\��\�ɦ��פ\��\0}Vʑ�4O�\�\�m-\"/5\�h]\�+�\��\"\�Ѻٗ��(>\�x\�\�Չ��P�U*h9\�jj\�\�\�vn/%\�\�\�0{\n��\��D94gk��RH�\�Y�\��\�Eh#�&<�zs\�\�X\�\�#�X�r����uWWR\�Q\�D\�6ZE\�\�U�ܓ�+sC�����_\�����q\�\0}�\�kz\��a\�u�~�\�\�\Z\�\�D�\�F�z�\�e$�\Z\�\nZ���\�i\�a��\�Y\�\�c\\�\�\�J;O\r%�Hw\�\�1�#���{�Up�ߓY\Z��k\�[�qu4\�\\\n6ch¢1�+\�;�E((A\\�G�L]\�H�\�o~\�$G\�W)pܝ��I�k��\�5\r1�\0\�m%�d���?>��\�t\�(�sM�O4\�fMXUc�^��֝\�Є:�&�ɥ�i�&h��3@+L\'�R�h\�:CKA�1\r�m��\��~�Z6\�j\0��!;W>�is\�6F	;ɤ8\�\�s:���U�n.\�1\�Ms��\� ^��*�\�\�H�(*��}\�ͯO�q$y��TV�\'�\ZP�n\�\�j>(��\�\����\0q\\\�k�ʠ-$��|���f�w�ȥ�Ew#�Ws�hv\�\\! P\�G\�#ujnI!J���\�i�g̺�8\�#c�5\�\�\�\�\r�ŷ�R���\�\�4�,��*{L%\�1U*~S�\�YJM�ɶdZڋ]\�Ĝ\�Js�U�=\�Y���>�\�!]���`���\�\�B\�$� �\� v��\�ڬ�`f�4\�N\�d�1EOȦ\�J�\�\"�S\�\"�\Zu\r#(\�Jh��\��\�:�܊\\�H}�Pz\�6�R�L\"��#\�\�HS&)�qI��2�PI��x\�\�٤Z+�9�]t웾�\�\��V\��ұ�E�원H�\0V\�~�Qܷ�\�b�q-2�\�\'�\�J)�\�E1�i�s\�Q�S�G�*H$t���V\n\�>\�u �qր��!I7�\�,o�	�H\�i\� \�p\nH��\�;aL㧨���\�:>��Q)��\�\�\' \�\'��%\�/\�\�uec\�\�w�\Z�\\\�$��\��\�R\�\�Ӛ�:�$\�M�c�+�\�d~����p\�FjГ\'�q05/\��H�{�� �\�^m�i�:M\�Z\�ŲA\��a\�=k\�K�p\�9ꦹ��\�=5��v΀�N\0\�>�CMԧus\�A柎*[�)\�.�\�\�&�T8*G?Z��8�iىK�BO��AE!����e-\0}QIE\� =\rQ���\�W�.\�\�+B\�\�͓��q�nȷ,�B��uQ\�k�\0ZYbh\�R������.��c#���\���\\\�$z��Y\�\�\�f�[wx7\�\0V����qw$�\�k�*:\�6a�.3\�*�GL\�Ցn\�\�\"@�8��@@\�隣k*��qZQ�VOs�I���\�O\�N;�T�֤U\�I�\�K]Y�\�ԃ�\�\�q���iU~v\�\�늙#T�y@A\�H5(�ɓ��\\\�\�#��\"nЈ��S��Oz��+����֝�P)Ҍ�	E <\�\�M\�)4��aK�L�i3H\�\�֗�%0�cO\�E#q\�&R ��⪰\'��S\�35&�h©�{\�LN�8ѿ�t0\ny�k[fx�9���\�\�\�򎠊abx�L�S]�Z��)�-H�̑�ȧF\�H4\�#�=���h�~a��\�d\�i>�\�Q\�!Z��\�{�PQ�<�Lg�\�\��31�\�ޔ�\���X�0A\�+oH�1�\�b\�+p\�j|o�u�]9�;�\�-o\�sfN6d{\�E�dJ\�{u��1���B�\�\�\�z�Ȧa�\�gޤ�#UT:\�L\�>\�o�h=j�p\�	���.�)\�B���;��T�Q�M\�\�ג\�\�+F\�U�\��\�׺\���\��k��\�w.�圎��?�3��+��\'jJR1ITp�R\�QKI@TQEAy3Al\�(�Z\��\�mm\�\�\�(�5\�]\\5Č\�\�q9\�Sj\�\��;g\':Vs���O\rIEs\r�F)���+\�N\�@ևX�I\�OQ�pb9�K#C�:\���+YD�	\���v��\�\ZzH\�\�py�L�\�ʤ.��>y��\�[H\�n3���\�VG\�p9\���v�\�\�g*r\ZmKl\�e*1�g\�E�c@;y\�ޘ\�i�Ϟy\�6=)�@�\�(\�H\0�Ҁ��:�z\�!3�M\�56��٤&�A\�I�\\\��\�I\�\0?u�\�\"Ɛ�\�+�\�\�\���+\�;\Z����\�4��(4X��\�\�f�.�2n�g98��\�F�&#�H�y~�m\�^���\\7ך\��F�\�k�p@���\�sU����/LS�>?�j̆�\�\����8\�Hy^}h_�i\0�\�Q\�\�FQHN���J\0y\"D�\0J`�sǵ,_1l�\�<�?\Z`09�E(\�1M�\�~�r�#\�9\�z\�\�\�m\�\�\n\�D\r�~�*9S��g��˕�ޕ�}�W#x\�\�֚\�˃\�ּ�\�\�H�]O;�Һx&r�y5�\���ϝ�1pqP\�Z���=�\��P�Ǳ�\�T�T\'��xb�1ڨ����๒9�F*A�k��\�j�\'���\�~�\���k�\�R<��\��;\�T@RR\�\�`�\�','ATPL00050','sandhya.jfif','image/jpeg'),('bc188013-d5f9-44ea-9244-3f926f2f8e32',_binary '�\��\�\0�\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342			\r\r2!!22222222222222222222222222222222222222222222222222��\0\�\�\"\0�\��\0\0\0\0\0\0\0\0\0\0	\n\0\0\0}\0!1AQa\"q2���#B��R\��$3br�	\n\Z%&\'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz�����������������������������������\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�����������\0\0\0\0\0\0\0	\n\0\0w\0!1AQaq\"2�B����	#3R�br\�\n$4\�%�\Z&\'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz������������������������������������\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�����������\�\0\0\0?\0��QIJ*@(��\0Z(��\n(��\n(��\n(��\n(��\nZJZ\0(���\n(�\��SI\���\�g5F�U�ӑ�\��XtA\�4|`^\���C\�tOwlW��\�W�\��YW�w\��䮵i\�ܙeg\�O\'4\�[\�7\�\'��`\�\�\�6\�~5\�^�\�\�y�#�1\�p]; ,r{zTBf\�d\�ަ�T�\�n<a*��ȸ���\�\�\�\"�ݎs��*ǎv\��S�\�U��yc\�+#������PHD�{#HQ�}NՋk�`�\'̹�\�x_ ��� ��\�\�\�\��\�\�?/>Z��\� �b���]\�qjɲU(\�$pG��\0^�m���(<.~e+�~u�\�\�\�V`���\�\'޵�?,�F1�������ʅs��բ~���<\n\��DMe�Guy��ˆdb	\�(s\�{֫^\��+\�Iq�\�\��p\Zg{�\�H<0\�I�\�\\=��4o�6\��v\�[\�됈��S\�� p3�\0\�qhfإ\�T�\�`�|���8��y\�5 ;4Rh�\�I�Z\0(��\0(��\0(��\0(��\0(��\0(��\0(��\0(��\0�t���(�0��(�QE\0QE\0QE\0QE\0QE\n(��\n(��G,�\Z�{T7���m��\�B�\�$�j�x�\�Y��ܐ�v\�~�Ҹͽw\�\�\�W�\�L�\�\�\�\\��]\�\�d�RōP�\�|�l�s�UC+7�k ,<\�P�\��P��婜\�sH]B\�z�\'�]�)�\'ڃ�d\�Z��\�4\�\�L	W8\�B\rZ�\�\�ʮ�c��QE:�\0�G��˓�\\�\Z,�Wq<k\�{�x\�g�I\�E�ͳ�\�\��\0:\�EHЂr\�\�\��rVpOJ	5!����b \���F�yБ��?��_\���TI \�<0\�<]�\�	\�E+\0�y�F\�ïB;�\�KƎA(;�\0\�f�y�6\�q���!vٷ\�\�\0iA)����\r\��\�㙤��s�x��1��\�ْ�X�P}kcM�m\�$Y��z{���&�҅�3Ý�d+��\�\�koK�i�W�\�O=+�ӤA9�.\�-�\�9\�үY��r\��3�;Vr�\\ꕁ�u�6�8UFy\�W㞵ޖ�R�i\\�(�EPEPEPEPEPEPEPc�(��p�0��(�QE\0QE\0QE\0QE\0QE\n(�\�\0x��c^�\�`;�\Z\�H\�\���*/k�\�6�\�S3p�^Q�j\�wv�\�\�+|\�U����\�jSe��\\\0xAXR܆�\�Ӿj��$�\�\0�w15����\�cۯJ`��`~��9�\�I\�qLC�v\�lҔ b�v��9T}?\ZLaA8ǽH��\�`+=\��\0��x\��x\�^��X�v�\�9\�2����\�ϏL\�\�Ve�;�gD8�\�Y$D;#� v�{�\�lX�JG�1R\0�\�NS\�S�ޕW\�ظW\�OC\�,\�6\��\�7f�(�\�\'�\�q\�EƐ\�,��z��\�O���\�0���\�-%pZE\�Ti�j�\�[ ۥ+��\�*\���c|���*�\��9��pǧ\�?)�\�\�F<\�\n���\�\�S\�\�\�!�U�Qv.\�ϭ&\�}>��s�8S�\�=\�8��[\�\�\n�\n�PN\�~;W/�v�V\�\�prG&��,C\�ܞ�\�\�:�i湀\�p��O�Ԙ8Y�a��Z\�\�e�i63�q�q�rkP\�D���\�L�|Vm\r3n�e�GC\�J\\�\�^\�ˬ\�\�\�\�<�~`�8�mZ\�P�z��\�\�\�X�h�dS��b��\�c�*d`\�\"��uQL�(��(��(��(��(��(��(���!�EP!h��\0(��\0(��\0(��\0(��KT\�`\�\�\�\�ᰪ8叠�7Z[I<\�d�k\�<M\�ծN]��\���4�oY�Q��Y��:\�zV�<g\"�%,O5\�q]1VCNi�\�\np>�4\�.8��N>c\�OI\�\"��/ZD#,Is�\\c�;pQ��\�M\�\�OS\�L�H$���gA�)�\���|\�{\�\�\�\�KO\�~EQ/�ɧy�i�i��C\�)\n;\�T\�2\�-���b\�n\�\�@�����\�&���\�.A��rw3\��Rc�\����q������Gɕ`F1S\�B��8!F>Zݴ�U$\�~���h�����*FI|����⚚XޮF��\�\�[�U�ƥ\�q��*9�\�At\���\�\\Y�\�\�>�^�1c�m\�r\�t��U�q9<���A\�ͿG���\�LK\�t�RKlEM�\0�\'��W���]w\�s�����{.�u\�C\���Y\�.]�\�\�1�pz\��թb��t�jH@\Z�\�\�8���u$1\�\0q�z���R����X\�p	��mʴ�)\��\�Oڹ66d�\�$�E(aNG�\�S[^�YJ\�W��~\�TLfUY�mȑ�\�\�z�\�3<r�=�G�\0_�T�\�#d�\n������\�#�\�;�\�{%ʌ#�\�\�]22ʟ\�S޳jŏGWU\0�f\�O^*\�9�\0�QE1Q@Q@Q@Q@Q@��O�\��]\�ȳH\�\"\�\'�\�!�EP!h��\0(��\0(��QE\0(��P\ZT\�$T���q���\�x\�\�ms3\�@؆\��\�\�\��|ջ��2W!�I\��\�kݫ���\�\�4�y��\r=s\�X\nJ\�\�\�(\0�zS��\�\�)�v\�6�H\�mP\0\�Ss�)��\�\�!\'\�sށ�;��eE�y\\-{ry�n\�\�O\�HNiHڹ4\�NhХ��K\�\�aiQr\�#\�H�s\�hږ\r�y�\�ڨ�䁂=\�gO�21����$ˌN�\�\�1��=�ⶠ\�OC�\�J\�\��W��\�[qBÐqXI�5b\�j\n�?:�c8\�\n�0q\�XARC/=TS\�J� sR*\ZyRhFH�W#Ң�\"\�t<u�/.��@?/Zh��k��J� 9\n=�\Z�slE(\�c�޺��Y�	ӡ�{�m�\�8�\�H�5e�\r�\�\'\�\�$\��L�\0\��\0Z�\r���\�GRGSUnm\\�K�U̅\�T�\�#\�H\�x$\�S�\�\�A��^�y\�޸ɒH	�b\�R{iA�W�\�QJJ\�zP\�\�˞\�M��\�c��\�i��WВ�k95}�,$\�\�8\�f�Ҋ�8\��\0\�RSQE\0QE\0QE\0QE\0QE��6\��FX������^O�^mV\�M\�W\�\ns\�x��\�\�sN{�:�($�EPEPEP0��(\0\�+\�<q����	\���緰�C�AL\��\�5���9b�e 1\�S�{\�E]�9i�\�c\�\Z�\��\�͚UO^�І��L?*n\�I�Θ\0OZx\�j�(9\�)��`7\�\�|1�\�\�!\�X\�{\�9;ԮFj\"H�v\Z\�w\0p(\�s�R��H�\0\�SG\�x\�6��j\�\�0A#�)64��\�y\�?�8��\�\�qD#�Q�\��\�\�=3\�t�lb�A�>����\�����8`\�\�I��P��=1WUFq�+&\�LEQ\�֦U\�=�@1A��S�F)�b�11\�\�1@�\�g�J�=�s\�h\�t�X�\�6�H��\�zp�v��SJ{\ZC9k\�|�q�k���KYwFr����\�۫��k�\�4�Dg�eq\�\�,M�n�\�s+�m`x�Ͻz��-�k��W ��:�\�^H\�\�!V]���\��Ř|ͨ!}O�֜�\�z]����F�GcV\�\�V%�ȸ�K�\�*ɂ3\�\��\�ʑ��\�fH�(��Q@Q@Q@Q@+`\�&V#\�V\�=���\���	\�\�Q\�\�\Z�K��ͪ\�G��+�\���\�z?�\�M֋\��5S\�R��@�sEA\"\�E\0QE\0QE(����Fn�8�J���J�FF�\�Vf\�,z\n�\�\�,:Q��\�0ϰ���ss\�iMj2�@�$\�;\�>�\�=�\Z�q\�OZ\�d�ӆ=\�1��h@y\�ǒI��S�n~�\\	b\�l�U�\��\�K�*B\���‰\�\�|w\�h,3M��\�X�P\�\�\n� �Sq�U�^G���q�K_(\'�kcI�,\�\��V��20\�\�f�{+1\Z�\�v�VS��bZ��	\�\�s�V��(�\�\r\�:\�\�\�?Ҵ\�1�������F9\�z�*;J��\�ӊ�h!�@��@\�	�\\R\�@������AK@	�ъZ(�J�ym\�\�\�TG�#(=���}n\�K[��w\��\�Y1\�\�\�$y�D�6�\�[��9=+\�\�_.V�zV\�wCgk�꬞Rm��8$`�\�W}�HC����z�&飺�nbT\�s\�O\��ק�r\�\\X*7*\���\0=�\n\�J̓z�lg()ԉ\n(��\n(��\n(��\n(��<�Ė\�m\�I�UI\���\��\�\�\�e7�\0���\�u�m&\0eK\'\���\�����\�H\�ӌ�j��G��Zj:�B\�@��Q@Q@£�\�q3�p3֞O��J\�p\�m\�	\\M(#\���\0p^8\�>\�~m\�*c�m,9\�ǭpr�3��\�x�\�[��!�4!T`t\0b�I$\�D\�1����\�NA\�{U��9�\�i?�΀Tc4�s\03J��T}Xf��sR\�G�F\��3p<�c�\�qҀ\�l@g�i�9�f\�إ�(�1�>��m\0��\�?J�mgu\�]&�fY\�d`x\�j$\�o�zV�\0O�V\�k�N��\�h\n&\�1�{[r��\���v\�\�nȚ\�-��j�\"�S�1Hɱ�c?Zp\�K�\\S�\�\�� ��b��%:��	E�\0QE\0��M\�J)��\�-\�\��Fy/�lZ\��\�	�b=+��1��=j�\��࢑��!Î�ע�J�\�zϿ*ɖ\�\�A8��ך�\�c�WC\�\�\�*U��\'�\�\�&����\�\�u�j�\�V~X��GC��j�DQL�(��(��(�KƖ�\�H����ğ�C��\0J\�|;r-��i~	�<W�j��+�q�2&_Ҽ�	�\"\�Оz�Q\�h�D9�\�Tt\�\�ƙk19/�}�WE@P(�AEPFh����jJ�\�P2��K{tmaܐ���`i���m�\�6B*�\�\�[�5�\0P\0�d����\�fwp\�օ�1�M\�\\�3nf9\'ޱ�<ֆ�X\�\�瞵�\�uEY=�j@p�q\�3�\�<d�4�\\�\�wg���38������\�T��aLQ�S��@̀�R\�֐r3@����qɫ�r)�/����il]���\�Kv4�n\�Zu�g�I\�N��]6řT\"mQ�$rj����\�;�[\������+	J\�\�\�Z��Ġc�qLU\�KPb\�\n~)�b�)�-R\� ����Q@ �4�b�E)�\0QE���%/�S\�>�l.t�\\�+`��r����#îc1\\ȇ���WtiB]�[��\0t�\�Sx�\�\�j��\�q�\�u�7�09\�\����\�\�:4\�&��!\�$gc7�/�g�`r��kóoNFD�9>��7�1�ǥaԁ\�QE1Q@Q@Q@g¼�P���ul2rzc9��\�r��^}\�\�Ly�#G\�y҈\�R:�\\,\�$*LyC���V\�C�w�\�z�J\�q1Դ�����)	\�\Z\�\"��dguϩ�K����Q��a\�9�W�Oȑ�~X̛�\�^y��S��ɮ+\��\�JHP�\�\�з\�o��\��;��L�\�X�=*�WR\��7�+�~���)	$\��dՄ^:Th=�P1@\�v���A8�@X\��;��\nLv��qR[\�e��ZL��l\�\�8���\�B\���Y\\v\�5WD\�T��*\�\�=벶�j\0\0�G5��}�\"�a�\"�j\�\n�9��QY�6\�J��LZ�u�\�o���q\�W�h\"ƏJ\�?��em�\ng�i�k\00I\\&s�\�4�)ц��\��ܷR\�\�ޭ��2]@\�\\\�~t\�\�f�H_Fz0�\�s֐]�������\�*��VP��Ҥs�{P$��\ZZ\'z(\�E \n\\�\nJ)�>i(�B\�R��KMuʚ`�-��MV\�`$�� w�\0�\\š\�&q]\�ĈO\�\�\�\�)S�\"��%\�\�:\�[C\�\�^�}�,�y�8�+�N�\��\�`�H��1�sՖC\�\�?�vct�I{���)�QE\0QE\0QE\0C(\�}+��ŕ\�\�C4L~��\�:\�$\�+\�Й|=9U\�be�C\�\�M!�\�n��o\�l*�z��^O�\�\�jֲ�۵Ԓ\�\�½\\UHl}- \�EI\"\�s\�p3Lp{�@�{FB\���dD\��\nv5#6�\0�Aǭfj��\r\n��\�\nEE]\�}���+\0��򏩮ŗ77Jdd{Npx���J\�\�3���{\�;\�ڝʬ���\�\�U\�t*JǟM�\�\�\�PGZ\�5�2�Kbp<W e%OQ]�\�e\rQ�O��֜MQ��3K�=)�\��S�qHb�T�6�j\�Ԉ2\�Ԋ�cG_J\�t=,\� ,�b�\��\�V�eێx\�\ZU��5�`\�d�+)ϡ\�\�\\�cl\0t�8׌~t\�\�*px�P�\�*�t�7*�\�qQ�����\���\�6�\��+\Zf�\��\�\�ϰ�Cn�\�$�Qj6�~�\"�F�)�\�`\'	5��\�\��Տ��~u\�Il6|�+�튭-��1�\�8ܵW����@���G<�\�Q�\��C	��\�\�\�\�>�E�/cc�gi��Ȼ��ѻn�=$}=���J\�;{�\"\�9\�>\�q�\��F���>\�b\0\�H=}\�$\�\�\�,Fr�=���(�\�2t���\�\�jL�#���i!.F	\�\�W �\�\�\�\�9��\�\�%xcB�_үXNB�Õ\���\�&�\�n��\0\�[F\�b[?�`Y��V\�D\0~4\�g%b^(�����\�L\0�\ZMԙ��\�@(6iO#]e�	����\�\�\����D\���\��\�\�&N	\�GJ�/ۋ�\�\�$�\�}@\���\�����x.?�m\r�U�L\�v\�xܝ�������W^�\��\�\\o�U�\�(bϺ6\r\�L��u\�ڹ{Tv\���X�%�(��DQ@Q@Q@I\�U{�դ�\�\�D+���\'AMHg���4�\\��{�^�c8���u�\��5֠�\�N�\�.�<r3�k����w�\��\0�n\�\�<f�Cf���)jI�C��\0!g�5`����H ��\�0\n\�ۜ<��4�p\0���g	1\�\0y�;P/<� oq��\�<�C6��̈t\�p\�\�f\�ǰ��\�W���\�#��TU�jY#\r�\�h4�t6aI�y�uP6\�\�g<q��\�F䊣\�\��zƪ\0񃌌(�*�-R�-��2O\�[Rfu�2�\�\�b���=)�\�[\�g�H:�Қ:S�v��4<u\�\�[�/3\0�s\�Ex+�\�]���T8���[��8\�\�\����r�\��Wak@\0*���\�F1޶��\�\�٤��4��\�OA\�)�2�\�,b�\�gҟ�\nC%1j7x\�\'˜\��H\�P?\Z�6�knHyW>�\�\�U�.\�c�qMl��\�]{\�l[\�\�I\�R0?Z�\�\�DdZD�\�\'�\n\�_\'h�\�S���\"mST�%��\�;1�\0\n��˵\\���\r�,R�4f�9U	-T�Ђ\rB|B�\�xO�\�X�\�;��AVh׃���?Z�%Wq�\�\�\�\r[�\�\��\�P�\0U�zUx\�\0��Vӊv2�\'jJ\\\�_�\�A\��h �\�v�i�\0*6\�#�N[��k�\�H,2X���H\�y�\�ڍ�P�NNj��j�q`\\�U\�\�\ngh\�޹mB�$c��\������s�mn<��\0\�Z\�,\�<\�=�\�q�p.O�3��O\�Q\�y��`b�@RG��g���é\�kǖms$K\����Ҷ\�59w*I#�ޕͧ��A,d2t\'#��jұ�\�\��6�ck+���Ǔ�#?�o\�\�\�=�Ț\�\�b\�Yr\�aL\�9=�\0�k\��1A;�\�}k��\�\�)i���$(��\0(��\0(��\0���f\����\�5\Z��3��|\ro�\�8%\�[Xc��\0\"��\�T\�X�\�H�dc����_\��-�\�˛i�0\�bx:f�\�(�\�#&s\��U}���)iJZ�B��l��s��b����rjC~\�,��\�\�����\�\n\�*\'<��\�+6D\�ѓ\�pH�mMد!+0S��H\�i�틥�FY�\�R#�.\�Hס�\�Gl>^�W�\�Z�UM�\�y<g�\�<Y\�7�}��\�y\�\�\��\�H�v]\�\0:��5a=�l�$R �WdU�\0\0z�Üf�2hg�J�2Y�\�F~b8�M2\�Mp���M�1�,\�Y<�§�������q����gi�hڎ\�|��j\�\�b\�\��k	��\�,ZõE^Q\�)�1��Efc\'�\���3N9\�W�p(�w�\�_�*s��\�L�9R~��s��\�&��b�\�u+�ٖ\"!�X�\�f��a��pK�\�-\�5��-\�9\�=*�\�q�\�&�gH\�\�z\��\�QEKE�<�5�go�F?x��<A�\�Ʋ+!L�q\���j\��\���\�<֝��5�NVKw�\�fDs��8��ZӖ&L|>1Ԥ�U�2\�\�zMNxDk�[�V<c�\�ڸ\�����\0C�J�\"��\�y�l[�NXn#W\�0\�\�D\�B��2\\E�\�\�D���9=�\�Z\Zׇ��\�=H\�\�ģ�;�̆o:0\�\�/QQ�\�	s+��\�\�9&��<+\�@�1[�g��)\Zp�\�եUxU�PsH\0�#���kcɹ�~F\�\\�Z[뤅N[\�j>\"�6)ocҕ�k�W(<�Y3iK9$u=rj�\�3�g\�\�ִmuC��8=\�=Q�F{�~�bt\�}j\�\�\�~`0z�\�giyo2�W\���V\0�S\�fl�\�\�E�o�;��x�+\�\���R�Pk���0��ƹ\�,O\�m#v��<v�R���\�oc��\��|�\�kR\�v\�B;\��\�2c\�\�0<����\�֍��z\�\�T-\�����������(\0��(\0��(���\�H\�\rF)�\�;Qw\��\�\�r\�\\g\�s^oaq�K\�y�`\�0\�u��\rz\�щ�x������[���\�\�G�H�\0sϯ4���\�.�\�Y�\����\�W*D�dKE\0U�\'�\�#ީ\��_�N\�ёsX���z\"�L�\�l�@\�QI�\r\�v��h\�|��\�\'��\�\�Jӛcf\�l�#�jӻ�mv\�\�U95\���\�ھ�\�Aع�\�A�pWgF\�iV��̙��$�\�֯\�k�\nZF\\�\�\n\����j\��8,H�1�\0׭æ�O:s��ʂG�v�:\�\�\�\�\�ڪ8\���òvV`ӒK�\�Oo�\�Y��(\�\\q��i�(� �\�x~\�v�?{�k��\��\�\�,)�\�3z5���\��B2+z\�8\�Yz@+�c\�Vո�Gҹ\�sdꢥ����\nX\�F�Ѷ�\\ϖ\�wN*�\�yGЎ��R�x3\�2�\�vKI�\�Q�N3Q��\�kvX885[\�\�~C���^k���y-�G(\'*ǆ�s\�\�B\�a\�\\wC^�\��0E \0*�جq>\��$�\�bX�2\�\�r;ץ>�o�U?CX�3����R���\�}MK�d�4٪�����̪�Y��s\Z���S����X!\�\�E��\0\�F�\�{qB5�yK\Z,H\�\�\�:\Z\�X\�6j��Ķ\��!T�\�:\�o�\�R&l�\0\�\Z�*FTԑ\����\�MKU/e��\�4�np�%\�$��\�`$\0v��NK\�;pٸq\�\�z\Zݻ�{�.\�y3dw\��\�\�a��\�+X$o)r�m��nd��\�L\Z��\�\0U�3\�\ry/�\�h\�|\�V\�O�U��\0�r\�7��´�߼*{s\�\�g�D�\�k7ەb\�r8#i�i)���\�l\�1�6�t\�p�o\�K4$nrXpGCR\�^�\�\�\�TX�*\�s\�\\m�\�֗q.�vwƜ�\� �k+_b�������\�+.�z��\�\�$l~+�\0֫V�\�\r\�\��=\�i>�H\"�y�,��-J\"LнR\�xB��L�\�5fȖ����T=)�\�e��DT\���ȓi\'$ƿʎ�wд)iJQTHQE\0QE\0QE\0\�ң%D:\�\�\�^(�X|As\Z\�C�\'>\�\\קW\�F]F\���\�1�|E8\�3s��-q�s��G\��?�tu\�|?�?鰶~m���9��܊\�QE \Z\�\�8\�XӀQ\�G� !�g�=�m1ʹ$\�\"vu��\�4;�O��-�\"\�\�\�+\��d\�:ao�G\�\r�\0y��\���\�+�k�\\\�2ĹRO�Et\Z}�~y�Jjg\�\�W�\���i�bR��3p9��u�x�\�\�)8\�L�g��\�P)X�ba�W��L�\�n\'��\0#�M\�U�Cd\'�c\'��\�q\��V^�l`&<d&\"�+�h\�\�)�;�\�\\������|���U��[�\n\���H\�\�+c�םX��)�Gџu��ÓEAGb֙�%\�����V\�\�JƲ K0\�\�\�[�V\"�mzT��C��sA�:S���)�1HE:�m2J\�=\0���D�����R2\�V\��\�Z���Z\�Wt��\�H\�x&\�Q5��2~��x\��XzR+�\�]-ر��\�B���\�T�\�n`M0s#�7z�\�Aڥ��#�\�\�t}*QLQ�N( q�.|L��63HE;v<\�\�]Z%\�*H\�\�v��z�\\|\�\�1dM\�Ǡץ\�\�-JB~\�p����\���z\Z�\�\��RW8H&��u\�\��;�����\�\\�+�ܱ(�z�\�-V\�\�P\�\�$u�[{�\�U��C�Ҕ\�L��:I\�\��B��y\�+ʮRK�V[�w$��\�PzWm<�Q!Y;�\rd��\�s���O��\nIؘ\�\�\�5\��Q\����\�tv\�\�/N�%��Ԝ\�x<�7�T��hQ�q�kb\�%�HnNH��g7�0yɨ--\�\�fU�\�X\'h\�zTpg��\� �t���� ��(\0��(\0��(��\Z��\�\�HW5\�xL��0̧�b�\0\n\�j��i�\�\Z\�܌\���:���\0\�y\Z�����q^�;W�i\�}��\�\���$\��\0�ׯ��\\ta�U!�h���\rn�\�|W{,zhH8�\�����w?�t\�\�&��\�\\^�\�I\�;��\�g��}Jз\Z1�\�;\�\�e�FM���8-�s]\�\�;\0TV�x�\�O�ݹ��\� ����pH\�\�R�\�nwd�\�C:)\���]\�\�o�Q\�4�`�Y��\�8\����-�G�)\�`��03Kq���\�\�:�+�\�\�)5ܪ���ج�Jc=�b2\�:�\��\�\�jvp\�\�\�P-�689\�\\��	�,x�u\�J��\�щle \�{\�鉁A�-\�\�T�Bk�М�\\\�S�¶����C��G\�&�협X�U5eo\�FӚֵn��3\�\�CS-@����A�&)\��Ҟ)�\nZAKLA�B)�#+���t�\�Zi��\�\��O!sҬIHwd\":\nxA\�O����E/j���Q`��\�-P#;S�[�ջ�+ډ2�)R:�\�ȹ��J�%�\�3��Pk\�\����z�����w|\�A\�i�8a�p�BAۚ\r9ʑȯ�-�U\�aFGJ�;uZ� J�\"$�W�w)#\�j\���u���\��҇m\�P~4̘12g�\�\�\�R ��1@��å�QLAEPEPEPi�a��\��ԀZ?���\�~Ϩ][�C\�+\'<w��b�SB�\�\�\�\�b\0�GҸ_Z,^ g8T�5|��\0�]W�oE֚\��6\�\�ɭ%�)�\r�AFq�̒��\'�d\�	\�\�\\�\�C]I,jc��7c���\�u@\�-�J��g>�\\��r\�\�\�@\�\�1�\�x\�E4�\�\�Ya\n��A\0+R�9u3:\0Y?\Z\�@�\�|g+��\���˵�\\\�y���V�Ï\��\�ʃ�*�+�v\�c��Q\\�X�@���\�c+\�\�O�e�w9\n�\�A\�{�\�6���\��\\޵j\�\�\�U8끒�n\�ZYf\�ch=�?\�Lh�Y��`\�X�\�n08�hZ�\"\�\r�1�:\�Vސ6\�;㚡t�Q\�1;/\�v��^p@sVޅ������d\���\�\�\roYH9\�\\\�5�\�[G\�����A�;�\��@�\�{\Z\�\�N�*��҃\n�TK\�5 4\�c\�Jp�Ҏ�\��(�\�HiOZN�\0\�M=iƘ~��B\�4\�҂(\�1I�Ri�(��\�\0-.8�ӱ@��^�ՃP��4�\�\ZPNX\�R�p\�;�Q�x�\�KL�)\�J�\0�犑~\�B���)�-\n(\0��(\0��(\0��(��߅IL~��A\�\�\�{\�i\�\�l\�K�4m\�~��\�oܘ�i-H\0K\�z���\0�]/�\�\�\�9��A�Bk��\�\�\���\�ߏ�a\'�\�A\��Նz�\'���\�j	3ueXd\�lm\�=}+�q3\�7!f7A�<n�ƺ�R5�\�L�\�#b8\�k8\�;-5�\"\�>R{\'�\nL\�I\�Ǵƿ0\�Q\�PټQ\�n%B��\�&�P���Im\�B�s\�XW�f==�x�{ˀCN��~T�VԒ\�3r�>n��=G\�*��I�[n��7Cv\�}����\�+�ֵ�\�U敤\�p0=O\�\�t���}�V\'s\\`�\0\�M\�\�\�vZ�\�\�ck`��}��\�Z�\��\�\n���W^�Z\�\"\�&eGRs\�v\�?�q��:j-�\��\�=Nq�)E\\\�.���Pݼ��\�W�	\�q�\�\�\�iX�\�R1�\�t6j�����9+\"�\��Y�ub�qp��4\��V�\"�\�n\�%��\�-\�a��jlD����2TC�J��Y\"Ԁ\�@�O��4��J)�\����R\�C4��Bi\r!�\�N\�\�l\n�\�\\\�P\�Hx��`TÁ�lQ�ZI\�Q���p%�\�ӑF*@�\�&\�#vjE\�O\�F\�PR\�\nwjd�=j)� ԭ֘\�b���j^\�\nqR�\�!�iE%\�.*E���\�*�	�ES�Rf�\�!h�4����֐�$�95�d��m�\�\�6���)\\\rL挊\�2Om>b1��q��0\�3D�܊.\�c�}2C��iݩ��@\�\��\��O��=$����\�$ѣ;I#<��\0֯j\�^I�ۘ5\���	\�\\�ǚ�\�4z���{Xf~b�5�\�{��\�\� �ǖq\�[j^\�*j����\�p+4&\�Ř+\�Bw�\��\Z\�\�r\�\�UP\�\� Q���0>S@\�\�\�O�S\nUq��\�R\�\��\0�F\��r�\�\�\�뚵��,�nOΧ�\"�_\�\�&F�\��V!��rI4!�q\�H�\��]cy_n�9 }}�ς|Ki���<�3�|��}:j��#:�\�ųd�\��\�pk�v˒1ֵQ\�[��\�\�wz��4�2y��ߌ�\�\�?�p\�ݭƮpn\�c>��\���\�eV�\���>\�\�AIP\�s\�]5���\�sv�\�p+~\�U�\�\�w�\\���\0�g3n����V�mj�;F\��WYj6ƣ\�\�7�\����Pw�\�z\n\�\�㊆D\�B�\�R\rF�(�b\�\�OZm(�D��\r0S�;�:�LѺ�j7`)�U$��\�jI\\Y$,v�Οdri�%[Q\�$6\�8t�\�M\�1\�T���=)�V!\�>�@�W�\�53č\�\�f�S\�+u\"�֬n$�\�_3����j�60k\"}&\�q\�cp\�qPFn4��%\���)\\����\ZuU�a\"\� \�۩\�ɫ\nO&�Ґ�A$�n\0�!\��RU!)/�VU�hE4KG�\�\�\�R�D�s�njjd�����QE\0S[v\�ۍ\�\�5���\�(�ۿPS\�#�+�]N\�\�b\�v��>�Z\�\�K�6�_\�`q\�>[\�$�\�FP��\�\��\�5��Z\�Y��\�U=3\�&�v+��\�b�\�\\\�N9=jZ�mq�uo��<�\�V7�\�\��C\n�^&��\�2��\rZx\�LZx�0�<񵹵֣�\\\�\�c\�\�u\�x�\�4S�\�R�O�`G�\�8\�8�x\�}�ݹep���Q]x�<�u�5�F Q��\�\�^�D�#��z\�[pf]�o-���#]	\�Y����etÏ�\�\�HFwۡ�\�\�\��,�\�÷皊\�\�\�0U��\�F\�\��4��\��d�\�\r\�)d\�A\�\�sT�My�m5\��y/�� P�)q�\�$\�\�\�I1\�2zd\���ך�p\�)�x#\"��дE0n�T@�q8\�&8\�ޘ�:�9ZX�*:ֽ���3,\�\��+\'\�\�\�@�bk|/�t�:����ű\�X��\�\�����\�w\�\�sWЌqY��\�}*qҠ����Q\�Lp��t�PH�b�))i�ZcS�S_�*\�\�8�\0Za�V�\�Q\��4�4!��J>^9iM�f�\�f�d�i�\�zSZC펃��V\�䊝�EW��h.#m���_�yǥ[�@�Φ\�\�\�7�d��B��I\�P�3OW��-m��\��Ջg$sUs�\�Ks��Ah\'|\nz.\��T\�Y$#�i�0>�\�h�QE15\�\"3�@\�4\�TuR\�\�\�3�dz�\�\�\n7��\�JÄ�\�j�\\�U}\�\����Y��\�\�\�\�\�;�V����V0k�\�q\�*lحs3\���\�T�[8�\�JB� ��Z\��(aЊGE�p\�z\Z,2-�����A�BC��3T�(f��<\�I��\�R�|��(�a�H\�t\�\��@1i☽qO�+3\�V��@���N\�ˏU\�*Ӡ�Ad�h�\Z\�캭���F\�ǎk\�z�GJ�\��m�1m/��?7���\�\ZU\�\���[��\���\�S*E��MB\�\�! �\�J\�\�d��@H#�v5$���[->E\�\�\��)Ƿ5\�x��Y#�\�\�\�9\�\�\�N��k��]�+��h\��)\�A�O\�_\�潍��D6��$\��\�\�jZ9\�FEܱ�#f;�zVq9�W҉/&~>gc\�N�H�Z\�\r�\�⟎*>�g�J�q\�f�\'G\��d�\�7B\�;\�\�+z\�\�\�]�1�\�5\�=θlOe6\�<��Z�0\�P43�\riA\'��H��3V�\�Vr?\0���\�s\"\�ju0i��@���4f��\�L��O\�1�SBS�\\�\�\�-\�3��}�[�u�.-)%\\8\�\'��o�5��f\�\�H�pzV�z��t���9�5	�\�\�q\�\Z[}#P���;�YЋ؏ʤ1��\0׬��mR\�`@\�\�Aiq\ZP$ҋȍ/�&}h�\�=+���2\�\��7Ch%X\�\����\�H�T��gy�\��R4X9lJQ{Tf0A\�S��&T\�v\�)\r\"C�5��\�\�\"cS���\�\�\��.y�ZZjkے\�\�8��U��\�}8��\08�h1�4\�H\�:ՕLIb4\�sO�Hűh��	\n)3\�.h\0=i��\�U�2��zu%\028\�%\�\Z*E��\�\�Ky\�*dF~��>��kV�b�\�eQć\'\�I�5���\�$\"i�\�	��JڮkM��#C��\'񮓭$*G��%\�\�*n\���\� \r\�\��V��\\\�޴��(�9_~�\����)��\�\�h�Ɯ(�QE\0y�-��\�e��(�=�\�:\�<#t&У��LW\�\�k\�֬\�67\n��z�\��f�\\1�\�ճ�lUt)\�v�,yz\nl\��W�q�J�;A\�\0U9\�)#\�\�j㏭I%yl\�\�D�	A�8ϡ�\'\�k]N\�Y	;�A9\�\�ֽn\�_!�U\���\�^\"�C\"*\0��c����;\�Cr\�\�\�ArG�BN*G\�\�j\"x�Ѓ �\�>&;�\��Œ/��\�\�q��;%5o¸\r�\�\�ƽ\�1\Z�\\�\�\�\�>Xr:\�h\�2�\�0G*a:VCN\�\�J����b��\�\��e\�	\�\�G�Cf�G%XW�\�H�4��n�.i�;4\�\�K�B3@\�=ݩb�/j�%<(\r�\"��J��5km3m0L���GcڭG.>\\R\\S|�)�rSR�W@G�V{�!\�L���\"��m_\��\�X�o\���\�q�cڴ�\�\�\0Qr�ُui{)X�s���{B\"(\�\�\�2\�9��*�fd�@\�&c��$Q�U\�zV��;W\�N*\�K��\�D�\�=\�hWsn#�Q1,�\�*\�(��oZh\�L\\�2x��2:W\��Kf\�gc�9c�\n��\�<�9�CN\�\\\�c����\�9\�Z(\�I@R���\�M��n�\�x�\�\�\�\Z{�\0�\���O\�\�r.D�}\�\�\�j��-ޟ�A$�3,c8\�\�~3�\�\r�x\�P��\r0M�c�\�}Mq����\�5\�Ť<\0>\�\�;V�\0���\�i6	d`���¯\��F�\�h���-ַ�\�w.|���\�\�WX�\Z(P�ן\�F\�75�eXѣ�w�fG��ӇJi?1�P1h���\�q6�+�\0L~x�C\�&\�_EcĀ�\���A\�-�٥\�@K\��|q���+7{k�Y��97�^j�ŭ�b�}���	���\�c�36	\�\�ڣ�o��x\�\�\�ďn��(��\r�Ƹbq�RE���K�pm\�2\�{�\�|Kn�f���\�\�!q�Xp?+�\\̎\�1��ϰ\�\�p^\'�`ӧ%�u4�\0끞?0����H��㊬瞵pƾfXw#�Qn�\�T����3=�Fk�T�qI�՝���\"\��\�kd��rMsZ\\J�85\�Z�W4�:��s��h�Ҝ����ngMI8\�Fh��j<`��<)�fA�j�9�Xݣ|\�_�l\�(�\0�\�H���\rJ�:S��D\�\�ޣSR)\�\ZN\�4sN�!\r%;\ZFFi3�sRcژ˞ԀL�ҚN)� \�	&��aI\�z21L�\�\�\�;\nM A��\�Cޞ��\�b��oA���Z�\��2Q\��\�Cc\�\�ػ�\�ϵdx�R�\�\�\��6\�&	\������\�e�{;s�%2o\����r+�\�|F��\�>;b.\�\�3�M;Ɏ\�\�_��c\�~y\�9��r[\�\�aA��\�?��\�!\�\�k�VF,D�d�\0\�5n9\����z\�(��v۷Z��Y�Q[\��nl\�\�5\�ZFa��20U\0?Z\��)�\�q*_\�)X#bЮ~���\�nzT�\�mB�=+�׼g�h,\�K!�\�nD1��g���\�7\�8#i%uD^K1��x�\�4�e��\Z\�J�\�p?\�\�׼]�kͶYv����\��>�λ\��\�4��j\�S���\�4�\�\�f\�4\�ǒH�\�\�\�O+d�\0\�p�U�#R�N��\�3��\�/�T=*\"J6E\r]X.}�_Ǫ\�^\�\0Y%A\�\�\��NW&���~,\ZE\�\�\�3Iq�\�6��Ӟk\�1�B�H\�9\�\\��L�\�袑�}\�QI\'(p\�A8\��zހ�=k\������{\�l���	\��u\�\�B�OA^g\�(U5\�&6��1>�\�J�\��nq�\0մ��pS�\�&���r4��|\�]\�C\�\��V�.�M;\��b����\�t��\��Ӏ}O�\0^�\�V\"VeDa\�$lK�[�?S\\W�W\�VV��W\�9?{\�\0�\�4�d�\�1?Q\\g����F�\0<�]A� !N;�<݆c!\������-��B� c�T�|�\�<�\��<3jn/\�\��A\�z\� \�\�\�\�}�O�	%;�\�83vE\�Wf��AJ�\�]\r�ȶ�q[��W+z�\'\"�m9�HW�W +Q2g9�{i���!�gI\0 \�*Z2\�Z,�⢒!�E�\r�`F3V\�\�=\�0��\�r*h�\�j暿�W�k\'\"I\�;�8�\�\�Uc��jʰ4\�3jè����!1I�uF�\�u�4�P;�L$(�\�\�SzP;�ہH\r<\�\�R\�\�̗���ꦥ\�m+R���¬\�X\����VߊF�\�C\�hԐ\�\���#\�Z\�\��y\�\�&QF{J��92\�_l�\r\�bUx\�\�&Ӟ\0\��\�sSL~\��\�U���\�bn99�.OJ�����\��Fd���LJX�[�\�q�\�\�\"\�\\e\�\�\�21\�\�Ҩ閗O%�skݙ\�v\�s\�]\��\�o<piZg\�n��g9>�T\�\�,ji�n��m��\�\�##\��`�� a#�yf>�ɩ\"y`JT�9*0+\�|\��\\6�c#-�,VgV\�V��\n�\�촋�+��]g�ъ�e\�n�A�\��5\�J\�\�\�%��%�$\�M ��.y\�5\����\�\�\�34�W\�Ȥ�):\�H\�.OzBr:\�f�\�Ռm�]V�\�\�_J�[XeC\Z�@�wc\�{W%FjZLg\��QEr��^ƁD�tzA@�,*^\�\Z\�)\'�3�\��\�5\�x\�\�u��\�p��?Q�����\�\�0��e��\�\�z4�rЩ�c\��\0��\�\�\'\�\�\'V�Ȓ\��0p?\n\�\�Etg\��\�\�j�\�?@\�\�Nq��OTx\n8R�{�\�T�\�_$>A&\�O�\��v�\�ӂY��(\��Ww!m\�FG\�Ȯ7Ɠt��T$�)~U\�\�\�Qď-���\�C�q׌U�\�\�\r�\�b�Q��?J\�]\�\�Z�P�%R��ݎ½N\� �\0q�����X>\�/�\�G\�\�*+���\�>��G�\�\�\�A��(\�Ӡ�������\�c�ai⚢�)��v�\�5�i\�\�\"� \�GZ�����\�D\�I��*�`�U\�(r��\�ڢt\�AAjET�\�\�R���\�rH�\�+׊EZ\����^�PÓX��T�(y4Ȕ.n�\�tw9����Td\�b\��\��C��5nh\�@4\�K�\�Y�^i\\\'���\�F0F�,��`;\�\�[Y�\�,\�\�\�\�\�\�wr\�\�W�\�\�֫�=\�\� � \�\�V��\�cOPԥ�\��\�\�M\���ڳ�-�\�3�^s\�G� zԲ$,�Vb�\���R!����FX9Q�S�V\�Ş���\�jRJ�2ÔA�dzqPˠ\���Zj2L\�\�;.\�\�\0z�\�\�m�i&-��+�=�x�dX\�\�\��q&�x���v�~{\��O\�ƙ���m��z�\�=Mr��#�l\�\��\0Lp˞}\��z\�_�\�J�w�\�Y�;���\�\�\���\0�6���>ۻ�c�����\\}k\�Y�0I$Vω���R{\�\�V%\�r?\Z\��I\�a\"�M4��I��C��\Z:�I@���R\�\�!J\�\�K�h#\"����p�\�҆3\�j(�\��\����1jI?՚�M\0<S0I<�O�^8�1�\�\�G@\0�.�3[K\0��\�\�x� m\�\�|\��\�\�\�\�\�hƈx.�;w+���^�g8�Ӓ\�6w�\��\�^w�iR��N\���F\0g�֥��m��-l	&��\�u\�+F�t{9I]f��y|\'l�T��#<�ǥy\�o\�\�y�iV\�I#\�1���\�\�\0t�\�\"\�\"�Eo��&�\� �YӮ�\�,�\��\0\�Ny�˫�i]�s�\�\���˱\�\08\�N?���I�ڑ5\�$�\�hS\�}}Mki6\";4�\�<��$��\�[��X�\�\�t�)\�q���a�\n�\nԂ<P\�ȫ\�fS\�tk\�Z�j$Z�8�Kd�t���N\�aG4��\\SY���]����sW6�P\�\"�+�f�x�*\�\�\�w(�=�Za�\���ɚaL�\�R*)t\�~�:]0?JVOj��f�\�\\[\��R�\�=\�Vm\���\�t���\�\�A�֬\\�s�{\�\�\�>��\\���ϡ��$����\��\�ɦ��פ\��\0}Vʑ�4O�\�\�m-\"/5\�h]\�+�\��\"\�Ѻٗ��(>\�x\�\�Չ��P�U*h9\�jj\�\�\�vn/%\�\�\�0{\n��\��D94gk��RH�\�Y�\��\�Eh#�&<�zs\�\�X\�\�#�X�r����uWWR\�Q\�D\�6ZE\�\�U�ܓ�+sC�����_\�����q\�\0}�\�kz\��a\�u�~�\�\�\Z\�\�D�\�F�z�\�e$�\Z\�\nZ���\�i\�a��\�Y\�\�c\\�\�\�J;O\r%�Hw\�\�1�#���{�Up�ߓY\Z��k\�[�qu4\�\\\n6ch¢1�+\�;�E((A\\�G�L]\�H�\�o~\�$G\�W)pܝ��I�k��\�5\r1�\0\�m%�d���?>��\�t\�(�sM�O4\�fMXUc�^��֝\�Є:�&�ɥ�i�&h��3@+L\'�R�h\�:CKA�1\r�m��\��~�Z6\�j\0��!;W>�is\�6F	;ɤ8\�\�s:���U�n.\�1\�Ms��\� ^��*�\�\�H�(*��}\�ͯO�q$y��TV�\'�\ZP�n\�\�j>(��\�\����\0q\\\�k�ʠ-$��|���f�w�ȥ�Ew#�Ws�hv\�\\! P\�G\�#ujnI!J���\�i�g̺�8\�#c�5\�\�\�\�\r�ŷ�R���\�\�4�,��*{L%\�1U*~S�\�YJM�ɶdZڋ]\�Ĝ\�Js�U�=\�Y���>�\�!]���`���\�\�B\�$� �\� v��\�ڬ�`f�4\�N\�d�1EOȦ\�J�\�\"�S\�\"�\Zu\r#(\�Jh��\��\�:�܊\\�H}�Pz\�6�R�L\"��#\�\�HS&)�qI��2�PI��x\�\�٤Z+�9�]t웾�\�\��V\��ұ�E�원H�\0V\�~�Qܷ�\�b�q-2�\�\'�\�J)�\�E1�i�s\�Q�S�G�*H$t���V\n\�>\�u �qր��!I7�\�,o�	�H\�i\� \�p\nH��\�;aL㧨���\�:>��Q)��\�\�\' \�\'��%\�/\�\�uec\�\�w�\Z�\\\�$��\��\�R\�\�Ӛ�:�$\�M�c�+�\�d~����p\�FjГ\'�q05/\��H�{�� �\�^m�i�:M\�Z\�ŲA\��a\�=k\�K�p\�9ꦹ��\�=5��v΀�N\0\�>�CMԧus\�A柎*[�)\�.�\�\�&�T8*G?Z��8�iىK�BO��AE!����e-\0}QIE\� =\rQ���\�W�.\�\�+B\�\�͓��q�nȷ,�B��uQ\�k�\0ZYbh\�R������.��c#���\���\\\�$z��Y\�\�\�f�[wx7\�\0V����qw$�\�k�*:\�6a�.3\�*�GL\�Ցn\�\�\"@�8��@@\�隣k*��qZQ�VOs�I���\�O\�N;�T�֤U\�I�\�K]Y�\�ԃ�\�\�q���iU~v\�\�늙#T�y@A\�H5(�ɓ��\\\�\�#��\"nЈ��S��Oz��+����֝�P)Ҍ�	E <\�\�M\�)4��aK�L�i3H\�\�֗�%0�cO\�E#q\�&R ��⪰\'��S\�35&�h©�{\�LN�8ѿ�t0\ny�k[fx�9���\�\�\�򎠊abx�L�S]�Z��)�-H�̑�ȧF\�H4\�#�=���h�~a��\�d\�i>�\�Q\�!Z��\�{�PQ�<�Lg�\�\��31�\�ޔ�\���X�0A\�+oH�1�\�b\�+p\�j|o�u�]9�;�\�-o\�sfN6d{\�E�dJ\�{u��1���B�\�\�\�z�Ȧa�\�gޤ�#UT:\�L\�>\�o�h=j�p\�	���.�)\�B���;��T�Q�M\�\�ג\�\�+F\�U�\��\�׺\���\��k��\�w.�圎��?�3��+��\'jJR1ITp�R\�QKI@TQEAy3Al\�(�Z\��\�mm\�\�\�(�5\�]\\5Č\�\�q9\�Sj\�\��;g\':Vs���O\rIEs\r�F)���+\�N\�@ևX�I\�OQ�pb9�K#C�:\���+YD�	\���v��\�\ZzH\�\�py�L�\�ʤ.��>y��\�[H\�n3���\�VG\�p9\���v�\�\�g*r\ZmKl\�e*1�g\�E�c@;y\�ޘ\�i�Ϟy\�6=)�@�\�(\�H\0�Ҁ��:�z\�!3�M\�56��٤&�A\�I�\\\��\�I\�\0?u�\�\"Ɛ�\�+�\�\�\���+\�;\Z����\�4��(4X��\�\�f�.�2n�g98��\�F�&#�H�y~�m\�^���\\7ך\��F�\�k�p@���\�sU����/LS�>?�j̆�\�\����8\�Hy^}h_�i\0�\�Q\�\�FQHN���J\0y\"D�\0J`�sǵ,_1l�\�<�?\Z`09�E(\�1M�\�~�r�#\�9\�z\�\�\�m\�\�\n\�D\r�~�*9S��g��˕�ޕ�}�W#x\�\�֚\�˃\�ּ�\�\�H�]O;�Һx&r�y5�\���ϝ�1pqP\�Z���=�\��P�Ǳ�\�T�T\'��xb�1ڨ����๒9�F*A�k��\�j�\'���\�~�\���k�\�R<��\��;\�T@RR\�\�`�\�','ATPL00050','sandhya.jfif','image/jpeg'),('f093ce3e-4a18-442e-93bb-23cd8b42cf2a',_binary '�\��\�\0�\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342			\r\r2!!22222222222222222222222222222222222222222222222222��\0\�\�\"\0�\��\0\0\0\0\0\0\0\0\0\0	\n\0\0\0}\0!1AQa\"q2���#B��R\��$3br�	\n\Z%&\'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz�����������������������������������\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�����������\0\0\0\0\0\0\0	\n\0\0w\0!1AQaq\"2�B����	#3R�br\�\n$4\�%�\Z&\'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz������������������������������������\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�\�����������\�\0\0\0?\0��QIJ*@(��\0Z(��\n(��\n(��\n(��\n(��\nZJZ\0(���\n(�\��SI\���\�g5F�U�ӑ�\��XtA\�4|`^\���C\�tOwlW��\�W�\��YW�w\��䮵i\�ܙeg\�O\'4\�[\�7\�\'��`\�\�\�6\�~5\�^�\�\�y�#�1\�p]; ,r{zTBf\�d\�ަ�T�\�n<a*��ȸ���\�\�\�\"�ݎs��*ǎv\��S�\�U��yc\�+#������PHD�{#HQ�}NՋk�`�\'̹�\�x_ ��� ��\�\�\�\��\�\�?/>Z��\� �b���]\�qjɲU(\�$pG��\0^�m���(<.~e+�~u�\�\�\�V`���\�\'޵�?,�F1�������ʅs��բ~���<\n\��DMe�Guy��ˆdb	\�(s\�{֫^\��+\�Iq�\�\��p\Zg{�\�H<0\�I�\�\\=��4o�6\��v\�[\�됈��S\�� p3�\0\�qhfإ\�T�\�`�|���8��y\�5 ;4Rh�\�I�Z\0(��\0(��\0(��\0(��\0(��\0(��\0(��\0(��\0�t���(�0��(�QE\0QE\0QE\0QE\0QE\n(��\n(��G,�\Z�{T7���m��\�B�\�$�j�x�\�Y��ܐ�v\�~�Ҹͽw\�\�\�W�\�L�\�\�\�\\��]\�\�d�RōP�\�|�l�s�UC+7�k ,<\�P�\��P��婜\�sH]B\�z�\'�]�)�\'ڃ�d\�Z��\�4\�\�L	W8\�B\rZ�\�\�ʮ�c��QE:�\0�G��˓�\\�\Z,�Wq<k\�{�x\�g�I\�E�ͳ�\�\��\0:\�EHЂr\�\�\��rVpOJ	5!����b \���F�yБ��?��_\���TI \�<0\�<]�\�	\�E+\0�y�F\�ïB;�\�KƎA(;�\0\�f�y�6\�q���!vٷ\�\�\0iA)����\r\��\�㙤��s�x��1��\�ْ�X�P}kcM�m\�$Y��z{���&�҅�3Ý�d+��\�\�koK�i�W�\�O=+�ӤA9�.\�-�\�9\�үY��r\��3�;Vr�\\ꕁ�u�6�8UFy\�W㞵ޖ�R�i\\�(�EPEPEPEPEPEPEPc�(��p�0��(�QE\0QE\0QE\0QE\0QE\n(�\�\0x��c^�\�`;�\Z\�H\�\���*/k�\�6�\�S3p�^Q�j\�wv�\�\�+|\�U����\�jSe��\\\0xAXR܆�\�Ӿj��$�\�\0�w15����\�cۯJ`��`~��9�\�I\�qLC�v\�lҔ b�v��9T}?\ZLaA8ǽH��\�`+=\��\0��x\��x\�^��X�v�\�9\�2����\�ϏL\�\�Ve�;�gD8�\�Y$D;#� v�{�\�lX�JG�1R\0�\�NS\�S�ޕW\�ظW\�OC\�,\�6\��\�7f�(�\�\'�\�q\�EƐ\�,��z��\�O���\�0���\�-%pZE\�Ti�j�\�[ ۥ+��\�*\���c|���*�\��9��pǧ\�?)�\�\�F<\�\n���\�\�S\�\�\�!�U�Qv.\�ϭ&\�}>��s�8S�\�=\�8��[\�\�\n�\n�PN\�~;W/�v�V\�\�prG&��,C\�ܞ�\�\�:�i湀\�p��O�Ԙ8Y�a��Z\�\�e�i63�q�q�rkP\�D���\�L�|Vm\r3n�e�GC\�J\\�\�^\�ˬ\�\�\�\�<�~`�8�mZ\�P�z��\�\�\�X�h�dS��b��\�c�*d`\�\"��uQL�(��(��(��(��(��(��(���!�EP!h��\0(��\0(��\0(��\0(��KT\�`\�\�\�\�ᰪ8叠�7Z[I<\�d�k\�<M\�ծN]��\���4�oY�Q��Y��:\�zV�<g\"�%,O5\�q]1VCNi�\�\np>�4\�.8��N>c\�OI\�\"��/ZD#,Is�\\c�;pQ��\�M\�\�OS\�L�H$���gA�)�\���|\�{\�\�\�\�KO\�~EQ/�ɧy�i�i��C\�)\n;\�T\�2\�-���b\�n\�\�@�����\�&���\�.A��rw3\��Rc�\����q������Gɕ`F1S\�B��8!F>Zݴ�U$\�~���h�����*FI|����⚚XޮF��\�\�[�U�ƥ\�q��*9�\�At\���\�\\Y�\�\�>�^�1c�m\�r\�t��U�q9<���A\�ͿG���\�LK\�t�RKlEM�\0�\'��W���]w\�s�����{.�u\�C\���Y\�.]�\�\�1�pz\��թb��t�jH@\Z�\�\�8���u$1\�\0q�z���R����X\�p	��mʴ�)\��\�Oڹ66d�\�$�E(aNG�\�S[^�YJ\�W��~\�TLfUY�mȑ�\�\�z�\�3<r�=�G�\0_�T�\�#d�\n������\�#�\�;�\�{%ʌ#�\�\�]22ʟ\�S޳jŏGWU\0�f\�O^*\�9�\0�QE1Q@Q@Q@Q@Q@��O�\��]\�ȳH\�\"\�\'�\�!�EP!h��\0(��\0(��QE\0(��P\ZT\�$T���q���\�x\�\�ms3\�@؆\��\�\�\��|ջ��2W!�I\��\�kݫ���\�\�4�y��\r=s\�X\nJ\�\�\�(\0�zS��\�\�)�v\�6�H\�mP\0\�Ss�)��\�\�!\'\�sށ�;��eE�y\\-{ry�n\�\�O\�HNiHڹ4\�NhХ��K\�\�aiQr\�#\�H�s\�hږ\r�y�\�ڨ�䁂=\�gO�21����$ˌN�\�\�1��=�ⶠ\�OC�\�J\�\��W��\�[qBÐqXI�5b\�j\n�?:�c8\�\n�0q\�XARC/=TS\�J� sR*\ZyRhFH�W#Ң�\"\�t<u�/.��@?/Zh��k��J� 9\n=�\Z�slE(\�c�޺��Y�	ӡ�{�m�\�8�\�H�5e�\r�\�\'\�\�$\��L�\0\��\0Z�\r���\�GRGSUnm\\�K�U̅\�T�\�#\�H\�x$\�S�\�\�A��^�y\�޸ɒH	�b\�R{iA�W�\�QJJ\�zP\�\�˞\�M��\�c��\�i��WВ�k95}�,$\�\�8\�f�Ҋ�8\��\0\�RSQE\0QE\0QE\0QE\0QE��6\��FX������^O�^mV\�M\�W\�\ns\�x��\�\�sN{�:�($�EPEPEP0��(\0\�+\�<q����	\���緰�C�AL\��\�5���9b�e 1\�S�{\�E]�9i�\�c\�\Z�\��\�͚UO^�І��L?*n\�I�Θ\0OZx\�j�(9\�)��`7\�\�|1�\�\�!\�X\�{\�9;ԮFj\"H�v\Z\�w\0p(\�s�R��H�\0\�SG\�x\�6��j\�\�0A#�)64��\�y\�?�8��\�\�qD#�Q�\��\�\�=3\�t�lb�A�>����\�����8`\�\�I��P��=1WUFq�+&\�LEQ\�֦U\�=�@1A��S�F)�b�11\�\�1@�\�g�J�=�s\�h\�t�X�\�6�H��\�zp�v��SJ{\ZC9k\�|�q�k���KYwFr����\�۫��k�\�4�Dg�eq\�\�,M�n�\�s+�m`x�Ͻz��-�k��W ��:�\�^H\�\�!V]���\��Ř|ͨ!}O�֜�\�z]����F�GcV\�\�V%�ȸ�K�\�*ɂ3\�\��\�ʑ��\�fH�(��Q@Q@Q@Q@+`\�&V#\�V\�=���\���	\�\�Q\�\�\Z�K��ͪ\�G��+�\���\�z?�\�M֋\��5S\�R��@�sEA\"\�E\0QE\0QE(����Fn�8�J���J�FF�\�Vf\�,z\n�\�\�,:Q��\�0ϰ���ss\�iMj2�@�$\�;\�>�\�=�\Z�q\�OZ\�d�ӆ=\�1��h@y\�ǒI��S�n~�\\	b\�l�U�\��\�K�*B\���‰\�\�|w\�h,3M��\�X�P\�\�\n� �Sq�U�^G���q�K_(\'�kcI�,\�\��V��20\�\�f�{+1\Z�\�v�VS��bZ��	\�\�s�V��(�\�\r\�:\�\�\�?Ҵ\�1�������F9\�z�*;J��\�ӊ�h!�@��@\�	�\\R\�@������AK@	�ъZ(�J�ym\�\�\�TG�#(=���}n\�K[��w\��\�Y1\�\�\�$y�D�6�\�[��9=+\�\�_.V�zV\�wCgk�꬞Rm��8$`�\�W}�HC����z�&飺�nbT\�s\�O\��ק�r\�\\X*7*\���\0=�\n\�J̓z�lg()ԉ\n(��\n(��\n(��\n(��<�Ė\�m\�I�UI\���\��\�\�\�e7�\0���\�u�m&\0eK\'\���\�����\�H\�ӌ�j��G��Zj:�B\�@��Q@Q@£�\�q3�p3֞O��J\�p\�m\�	\\M(#\���\0p^8\�>\�~m\�*c�m,9\�ǭpr�3��\�x�\�[��!�4!T`t\0b�I$\�D\�1����\�NA\�{U��9�\�i?�΀Tc4�s\03J��T}Xf��sR\�G�F\��3p<�c�\�qҀ\�l@g�i�9�f\�إ�(�1�>��m\0��\�?J�mgu\�]&�fY\�d`x\�j$\�o�zV�\0O�V\�k�N��\�h\n&\�1�{[r��\���v\�\�nȚ\�-��j�\"�S�1Hɱ�c?Zp\�K�\\S�\�\�� ��b��%:��	E�\0QE\0��M\�J)��\�-\�\��Fy/�lZ\��\�	�b=+��1��=j�\��࢑��!Î�ע�J�\�zϿ*ɖ\�\�A8��ך�\�c�WC\�\�\�*U��\'�\�\�&����\�\�u�j�\�V~X��GC��j�DQL�(��(��(�KƖ�\�H����ğ�C��\0J\�|;r-��i~	�<W�j��+�q�2&_Ҽ�	�\"\�Оz�Q\�h�D9�\�Tt\�\�ƙk19/�}�WE@P(�AEPFh����jJ�\�P2��K{tmaܐ���`i���m�\�6B*�\�\�[�5�\0P\0�d����\�fwp\�օ�1�M\�\\�3nf9\'ޱ�<ֆ�X\�\�瞵�\�uEY=�j@p�q\�3�\�<d�4�\\�\�wg���38������\�T��aLQ�S��@̀�R\�֐r3@����qɫ�r)�/����il]���\�Kv4�n\�Zu�g�I\�N��]6řT\"mQ�$rj����\�;�[\������+	J\�\�\�Z��Ġc�qLU\�KPb\�\n~)�b�)�-R\� ����Q@ �4�b�E)�\0QE���%/�S\�>�l.t�\\�+`��r����#îc1\\ȇ���WtiB]�[��\0t�\�Sx�\�\�j��\�q�\�u�7�09\�\����\�\�:4\�&��!\�$gc7�/�g�`r��kóoNFD�9>��7�1�ǥaԁ\�QE1Q@Q@Q@g¼�P���ul2rzc9��\�r��^}\�\�Ly�#G\�y҈\�R:�\\,\�$*LyC���V\�C�w�\�z�J\�q1Դ�����)	\�\Z\�\"��dguϩ�K����Q��a\�9�W�Oȑ�~X̛�\�^y��S��ɮ+\��\�JHP�\�\�з\�o��\��;��L�\�X�=*�WR\��7�+�~���)	$\��dՄ^:Th=�P1@\�v���A8�@X\��;��\nLv��qR[\�e��ZL��l\�\�8���\�B\���Y\\v\�5WD\�T��*\�\�=벶�j\0\0�G5��}�\"�a�\"�j\�\n�9��QY�6\�J��LZ�u�\�o���q\�W�h\"ƏJ\�?��em�\ng�i�k\00I\\&s�\�4�)ц��\��ܷR\�\�ޭ��2]@\�\\\�~t\�\�f�H_Fz0�\�s֐]�������\�*��VP��Ҥs�{P$��\ZZ\'z(\�E \n\\�\nJ)�>i(�B\�R��KMuʚ`�-��MV\�`$�� w�\0�\\š\�&q]\�ĈO\�\�\�\�)S�\"��%\�\�:\�[C\�\�^�}�,�y�8�+�N�\��\�`�H��1�sՖC\�\�?�vct�I{���)�QE\0QE\0QE\0C(\�}+��ŕ\�\�C4L~��\�:\�$\�+\�Й|=9U\�be�C\�\�M!�\�n��o\�l*�z��^O�\�\�jֲ�۵Ԓ\�\�½\\UHl}- \�EI\"\�s\�p3Lp{�@�{FB\���dD\��\nv5#6�\0�Aǭfj��\r\n��\�\nEE]\�}���+\0��򏩮ŗ77Jdd{Npx���J\�\�3���{\�;\�ڝʬ���\�\�U\�t*JǟM�\�\�\�PGZ\�5�2�Kbp<W e%OQ]�\�e\rQ�O��֜MQ��3K�=)�\��S�qHb�T�6�j\�Ԉ2\�Ԋ�cG_J\�t=,\� ,�b�\��\�V�eێx\�\ZU��5�`\�d�+)ϡ\�\�\\�cl\0t�8׌~t\�\�*px�P�\�*�t�7*�\�qQ�����\���\�6�\��+\Zf�\��\�\�ϰ�Cn�\�$�Qj6�~�\"�F�)�\�`\'	5��\�\��Տ��~u\�Il6|�+�튭-��1�\�8ܵW����@���G<�\�Q�\��C	��\�\�\�\�>�E�/cc�gi��Ȼ��ѻn�=$}=���J\�;{�\"\�9\�>\�q�\��F���>\�b\0\�H=}\�$\�\�\�,Fr�=���(�\�2t���\�\�jL�#���i!.F	\�\�W �\�\�\�\�9��\�\�%xcB�_үXNB�Õ\���\�&�\�n��\0\�[F\�b[?�`Y��V\�D\0~4\�g%b^(�����\�L\0�\ZMԙ��\�@(6iO#]e�	����\�\�\����D\���\��\�\�&N	\�GJ�/ۋ�\�\�$�\�}@\���\�����x.?�m\r�U�L\�v\�xܝ�������W^�\��\�\\o�U�\�(bϺ6\r\�L��u\�ڹ{Tv\���X�%�(��DQ@Q@Q@I\�U{�դ�\�\�D+���\'AMHg���4�\\��{�^�c8���u�\��5֠�\�N�\�.�<r3�k����w�\��\0�n\�\�<f�Cf���)jI�C��\0!g�5`����H ��\�0\n\�ۜ<��4�p\0���g	1\�\0y�;P/<� oq��\�<�C6��̈t\�p\�\�f\�ǰ��\�W���\�#��TU�jY#\r�\�h4�t6aI�y�uP6\�\�g<q��\�F䊣\�\��zƪ\0񃌌(�*�-R�-��2O\�[Rfu�2�\�\�b���=)�\�[\�g�H:�Қ:S�v��4<u\�\�[�/3\0�s\�Ex+�\�]���T8���[��8\�\�\����r�\��Wak@\0*���\�F1޶��\�\�٤��4��\�OA\�)�2�\�,b�\�gҟ�\nC%1j7x\�\'˜\��H\�P?\Z�6�knHyW>�\�\�U�.\�c�qMl��\�]{\�l[\�\�I\�R0?Z�\�\�DdZD�\�\'�\n\�_\'h�\�S���\"mST�%��\�;1�\0\n��˵\\���\r�,R�4f�9U	-T�Ђ\rB|B�\�xO�\�X�\�;��AVh׃���?Z�%Wq�\�\�\�\r[�\�\��\�P�\0U�zUx\�\0��Vӊv2�\'jJ\\\�_�\�A\��h �\�v�i�\0*6\�#�N[��k�\�H,2X���H\�y�\�ڍ�P�NNj��j�q`\\�U\�\�\ngh\�޹mB�$c��\������s�mn<��\0\�Z\�,\�<\�=�\�q�p.O�3��O\�Q\�y��`b�@RG��g���é\�kǖms$K\����Ҷ\�59w*I#�ޕͧ��A,d2t\'#��jұ�\�\��6�ck+���Ǔ�#?�o\�\�\�=�Ț\�\�b\�Yr\�aL\�9=�\0�k\��1A;�\�}k��\�\�)i���$(��\0(��\0(��\0���f\����\�5\Z��3��|\ro�\�8%\�[Xc��\0\"��\�T\�X�\�H�dc����_\��-�\�˛i�0\�bx:f�\�(�\�#&s\��U}���)iJZ�B��l��s��b����rjC~\�,��\�\�����\�\n\�*\'<��\�+6D\�ѓ\�pH�mMد!+0S��H\�i�틥�FY�\�R#�.\�Hס�\�Gl>^�W�\�Z�UM�\�y<g�\�<Y\�7�}��\�y\�\�\��\�H�v]\�\0:��5a=�l�$R �WdU�\0\0z�Üf�2hg�J�2Y�\�F~b8�M2\�Mp���M�1�,\�Y<�§�������q����gi�hڎ\�|��j\�\�b\�\��k	��\�,ZõE^Q\�)�1��Efc\'�\���3N9\�W�p(�w�\�_�*s��\�L�9R~��s��\�&��b�\�u+�ٖ\"!�X�\�f��a��pK�\�-\�5��-\�9\�=*�\�q�\�&�gH\�\�z\��\�QEKE�<�5�go�F?x��<A�\�Ʋ+!L�q\���j\��\���\�<֝��5�NVKw�\�fDs��8��ZӖ&L|>1Ԥ�U�2\�\�zMNxDk�[�V<c�\�ڸ\�����\0C�J�\"��\�y�l[�NXn#W\�0\�\�D\�B��2\\E�\�\�D���9=�\�Z\Zׇ��\�=H\�\�ģ�;�̆o:0\�\�/QQ�\�	s+��\�\�9&��<+\�@�1[�g��)\Zp�\�եUxU�PsH\0�#���kcɹ�~F\�\\�Z[뤅N[\�j>\"�6)ocҕ�k�W(<�Y3iK9$u=rj�\�3�g\�\�ִmuC��8=\�=Q�F{�~�bt\�}j\�\�\�~`0z�\�giyo2�W\���V\0�S\�fl�\�\�E�o�;��x�+\�\���R�Pk���0��ƹ\�,O\�m#v��<v�R���\�oc��\��|�\�kR\�v\�B;\��\�2c\�\�0<����\�֍��z\�\�T-\�����������(\0��(\0��(���\�H\�\rF)�\�;Qw\��\�\�r\�\\g\�s^oaq�K\�y�`\�0\�u��\rz\�щ�x������[���\�\�G�H�\0sϯ4���\�.�\�Y�\����\�W*D�dKE\0U�\'�\�#ީ\��_�N\�ёsX���z\"�L�\�l�@\�QI�\r\�v��h\�|��\�\'��\�\�Jӛcf\�l�#�jӻ�mv\�\�U95\���\�ھ�\�Aع�\�A�pWgF\�iV��̙��$�\�֯\�k�\nZF\\�\�\n\����j\��8,H�1�\0׭æ�O:s��ʂG�v�:\�\�\�\�\�ڪ8\���òvV`ӒK�\�Oo�\�Y��(\�\\q��i�(� �\�x~\�v�?{�k��\��\�\�,)�\�3z5���\��B2+z\�8\�Yz@+�c\�Vո�Gҹ\�sdꢥ����\nX\�F�Ѷ�\\ϖ\�wN*�\�yGЎ��R�x3\�2�\�vKI�\�Q�N3Q��\�kvX885[\�\�~C���^k���y-�G(\'*ǆ�s\�\�B\�a\�\\wC^�\��0E \0*�جq>\��$�\�bX�2\�\�r;ץ>�o�U?CX�3����R���\�}MK�d�4٪�����̪�Y��s\Z���S����X!\�\�E��\0\�F�\�{qB5�yK\Z,H\�\�\�:\Z\�X\�6j��Ķ\��!T�\�:\�o�\�R&l�\0\�\Z�*FTԑ\����\�MKU/e��\�4�np�%\�$��\�`$\0v��NK\�;pٸq\�\�z\Zݻ�{�.\�y3dw\��\�\�a��\�+X$o)r�m��nd��\�L\Z��\�\0U�3\�\ry/�\�h\�|\�V\�O�U��\0�r\�7��´�߼*{s\�\�g�D�\�k7ەb\�r8#i�i)���\�l\�1�6�t\�p�o\�K4$nrXpGCR\�^�\�\�\�TX�*\�s\�\\m�\�֗q.�vwƜ�\� �k+_b�������\�+.�z��\�\�$l~+�\0֫V�\�\r\�\��=\�i>�H\"�y�,��-J\"LнR\�xB��L�\�5fȖ����T=)�\�e��DT\���ȓi\'$ƿʎ�wд)iJQTHQE\0QE\0QE\0\�ң%D:\�\�\�^(�X|As\Z\�C�\'>\�\\קW\�F]F\���\�1�|E8\�3s��-q�s��G\��?�tu\�|?�?鰶~m���9��܊\�QE \Z\�\�8\�XӀQ\�G� !�g�=�m1ʹ$\�\"vu��\�4;�O��-�\"\�\�\�+\��d\�:ao�G\�\r�\0y��\���\�+�k�\\\�2ĹRO�Et\Z}�~y�Jjg\�\�W�\���i�bR��3p9��u�x�\�\�)8\�L�g��\�P)X�ba�W��L�\�n\'��\0#�M\�U�Cd\'�c\'��\�q\��V^�l`&<d&\"�+�h\�\�)�;�\�\\������|���U��[�\n\���H\�\�+c�םX��)�Gџu��ÓEAGb֙�%\�����V\�\�JƲ K0\�\�\�[�V\"�mzT��C��sA�:S���)�1HE:�m2J\�=\0���D�����R2\�V\��\�Z���Z\�Wt��\�H\�x&\�Q5��2~��x\��XzR+�\�]-ر��\�B���\�T�\�n`M0s#�7z�\�Aڥ��#�\�\�t}*QLQ�N( q�.|L��63HE;v<\�\�]Z%\�*H\�\�v��z�\\|\�\�1dM\�Ǡץ\�\�-JB~\�p����\���z\Z�\�\��RW8H&��u\�\��;�����\�\\�+�ܱ(�z�\�-V\�\�P\�\�$u�[{�\�U��C�Ҕ\�L��:I\�\��B��y\�+ʮRK�V[�w$��\�PzWm<�Q!Y;�\rd��\�s���O��\nIؘ\�\�\�5\��Q\����\�tv\�\�/N�%��Ԝ\�x<�7�T��hQ�q�kb\�%�HnNH��g7�0yɨ--\�\�fU�\�X\'h\�zTpg��\� �t���� ��(\0��(\0��(��\Z��\�\�HW5\�xL��0̧�b�\0\n\�j��i�\�\Z\�܌\���:���\0\�y\Z�����q^�;W�i\�}��\�\���$\��\0�ׯ��\\ta�U!�h���\rn�\�|W{,zhH8�\�����w?�t\�\�&��\�\\^�\�I\�;��\�g��}Jз\Z1�\�;\�\�e�FM���8-�s]\�\�;\0TV�x�\�O�ݹ��\� ����pH\�\�R�\�nwd�\�C:)\���]\�\�o�Q\�4�`�Y��\�8\����-�G�)\�`��03Kq���\�\�:�+�\�\�)5ܪ���ج�Jc=�b2\�:�\��\�\�jvp\�\�\�P-�689\�\\��	�,x�u\�J��\�щle \�{\�鉁A�-\�\�T�Bk�М�\\\�S�¶����C��G\�&�협X�U5eo\�FӚֵn��3\�\�CS-@����A�&)\��Ҟ)�\nZAKLA�B)�#+���t�\�Zi��\�\��O!sҬIHwd\":\nxA\�O����E/j���Q`��\�-P#;S�[�ջ�+ډ2�)R:�\�ȹ��J�%�\�3��Pk\�\����z�����w|\�A\�i�8a�p�BAۚ\r9ʑȯ�-�U\�aFGJ�;uZ� J�\"$�W�w)#\�j\���u���\��҇m\�P~4̘12g�\�\�\�R ��1@��å�QLAEPEPEPi�a��\��ԀZ?���\�~Ϩ][�C\�+\'<w��b�SB�\�\�\�\�b\0�GҸ_Z,^ g8T�5|��\0�]W�oE֚\��6\�\�ɭ%�)�\r�AFq�̒��\'�d\�	\�\�\\�\�C]I,jc��7c���\�u@\�-�J��g>�\\��r\�\�\�@\�\�1�\�x\�E4�\�\�Ya\n��A\0+R�9u3:\0Y?\Z\�@�\�|g+��\���˵�\\\�y���V�Ï\��\�ʃ�*�+�v\�c��Q\\�X�@���\�c+\�\�O�e�w9\n�\�A\�{�\�6���\��\\޵j\�\�\�U8끒�n\�ZYf\�ch=�?\�Lh�Y��`\�X�\�n08�hZ�\"\�\r�1�:\�Vސ6\�;㚡t�Q\�1;/\�v��^p@sVޅ������d\���\�\�\roYH9\�\\\�5�\�[G\�����A�;�\��@�\�{\Z\�\�N�*��҃\n�TK\�5 4\�c\�Jp�Ҏ�\��(�\�HiOZN�\0\�M=iƘ~��B\�4\�҂(\�1I�Ri�(��\�\0-.8�ӱ@��^�ՃP��4�\�\ZPNX\�R�p\�;�Q�x�\�KL�)\�J�\0�犑~\�B���)�-\n(\0��(\0��(\0��(��߅IL~��A\�\�\�{\�i\�\�l\�K�4m\�~��\�oܘ�i-H\0K\�z���\0�]/�\�\�\�9��A�Bk��\�\�\���\�ߏ�a\'�\�A\��Նz�\'���\�j	3ueXd\�lm\�=}+�q3\�7!f7A�<n�ƺ�R5�\�L�\�#b8\�k8\�;-5�\"\�>R{\'�\nL\�I\�Ǵƿ0\�Q\�PټQ\�n%B��\�&�P���Im\�B�s\�XW�f==�x�{ˀCN��~T�VԒ\�3r�>n��=G\�*��I�[n��7Cv\�}����\�+�ֵ�\�U敤\�p0=O\�\�t���}�V\'s\\`�\0\�M\�\�\�vZ�\�\�ck`��}��\�Z�\��\�\n���W^�Z\�\"\�&eGRs\�v\�?�q��:j-�\��\�=Nq�)E\\\�.���Pݼ��\�W�	\�q�\�\�\�iX�\�R1�\�t6j�����9+\"�\��Y�ub�qp��4\��V�\"�\�n\�%��\�-\�a��jlD����2TC�J��Y\"Ԁ\�@�O��4��J)�\����R\�C4��Bi\r!�\�N\�\�l\n�\�\\\�P\�Hx��`TÁ�lQ�ZI\�Q���p%�\�ӑF*@�\�&\�#vjE\�O\�F\�PR\�\nwjd�=j)� ԭ֘\�b���j^\�\nqR�\�!�iE%\�.*E���\�*�	�ES�Rf�\�!h�4����֐�$�95�d��m�\�\�6���)\\\rL挊\�2Om>b1��q��0\�3D�܊.\�c�}2C��iݩ��@\�\��\��O��=$����\�$ѣ;I#<��\0֯j\�^I�ۘ5\���	\�\\�ǚ�\�4z���{Xf~b�5�\�{��\�\� �ǖq\�[j^\�*j����\�p+4&\�Ř+\�Bw�\��\Z\�\�r\�\�UP\�\� Q���0>S@\�\�\�O�S\nUq��\�R\�\��\0�F\��r�\�\�\�뚵��,�nOΧ�\"�_\�\�&F�\��V!��rI4!�q\�H�\��]cy_n�9 }}�ς|Ki���<�3�|��}:j��#:�\�ųd�\��\�pk�v˒1ֵQ\�[��\�\�wz��4�2y��ߌ�\�\�?�p\�ݭƮpn\�c>��\���\�eV�\���>\�\�AIP\�s\�]5���\�sv�\�p+~\�U�\�\�w�\\���\0�g3n����V�mj�;F\��WYj6ƣ\�\�7�\����Pw�\�z\n\�\�㊆D\�B�\�R\rF�(�b\�\�OZm(�D��\r0S�;�:�LѺ�j7`)�U$��\�jI\\Y$,v�Οdri�%[Q\�$6\�8t�\�M\�1\�T���=)�V!\�>�@�W�\�53č\�\�f�S\�+u\"�֬n$�\�_3����j�60k\"}&\�q\�cp\�qPFn4��%\���)\\����\ZuU�a\"\� \�۩\�ɫ\nO&�Ґ�A$�n\0�!\��RU!)/�VU�hE4KG�\�\�\�R�D�s�njjd�����QE\0S[v\�ۍ\�\�5���\�(�ۿPS\�#�+�]N\�\�b\�v��>�Z\�\�K�6�_\�`q\�>[\�$�\�FP��\�\��\�5��Z\�Y��\�U=3\�&�v+��\�b�\�\\\�N9=jZ�mq�uo��<�\�V7�\�\��C\n�^&��\�2��\rZx\�LZx�0�<񵹵֣�\\\�\�c\�\�u\�x�\�4S�\�R�O�`G�\�8\�8�x\�}�ݹep���Q]x�<�u�5�F Q��\�\�^�D�#��z\�[pf]�o-���#]	\�Y����etÏ�\�\�HFwۡ�\�\�\��,�\�÷皊\�\�\�0U��\�F\�\��4��\��d�\�\r\�)d\�A\�\�sT�My�m5\��y/�� P�)q�\�$\�\�\�I1\�2zd\���ך�p\�)�x#\"��дE0n�T@�q8\�&8\�ޘ�:�9ZX�*:ֽ���3,\�\��+\'\�\�\�@�bk|/�t�:����ű\�X��\�\�����\�w\�\�sWЌqY��\�}*qҠ����Q\�Lp��t�PH�b�))i�ZcS�S_�*\�\�8�\0Za�V�\�Q\��4�4!��J>^9iM�f�\�f�d�i�\�zSZC펃��V\�䊝�EW��h.#m���_�yǥ[�@�Φ\�\�\�7�d��B��I\�P�3OW��-m��\��Ջg$sUs�\�Ks��Ah\'|\nz.\��T\�Y$#�i�0>�\�h�QE15\�\"3�@\�4\�TuR\�\�\�3�dz�\�\�\n7��\�JÄ�\�j�\\�U}\�\����Y��\�\�\�\�\�;�V����V0k�\�q\�*lحs3\���\�T�[8�\�JB� ��Z\��(aЊGE�p\�z\Z,2-�����A�BC��3T�(f��<\�I��\�R�|��(�a�H\�t\�\��@1i☽qO�+3\�V��@���N\�ˏU\�*Ӡ�Ad�h�\Z\�캭���F\�ǎk\�z�GJ�\��m�1m/��?7���\�\ZU\�\���[��\���\�S*E��MB\�\�! �\�J\�\�d��@H#�v5$���[->E\�\�\��)Ƿ5\�x��Y#�\�\�\�9\�\�\�N��k��]�+��h\��)\�A�O\�_\�潍��D6��$\��\�\�jZ9\�FEܱ�#f;�zVq9�W҉/&~>gc\�N�H�Z\�\r�\�⟎*>�g�J�q\�f�\'G\��d�\�7B\�;\�\�+z\�\�\�]�1�\�5\�=θlOe6\�<��Z�0\�P43�\riA\'��H��3V�\�Vr?\0���\�s\"\�ju0i��@���4f��\�L��O\�1�SBS�\\�\�\�-\�3��}�[�u�.-)%\\8\�\'��o�5��f\�\�H�pzV�z��t���9�5	�\�\�q\�\Z[}#P���;�YЋ؏ʤ1��\0׬��mR\�`@\�\�Aiq\ZP$ҋȍ/�&}h�\�=+���2\�\��7Ch%X\�\����\�H�T��gy�\��R4X9lJQ{Tf0A\�S��&T\�v\�)\r\"C�5��\�\�\"cS���\�\�\��.y�ZZjkے\�\�8��U��\�}8��\08�h1�4\�H\�:ՕLIb4\�sO�Hűh��	\n)3\�.h\0=i��\�U�2��zu%\028\�%\�\Z*E��\�\�Ky\�*dF~��>��kV�b�\�eQć\'\�I�5���\�$\"i�\�	��JڮkM��#C��\'񮓭$*G��%\�\�*n\���\� \r\�\��V��\\\�޴��(�9_~�\����)��\�\�h�Ɯ(�QE\0y�-��\�e��(�=�\�:\�<#t&У��LW\�\�k\�֬\�67\n��z�\��f�\\1�\�ճ�lUt)\�v�,yz\nl\��W�q�J�;A\�\0U9\�)#\�\�j㏭I%yl\�\�D�	A�8ϡ�\'\�k]N\�Y	;�A9\�\�ֽn\�_!�U\���\�^\"�C\"*\0��c����;\�Cr\�\�\�ArG�BN*G\�\�j\"x�Ѓ �\�>&;�\��Œ/��\�\�q��;%5o¸\r�\�\�ƽ\�1\Z�\\�\�\�\�>Xr:\�h\�2�\�0G*a:VCN\�\�J����b��\�\��e\�	\�\�G�Cf�G%XW�\�H�4��n�.i�;4\�\�K�B3@\�=ݩb�/j�%<(\r�\"��J��5km3m0L���GcڭG.>\\R\\S|�)�rSR�W@G�V{�!\�L���\"��m_\��\�X�o\���\�q�cڴ�\�\�\0Qr�ُui{)X�s���{B\"(\�\�\�2\�9��*�fd�@\�&c��$Q�U\�zV��;W\�N*\�K��\�D�\�=\�hWsn#�Q1,�\�*\�(��oZh\�L\\�2x��2:W\��Kf\�gc�9c�\n��\�<�9�CN\�\\\�c����\�9\�Z(\�I@R���\�M��n�\�x�\�\�\�\Z{�\0�\���O\�\�r.D�}\�\�\�j��-ޟ�A$�3,c8\�\�~3�\�\r�x\�P��\r0M�c�\�}Mq����\�5\�Ť<\0>\�\�;V�\0���\�i6	d`���¯\��F�\�h���-ַ�\�w.|���\�\�WX�\Z(P�ן\�F\�75�eXѣ�w�fG��ӇJi?1�P1h���\�q6�+�\0L~x�C\�&\�_EcĀ�\���A\�-�٥\�@K\��|q���+7{k�Y��97�^j�ŭ�b�}���	���\�c�36	\�\�ڣ�o��x\�\�\�ďn��(��\r�Ƹbq�RE���K�pm\�2\�{�\�|Kn�f���\�\�!q�Xp?+�\\̎\�1��ϰ\�\�p^\'�`ӧ%�u4�\0끞?0����H��㊬瞵pƾfXw#�Qn�\�T����3=�Fk�T�qI�՝���\"\��\�kd��rMsZ\\J�85\�Z�W4�:��s��h�Ҝ����ngMI8\�Fh��j<`��<)�fA�j�9�Xݣ|\�_�l\�(�\0�\�H���\rJ�:S��D\�\�ޣSR)\�\ZN\�4sN�!\r%;\ZFFi3�sRcژ˞ԀL�ҚN)� \�	&��aI\�z21L�\�\�\�;\nM A��\�Cޞ��\�b��oA���Z�\��2Q\��\�Cc\�\�ػ�\�ϵdx�R�\�\�\��6\�&	\������\�e�{;s�%2o\����r+�\�|F��\�>;b.\�\�3�M;Ɏ\�\�_��c\�~y\�9��r[\�\�aA��\�?��\�!\�\�k�VF,D�d�\0\�5n9\����z\�(��v۷Z��Y�Q[\��nl\�\�5\�ZFa��20U\0?Z\��)�\�q*_\�)X#bЮ~���\�nzT�\�mB�=+�׼g�h,\�K!�\�nD1��g���\�7\�8#i%uD^K1��x�\�4�e��\Z\�J�\�p?\�\�׼]�kͶYv����\��>�λ\��\�4��j\�S���\�4�\�\�f\�4\�ǒH�\�\�\�O+d�\0\�p�U�#R�N��\�3��\�/�T=*\"J6E\r]X.}�_Ǫ\�^\�\0Y%A\�\�\��NW&���~,\ZE\�\�\�3Iq�\�6��Ӟk\�1�B�H\�9\�\\��L�\�袑�}\�QI\'(p\�A8\��zހ�=k\������{\�l���	\��u\�\�B�OA^g\�(U5\�&6��1>�\�J�\��nq�\0մ��pS�\�&���r4��|\�]\�C\�\��V�.�M;\��b����\�t��\��Ӏ}O�\0^�\�V\"VeDa\�$lK�[�?S\\W�W\�VV��W\�9?{\�\0�\�4�d�\�1?Q\\g����F�\0<�]A� !N;�<݆c!\������-��B� c�T�|�\�<�\��<3jn/\�\��A\�z\� \�\�\�\�}�O�	%;�\�83vE\�Wf��AJ�\�]\r�ȶ�q[��W+z�\'\"�m9�HW�W +Q2g9�{i���!�gI\0 \�*Z2\�Z,�⢒!�E�\r�`F3V\�\�=\�0��\�r*h�\�j暿�W�k\'\"I\�;�8�\�\�Uc��jʰ4\�3jè����!1I�uF�\�u�4�P;�L$(�\�\�SzP;�ہH\r<\�\�R\�\�̗���ꦥ\�m+R���¬\�X\����VߊF�\�C\�hԐ\�\���#\�Z\�\��y\�\�&QF{J��92\�_l�\r\�bUx\�\�&Ӟ\0\��\�sSL~\��\�U���\�bn99�.OJ�����\��Fd���LJX�[�\�q�\�\�\"\�\\e\�\�\�21\�\�Ҩ閗O%�skݙ\�v\�s\�]\��\�o<piZg\�n��g9>�T\�\�,ji�n��m��\�\�##\��`�� a#�yf>�ɩ\"y`JT�9*0+\�|\��\\6�c#-�,VgV\�V��\n�\�촋�+��]g�ъ�e\�n�A�\��5\�J\�\�\�%��%�$\�M ��.y\�5\����\�\�\�34�W\�Ȥ�):\�H\�.OzBr:\�f�\�Ռm�]V�\�\�_J�[XeC\Z�@�wc\�{W%FjZLg\��QEr��^ƁD�tzA@�,*^\�\Z\�)\'�3�\��\�5\�x\�\�u��\�p��?Q�����\�\�0��e��\�\�z4�rЩ�c\��\0��\�\�\'\�\�\'V�Ȓ\��0p?\n\�\�Etg\��\�\�j�\�?@\�\�Nq��OTx\n8R�{�\�T�\�_$>A&\�O�\��v�\�ӂY��(\��Ww!m\�FG\�Ȯ7Ɠt��T$�)~U\�\�\�Qď-���\�C�q׌U�\�\�\r�\�b�Q��?J\�]\�\�Z�P�%R��ݎ½N\� �\0q�����X>\�/�\�G\�\�*+���\�>��G�\�\�\�A��(\�Ӡ�������\�c�ai⚢�)��v�\�5�i\�\�\"� \�GZ�����\�D\�I��*�`�U\�(r��\�ڢt\�AAjET�\�\�R���\�rH�\�+׊EZ\����^�PÓX��T�(y4Ȕ.n�\�tw9����Td\�b\��\��C��5nh\�@4\�K�\�Y�^i\\\'���\�F0F�,��`;\�\�[Y�\�,\�\�\�\�\�\�wr\�\�W�\�\�֫�=\�\� � \�\�V��\�cOPԥ�\��\�\�M\���ڳ�-�\�3�^s\�G� zԲ$,�Vb�\���R!����FX9Q�S�V\�Ş���\�jRJ�2ÔA�dzqPˠ\���Zj2L\�\�;.\�\�\0z�\�\�m�i&-��+�=�x�dX\�\�\��q&�x���v�~{\��O\�ƙ���m��z�\�=Mr��#�l\�\��\0Lp˞}\��z\�_�\�J�w�\�Y�;���\�\�\���\0�6���>ۻ�c�����\\}k\�Y�0I$Vω���R{\�\�V%\�r?\Z\��I\�a\"�M4��I��C��\Z:�I@���R\�\�!J\�\�K�h#\"����p�\�҆3\�j(�\��\����1jI?՚�M\0<S0I<�O�^8�1�\�\�G@\0�.�3[K\0��\�\�x� m\�\�|\��\�\�\�\�\�hƈx.�;w+���^�g8�Ӓ\�6w�\��\�^w�iR��N\���F\0g�֥��m��-l	&��\�u\�+F�t{9I]f��y|\'l�T��#<�ǥy\�o\�\�y�iV\�I#\�1���\�\�\0t�\�\"\�\"�Eo��&�\� �YӮ�\�,�\��\0\�Ny�˫�i]�s�\�\���˱\�\08\�N?���I�ڑ5\�$�\�hS\�}}Mki6\";4�\�<��$��\�[��X�\�\�t�)\�q���a�\n�\nԂ<P\�ȫ\�fS\�tk\�Z�j$Z�8�Kd�t���N\�aG4��\\SY���]����sW6�P\�\"�+�f�x�*\�\�\�w(�=�Za�\���ɚaL�\�R*)t\�~�:]0?JVOj��f�\�\\[\��R�\�=\�Vm\���\�t���\�\�A�֬\\�s�{\�\�\�>��\\���ϡ��$����\��\�ɦ��פ\��\0}Vʑ�4O�\�\�m-\"/5\�h]\�+�\��\"\�Ѻٗ��(>\�x\�\�Չ��P�U*h9\�jj\�\�\�vn/%\�\�\�0{\n��\��D94gk��RH�\�Y�\��\�Eh#�&<�zs\�\�X\�\�#�X�r����uWWR\�Q\�D\�6ZE\�\�U�ܓ�+sC�����_\�����q\�\0}�\�kz\��a\�u�~�\�\�\Z\�\�D�\�F�z�\�e$�\Z\�\nZ���\�i\�a��\�Y\�\�c\\�\�\�J;O\r%�Hw\�\�1�#���{�Up�ߓY\Z��k\�[�qu4\�\\\n6ch¢1�+\�;�E((A\\�G�L]\�H�\�o~\�$G\�W)pܝ��I�k��\�5\r1�\0\�m%�d���?>��\�t\�(�sM�O4\�fMXUc�^��֝\�Є:�&�ɥ�i�&h��3@+L\'�R�h\�:CKA�1\r�m��\��~�Z6\�j\0��!;W>�is\�6F	;ɤ8\�\�s:���U�n.\�1\�Ms��\� ^��*�\�\�H�(*��}\�ͯO�q$y��TV�\'�\ZP�n\�\�j>(��\�\����\0q\\\�k�ʠ-$��|���f�w�ȥ�Ew#�Ws�hv\�\\! P\�G\�#ujnI!J���\�i�g̺�8\�#c�5\�\�\�\�\r�ŷ�R���\�\�4�,��*{L%\�1U*~S�\�YJM�ɶdZڋ]\�Ĝ\�Js�U�=\�Y���>�\�!]���`���\�\�B\�$� �\� v��\�ڬ�`f�4\�N\�d�1EOȦ\�J�\�\"�S\�\"�\Zu\r#(\�Jh��\��\�:�܊\\�H}�Pz\�6�R�L\"��#\�\�HS&)�qI��2�PI��x\�\�٤Z+�9�]t웾�\�\��V\��ұ�E�원H�\0V\�~�Qܷ�\�b�q-2�\�\'�\�J)�\�E1�i�s\�Q�S�G�*H$t���V\n\�>\�u �qր��!I7�\�,o�	�H\�i\� \�p\nH��\�;aL㧨���\�:>��Q)��\�\�\' \�\'��%\�/\�\�uec\�\�w�\Z�\\\�$��\��\�R\�\�Ӛ�:�$\�M�c�+�\�d~����p\�FjГ\'�q05/\��H�{�� �\�^m�i�:M\�Z\�ŲA\��a\�=k\�K�p\�9ꦹ��\�=5��v΀�N\0\�>�CMԧus\�A柎*[�)\�.�\�\�&�T8*G?Z��8�iىK�BO��AE!����e-\0}QIE\� =\rQ���\�W�.\�\�+B\�\�͓��q�nȷ,�B��uQ\�k�\0ZYbh\�R������.��c#���\���\\\�$z��Y\�\�\�f�[wx7\�\0V����qw$�\�k�*:\�6a�.3\�*�GL\�Ցn\�\�\"@�8��@@\�隣k*��qZQ�VOs�I���\�O\�N;�T�֤U\�I�\�K]Y�\�ԃ�\�\�q���iU~v\�\�늙#T�y@A\�H5(�ɓ��\\\�\�#��\"nЈ��S��Oz��+����֝�P)Ҍ�	E <\�\�M\�)4��aK�L�i3H\�\�֗�%0�cO\�E#q\�&R ��⪰\'��S\�35&�h©�{\�LN�8ѿ�t0\ny�k[fx�9���\�\�\�򎠊abx�L�S]�Z��)�-H�̑�ȧF\�H4\�#�=���h�~a��\�d\�i>�\�Q\�!Z��\�{�PQ�<�Lg�\�\��31�\�ޔ�\���X�0A\�+oH�1�\�b\�+p\�j|o�u�]9�;�\�-o\�sfN6d{\�E�dJ\�{u��1���B�\�\�\�z�Ȧa�\�gޤ�#UT:\�L\�>\�o�h=j�p\�	���.�)\�B���;��T�Q�M\�\�ג\�\�+F\�U�\��\�׺\���\��k��\�w.�圎��?�3��+��\'jJR1ITp�R\�QKI@TQEAy3Al\�(�Z\��\�mm\�\�\�(�5\�]\\5Č\�\�q9\�Sj\�\��;g\':Vs���O\rIEs\r�F)���+\�N\�@ևX�I\�OQ�pb9�K#C�:\���+YD�	\���v��\�\ZzH\�\�py�L�\�ʤ.��>y��\�[H\�n3���\�VG\�p9\���v�\�\�g*r\ZmKl\�e*1�g\�E�c@;y\�ޘ\�i�Ϟy\�6=)�@�\�(\�H\0�Ҁ��:�z\�!3�M\�56��٤&�A\�I�\\\��\�I\�\0?u�\�\"Ɛ�\�+�\�\�\���+\�;\Z����\�4��(4X��\�\�f�.�2n�g98��\�F�&#�H�y~�m\�^���\\7ך\��F�\�k�p@���\�sU����/LS�>?�j̆�\�\����8\�Hy^}h_�i\0�\�Q\�\�FQHN���J\0y\"D�\0J`�sǵ,_1l�\�<�?\Z`09�E(\�1M�\�~�r�#\�9\�z\�\�\�m\�\�\n\�D\r�~�*9S��g��˕�ޕ�}�W#x\�\�֚\�˃\�ּ�\�\�H�]O;�Һx&r�y5�\���ϝ�1pqP\�Z���=�\��P�Ǳ�\�T�T\'��xb�1ڨ����๒9�F*A�k��\�j�\'���\�~�\���k�\�R<��\��;\�T@RR\�\�`�\�','ATPL00050','sandhya.jfif','image/jpeg');
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
  `employee_first_name` varchar(50) DEFAULT NULL,
  `punch_in` time DEFAULT NULL,
  `punch_out` time DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `updated_by` varchar(10) DEFAULT NULL,
  `duration` varchar(45) DEFAULT NULL,
  `updatedby` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `employee_last_name` varchar(255) DEFAULT NULL,
  `employee_middle_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employeeattendance_id`),
  KEY `fk_employee_id__employeeattendance_idx` (`employee_id`),
  KEY `fk_updated_by__employeeattendance_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__employeeattendance` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__employeeattendance` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeeattendance`
--

LOCK TABLES `employeeattendance` WRITE;
/*!40000 ALTER TABLE `employeeattendance` DISABLE KEYS */;
INSERT INTO `employeeattendance` VALUES (28,'ATPL00050','Sandhya Rekha Bandaru','12:24:01','12:24:09','2022-06-20 12:24:01',NULL,'00:00:08','ATPL00050','2022-06-20',_binary '\0',NULL,NULL),(29,'ATPL00064','Mohan Murali Krishna Miriyala','12:26:11','12:26:29','2022-06-20 12:26:11',NULL,'00:00:18','ATPL00064','2022-06-20',_binary '\0',NULL,NULL),(30,'ATPL00089','Meher Jyothi Chaduvula','13:18:12','13:18:14',NULL,NULL,'00:00:02',NULL,'2022-06-30',_binary '\0',NULL,NULL),(31,'ATPL00092','Vinod Kumar Satavalli','13:28:01','13:28:03',NULL,NULL,'00:00:02',NULL,'2022-06-30',_binary '\0',NULL,NULL);
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
  `employee_id` varchar(10) DEFAULT NULL,
  `leave_type` varchar(15) DEFAULT NULL,
  `from_date` datetime DEFAULT NULL,
  `to_date` datetime DEFAULT NULL,
  `number_of_days` int DEFAULT NULL,
  `leave_reason` varchar(255) DEFAULT NULL,
  `attachments` mediumblob,
  `updated_by` varchar(10) DEFAULT NULL,
  `updated_on` datetime DEFAULT NULL,
  `manager_approval` varchar(8) NOT NULL,
  `hr_approval` varchar(8) DEFAULT NULL,
  `leave_status` varchar(8) DEFAULT NULL,
  `reject_reason` varchar(100) DEFAULT NULL,
  `reporting_manager` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`employeeleave_id`),
  KEY `fk_employee_id__employeeleaves_idx` (`employee_id`),
  KEY `fk_updated_by__employeeleaves_idx` (`updated_by`),
  CONSTRAINT `fk_employee_id__employeeleaves` FOREIGN KEY (`employee_id`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_updated_by__employeeleaves` FOREIGN KEY (`updated_by`) REFERENCES `employeemaster` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
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
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employeelogin`
--

LOCK TABLES `employeelogin` WRITE;
/*!40000 ALTER TABLE `employeelogin` DISABLE KEYS */;
INSERT INTO `employeelogin` VALUES (2,'ATPL00050','sandhya.bandaru@arshaa.com','Sandhya6650','Sandhya@123','2022-05-09',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(5,'ATPL00058','devichandrika.k@arshaa.com','Devi6724','userDi6724','2022-05-16',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(6,'ATPL00063','muralikrishna.marthula@arshaa.com','Murali2859','Chow$5090','2022-05-16',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(7,'ATPL00064','muralikrishna.miriyala@arshaa.com','MohanMurali5004','userMi5004','2022-05-16',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(8,'ATPL00065','nikhil.mudheraj@arshaa.com','Nikhil7048','userNl7048','2022-05-16',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(9,'ATPL00066','Sravya.kotakonda@arshaa.com','Sravya7879','userSa7879','2022-05-16',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(14,'ATPL00067','Mohankrishna.madanapu@arshaa.com','Mohan5898','Mohan@9989','2022-05-16',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(15,'ATPL00068','bhavani.gudala@arshaa.com','Bhavani8423','userBi8423','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(16,'ATPL00069','madhuri.allapureddy@arshaa.com','Madhuri6528','userMi6528','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(17,'ATPL00070','khalid.mohammad@arshaa.com','Quazi6830','userQi6830','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(18,'ATPL00071','chiranjeevi.gyara@arshaa.com','Chiranjeevi7351','userCi7351','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(19,'ATPL00072','manohar.chimata@arshaa.com','Manohar5985','userMr5985','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(20,'ATPL00073','snehal.jambhulkar@arshaa.com','Snehal2851','userSl2851','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(21,'ATPL00074','saivineethkumar.sattineni@arshaa.com','SaiVineeth8249','userSh8249','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(22,'ATPL00075','vineela.lalaji@arshaa.com','VINEELA5927','userVA5927','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(23,'ATPL00076','chetan.basava@arshaa.com','CHETAN4656','userCN4656','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(24,'ATPL00077','akhil.rathipelly@arshaa.com','Akhil1607','userAl1607','2022-05-17',1,NULL,NULL,NULL,NULL,NULL,0,'employee'),(25,'ATPL00078','sriveda.annaparthi@arshaa.com','Sriveda9729','userSa9729','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(26,'ATPL00079','chandusai.gaddam@arshaa.com','Chandu4816','userCu4816','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(27,'ATPL00080','sridivya.gouraram@arshaa.com','Sri6618','userSi6618','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(28,'ATPL00081','muneendra.samsani@arshaa.com','Muneendra6664','userMa6664','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(30,'ATPL00083','maheshbabu.jangam@arshaa.com','Mahesh5585','userMh5585','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(31,'ATPL00084','sudheerkumar.agnur@arshaa.com','Sudheer7948','userSr7948','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(32,'ATPL00085','raviteja.pabbala@arshaa.com','Ravi4815','userRi4815','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(33,'ATPL00086','punnama.aravind@arshaa.com','Aravind2494','userAd2494','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(34,'ATPL00087','seethamsha.mule@arshaa.com','Seethamsha4307','userSa4307','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(35,'ATPL00088','faisal.azam@arshaa.com','Azam5328','userAm5328','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(36,'ATPL00089','meher.jyothi@arshaa.com','Meher6748','Hradmin@123','2022-05-17',1,NULL,NULL,NULL,NULL,NULL,0,'hradmin'),(37,'ATPL00090','revanth.kumar@arshaa.com','Revanth2996','userRh2996','2022-05-17',1,NULL,NULL,NULL,NULL,NULL,0,'manager'),(38,'ATPL00091','rajkumar.kolluri@arshaa.com','Rajkumar8654','userRr8654','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(39,'ATPL00092','vinod.satavalli@arshaa.com','Vinod8239','TAA@1232','2022-05-17',1,NULL,NULL,NULL,NULL,NULL,0,'taa'),(40,'ATPL00093','srimukha.lingampally@arshaa.com','Srimukha3526','userSa3526','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(41,'ATPL00094','dheeraj.kosaraju@arshaa.com','DHEERAJ9317','userDJ9317','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(42,'ATPL00095','rajesh.pulagora@arshaa.com','Rajesh6651','userRh6651','2022-05-17',0,NULL,NULL,NULL,NULL,NULL,0,'employee'),(57,'ATPL00096','muralikrishna.miriyala@arshaa.com','Arun1542','userAn1542','2022-06-04',1,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(58,'ATPL00097','muralikrishna.miriyala@arshaa.com','Mahesh7814','userMh7814','2022-06-06',1,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(59,'ATPL00098','muralikrishna.miriyala@arshaa.com','Hemanth7559','userHh7559','2022-06-07',1,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(60,'ATPL00099','muralikrishna.miriyala@arshaa.com','nikhil4588','usernl4588','2022-06-07',1,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(61,'ATPL00100','muralimiriyala34@gmail.com','murali5469','usermi5469','2022-06-08',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(62,'ATPL00101','muralimiriyala34@gmail.com','mohan1486','usermn1486','2022-06-09',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(63,'ATPL00102','mohankrishnamadanapu@gmail.com','Mohan4116','userMn4116','2022-06-09',1,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(64,'ATPL00103','nikhilmudheraj143@gmail.com','asdf7069','useraf7069','2022-06-09',1,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(65,'ATPL00104','muralimiriyala34@gmail.com','bhavani6828','userbi6828','2022-06-10',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(66,'ATPL00105','mohankrishnamadanapu@gmail.com','Mohan755','userMn755','2022-06-10',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(67,'ATPL00109','muralimiriyala34@gmail.com','Akhil kumar1505','userAr1505','2022-06-18',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(68,'ATPL00111','muralimiriyala34@gmail.com','Akhil Sardik3757','userAk3757','2022-06-18',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(69,'ATPL00115','nikhilmudheraj143@gmail.com','Nikhil7032','userNl7032','2022-06-18',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(70,'ATPL00116','muralimiriyala34@gmail.com','vineela4504','userva4504','2022-06-18',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(71,'ATPL00118','sandhya.arshaa17@gmail.com','Sandhya9874','userSa9874','2022-06-18',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee'),(72,'ATPL00119','muralimiriyala34@gmail.com','Azam7812','userAm7812','2022-06-18',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee');
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
  `date_of_joining` varchar(20) DEFAULT NULL,
  `first_name` varchar(25) DEFAULT NULL,
  `middle_name` varchar(25) DEFAULT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `primary_phone_number` varchar(13) DEFAULT NULL,
  `secondary_phone_number` varchar(13) DEFAULT NULL,
  `years_of_experience` varchar(2) DEFAULT NULL,
  `date_of_birth` varchar(20) DEFAULT NULL,
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
  `passport_expiry_date` varchar(20) DEFAULT NULL,
  `profile_photo` mediumblob,
  `job_title` varchar(20) DEFAULT NULL,
  `primary_skills` varchar(100) DEFAULT NULL,
  `secondary_skills` varchar(100) DEFAULT NULL,
  `aadhar_number` varchar(255) DEFAULT NULL,
  `account_number` varchar(255) DEFAULT NULL,
  `band` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `exit_date` varchar(255) DEFAULT NULL,
  `ifsc_code` varchar(255) DEFAULT NULL,
  `pan_number` varchar(255) DEFAULT NULL,
  `uan_number` varchar(255) DEFAULT NULL,
  `graduation_type` varchar(255) DEFAULT NULL,
  `postgraduation_type` varchar(255) DEFAULT NULL,
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
INSERT INTO `employeemaster` VALUES ('ATPL00050',NULL,'2022-05-09 00:00:00','Sandhya','Rekha','Bandaru','sandhya.bandaru@arshaa.com','properties','7780106482','7729927397','2','2022-06-01','AB-','Female','Single','12-0','Andhra Pradesh','India','521215','12-2-2','Telangana','India','500081',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'JNTUK','VIT','Bhimavaram','Mechanical','2016-02-03','2020-08-07','90%','BIEAP','Narayana','Vijayawada','MPC','2014-02-06','2016-06-09','94.9','BSE','Narayana','Reddigudem','General','2013-01-30','2014-06-12','9.2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'Software_Developer',NULL,'ASD4512','2022-06-11',NULL,NULL,'React','Java','1231234567890','9876543210123456','DF','SDF','DSF',NULL,'123456789990','1233AGFH','234',NULL,NULL),('ATPL00058',NULL,'2021-11-15','Devi','Chandrika','Kadiyala','devichandrika.k@arshaa.com','Human Resources Management','8143245444','7799578261','2','1997-09-18','o+','female','Single','NehruNagar 2nd line, Guntur','AndhraPradesh','India','522001','Sri Pallavi Hostel, Madhapur','Telengana','India','500001',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'JNTUK','St.Mary\'s Womens Engineering College','Guntur','Computer Science & Engineering','1970-01-01','1970-01-01','A','BOI',NULL,NULL,'MPC','1970-01-01','1970-01-01','A','SSC',NULL,NULL,'State Syllabus','1970-01-01','1970-01-01','B',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'employee','2022-05-16 17:52:28',0,'ATPL00090','BFSA','Full Stack Developer',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00063',NULL,NULL,'Murali','Krishna','Marthula','muralikrishna.marthula@arshaa.com','Human Resources Management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-16 18:50:10',0,'ATPL00090','Software',NULL,'contract',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00064',NULL,'2021-12-01 00:00:00','Mohan Murali','Krishna','Miriyala','muralikrishna.miriyala@arshaa.com','Human Resources Management','9880105452','7729927397','1','1998-01-10','AB-','Male','Single','vizag','Andhra Pradesh','India','521215','6-89, Rampur','Telangana','India','500081','JNTUK','VIT','Bhimavaram','Mechanical','2019-01-08','2020-12-04','67','JNTUK','VIT','Bhimavaram','Mechanical','2022-06-18','2022-06-24','78','BIEAP','Narayana','Vijayawada','MPC','2013-01-02','2015-05-05','67','BSE','Narayana','Reddigudem','General','2012-01-06','2013-12-31','92','Arshaa Technologies Pvt.Ltd','Software Developer','2021-12-16','2022-01-13','ATPL018',NULL,'Full Time Employment ','xxxxxx','Capgemini','UI Developer','2022-02-02','2022-03-10','12345',NULL,'Freelancer ','xxxxx','TCS','UI','2020-05-02','2022-01-06','123456',NULL,'Part Time','xxxxx',NULL,'2022-05-16 18:52:59',0,NULL,NULL,NULL,NULL,'ASD4512','2024-01-02',NULL,NULL,'React','Java','123456789678','1234567','DF','sdefrtu','DSF',NULL,'asd3456','1233AGFH','234',NULL,NULL),('ATPL00065',NULL,NULL,'Nikhil','Kumar','Istharakula','nikhil.mudheraj@arshaa.com','Human Resources Management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-16 19:00:07',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00066',NULL,NULL,'Sravya','','kotakonda','Sravya.kotakonda@arshaa.com','Human Resources Management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-16 19:01:50',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00067',NULL,NULL,'Mohan','Krishna','Madanapu','Mohankrishna.madanapu@arshaa.com','Human Resources Management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-16 19:26:19',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00068',NULL,NULL,'Bhavani','Gudala','Madanapu','bhavani.gudala@arshaa.com','Human Resources Management','9880105452',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 15:57:01',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00069',NULL,NULL,'Madhuri','','Allapureddy','madhuri.allapureddy@arshaa.com','Human Resources Management','9550682114',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:01:39',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00070',NULL,NULL,'Quazi','Mohammad','Khalid','khalid.mohammad@arshaa.com','Human Resources Management','8839884540',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:03:39',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00071',NULL,NULL,'Chiranjeevi','','Gyara','chiranjeevi.gyara@arshaa.com','DEP','8143139417',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:05:06',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00072',NULL,NULL,'Manohar','','Chimata','manohar.chimata@arshaa.com','properties','9908816733',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:07:16',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00073',NULL,NULL,'Snehal','','Jambhulkar','snehal.jambhulkar@arshaa.com','Human Resources Management','8329733653',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:09:19',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00074',NULL,NULL,'SaiVineeth','Kumar','Sattineni','saivineethkumar.sattineni@arshaa.com','properties','9908216181',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:12:37',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00075',NULL,NULL,'VINEELA','','MALAJI','vineela.lalaji@arshaa.com','testing','7780586496',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:14:19',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00076',NULL,NULL,'CHETAN','','BASAVA','chetan.basava@arshaa.com','DEP','7892006272',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:16:07',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00077',NULL,NULL,'Akhil','','Rathipelly','9550916455','DEP','','','1','2001-06-06','B+','Male','Single','Hyderabad','Hyderabad','India','500029','','','','','','','','',NULL,NULL,'','','','','',NULL,NULL,'','',NULL,NULL,'',NULL,NULL,'','',NULL,NULL,'',NULL,NULL,'','','',NULL,NULL,'',NULL,'','','','',NULL,NULL,'',NULL,'','','','',NULL,NULL,'',NULL,'','',NULL,'2022-05-17 16:17:30',0,'ATPL00090',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00078',NULL,NULL,'Sriveda','','Annaparthi','sriveda.annaparthi@arshaa.com','DEP','9550916455',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:23:38',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00079',NULL,NULL,'Chandu','Sai','Gaddam','chandusai.gaddam@arshaa.com','DEP','9676351831',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:26:30',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00080',NULL,NULL,'Sri','Divya','Gouraram','sridivya.gouraram@arshaa.com','Human Resources Management','7036980262',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:28:14',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00081',NULL,NULL,'Muneendra','','Samsani','muneendra.samsani@arshaa.com','DEP','9676087365',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:29:25',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00083',NULL,NULL,'Mahesh','Babu','Jangam','maheshbabu.jangam@arshaa.com',NULL,'8688660121',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:33:06',0,'ATPL00090','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00084',NULL,NULL,'Sudheer','Kumar','A','sudheerkumar.agnur@arshaa.com',NULL,'8688660121',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:36:35',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00085',NULL,NULL,'Ravi','Teja','Pabbala','raviteja.pabbala@arshaa.com',NULL,'8688660121',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:39:27',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00086',NULL,NULL,'Aravind','','Punnam','punnama.aravind@arshaa.com',NULL,'6303746589',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:43:57',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00087',NULL,NULL,'Seethamsha','','Mule','seethamsha.mule@arshaa.com',NULL,'9177255162',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:46:54',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00088',NULL,NULL,'Azam','','MD','faisal.azam@arshaa.com',NULL,'9097367200',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:52:11',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00089',NULL,'2022-05-04','Meher','Jyothi','Chaduvula','meher.jyothi@arshaa.com',NULL,'9985106199',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:59:02',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00090',NULL,'2021-12-01','Revanth','Kumar','Mudidana','revanth.kumar@arshaa.com',NULL,'7093113123','7729927397','1','2022-06-18','A-','Male','Single','dfghsdfg','Andhra Pradesh','India','521215','dfrgthyui','Telangana','India','500081',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'JNTUK','VIT','Bhimavaram','Mechanical','2022-06-24','2022-07-02','78','BIEAP','Narayana','Vijayawada','MPC','2022-06-07','2022-06-26','67','BSE','Narayana','Reddigudem','General','2022-06-12','2022-06-24','92',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:00:04',0,NULL,NULL,NULL,NULL,'ASD4512','2022-06-19',NULL,NULL,'React','Java','9876','1234567','e','sdefrtu','asdfgn','2022-06-24','asd3456','9876','234',NULL,NULL),('ATPL00091',NULL,NULL,'Rajkumar','','Kolluri','rajkumar.kolluri@arshaa.com',NULL,'9866325349',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:02:03',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00092',NULL,'2021-12-01 00:00:00','Vinod','Kumar','Satavalli','vinod.satavalli@arshaa.com',NULL,'9030067714','7729927397','1',NULL,'A+','Male','Single','12-223','Andhra Pradesh','India','521215','1-2-3-3','Telangana','India','500081',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'JNTUK','VIT','Bhimavaram','Mechanical','2016-06-08','2020-07-09','76%','BIEAP','Narayana','Vijayawada','MPC','2014-06-04','2016-06-08','94.9','BSE','Narayana','Reddigudem','General','2013-10-02','2014-06-04','9.2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:03:46',0,NULL,NULL,NULL,NULL,'ASD4512','2022-06-11',NULL,NULL,'React','Java','296816304888','9876543210123456','234','HDFC','DSF',NULL,'123456789990','FSVPM1420C','1234567',NULL,NULL),('ATPL00093',NULL,NULL,'Srimukha','','Lingampally','srimukha.lingampally@arshaa.com',NULL,'8978448739',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:05:10',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00094',NULL,NULL,'DHEERAJ','','KOSARAJU','dheeraj.kosaraju@arshaa.com',NULL,'9133456899',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:06:37',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00095',NULL,NULL,'Rajesh','','Pulagora','rajesh.pulagora@arshaa.com',NULL,'6302306082',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 17:10:03',0,'','Software',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00096',NULL,'2021-12-01','Arun',NULL,'Rangoji','muralikrishna.miriyala@arshaa.com','Human Resources Management','8919069502','7729927397','1','1998-01-16','O+','Male','Single','15-27, Raghavapuram, Reddigudem','Andhra Pradesh','India','521215','1-16-142, Madhavi Nagar Colony','Telangana','India','500081','Andhra University','Lakireddy Balireddy','Myalavarm','Mechanical','2020-06-10','2022-04-07','67','Jawaharlal Nehru Technological Kakinada','Vishnu Institute of Technology','Bhimavaram','Mechanical',NULL,NULL,'7.61','BIEAP','Narayana','Vijayawada','MPC','2014-07-10','2016-06-09','94.9','BSE','Narayana','Reddigudem','General','2013-05-17','2014-02-06','9.2','Arshaa Technologies Pvt.Ltd','Software Developer','2022-06-08','2022-06-17','ATPL018',NULL,'Full Time Employment ','nothing','Capgemini','UI Developer','2022-06-10','2022-06-12','12345',NULL,'Freelancer ','Nothing','TCS','UI','2022-06-11','2022-06-17','123456',NULL,'Part Time','nothing',NULL,'2022-06-04 15:29:16',0,'',NULL,'Web Developer',NULL,'ASD4512','2022-06-01',NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00097',NULL,'2022-06-01','Mahesh','Krishna','Miriyala','muralikrishna.miriyala@arshaa.com','Human Resources Management','8919069502',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-06 10:37:24',0,'RevanthKumar','Application Development','Application developer','Contract',NULL,NULL,NULL,'Software Developer','sql','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00098',NULL,'2022-06-02','Hemanth','kumar','peddireddy','muralikrishna.miriyala@arshaa.com','Human Resources Management','8919069502',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-07 11:09:45',0,'RevanthKumar','web Development','IT Manager',NULL,NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00099',NULL,'2022-06-04','nikhil',NULL,'Bandaru','muralikrishna.miriyala@arshaa.com','Human Resources Management','9898989898',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-07 11:14:55',0,'RevanthKumar1','Application Development','IT Manager','Contract',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00100',NULL,'2022-06-03','murali',NULL,'Miriyala','muralimiriyala34@gmail.com',NULL,'9898989898',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-08 13:12:44',0,'RevanthKumar','web Development','IT Manager','Contract',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00101',NULL,'2022-06-02','mohan','krishna','Miriyala','muralimiriyala34@gmail.com',NULL,'1234567890',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-09 17:50:56',0,'RevanthKumar','Application Development','Application developer','Intern',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00102',NULL,'2022-05-31','Mohan','Krishna','madanapu','mohankrishnamadanapu@gmail.com',NULL,'8919069502','9898989898','1','2022-06-15','A-','Male','Single','swe','SAD','DFF','2356','DFGHJ','ERT','SD','3456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'JNTUK','VIT','Bhimavaram','Mechanical','2022-06-11','2022-06-23','45','SDF','SDF','SDF','SDF','2022-06-10','2022-06-14','34','SDFG','EDF','SDFG','EFG','2022-06-11','2022-06-22','54',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-09 17:53:21',0,NULL,NULL,'Application developer',NULL,NULL,NULL,NULL,'Software Developer','React','Java','23456','567','DF','SDF','DSF',NULL,'SDF','9876','234',NULL,NULL),('ATPL00103',NULL,'2022-06-10','asdf',NULL,'sdf','nikhilmudheraj143@gmail.com',NULL,'90909090909',NULL,'3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-09 18:18:42',0,'RevanthKumar','Application Development','Application developer','FullTimeEmployement',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00104',NULL,'2022-06-04 00:00:00','bhavani',NULL,'gudala','muralimiriyala34@gmail.com',NULL,'9898989898',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-10 11:14:39',0,'RevanthKumar','web Development','IT Manager','Intern',NULL,NULL,NULL,'Software Developer','sql','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00105',NULL,'2022-06-01 00:00:00','Mohan','Krishna','madanapu','mohankrishnamadanapu@gmail.com',NULL,'8919069502',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-10 15:54:25',0,'RevanthKumar','SoftwareDeveloper','Web Developer','FullTimeEmployement',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00109',NULL,'2022-06-02 00:00:00','Akhil kumar',NULL,'Raithapally','muralimiriyala34@gmail.com',NULL,'8828828282',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-18 12:19:13',0,NULL,'web Development','Web Developer','Intern',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00111',NULL,NULL,'Akhil Sardik',NULL,'Raithapally','muralimiriyala34@gmail.com',NULL,'8828828282',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-18 12:42:48',0,'RevanthKumar','web Development','Web Developer','Intern',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00115',NULL,'2022-06-01 00:00:00','Nikhil',NULL,'Estarakula','nikhilmudheraj143@gmail.com',NULL,'8919069502',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-18 12:48:27',0,'RevanthKumar','Networking department','IT Manager','Contract',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00116',NULL,'2022-06-01 00:00:00','vineela',NULL,'lalaji','muralimiriyala34@gmail.com',NULL,'8919069502',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-18 13:10:10',0,'RevanthKumar','web Development','Web Developer','FTE',NULL,NULL,NULL,'Software Developer','React','Redux',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00118',NULL,'2022-05-31 00:00:00','Sandhya','Rekha','Bandaru','sandhya.arshaa17@gmail.com',NULL,'8919069502',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-18 13:18:09',0,'RevanthKumar','SoftwareDeveloper','Application developer','FTE',NULL,NULL,NULL,'Software Developer','Java','Redux',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00119',NULL,'2022-06-01 00:00:00','Azam',NULL,'Mohammad','muralimiriyala34@gmail.com',NULL,'7729927397',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-18 15:15:26',0,'RevanthKumar','Application Development','Web Developer','FTE',NULL,NULL,NULL,'Software Developer','React','Redux',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00121',NULL,'2022-06-01 00:00:00','Murali','Krishna','Miriyala','muralimiriyala34@gmail.com','HRM','7729927397',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-30 13:30:06',0,'Revanth','Web Development','Full Stack Developer','FTE',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,'Band-1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00122',NULL,'2022-06-02 00:00:00','Mohan','Krishna','Madanapu','muralimiriyala34@gmail.com','Properties','8919069502',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-30 13:30:57',0,'Revanth','Web Development','Full Stack Developer','FTE',NULL,NULL,NULL,'developer','full stack','React',NULL,NULL,'Band-1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00123',NULL,'2022-06-02 00:00:00','nikhil',NULL,'estarakula','muralimiriyala34@gmail.com','HRM','8919069502',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-30 13:31:15',0,'Revanth','Application Development','Application Developer','Contract',NULL,NULL,NULL,'developer','full stack','React',NULL,NULL,'Band-2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00124',NULL,'2022-06-02 00:00:00','Murali','marthula','marthula','muralimiriyala34@gmail.com','HRM','7729927397',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-30 13:40:00',0,'Revanth','Application Development','Application Developer','Intern',NULL,NULL,NULL,'Software Developer','React','Java',NULL,NULL,'Band-1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00125',NULL,'2022-06-02 00:00:00','murali','Krishna','Madanapu','muralimiriyala34@gmail.com','HRM','9809090909',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-30 13:42:59',0,'Revanth','Web Development','Full Stack Developer','Contract',NULL,NULL,NULL,'developer','full stack','React',NULL,NULL,'Band-1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00126',NULL,'2022-06-02 00:00:00','bhavani',NULL,'gudala','muralimiriyala34@gmail.com','HRM','7768676768',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-30 13:45:52',0,'Revanth','Web Development','Full Stack Developer','Contract',NULL,NULL,NULL,'full stack','full stack','React',NULL,NULL,'Band-1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('ATPL00127',NULL,'2022-06-10 00:00:00','Mohan',NULL,'Madanapu','bhavani.gudala@arshaa.com','HRM','1234567890',NULL,'12',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-06-30 13:48:12',0,'Revanth','Web Development','Full Stack Developer','FTE',NULL,NULL,NULL,'developer','full stack','React',NULL,NULL,'Band-1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holidaymaster`
--

LOCK TABLES `holidaymaster` WRITE;
/*!40000 ALTER TABLE `holidaymaster` DISABLE KEYS */;
INSERT INTO `holidaymaster` VALUES (1,'sankranthi','2023-01-13 00:00:00','2022-05-27',NULL),(2,'dasara','2022-10-05 00:00:00','2022-05-28',NULL),(3,'deepavali','2022-10-24 00:00:00','2022-05-31',NULL),(4,'Diwali','2022-06-01 05:30:00','2022-06-02',NULL),(5,'qlwnd','2022-06-16 05:30:00','2022-06-02',NULL),(6,'gandhi jayanthi','2022-10-02 05:30:00','2022-06-02',NULL),(8,'Good Friday','2022-06-03 05:30:00','2022-06-04',NULL),(9,'qlwnd','2022-06-09 05:30:00','2022-06-06',NULL);
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
  `leave_id` int NOT NULL,
  PRIMARY KEY (`leave_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaveentitlement`
--

LOCK TABLES `leaveentitlement` WRITE;
/*!40000 ALTER TABLE `leaveentitlement` DISABLE KEYS */;
INSERT INTO `leaveentitlement` VALUES ('Annual',24,0);
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
  PRIMARY KEY (`module_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulemaster`
--

LOCK TABLES `modulemaster` WRITE;
/*!40000 ALTER TABLE `modulemaster` DISABLE KEYS */;
INSERT INTO `modulemaster` VALUES (1,'Onboarding Form',NULL,1,'ATPL00050','2022-06-07 00:00:00'),(2,'Employees List',NULL,1,NULL,'2022-06-07 00:00:00'),(4,'My Profile',NULL,1,NULL,'2022-06-07 00:00:00'),(9,'All Employees',NULL,1,'ATPL0089','2022-06-09 00:00:00'),(10,'Holiday Management',NULL,1,NULL,'2022-06-17 00:00:00');
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
  `years_of_experience` varchar(10) NOT NULL,
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
  `band` varchar(255) DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
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
INSERT INTO `onboarding` VALUES ('OBD00020','Murali','Krishna','Marthula',NULL,'Software',NULL,'muralikrishna.marthula@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 18:49:08',NULL,NULL,'2022-05-16','admin',NULL,'contract',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00021','Mohan Murali','Krishna','Miriyala',NULL,'Software',NULL,'muralikrishna.miriyala@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 18:52:31',NULL,NULL,'2022-05-16','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00022','Nikhil','Kumar','Istharakula',NULL,'Software',NULL,'nikhil.mudheraj@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 18:59:59',NULL,NULL,'2022-05-16','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00023','Sravya','','kotakonda',NULL,'Software',NULL,'Sravya.kotakonda@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 19:01:35',NULL,NULL,'2022-05-16','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00024','Mohan','Krishna','Madanapu',NULL,'Software',NULL,'Mohankrishna.madanapu@arshaa.com','9880105452','1',NULL,1,0,0,'2022-05-16 19:25:57',NULL,NULL,'2022-05-16','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00025','Bhavani','','Gudala',NULL,'Software',NULL,'bhavani.gudala@arshaa.com','9880105452','1',NULL,0,0,0,'2022-05-17 15:56:50',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00026','Madhuri','','Allapureddy',NULL,'Software',NULL,'madhuri.allapureddy@arshaa.com','9550682114','1',NULL,1,0,0,'2022-05-17 16:01:28',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00027','Quazi','Mohammad','Khalid',NULL,'Software',NULL,'khalid.mohammad@arshaa.com','8839884540','1',NULL,1,0,0,'2022-05-17 16:03:32',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00028','Chiranjeevi','','Gyara',NULL,'Software',NULL,'chiranjeevi.gyara@arshaa.com','8143139417','1',NULL,1,0,0,'2022-05-17 16:04:50',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00029','Manohar','','Chimata',NULL,'Software',NULL,'manohar.chimata@arshaa.com','9908816733','1',NULL,1,0,0,'2022-05-17 16:06:09',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00030','Snehal','','Jambhulkar',NULL,'Software',NULL,'snehal.jambhulkar@arshaa.com','8329733653','1',NULL,1,0,0,'2022-05-17 16:09:04',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00031','SaiVineeth','Kumar','Sattineni',NULL,'Software',NULL,'saivineethkumar.sattineni@arshaa.com','9908216181','1',NULL,1,0,0,'2022-05-17 16:12:24',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00032','VINEELA','','MALAJI',NULL,'Software',NULL,'vineela.lalaji@arshaa.com','7780586496','1',NULL,1,0,0,'2022-05-17 16:14:04',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00033','CHETAN','','BASAVA',NULL,'Software',NULL,'chetan.basava@arshaa.com','7892006272','1',NULL,1,0,0,'2022-05-17 16:15:59',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00034','Akhil','','Rathipelly',NULL,'Software',NULL,'akhil.rathipelly@arshaa.com','9550916455','1',NULL,1,0,0,'2022-05-17 16:17:21',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00035','Sriveda','','Annaparthi',NULL,'Software',NULL,'sriveda.annaparthi@arshaa.com','9550916455','1',NULL,1,0,0,'2022-05-17 16:23:27',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00036','Chandu','Sai','Gaddam',NULL,'Software',NULL,'chandusai.gaddam@arshaa.com','9676351831','1',NULL,1,0,0,'2022-05-17 16:26:19',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00037','Sri','Divya','Gouraram',NULL,'Software',NULL,'sridivya.gouraram@arshaa.com','7036980262','1',NULL,1,0,0,'2022-05-17 16:28:06',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00038','Muneendra','','Samsani',NULL,'Software',NULL,'muneendra.samsani@arshaa.com','9676087365','1',NULL,1,0,0,'2022-05-17 16:29:17',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00039','Mahesh','Babu','Jangam',NULL,'Software',NULL,'maheshbabu.jangam@arshaa.com','8688660121','1',NULL,1,0,0,'2022-05-17 16:32:47',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00040','Sudheer','Kumar','A',NULL,'Software',NULL,'sudheerkumar.agnur@arshaa.com','8688660121','1',NULL,1,0,0,'2022-05-17 16:36:21',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00041','Ravi','Teja','Pabbala',NULL,'Software',NULL,'raviteja.pabbala@arshaa.com','8688660121','1',NULL,1,0,0,'2022-05-17 16:39:18',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00042','Aravind','','Punnam',NULL,'Software',NULL,'punnama.aravind@arshaa.com','6303746589','1',NULL,1,0,0,'2022-05-17 16:43:44',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00043','Seethamsha','','Mule',NULL,'Software',NULL,'seethamsha.mule@arshaa.com','9177255162','1',NULL,1,0,0,'2022-05-17 16:46:43',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00044','Azam','','MD',NULL,'Software',NULL,'faisal.azam@arshaa.com','9097367200','1',NULL,1,0,0,'2022-05-17 16:51:38',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00045','Meher','Jyothi','Chaduvula',NULL,'Software',NULL,'meher.jyothi@arshaa.com','9985106199','1',NULL,1,0,0,'2022-05-17 16:58:52',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00046','Revanth','Kumar','Mudidana',NULL,'Software',NULL,'revanth.kumar@arshaa.com','7093113123','1',NULL,1,0,0,'2022-05-17 16:59:56',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00047','Rajkumar','','Kolluri',NULL,'Software',NULL,'rajkumar.kolluri@arshaa.com','9866325349','1',NULL,1,0,0,'2022-05-17 17:01:07',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00048','Vinod','Kumar','Satavalli',NULL,'Software',NULL,'vinod.satavalli@arshaa.com','9030067714','1',NULL,1,0,0,'2022-05-17 17:03:39',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00049','Srimukha','','Lingampally',NULL,'Software',NULL,'srimukha.lingampally@arshaa.com','8978448739','1',NULL,1,0,0,'2022-05-17 17:05:02',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00050','DHEERAJ','','KOSARAJU',NULL,'Software',NULL,'dheeraj.kosaraju@arshaa.com','9133456899','1',NULL,1,0,0,'2022-05-17 17:06:29',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00051','Rajesh','','Pulagora',NULL,'Software',NULL,'rajesh.pulagora@arshaa.com','6302306082','1',NULL,1,0,0,'2022-05-17 17:09:56',NULL,NULL,'2022-05-17','taa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('OBD00105','Murali','Krishna','Miriyala','Full Stack Developer','Web Development','2022-06-01','muralimiriyala34@gmail.com','7729927397','1',NULL,1,0,0,'2022-06-22 15:44:08','2022-06-30 13:30:06',NULL,'2022-06-22',NULL,'Revanth','FTE','Software Developer',NULL,'React','Java',NULL,NULL,'Band-1','HRM'),('OBD00106','Murali','marthula','marthula','Application Developer','Application Development','2022-06-02','muralimiriyala34@gmail.com','7729927397','1',NULL,1,0,0,'2022-06-22 16:23:36','2022-06-30 13:39:59',NULL,'2022-06-22',NULL,'Revanth','Intern','Software Developer',NULL,'React','Java',NULL,NULL,'Band-1','HRM'),('OBD00107','Mohan','Krishna','Madanapu','Full Stack Developer','Web Development','2022-06-02','muralimiriyala34@gmail.com','8919069502','1',NULL,1,0,0,'2022-06-30 13:19:39','2022-06-30 13:30:57',NULL,'2022-06-30',NULL,'Revanth','FTE','developer',NULL,'full stack','React',NULL,NULL,'Band-1','Properties'),('OBD00108','murali','Krishna','Madanapu','Full Stack Developer','Web Development','2022-06-02','muralimiriyala34@gmail.com','9809090909','1',NULL,1,0,0,'2022-06-30 13:22:16','2022-06-30 13:42:59',NULL,'2022-06-30',NULL,'Revanth','Contract','developer',NULL,'full stack','React',NULL,NULL,'Band-1','HRM'),('OBD00109','bhavani',NULL,'gudala','Full Stack Developer','Web Development','2022-06-02','muralimiriyala34@gmail.com','7768676768','1',NULL,1,0,0,'2022-06-30 13:24:47','2022-06-30 13:45:52',NULL,'2022-06-30',NULL,'Revanth','Contract','full stack',NULL,'full stack','React',NULL,NULL,'Band-1','HRM'),('OBD00110','nikhil',NULL,'estarakula','Application Developer','Application Development','2022-06-02','muralimiriyala34@gmail.com','8919069502','1',NULL,1,0,0,'2022-06-30 13:27:16','2022-06-30 13:31:14',NULL,'2022-06-30',NULL,'Revanth','Contract','developer',NULL,'full stack','React',NULL,NULL,'Band-2','HRM'),('OBD00111','Mohan',NULL,'Madanapu','Full Stack Developer','Web Development','2022-06-10','bhavani.gudala@arshaa.com','1234567890','12',NULL,1,0,0,'2022-06-30 13:47:30','2022-06-30 13:48:12',NULL,'2022-06-30',NULL,'Revanth','FTE','developer',NULL,'full stack','React',NULL,NULL,'Band-1','HRM');
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
INSERT INTO `onboarding_id` VALUES (112);
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
  `permission1` varchar(255) DEFAULT NULL,
  `permission10` varchar(255) DEFAULT NULL,
  `permission2` varchar(255) DEFAULT NULL,
  `permission3` varchar(255) DEFAULT NULL,
  `permission4` varchar(255) DEFAULT NULL,
  `permission5` varchar(255) DEFAULT NULL,
  `permission6` varchar(255) DEFAULT NULL,
  `permission7` varchar(255) DEFAULT NULL,
  `permission8` varchar(255) DEFAULT NULL,
  `permission9` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name_UNIQUE` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolesmaster`
--

LOCK TABLES `rolesmaster` WRITE;
/*!40000 ALTER TABLE `rolesmaster` DISABLE KEYS */;
INSERT INTO `rolesmaster` VALUES (6,'HR Admin',1,'2022-06-16 00:00:00',NULL,'Employees List',NULL,'My Profile','Onboarding Form','All Employees',NULL,NULL,NULL,NULL,NULL),(7,'CEO',1,'2022-06-17 00:00:00',NULL,'Onboarding Form',NULL,'Employees List','My Profile','All Employees','Holiday Management',NULL,NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (48,'ATPL00066','ATPL00089',NULL,'HR Admin',NULL),(49,'ATPL00072','ATPL00089',NULL,'HR Admin',NULL),(50,'ATPL00065','ATPL00089',NULL,'HR Admin',NULL),(51,'ATPL00109',NULL,'Akhil kumar1505',NULL,NULL),(52,'ATPL00111',NULL,'Akhil Sardik3757',NULL,NULL),(53,'ATPL00115',NULL,'Nikhil7032',NULL,NULL),(54,'ATPL00116',NULL,'vineela4504',NULL,NULL),(55,'ATPL00118',NULL,'Sandhya9874',NULL,NULL),(56,'ATPL00119',NULL,'Azam7812',NULL,NULL);
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

-- Dump completed on 2022-06-30 14:12:08
