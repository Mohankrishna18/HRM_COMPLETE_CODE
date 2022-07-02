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
INSERT INTO `employee_profile` VALUES ('b122b788-8e64-4375-9429-fe1a1cc3355a',_binary 'ÿ\Øÿ\Û\0„\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342			\r\r2!!22222222222222222222222222222222222222222222222222ÿÀ\0\Ì\Ì\"\0ÿ\Ä¢\0\0\0\0\0\0\0\0\0\0	\n\0\0\0}\0!1AQa\"q2‘¡#B±ÁR\Ñğ$3br‚	\n\Z%&\'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyzƒ„…†‡ˆ‰Š’“”•–—˜™š¢£¤¥¦§¨©ª²³´µ¶·¸¹º\Â\Ã\Ä\Å\Æ\Ç\È\É\Ê\Ò\Ó\Ô\Õ\Ö\×\Ø\Ù\Ú\á\â\ã\ä\å\æ\ç\è\é\êñòóôõö÷øùú\0\0\0\0\0\0\0	\n\0\0w\0!1AQaq\"2B‘¡±Á	#3Rğbr\Ñ\n$4\á%ñ\Z&\'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz‚ƒ„…†‡ˆ‰Š’“”•–—˜™š¢£¤¥¦§¨©ª²³´µ¶·¸¹º\Â\Ã\Ä\Å\Æ\Ç\È\É\Ê\Ò\Ó\Ô\Õ\Ö\×\Ø\Ù\Ú\â\ã\ä\å\æ\ç\è\é\êòóôõö÷øùúÿ\Ú\0\0\0?\0õŠQIJ*@(¢Š\0Z(¢€\n(¢€\n(¢€\n(¢€\n(¢€\nZJZ\0(¢’€\n( \ĞœSI\ç„œ\àg5FûU³Ó‘\ÄÁXtA\É4|`^\Õ“¤C\çtOwlWªø\âW\ÖÁYW w\àšä®µi\îÜ™eg\ÎO\'4\Ô[\ê7\Ş\'±±`\Å\Ã\Ó6\à~5\Ï^ø\Ú\ëyò#œ1\Íp]; ,r{zTBf\Èd\ÆŞ¦´TÀ\ën<a*üóÈ¸ôÂŠ ú\Õ\í\Ê\"™İs÷¿*Çv\ÈÁS\ÄUöyc\Ã+#œü¹úöªPHD{#HQò¬}NÕ‹k·`©\'Ì¹À\Îx_Â ‘’“ ıÀ\ë\×\è\İû\Ô\Â?/>Z„ü\Ê ûb®]\İqjÉ²U(\Ä$pG§ÿ\0^¶mõ™(<.~e+œ~u\Ê\Ã\æV`‡ª±\È\'Şµš?,„F1®‰Ÿ‘ôõ¥Ê…sº³Õ¢~‘±Á<\n\ÛûDMe‘GuyË†db	\È(s\Ğ{Ö«^\Èñ+\ÆIqŸ\ç\×ò¨p\Zg{\ÕH<0\ÍI‘\ë\\=®«4o´6\à„v\í[\Ñëˆ•¤S\ÉÁ p3ÿ\0\ê©qhfØ¥\ëT \Ô`˜|¹‘’8ô«y\ã5 ;4Rh¦\ÑIšZ\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0Œt¥ƒ¥(¤0¢Š(´QE\0QE\0QE\0QE\0QE\n(¢€\n(¢G,«\Z’{T7÷öúm¹\âB‹\Û$Ÿjóx½\ïY ¶Ü«v\ê~´Ò¸Í½w\Å\â\ÚW‚\ÖL\È\ç\ë\\¡¬]\Ü\Èd’RÅPš\ç|¹lŸsúUC+7­k ,<\ÎP’\äœóPœ±å©œ\äsH]B\áz÷\'½]„)¹\'Úƒ¸d\ã§ZŒ“\Ó4\ä\ç‘L	W8\çB\rZ\ä\èÊ®¤c“ƒQE:©\0€G¸«Ë“ \\ú\Z,œWq<k\Ô{•x\àg½I\äE·Í³›\å\ì½ÿ\0:\ÏEHĞ‚r\ã\æ\à›rVpOJ	5!‘“ø¾b \ã—‘FñyĞ‘‘€?½_\×œó¶TI \È<0\Í<]˜\Î	\ìE+\0ûyğF\æÃ¯B;Š\ÑKÆA(;ò\0\ãµf³y6\Şqòô©!vÙ·\×\Å\0iA)…Œ‰’\r\Çù\æµã™¤òs€x°¡1›¨\ÕÙ’ùX¯P}kcM‘m\î$Yòñ€z{œŸ­&€Ò…¦3Ã„d+»\Ó\ëkoK½i WÁ\ÚO=+ŸÓ¤A9‹.\Ñ-•\ã®9\ïÒ¯Y…‘r\ïò3ò;Vrˆ\\ê•§uª6²8UFy\ïWãµŞ–Ri\\Š(¦EPEPEPEPEPEPEPc¥(¦Šp¤0¢Š(´QE\0QE\0QE\0QE\0QE\n( \Ğ\0x¬­c^·\Ò`;™\Z\ãH\É\äûı*/k\é6‡\çS3p«^Q«j\Íwvò\È\í+|\ÍU¶À·­\ë³jSe·\\\0xAXRÜ†À\éÓ¾j´“$÷\Æ\0¨w15º€•\äcÛ¯J`¯`~¢“9¤\ÚI\äqLC²v\äŠlÒ” Âb˜vœ¥9T}?\ZLaA8Ç½H¬ \Ñ`+=\×ó«\0 †x\â¡ x\Í^·X•v¡\ã9\æ2õ¬‘ª\èÏL\ç\ëVeû;¡gD8Á\ÉY$D;# v¡{ƒ\ælX·JGğ¶1R\0ñ\ÆNS\æSıŞ•W\ÊØ¸W\ÆOC\Í,\Í6\î\Ì7f–(™\È\'•\êq\éEÆ\Ô,™€zƒü\ÅO®¤\ß0ôô©\í-%pZE\îTi«j¾\Î[ Û¥+¢\ä*\Ì“·c| ½*ú\Ëò9©‘pÇ§\â?)–\È\ÒF<\Ç\nö–©\ã¸\éS\Ü\Æ\É!‰U™Qv.\ŞÏ­&\Å}>ù s—8S¿\å=\È8üñ[\Ò\ê\n¬\n…PN\â~;W/övV\Ø\àprG&­Œ,C\åÜÀ\Ğ\É:ûiæ¹€\Èp£³O°Ô˜8YÁaƒŸZ\Í\Òei63³qqşrkP\ÚD¬¬©\ÈLŒ|Vm\r3n–e’GC\ÍJ\\ \Ë^\ÕË¬\Ó\Ú\Ü\í<‚~`¾8…mZ\ÜP—z…º\ç\Ğ\ÔX¤h†dSª¸bˆ\Çcı*d`\Ã\"•ÀuQLŠ( Š( Š( Š( Š( Š( …(¤£­!‹EP!h¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢ŠKT\Ô`\Ò\ì\Ú\æá°ª8å «7Z[I<\Ìd’k\È<M\âÕ®N]¼•\áğ½4®oY›Q¸–Y˜:\àzV¹<g\"‰%,O5\îq]1VCNiø\æ\np>ƒ4\Ä.8ºN>c\ïOI\ç\"°/ZD#,IsŠ\\cµ;pQœ÷\ïM\È\ÆOS\ïLH$š•ŠgA’)À\Ğ«ò|\ß{\Ø\Ô\Ğ\ÊKO\Ê~EQ/ƒÉ§y§i€i¨·C\î)\n;\àT\×2\Æ-€…§b\Çn\ã\ê@¬¸¤”‘\ß&´¬™\î.AûÀrw3\×ùRc¤\Äü°q¢¶¬ôGÉ•`F1S\ØBòò8!F>Zİ´U$\Ğ~µŒ¤h‘Ÿˆ¶µ*FI|“ƒüâššXŞ®Fœ•\ç\é[›U»Æ¥\äq*9†\ÑAt\Ñû\Å\\Yˆ\È\ì>•^ğ1cŒm\Ør\Ütö²U•q9<õª’A\æÍ¿GôùŒ\ÜLK\Ût’RKlEMÿ\0‰\'­W·³“]w\Õs¸õ®†{.˜u\ÏC\ïô¦Y\Ú.]\Î\Ğ1œpz\éúÕ©b¦t±jH@\Zò\Ø\Ç8÷­ˆu$1\ä\0q¸zş¹®Rùü‹§X\Îp	«úmÊ´­)\á€ô\êOÚ¹66d”\Ï$¦E(aNGù\ïS[^‹YJ\ìWˆş~\ÕTLfUYœmÈ‘ù\Ç\àz‚\ã3<r„=Gÿ\0_úT´\ë#d\n‘•ö ‡„\ï#º\×;§\ê{%ÊŒ#¡\È\ë]22ÊŸ\ŞSŞ³jÅGWÂŸU\0òf\ÏO^*\Ğ9¡\0´QE1Q@Q@Q@Q@Q@ƒ‘O®\Ãò]\ÙÈ³H\Ï\"\å›\'·\Å!‹EP!h¢Š\0(¢Š\0(¢ŠQE\0(¬½P\ZT\Ì$T‘”ªqƒ´\Äx\Û\Äms3\Ø@Ø†\ä¯ñ°\ç³\È\Îù|Õ»ûŸ2W!òI\äû\Ökİ«¢²˜\É\ã4¡y¤\r=s\ÅX\nJ\å\à\Ò(\0‚zS³¸\ç \ì)ˆv\î6ƒH\ÒmP\0\ËSs‚)§®\Ô\Ğ!\'\çsŞ—;›¤eEšy\\-{ry n\É\ÜO\áHNiHÚ¹4\ÌNhĞ¥˜óK\ß\ìaiQr\Ù#\éH¦s\ÅhÚ–\r¹yÀ\çÚ¨¢ä‚=\ëgO€21“ª$ËŒN†\Ë\Í1¸À=ùâ¶ \ÜOC‘\ÏJ\Í\ÓWû¸\ï[qBÃqXI›5b\Äj\n?:c8\à\n0q\ÍXARC/=TS\ÄJ¸ sR*\ZyRhFHW#Ò¢š\"\Ñt<u­/.›±@?/Zh“šk•ƒJ¿ 9\n=º\Z£slE(\Äc Şº‹¨Y—	Ó¡¬{‹m’\ä8À\â­H—5e”\r¸\È\'\Ü\Ñ$\Í÷L\0\êÿ\0Z´\r·›€\ÊGRGSUnm\\‚K»UÌ…\ÊTŠ\à#\áH\Üx$\×S¢\ß\ÈAˆô^Œy\ãŞ¸É’H	¼b\ÇR{iA’Wƒ\ÏQJJ\àzP\Ú\êË\éM‰™\Êcó\â¨iš”WĞ’£k95}€,$\Ç\Ì8\ÍfÒŠ8\çÿ\0\×RSQE\0QE\0QE\0QE\0QEÁø6\ç²FXüññõ»^O ^mV\ÖM\ÛW\Ì\ns\èxşµ\ê\êsN{”:Š($‹EPEPEP0¢Š(\0\Î+\Î<q«—¡	\Ê÷¹ç·°¯CšAL\äô\ã5½‰õ9b·e 1\ÉS{\ÕE]‚9iŸ\æc\Ğ\Z¯\ß¤\åÍšUO^•Ğ†»L?*n\à£IŸÎ˜\0OZx\ãŠj(9\Æ)€´`7\æ…\ëŠ|1ü\ä\Ğ!\èX\Ü{\Ó9;Ô®Fj\"H v\Z\Ùw\0p(\àsùRH¤\0\ãSG\ì’x\è6j\ä\ï0A#’)64ˆ­\Ôy\ê?‡8®®\Â\ÏqD#•Q³\Ò÷\à\É=3\Åtšlb“AÀ>¢±œ\ãµ‰¢¹8`\Ö\ìI…•P†“=1WUFq+&\ÂLEQ\ÓÖ¦U\Å=ª@1AÀS±F)Àb11\Å\ê1@ˆ\Êg¯J¥=¨s\Åh\Òt¦X·\Ø6H¤š\Ûzp v­ˆSJ{\ZC9k\Ë|†qık›º†KYwFr§‚¾•\è’Û«Ÿ™k™\×4¶DgŒeq\éš\Ò,Múnª\Ös+«m`xôÏ½zŸ©-ôk³’W ò’:\ï^H\Ì\É!V]µ¹£\êòÅ˜|Í¨!}O¯Öœ£\Õz]¼»ŒˆFüGcV\Ô\äV%•È¸¸Kˆ\Û*É‚3\×\ßù\ÖÊ‘Ÿ¨\ÍfHú(¢˜Q@Q@Q@Q@+`\ê&V#\åV\Ï=øş•\ëö“	\í\ÒQ\Ñ\Ô\ZòKˆ¾Íª\ŞG¹+\Üñü\Åz?…\îMÖ‹\çî’‡ğ5S\×R™¹@ sEA\"\ÑE\0QE\0QE(¢‘ Fn½8‡J™²¿Jğ½FF’\âVf\É,z\nõ\Ï\Ş,:Q‹\Ò0Ï°Á¯Ÿss\ÍiMj2¸@§$\Ò;\ã¶>”\Ù=º\Zq\ÆOZ\Üd€Ó†=\ê1À§h@y\âÇ’I¦ôSŠn~´\\	b\ÉlûU‘\Âó\×K€*B\Øùºâ€°\Ò\Ù|w\êh,3M©ô\æ˜XœP\É\ä\n‘ œSqœU¤^G©ô¥q¤K_(\'’kcIµ,\Î\äğV³µ20\ë\Ğfº{+1\Z°\ævúVS‘¼bZ¶´	\ä‘\ØsùV°³(¡\Ô\r\ã­:\Ş\Ø\ì£?Ò´\Ò1·õÁ²£ùF9\Ïz™*;J«…\éÓŠh!±@§@\ê	Š\\R\Ñ@„¢–’€ŠAK@	ŒÑŠZ(¤J£ym\æ\Ä\èTG¢#(=©ˆò}n\ÆK[“¸w\ÈÀ\íY1\Ï\å¾\å$y¯Dñ6›\æ[³¨9=+\Í\ç_.V®zV\ĞwCgk ê¬Rm»÷8$`Ÿ\ÌW}¢HC¯ğúŸzñ½&é£ºŒnbT\às\ÆO\éù×§ør\ì\\X*7*\á”õÿ\0=¿\n\ÎJÌ“zŠlg()Ô‰\n(¢€\n(¢€\n(¢€\n(¢€<Ä–\ím\âI˜UI\ãº¿\Ü³\Ü\Û\äe7ÿ\0şª¡\ã«u‰m&\0eK\'\áÁª\Ş”¦°ñ\ÏH\ÏÓŒıj·‰G¢ŠZj: B\Ñ@¢Q@Q@Â£™\Äq3œp3ÖO‘©J\×p\Ëm\á	\\M(#\åŸ\0p^8\Ö>\×~m\á*cˆm,9\ÉÇ­pr¶3µ\ÒxŸ\Ë[ù–!¶4!T`t\0b¹I$\×D\Æ1 ™¦÷\ëNA\Î{U€õ9§\Æi?„Î€Tc4Às\03J‹¸T}Xf§sR\ÃGµF\í•ô3p<šcò\áqÒ€\Ãl@g’iª9¤f\ÜØ¥(‹1õ>•£m\0¨\Ç?J§mgu\é]&•fY\Ãd`x\êj$\ìošzVœ\0O˜V\íµ¸kNş”\Ëh\n&\Õ1­{[r‹\Ôõ®v\î\ÊnÈš\Ş-©Ÿj²\"ŒSğ1HÉ± c?Zp\ëKŠ\\S \Ò\Ğ¦ ¢—b€µ%:’	E´\0QE\0¢M\ïJ)‰•\ï-\Å\Ä„Fy/ˆlZ\Îù\Æ	¯b=+„ñµ€1™†=j¢\ìÀà¢‘•ƒ!Ã„×¢øJğ\ËzÏ¿*É–\İ\îA8úú×š©\ÃcœWC\á\Û\ß*U¢°\'ı\ß\â­&€õø\Ó\Ôu©j¬\ØV~X¬GCõj±DQLŠ( Š( Š( KÆ–†\çH•ÁÁÄŸ‡Cüÿ\0J\ä|;r-õ›i~	ö<W¤j‹+¸qŸ2&_Ò¼¢	÷\"\ÍĞz÷Q\ØhöD9Ÿ\ëTt\É\ÍÆ™k19/’}ñWE@P( AEPFhªó“÷jJ\äP2¤òK{tmaÜ®’¯`iú—m¤\Ü6B*¡\É\Å[5‰\0P\0¥dø›û\çfwp\íÖ…¸1¬M\æ\\»3nf9\'Ş±‰<Ö† X\Ê\Üçµ›\ÍuEY=½j@p¡q\Í3 \æ—<dõ4À\\Œ\â€wgƒ¥38§•À ¢\äTÀğaLQ´S³Š@Ì€úR\×Ör3@ı¨£qÉ«¡r)‘/˜şõ«il]•““\ÅKv4„n\ËZu©gI\ÇN‚»]6Å™T\"mQÁ$rj¾¢ˆ\Ø;®[\Üô®ª±+	J\æ\ï\İZµ²Ä cñ«qLU\ç¥KPb\Ø\n~) b)’-R\Ğ ¥¢Š…Q@ ¤4´b€E)”\0QE€—¥%/øS\Ö>¿l.tö\\ı+`Š¯r“½°#Ã®c1\\È‡­ƒWtiB]®[¸ÿ\0tœ\çSx\Ø\Ùj÷€\Øqú\Öu‹709\È\Çò­÷ˆ\Ù\í:4\Í&œ«!\İ$gc7«/ùgñ­`rõ®kÃ³oNFDŸ9>¯Œ7ò®’1„Ç¥aÔ\ÔQE1Q@Q@Q@gÂ¼›P±û§ul2rzc9şµ\ër¸^}\â¤\ë®Lyó#G\ç¦yÒˆ\îR:Ÿ\\,\Ú$*LyCùñúV\à®CÁw’\æzÁJ\ë…q1Ô´†–‚Š)	\æ€\Z\Ù\"£€dguÏ©§K‡¤¬Qa\Í9ùWñ¬OÈ‘ø~XÌ›„\Ç^y­µS‘É®+\Çó²\ÅJHP¤\ç\ÔĞ·\Êo¹”\àğ;•Lñ\ÍXœî•°=*³WR\Óó7µ+~”ƒ®)	$\Ó dÕ„^:Th=ªP1@\Çv÷¦“A8¥@X\ç†; \nLvõ§qR[\Âe“ZL¥–l\í\Ë8©ö®\ßB\ÑüµY\\v\ã5WD\ÒT€ò*\í\ì=ë²¶ƒj\0\0ùG5„¥}\"‰a„\"ıj\â\n…9©‡QY£6\îJ´ñLZ§uª\Ão¡¤q\ÑWüh\"ÆJ\×?ı®em›\ng®i°k\00I\\&s\ì4õ)Ñ†¥š\ÄşÜ·R\ì\çŞ­¦¥2]@\Ï\\\ä~t\É\åf•H_Fz0Á\èsÖ]ûˆô÷¤¥\ê*¸¸VPÀñÒ¤s‚{P$¢\ZZ\'z(\ïE \n\\û\nJ)ƒ>Â‚i( B\ÔRŒ­KMuÊš`-ø…MV\Ö`$ˆ© wÿ\0¯\\Å¡\Û&q]\ÏÄˆO\Ø\ì\å\Ã)Sô\"¸‹%\Ì\Ê:\ä[C\á\ê^“}”,Šy¬8ˆ+¬N\ëŒğ\î`šH°Š1´sÕ–C\Ï\â?•vct¬I{¢Š)’QE\0QE\0QE\0C(\ä}+ñµ¨Å•\Ğ\ÎC4L~¼\ä:\ì$\ê+\ÅĞ™|=9U\Übe“C\Ï\èM!œ\ï„n¼o\Él*üzŠô^O¤\Ë\äjÖ²†ÛµÔ’\İ\ÆÂ½\\UHl}- \éEI\"\Ós\Íp3Lp{ó@Ÿ{FB\à¤šdD\Íó\nv5#6ÿ\0•AÇ­fjµ¼\r\n¹÷\ä\nEE]\Ø}öµ°+\0¸óò©®Å—77Jdd{Npxö­J\Ö\Ö3´€{\Ö;\ÎÚÊ¬ˆù¹\Ï\éU\ît*JÇŸM\Ø\ç\ëPGZ\í52†Kbp<W e%OQ]•\Ìe\rQ’Oµ­ÖœMQ©€3K»=)¹\àúS”qHbûTŠ6Šj\ÔÔˆ2\ŞÔŠŠcG_J\èt=,\Í ,§bõ\â³ô\ëVeÛx\è\ZU˜Š5Œ`\äd+)Ï¡\Ñ\Ù\\½cl\0t­8×Œ~t\È\ã*px¬P¤\î*Œt©7*®\âqQ–À÷¨˜\â‚¸¼\Ú6¢\îü+\Zf’\àü\î\ÊÏ°­Cn®\Ø$ŠQj6œ~”\"´F¶)’\Ş`\'	5šö\ï\ØòÕª¹~u\×Il6|ñ+©íŠ­-‚¿1\Ô8ÜµW£¹Š@ÀüûG<õ\ãQ¥\ìÁC	ªı\à\Ö\ç¿\Ù>“E/ccªgiúŠÈ»ğöÑ»nğ=$}=ª¹‘J\Å;{£\"\â9\Ê>\àqœ\îşF¯¶¥>\Ìb\0\àH=}\ë$\Ø\É\ä,Fr§=¨«‘(ò\Ì2tö¸\Æ\ÏjL«#¥´½i!.F	\ë\éW ¹\Ü\Ñ\à\ç¨9úš\æ\í%xcB±_Ò¯XNB’Ã•\çõ¬\Ù&ú\Ün\0\Í[F\Íb[?ø`Y»úV\ÄD\0~4\îg%b^(¤£½£™\æƒL\0œ\ZMÔ™õ¨\Ş@(6iO#]e¥	 ›¿\í\Ä\Ş™±óD\èùô\ç¼\Â\Ë&N	\ÎGJö/Û‹Ÿ\ê\ã$À\Ä}@\Ïô¯\Óñö˜†x.?m\r¬UL\Ğv\ï¸xÜøû»³ù“ùW^¿\êø\í\\o‡U“\ì²(bÏº6\r\ÔLŒşu\×Ú¹{Tv\à‘“Xõ%–(¤µDQ@Q@Q@I\ĞU{˜Õ¤¶\í\ÒD+ùŠ±\'AMHg·ú4¡\\±¶{ƒ^µc8º³Šu \ãğ¯5Ö òµ\İN‡\Í.™<r3ık´ğ„şw‡\ãÿ\0¦n\é\×<fªCfø¥¤)jIùCô¨\0!g·5`ôªÁ·H ©¤\È0\n\æµÛœ<ŠŸ4Œp\0ö®g	1\à\0y®;P/<© oq¸“\Û<óC6¢®Ìˆt\ãp\Ù\Éf\êÇ°ö­\ÓWû¢´\í­#··TU¾jY#\rœ\ãh4®t6aI¸yšuP6\à\àg<qŠò\İFäŠ£\å\ÜzÆª\0ñƒŒŒ(ş*ó-R·-‘‚2O\ç[Rfu—2Â´\ì\àbŒ‚=)¸\é[\ã”g­H:óÒš:S”võ¤4<u\ë\Í[‚/3\0s\ÅEx+“\ë]‘§–T8§ª[±µ8\Ü\Ô\Ğôı›r£\ØúWak@\0*ª\ÄF1Ş¶£Œ\Î\İÙ¤´4ı¸\íOA\Å)©2¸\ß,bš\ÑgÒŸ¼\nC%1j7x\Å\'Ëœ\àƒH\ÓP?\Z§6«knHyW>™\ä\ĞU›.\àc’qMl€š\Ç]{\Îl[\Ù\ÜI\ÇR0?Z”\Ş\êDdZD¾\Í\'ø\n\Ê_\'hÀ\àSœõ«\"mST%­ \Æ;1ÿ\0\n…µËµ\\µ¢ş\rŠ,R‹4f…9U	-TŒĞ‚\rB|B¤\íxO±\ÍXŠ\î;‘¹AVh×ƒ´õÁ?Z±%Wqü\é\É\ê\r[\æ\ã„\ÉPÀ\0UøzUx\ã\0ƒ‘VÓŠv2‘\'jJ\\\Ó_˜\ÙA\Ã€h †\Şv–i\0*6\Õ#½N[š¯k‘\ÆH,2Xû÷§H\áy¤\ÂÚšPŠNNjŒ·j£q`\\“U\ï\ï\ngh\çŞ¹mBñ¥$cƒÁ\çª¦‘s¡mn<‡§\0\â§Z\ë,\ì<\×=€\Åq¾p.Oš3‘€O\ãQ\Íyóœ`b­@RG¦¨g¸Ã©\èkÇ–ms$K\Õ¨üÒ¶\ì59w*I#Ş•Í§›ªA,d2t\'#ƒ–jÒ±™\İ\é¬6öck+™œÇ“”#?¥o\Ù\ç\ì¸=‹Èš\Ç\Ób\ÚYr\ÇaL\î9=ÿ\0k\Ùû1A;˜\ä}k¤²\È\è)i ¥ª$(¢Š\0(¢Š\0(¢Š\0”†f\Ï¥§·\İ5\Zô¤3…ñ|\ro­\Å8%\Ä[Xc¸ÿ\0\"­ø\åT\ŞXŒ\áHdcı“üª_\Æ³-®\çË›iú0\Åbx:f‹\Ä(¬\ç#&s\×úU}’º)iJZ’B«¬l—sòº‚¡b¡œ‘†rjC~\Å,¤À\É\Çˆşü\ä\n\Ş*\'<˜\Ç+6D\ØÑ“\ÔpH¤mMØ¯!+0S”†H\êi—í‹¥FY©\êR#°.\í¼“H×¡–\ï¶Gl>^üW”\ë¥ZòUM¸\Üy<gŠ\ë<Y\â7ƒ}´\Ãy\à\í\àŠ\áH’v]\Ü\0:•­5a=Šl§$R úWdU\0\0z¬Ãœf·2hgŸJ’2Y¸\ÅF~b8­M2\ÔMp‰ŒŠM1»,\ÙY<“Â§øˆü«¹²²q€£·­gi–hÚ\ì|±Œj\é\íb\É\Ç€k	³£\á,ZÃµE^Q\Æ)ˆ1Š™Efc\'¨\áÀ¦3N9\ÅW—p(„w©\Ü_¤*s¸‘\ÔLœ9R~•s¡ó\Û&™¬bˆ\ïu+™Ù–\"!ŒXõ\Åf¾¥a§–pK±\ç-\É5Ÿ©-\ë¿9\Ø=*¤\Ãq¦\Í&ògH\É\Øz\çü\æ´QEKE¡<5¸go²F?xŠ‘<A¯\İÆ²+!Lğq\Óô®j\Éş\Èû¸\ç¨<Ö¥5«NVKw\äfDsƒ–8ü°ZÓ–&L|>1Ô¤•U2\ã”\ëzMNxDk¨[°V<c‚\ÇÚ¸\èô»‡¹\0C½J\"œó\ìy¯l[—NXn#W\ä0\È\ÍD\ÒBö2\\E¹\Ï\åD¢”9=ó\éZ\Z×‡¢\Í=H\Ù\ËÄ£‚;šÌ†o:0\ë\Ã/QQ¡\Ó	s+¬\Ê\Ê9&´¢<+\Â@ı1[gŠ†)\Zpœ\àÕ¥UxU¥PsH\0¤#š“ŠkcÉ¹œ~F\æ\\¯Z[ë¤…N[\Êj>\"Š6)ocÒ•®kšW(<óY3iK9$u=rj’\ë3»g\Ë\ãÖ´muCŸ8=\Í=Q«F{ø~ğbt\Æ}j\á\Ë\â~`0zœ\×giyo2ğW\ß®…V\0ŒS\çfló\Õ\ÓE›o—;•½x«+\Å\í´¨ƒ—R¿Pk®½³0‰Æ¹\é,O\Ûm#vù™<vR‘œ‘\Öoc¤¬\Ãø|\İkR\Åv\ÙB;\ìú\â¨2c\Ã\ê®0<˜½¿\ÄÖ¯üz\Å\ì T-\Ìú”´‚–¨¢Š(\0¢Š(\0¢Š(‡¡¨\ÅH\İ\rF)›\â;Qw\áû\Ô\ãr\Æ\\g\Ôs^oaqöK\ÛyÀ`\É0\çŒuÁı\rz\ÌÑ‰¢x›îºŠòˆÀş[ü¯•\ã±\ÕG±Hö\0sÏ¯4ú§¦\Î.´\ËYÁ\Îø•\åW*D„dKE\0U€\'œ\Ç#Ş©\ß¦_öN\êÑ‘sXú„‡z\"’L‡\Ëlğ@\ÇQI—\r\Êvù’h\ä|ù\Ï\' ¬\Ï\êƒJÓ›cf\æl•#·jÓ»‘mv\ä\ìU95\æú¥\ÌÚ¾¢\ÎAØ¹À\ÏAšpWgF\æiV¹—Ì™‹¹$³\×Ö¯\Ík¡\nZF\\ \Ï\n\Úş‚Ÿj\í¼8,H1ÿ\0×­Ã¦‹O:sóôÊ‚G«v:\æ\á‡\Î\Ü\çÚª8\Úïµ³¨Ã²vV`Ó’K°\ìOoó\ëY“£(\É\\qõi‘( À\Õx~\Ùv†?{®k™·\ä»\í\Ğ,)‘\É3z5©¥£\Â¦B2+z\Ù8\éYz@+Œc\ïVÕ¸ùGÒ¹\Ùsdê¢¥š£š\nX\ÅFñî©ºÑ¶\\Ï–\ÛwN*”\ÖyGĞµ¸R x3\Å2”\ÎvKIù\ãQŸN3Q§‚\ãkvX885[\È\Ø~Cõ‹³^kœ…ï‚¼öy-œG(\'*Ç†ƒs\á\İB\Øa\í–\\wC^›\æ0E \0*ùØ¬q>\Ñõ$º\ÔbX˜2\Æ\İr;×¥>£o³U?CX¯3€¼¥R–¼“\Î}MK“dû4Ùªú¤±ˆÌªğYº­s\Z¥¬S‡±‚X!\áª\ÓEœ•\0\ÔFñ\åŒ{qB5„yK\Z,H\ì\Ç\ê:\Z\İX\Ê6j©§Ä¶\éò!T¹\Î:\Òo˜\äR&l¹\0\à\Z²*FTÔ‘\Î÷¡”\áMKU/e»°\ê4Ánpş%\Õ$’ñ\í`$\0v±®NK\Û;pÙ¸q\É\Úz\Zİ»·{˜.\îy3dw\Çù\ç\ê¾aù‰\ç®+X$o)r«m¿ˆnd‰\×L\Z¹€\È\0U­3\Ä\ry/–\Öh\Ä|\ØV\ëOƒU´ÿ\0„r\â7¶’Â´¾ß¼*{s\Ø\ÖgƒD‰\âk7Û•b\Êr8#iªi)³£µ\Ôl\æ¸1¡6ót\Ãpµo\ÛK4$nrXpGCR\ë^µ\Ô\í\ÉTX¦*\è s\ï\\m\åÖ—q.™vwÆœ†\Ç ık+_b”ùü¶øó\ê+.ùz†˜\Û\Ø$l~+ÿ\0Ö«Vó\î·\r\É\à•=\Äi>·H\"¶yÁ,§ù-J\"LĞ½R\ÚxB¤–Lô\ã5fÈ–´Œ‘‚T=)’\Æe‘DT\ã¦–È“i\'$Æ¿Ê¦wĞ´)iJQTHQE\0QE\0QE\0\ÓÒ£%D:\Ò\Õ\æ^(·X|As\Z\áC‘\'>\à\\×§W\ã»F]F\Şô•\ã1Ÿ|E8\î3sÁ—-q¢s“…G\Ğò?tu\Ã|?¸?é°¶~m¿€9ş•ÜŠ\àQE \Z\ã\ä8\ëXÓ€Q\ÃG‰ !÷g¨=•m1ÂšÊ¹$\Ï\"vu¸\Ç4;œOŠõ-’\"\Ä\ä±\ç+\Ùıd\×:ao³G\å£\rÿ\0y¹ı\ç¸ö©\å+ªk¾\\\Ò2Ä¹RO÷Et\Z}¬~yûJjg\î¨\íW±\×“i„bRªó3p9÷şu­xñ\Å\åŠ)8\ÆL’g©ª\×P)X°ba¹W¸³LŠ\ín\'Œò\0#­M\îUŒCd\'ºc\'«½\Ëq\ëúV^±l`&<d&\"»+»h\Ñ\Ã)‚;§\ë\\¿ˆ•„«´|„œûUÁŠ[ö\n\ëşğ¯H\Ñ\×+c¢×X³)¯GÑŸuªÃ“EAGbÖ™¸%\ÊôùÀúV\å¿\ÜJÆ² K0\ä¡\Ï\á[°V\"™mzT‚¢CŠ”sA‹:S€¤œ)ˆ1HE:—m2J\ï=\0ª¯«DŠ£•‹R2\ä·V\ãª\ÒZ¸û²Z\ÏWtÁ \ÑH\Êx&\ÇQ5•Á2~•®x\ãšXzR+˜\È]-Ø±÷«\ÙB„£ñ«€\ĞT±\Ûn`M0s#7zª\ĞAÚ¥ò€œ# \Í\Èt}*QLQN( q¨.|L¾£63HE;v<\Ş\ä]Z%\Ä*H\Ù\Ùv‘÷zƒ\\|\Ú\Ê1dM\ÊÇ ×¥\ë\æ-JB~\ä‡pşµœ«\á‡€z\Z¸\Ê\ÆöRW8H&¹²u\ä…\Ğğ;ƒô®óÁ\Ú\\÷+ªÜ±(£z\â‰-V\ã\ãP\à\ç$u­[{‰\áUùC¢Ò”\îL©ö:I\çŠ\Ş’Bª’y\è+Ê®RKV[w$‘\ÇPzWm<·Q!Y;«\rd®\ës¹”‚OğŒ\nIØ˜\Æ\Å\İ5\åò¡Q\Ë€§ò\Åtv\Ö\è/N§%˜ƒÔœ\Õx<›7•T´ƒhQqıkb\Ú%‰HnNH÷¤g7©0yÉ¨--\Â\áfUú\ÅX\'h\ÎzTpg™ü\è ˜t¥¤¥¦ ¢Š(\0¢Š(\0¢Š(µñ\Z–£\Ç\ÏHW5\ãxLš—0Ì§§bÿ\0\n\éj†³iö\İ\Z\îÜŒîŒ•\ã‘úŠ:Œóÿ\0\Üy\Zü’¤¡ºq^;Wi\Ó}šö\Ú\àü»$\Ùÿ\0õ×¯£‰\\ta‘U!±h¢Š‘\rnš\å|W{,zhH8š\åü¸öúw?•t\×\Â&÷±\é\\^ \ÒI\ÔÍ¾”•\àgœ}JĞ·\Z1´\İ;\Ë\×eFMµ¸8-Œs]\Ò\î;\0TVùxô\ëOğİ¹¹ğº\É ¦‘œpH\É\ÅRº\Şnwdı\ãC:)\Êú¥]\È\ç¹o•Q\Ô4¹`YÀ‘\×8\Éş•¯-¸G°)\Ë`ö«03Kqóóó\È\Î:…+š\Ş\Ç)5Üª¨¯Ø¬½Jc=°b2\Û:\êú\Õ\Üjvp\Ë\å\ÆP-ó689\ë\\«	„,xÀu\àJ¸±\èÑ‰le \×{\áé‰A®-\â\ÚT¯Bk«Ğœ \\\äSÂ¶†µ¡ò¯¥CœğG\Ó&¶í˜‘XU5eo\ïFÓšÖµnµ‘3\Ø\ÑCS-@‡©”óAƒ&)\ÔÁÒ)¢\nZAKLAŠB)Â’€#+š£t©\ÏZi ¤\Ê\ÆŠO!sÒ¬IHwd\":\nxA\éO¢€¸˜E/j¥” Q`õ\Í-P#;Sµ[ˆÕ»+Ú‰2²)R:•\ÔÈ¹ŒJ©%º\È3˜Pk\Ø\çü™ zûõ©£w|\ÈA\Íiù8aŠpµBAÛš\r9Ê‘È¯ü-ùU\ÈaFGJ;uZ J¥\"$‹Wøw)#\èj\áÀúu¨ö\à‘Ò‡m\ÌP~4Ì˜12g¦\Ş\Ø\ïR Àü1@ı©Ã¥µQLAEPEPEPi„a©ô\ÆûÔ€Z?•´ñ«\Ø~Ï¨][’C\Ç+\'<wÀşb½SB›\Ï\Ğ\ì¤\îb\0ıGÒ¸_Z,^ g8Tš5|ûÿ\0‘]W„oEÖš\Ññº6\Î\ìÉ­%ª)\ršAFqšÌ’©\'—d\ä	\à\ï\\¤\ìC]I,jc‚7c¡¼Š\éu@\Ò-¼JÀ˜g>€\\¡r\Ò\Ù\Ü@\Ä\Æ1\çx\çE4\Ö\ÇYa\nÁ¤AÂ\0+RŠ9u3:\0Y?\Z\è@ı\Ì|g+\ßşªËµ€\\\Ãyş²VÃ\éú\ĞÊƒ³*¼+‚v\à³cŠ’Q\\’X€@ô ü\íc+\×\ëO–ew9\n˜\ëA\Ñ{•\î6’«‚\äñ\\Şµj\Î\ê\áU8ë’n\ÂZYf\Èch=‡?\áLhY­›`\ÚX¹\Ïn08ıhZ\"\æ\r»1‚:\äVŞ6\Æ;ãš¡t¸Q\İ1;/\Ôv«ú^p@sVŞ…½‹—¥£d\ã‚Á”\ã\è\roYH9\Ç\\\Ö5ú\ì[G\Ïü´ÀüA­;˜\Õı@¬\È{\Z\Ë\ÍN*º©Òƒ\nTK\×5 4\Èc\ÇJp¦Ò”\ÈŠ( \ïHiOZNô\0\ÓM=iÆ˜~”ŠB\æ“4\ÜÒ‚(\ê1IšRi¡(¤¥\Í\0-.8 Ó±@†Á^¼ÕƒP‘‡4˜\Ó\ZPNX\ÔRŠp\Ğ;€Qšx¤\éKL–)\éJŠ\0¦çŠ‘~\è B÷¢Š)’-\n(\0¢Š(\0¢Š(\0¢Š(µûß…IL~¢A\É\é\Æ{\Òi\Ô\á¼l\ÂK¥4m\Ç~£ú\ÕoÜ˜õi-H\0K\Æz’§ÿ\0¯]/‹\í–\Ì\ì9…–AøBk‡ğ\å\â\Úø‚\ÍßŸa\' \ÎA\çò«½Õ†z­\'©¢†\èj	3ueXd\àlm\Ç=}+˜q3\é¶7!f7A›<nûÆºR5’\ÖL®\â#b8\ìk8\Ú;-5…\"\á>R{\'Š\nL\ÜI\ÔÇ´Æ¿0\ÇQ\íPÙ¼Q\Ûn%B¨û\ã&“P›Im\İB¯s\ëXW·f==¡xŸ{Ë€CN½ú~T›VÔ’\Ö3rŠ>n¼±=G\à*¬·Iª[n¶¶7Cv\Ã}Á´õ÷\Î+•Öµ–\ÉUæ•¤\Ïp0=O\ã\ÅtŸ¢Š}òV\'s\\`ó\0\ãM\Æ\Ê\æ±vZ—\í\îck`ıò}ª\×Zœ\ï˜\ê\n™öW^€Z\ê\"\Ş&eGRs\Ğv\Ë?q—ò:j-\Ò™\É=Nqı)E\\\İ.¦¼÷Pİ¼©\ëW¬	\Øq‘\ß\Õ\ÏiXó\äR1‘\Åt6jŠ õ¯¥9+\"\ÅıY¿ub½qp†¶4\á˜ûV«\"¢\Ún\ê%­\í-\Øa÷¶jlD´‰¤•2TCµJ´ŒY\"Ô€\Ô@óO™—4´ÁJ)Š\ÃÁ¥¦R\æ‚C4†ŠBi\r!¤\ÔN\Ø\çl\nª\ì\\\àP\ËHx³`TÃšlQ…ZI\ÖQ´€p%©\ÜÓ‘F*@ \Ó&\ä#vjE\ëO\ÛF\ÜPR\Ò\nwjdŒ=j)¸ Ô­Ö˜\ë¸b¡Šj^\Õ\nqRƒ\Å!±iE%\Ä.*Eû¢¢\Ï*ô	‹ES´RfŒ\Ğ!h£4™  ñÖ$€95˜d’òm°\İ\Æ6‘·’)\\\rLæŒŠ\È2Om>b1»qõ«0\Ş3D“ÜŠ.\ÊcñŠ}2CÀ iİ©‚Ÿ@\Ê\×ö\ÂóO¸·=$—ô¯\İ$Ñ£;I#<ƒÿ\0Ö¯j\ï^I­Û˜5\ëø»	\É\\Çš¨\î4z­´¢{Xf~b¦5\á{¯´\è\ç ˜Ç–q\í[j^\â*j–µ”§\Şp+4&\ÒÅ˜+\æBw™\ãù\Z\è¥\Ær\æ¹\ÈUP\İ\Ç Q„±¶0>S@\Í\İ\ãO‘S\nUqœ÷\ÍR\Ô\ãó\0F\Üûrª\Î\Õ\ëëšµª€,¤nOÎ§¹\"«_\æ\á&F—\ÊùV!·rI4!q\âH\î»]cy_nö9 }}ªÏ‚|Ki¥›©<±3„|¡º}:j¾¾#:´\ĞÅ³dñ“œ\à“\îpkvË’1ÖµQ\æ‰[•®\ß\Çwzòˆ4Á2yƒƒßŒó\Û\Ó?…p\Óİ­Æ®pn\ìc>øª\Ç©ˆ\ÅeV¡\ã‘¯>\È\ê¬AIP\às\ë]5˜¹\Åsvı\äp+~\ÚUŠ\Û\ÍwÀ\\œúÿ\0g3n„º‰ûV«mj£;F\æúWYj6Æ£\Â\×7¡\Û§–òPw¹\àz\n\é\áãŠ†D\ßBÀ\íR\rF•(¤b\Å\íOZm( D‚œ\r0S…;’:ŠLÑº€j7`)ñU$±\ÇjI\\Y$,vÎŸdri‘%[Q\Å$6\ì8t¨\çM\ê1\ÔT˜Á¥=)V!\Ò>£@–WÀ\î53Ä\Ô\ÔfÁS\Í+u\"·Ö¬n$ò\ã¸_3û­Áıjğ60k\"}&\Şq\Ìcp\èqPFn4ü¨%\â›’)\\§½€\ZuU‚a\"\î \ÔÛ©\ÜÉ«\nO&“ÒµA$øn\0‘!\áñRU!)/“VUòhE4KG€\Ò\Ó\éRD£snjjd° ô¢ŠQE\0S[v\ÖÛ\Ø\ã5š¬\í¸(Û¿PS\Ó#½+ˆ]N\á¾\Ğb\Üvª>µZ\Ş\ÖK¹6£_\ã`q\Å>[\é$’\êFP¸¶\ì\İô\Ï5 ³Z\ÙY±„\îU=3\É&§v+–­\Ñb\Ë\\\áN9=jZ­mqùuo¼Á<ƒ\éV7¨\ê\ÃóªC\n^&¤¦\È2†˜\rZx\éLZx¤0¯<ñµ¹µÖ£¹\\\â\ác\î¸\èu\Ëxò\Ú4S\ÌR€O `Gó\Å8\î8x\ç}İ¹epøúğQ]x¯<ğuö5¤F Q\Ğ\ã‘^‡D·#Œz\çµ[pf]œo-º’¼#]	\éYú°etÃ¨\ä\éHFwÛ¡¾\Ò\á¹\Îö,¹\ìÃ·çšŠ\é\ß\Ï0U³€\áF\ã\Ğş4—ñ\Æúdñ¢\â\r\ë)d\êA\çƒ\ìsTüMyöm5\áòy/Àş P·)q¨\İ$\Â\ê\ãI1\Ü2zd\çõ‡×š¹p\ä)ùx#\"©ôĞ´E0nœT@ñšq8\Å&8\éŞ˜“:ı9ZX*:Ö½…°3,\Ã\Ôğ+\'\Ã\Ï\æ@ bk|/—t®:•„Å±\ĞX‘\ã\Ğş•¡¬\Ûw\é\ÎsWĞŒqY™²\ä}*qÒ Œü¢§Q\ÅLp¸ t§PH€bœ))iˆZcS»S_¥*\Ê\Ù8¦\0ZaV–\åQ\Â÷44!Á«J>^9iM‰fŒ\ÒfŠdˆi¤\âœzSZCíƒš‚V\ÊäŠ†EW“€h.#m—•_ºyÇ¥[ó@šÎ¦\ç\Ô\Ğ7—d¹B„’I\ëP‚3OWÀ -m‡±\äúÕ‹g$sUs“\ÅKsš£Ah\'|\nz.\ï˜şT\ÌY$#©i¨0>´\êh–QE15\Ü\"3±@\É4\ãTuR\ë§\È\È3ŒdzŒ\Ò\Ô\n7š¬\ÅJÃ„¡\Æjƒ\\—U}\Ù\Èšµ§Yı©\Û\Î\Î\Õ\ì;úV”–„‰V0k€\àq\ì*lØ­s3\ì²²\ÈTù[8²\ÏJB† ‚¿Z\è·(aĞŠGE‘p\êz\Z,2-­¶”¸…A’BCõü3T˜(f­»<\åI®\ÔR |¤•(§a‰H\ßt\Ò\Ò•@1iâ˜½qO€+3\ÄV‚û@»„‚N\ÍËU\ä*Ó €Ad hò\Z\ïìº­” ‰F\ìÇk\×z€GJñ¹\í¥¶m¥1m/—·?7Œş•\ë\ZU\Ç\Úô«[ù\é“õ\ÅS*E³÷MB\Ë\æ! ‘\ÍJ\Ü\Ôdüø@H#œv5$œ½ğ[->E\È\Âîˆ«\Óó)Ç·5\Ëx²úY#‚\Î\ã\Î9\È\Â\àNùük¢ñ]¹+˜Áh\æõ)\ÎAüO\Ç_\Éæ½«±D6¸”$\ëø\Õ\ÅjZ9\İFEÜ±¨#f;ñœzVq9«WÒ‰/&~>gc\ÇNµH·Z\Ù\r\àâŸ*>¤g­J§q\äf™\'G\á‡ºdñŠ\ì7B\ê;\×\á§+z\ë\ë\ç]ü1\Ë5\Ï=Î¸lOe6\è‡<ƒƒZ‘0\â±P43\riA\'³H›€3V”\äVr?\0Š¹ú\Ñs\"\Ïju0iù¦@¸¢“4f…\íLñO\Í1úSBS´\\ı\Å\â-\ë3Ÿ•}ñ[÷u«.-)%\\8\Ï\'¨¤o‘5¶¹f\Ñ\àH£pzVŒz»t¡¬9ü5	”\É\Èq\Ó\Z[}#Pº°…;ŒYĞ‹ØÊ¤1‘ÿ\0×¬§mR\Â`@\ç\êAiq\ZP$Ò‹È/´&}hó\Ó=+®Œ‘2\ç¡\Ç¦7Ch%X\ß\ì†‡Ÿ\ëHşTƒ­gyª\ÄƒR4X9lJQ{Tf0A\äSŠñš¯&T\îv\Æ)\r\"C¹5—óŒ\Õ\Ö\"cSœ½§\Ã\Ü\ÊŒ.y¤ZZjkÛ’\è¤\ç8«ñ U­£\Ë}8«À\08ıh1“4\ŞH\ì:Õ•LIb4\ÇsOªHÅ±h¢Š	\n)3\Í.h\0=iª\èU”2‘‚zu%\028\Ò%\Û\Z*E¬»\ë\ëKy\Ì*dF~ğ>£½kV­b±\ÊeQÄ‡\'\ëI5¾ ’\Ü$\"i†\Ş	ÀŸJÚ®kM¶ó®#C \'ñ®“­$*G¨¡%\Ê\ê*n\à¶\É \r\é\×ùV©§\\\ÜŞ´–ó(9_~”\Û¥¢Š)û\Ô\êhûÆœ(´QE\0y‹-Ÿ‰\åeû³(—=óŸ\ä:\ì<#t&Ğ£¼LW\é\Îk\ÇÖ¬\×67\n¹­zõ\Èşf\\1š\îÕ³÷lUt)\ê®v˜,yz\nl\Ò£W’qJ“;A\Ï\0U9\Í)#\î\çjã­I%yl\ã\ŞDœ	A8Ï¡¯\'\Õk]N\æY	;‚A9\Ï\çÖ½n\î_!œU\ã¾•\å^\"¸C\"*\0û‰cŸ½Àü;\ÕCr\Ñ\Ç\ÌArG­BN*G\ë\êj\"x­Ğƒ ‘\Í>&;º\Ô§Å’Â˜/††\ë\ÙqŠô;%5oÂ¸\r¡\î\îÆ½\É1\Zñ\\ó\Ü\ê‡\Â>Xr:\Ôh\Æ2«\æ0G*a:VCN\ä\ĞJ«±¿½b¬\à\Õøe\È	\Ä\ÖG©Cf©G%XW \ÆH›4¹¦n½.i’;4\Ö\ïKšB3@\Ş=İ©bˆ/jœ%<(\r²\"€¯J‰¡5km3m0L¨«€GcÚ­G.>\\R\\S|¼)rSR©W@G½V{œ!\ãµL–¿\"‹‚m_\Ùò\ÄX«o\Éû´\åŠq‚cÚ´÷\æ\Ã\0Qr¹Ùui{)X‡sŒš‚{B\"(\ì\Í\Æ2\Ç9­ö*³fd˜@\ã&cÁ§$Q¨U\ÎzV½¼;W\áN*\ÌKŠ‘\ÊD±\Æ=\êhWsn#Q1,Á\ï*\â(¯oZh\ÂL\\€2x ‚2:W\âKf\Âgc’9c\n½¡\ê»<»9ˆCN\æ\\\Ëc£¢ô€ƒ\È9\ÔZ(\íI@RŠ°¥\ÄM‹•nµ\Îx£\Å\é \í‚\Z{§\0ı\Ñõ®O\ë\Ïr.Dˆ}\Ô\Û\Æj”—-ŞŸ¢A$—3,c8\Ç\æ~3ø\×\r­x\ÃP½”\r0M–cû\Î}Mqš¯ˆµ\ë£5\ÔÅ¤<\0>\è\ì;Vÿ\0€¯º\Üi6	d`¤úúÂ¯\Ùò­F‘\Õhš¸ò-Ö·ª\Èw.|ˆ›ş\ß\ĞWX«\Z(P£×Ÿ\çF\ã·75‹eXÑ£½w¦fGœÓ‡Ji?1§P1h£µ\ãq6…+ÿ\0L~x®C\Â&\ß_EcÄ€©\Éõ¯A\Õ-¾Ù¥\Ş@K\ÂÀ|qúŠò+7{kûY¿Š97¯^j–Å­b¹}°‘	õªñ\ÆcŒ36	\ä\ãÚ£‚o¶¸x\Î\è‰\ÜÄn”­(šñ¡\ròÆ¸bqREŠ·ÀK‹pm\Ç2\Ù{š\á|KnŸf½œˆ\Ó\å!q‚Xp?+»\\Ì\Ê1¼”Ï°\ë\Åp^\'ó`Ó§%¿u4»\0ë?0‡ô§©HóòãŠ¬çµpÆ¾fXw#­Qnµ\ÒT“»•3=¤Fk”T’qI‚Õ¶‡–\"\ìƒù\×kd¸rMsZ\\J¸85\ÖZ¦W4÷:ú•sô¤hóÒœŠŠ’ngMI8\æ¡FhŸ¥j<`Š¥<)™fA«jı9¬Xİ£|\Å_Šl\ãš(š\0÷\ÍHŠ¬\rJ®:S¹“D\à\æŞ£SR)\â‚\ZN\Å4sN¦!\r%;\ZFFi3´sRcÚ˜ËÔ€LƒÒšN)‡ \Ó	&‹•aI\Ïz21LÁ\Í\Ô\î;\nM A”\åCŞ£š\àb›»oAš‘¸Z–\ÚŸ2Q\Ïğ\ĞCc\í\áØ»›\ï‘Ïµdx›R\Î\Ã\Éó6\É&	\äğ¹ş§Š­\ãe´{;s…%2o\ãû£úr+‹\×|Fº²\Ç>Í¾b.\ä\ê3ıM;É\Ô\ã_ÀÀc\Ì~y\Ï9şµr[\è\éaAóñ¸©\É?şª\å!\Ô\ÚkˆVF,D€d\0\Ï5n9\ÑõÀ’z\Õ(˜´vÛ·Z”ÁY™Q[\Ëœnl\ã\ç5\ÛZFa´†20U\0?Z\ãü)£\Ïq*_\Ü)X#bĞ®~û­ô\æ»nzTš\ÇmBŠ=+×¼g¥h,\ĞK!–\ïnD1Œşg ¦•\Ë7\å–8#i%uD^K1ÀÀx\â4şe¶—\Z\ÌJ‘\ç¶p?\İ\ë×¼]©kÍ¶YvÀü° \Âş>µÎ»\ÔŠ\Ö4ûj\ëS¸º\Ë4\Ò\âf\æª4\ÌÇ’Hú\Ò\È\æšO+d»\0\ÙpúU­#R“N¿‚\ê3‡‰\Ã/¥T=*\"J6E\r]X.}¦_Çª\é^\Ä\0Y%A\Î\Ó\Ü¥NW&¼À~,\ZE\Ë\Ú\Ş3Iqœ\Ë6ş÷Ók\Ø1¼B¥H\È9\ë\\“‹L²\åè¢‘™}\êQI\'(p\ëA8\ÍzŞ€ô=k\Çõˆ±{\Ül•‚ı	\Èşu\ë\ìB‚OA^g\ã(U5\Ã&6™”1>¸\âœJ\Øønqÿ\0Õ´ª£pS¸\ç&¥´ƒr4»|\ì]\ÇC\É\éùV….šM;\ì¸ùb““œ\ätşµ\ÓıÓ€}Oÿ\0^“\ÜV\"VeDa\å$lK’[?S\\WŒW\ìVV¬˜W\É9?{\å\0Š\í4ödŒ\à1?Q\\g°–ñFÿ\0<Š]Aô !N;‚<İ†c!\Î‚û˜õª-÷«Bñ· cT|š\Î<š\é·<3jn/\Ë\à•A\Ôz\Ö \ä\â»\ß\Ù}›OÀ	%;\ã83vE\ÒWfı”AJƒ\é]\r¸ÂŠÈ¶‹q[W+z\'\"—m9¥HW½W +Q2g9«{iŒƒ­!¦gI\0 \Ô*Z2\éZ,™â¢’!ŠE©\rŠ`F3V\Ñ\Æ=\ë0¡Œ\är*h¦\Íjæš¿¤Wªk\'\"I\Í;™8—\Ğ\æŸUc“jÊ°4\Ó3jÃ¨£©¥¦!1IŠuF¨\Ìu«4„P;•L$(Œ\Ô\äSzP;ŒÛH\r<\Ó\àR\è\×Ì—‹üê¦¥\âm+R¶µ¸Â¬\ÊX\ÈƒœûVßŠF™\âC\îhÔ\Ù\ïõ®#\ÆZ\É\Ôõy\İ\Â&QF{J¨£92\ê_lñ\r\ÌbUx\â\Â&Ó\0\çõ\ÍsSL~\Í©\ÉUÁ‰¢\êbn99ş.OJ®ˆ³·\ß²Fd°¬²LJX€[\Üqš\Ø\Ó\"\ê\\e\É\Î\Ğ21\é\ïÒ¨é–—O%¹skİ™\Üv\Çs\í]\ï‡ş\Åo<piZg\Únù®g9>ùT\É\Ø,jiºn£ªm’ñ\æŠ\à##\ßò®ª`±¶ a#yf>É©\"y`JT¾9*0+\Ê|\âó¨\\6“c#-´,VgV\âVôú\n˜\Æì´‹¾+øˆ]g°ÑŠ”e\Ún²A÷\Ûş5\çJ\Ì\Å\ä%™¹%¹$\ÔM Á¢.y\ç5\Ñ¨Œ‘\ä¨\Ù\Í34•W\ÅÈ¤ó):\ÓH\â.OzBr:\ÔfŒ\ĞÕŒm‘]V“\ã\í_J°[XeC\Z’@‘wc\Ø{W%FjZLg\ÔôQErˆ^ÆD¿tzA@¤,*^\Õ\Z\ä)\'­3…\äı\Õ5\Çx\â\Ïu…\Ùp†?Q‘ü«­”\î\Â0ü…eø¢\Û\íz4ÀrĞ©”c\Ûÿ\0­š\ã\ç\'\à»\Ï\'VÈ’\Ãò0p?\n\í\áEtg\Æü\Ø\Çjó\Ü?@\ç\ÚNqÁ¯OTx\n8R {”\äTˆ\ä_$ÂŠ>A&\ÏOóš\àüv\ÎÓ‚Yœ÷(\ÃùWw!m\ÌFG\ÏÈ®7Æ“tö¶T$Š)~U\ë\ï\ËQÄ-€¶\ÇC¸q×ŒUŒ\Ô\×\r‚\Ğb Q“À?J\é]\Ò\íZóPŠ%RÀ°İÂ½N\Ò ¸\0qü«šğ¶öX>\Ó/ú\ÙG\İ\Ç*+°µŒ\ã>µ…G©\Ñ\Ù\áAÁ­(\ëÓ õª±§«‘Œ\â±c‘aiâš¢)™±vƒ\Å5—i\â”\Ğ\"» \ÆGZ–¬²ñ\ÅD\ËI¢“*¼`õU\â(rµ¢\ÃÚ¢t\ÏAAjET“\å\ëR¤õ\ÄrH¨\É+×ŠEZ\åôŸ­^ŠPÃ“X¡ªT¹(y4È”.nü\Ötw9š´’ƒTd\ãb\ÅÀ\Ô C‰£5nh\ß@4\ÓKœ\ÓY€^i\\\'ğ¬øŠ\ßF0Fò,¤`;\Õ\Í[Y´\Ò,\Ú\â\å\Æ\Ñ\Ñwr\Ç\ĞW‰\êš\İÖ«ª=\İ\Ï œ \ì\àV\ÃcOPÔ¥»\Õñ\Û\æ–M\Ç“Ú³õ-²\Ü3†^s\ÍGÀ zÔ²$,¹Vb¼\ä­¹R!¢º·˜FX9QÁSœV\å­ÅŸ¡©\æjRJ†2Ã”AódzqPË \ÚÁ£Zj2L\É\ç;.\Ï\ï\0z\È\Óm¡i&-°÷+=†x©dX\Ø\Ğ\ìöq&¯x–öıv—~{\Óñ¯O\ÑÆ™Ÿ•¦mò”ó€z÷\É=Mrº†#—l\Ó\ÍÀ\0LpË}\Ïøz\×_¾\ÛJ°wò£‚\ŞY•;õŒ\Ø\Î\Çúÿ\0ö6€öñ>Û»ÀcŒ¡ˆş\\}k\ÄYò0I$VÏ‰õ»R{\é\ÆV%\î¦r?\Z\çòI\æºa\"‡M4„óI»¬C‰ \Z:óI@—¨¦R\ä\Ğ!J\æ“\ëK’h#\"€¶›Šp¤\ãÒ†3\êj( \×ˆ\åûŸ1jI?ÕšM\0<S0I<ñO¤^8¤1Š\Ê\ÌG@\0¨. 3[K\0´Š\Ã\èx© m\Ê\Ç|\íü\é\ë\Ë\ã\êhÆˆx.ˆ;w+‘øƒ^·g8¹Ó’\à6w \É÷\ï^w¯iR§ˆî£‰N\ÍûòF\0gúÖ¥ŸŠm´­-l	&ûÀ\àu\Î+F®t{9I]f¢²y|\'lªTŒô#<ƒÇ¥y\ï‰o\í\ã°y¤iV\àI#\Æ1‘¹‰\ä\Û\0t©\î¾\"\É\"²Eo¯¯&¢\Ğ YÓ®¯\î¡,–\ç®\0\ÚNy­Ë«±i]s\Í\×ú˜Ë±\Æ\08\ÎN?™®³IğªÚ‘5\Ö$¹\ãhS\Â}}Mki6\";4\Ô<¬¹$‘\í[Á‚Xı\î\Üt§)\Üq¦–£a‡\n \nÔ‚<P\ÃÈ«\éfS\Ğtk\ÅZ‰j$Z8¤KdÀt§Š‘N\ÅaG4‚—\\SY§”´]”ŠˆŒsW6ƒP\É\"“+²f x*\É\Í\â‘w(´=‡Za\Çš¼ÉšaLö\ÅR*)t\î~•:]0?JVOj‰”f\î\\[\ì“R‹\Ô=\ëVm\Ø±õ\Ùt»’¬\Ê\ËAÁÖ¬\\‹s±{\Ô\î\Ê>¦\\§÷ÁÏ¡¯$¼¹ü\×·\ÕÉ¦‹™×¤\Ïÿ\0}VÊ‘4O¢\ç\Õm-\"/5\Äh]\Ì+”\Õş\"\é¶ÑºÙ—¸—(>\æ¼x\Ì\íÕ‰úšPüU*h9\âjj\Ú\Õ\î·vn/%\Ü\ã\î€0{\n£»\Ì¼D94gk†­RH–\îY‚\à‚\éEh#¸&<‚zs\È\ëX\Í\×#½X‚rƒ÷©’uWWR\êQ\ÛD\ê6ZE\å\ÇU§Ü“ı+sCğüº‘Š_\İÀ¤ŸŸq\Ø\0}»\×kz\Ã²a\ãuú~•\Ü\è\Z\â\ŞD¡\ØFûz©\Åe$ú\Z\Â\nZöŸ§\Ûi\ĞaŒ¨\ÎY\É\Éc\\¿\Ä\İJ;O\r%“Hw\İ\È1ü#’­{ùUp“ß“Y\Zök\â[±qu4\Ñ\\\n6chÂ¢1³+\Ø;E((A\\€GñL]\ÌHš\îo~\İ$G\ìW)pÜŒ»Iük‘¿\Ò5\r1ÿ\0\Òm%„dŒ²?>õ½\Ét\Ú(’sM§O4\ÚfMXUcŠ^ôÁÖ\ØĞ„:—&£É¥üi&h™š3@+L\'œRğh\ê:CKA®1\rõmô¨\æ§¸~•Z6\Ïj\0›µ!;W>is\Å6F	;É¤8\ê\ìs:§‰“UŒn.\ß1\äMsŸğŸ\Ş ^¿À*õ\ê­\ÂH’(*À}\ëÍ¯O“q$yûŒTVŠ\'©\ZPŒn\Ñ\Ñj>(¸º\Ş\Îûœ€\0q\\\ák©Ê -$€|ö«ºfwªÈ¥·Ew#ùWs¥hv\Ú\\! P\ÎG\Ï#ujnI!J¥•‘\Íi¾gÌº8\Ç#có5\İ\è\Ö\é\rµÅ·–Rª ‘\é\Û4‚,Ÿ†*{L%\Ê1U*~Sò\çƒYJM˜É¶dZÚ‹]\ÖÄœ\ÂJsúUô¡=\ÅY¾´û>¡\æ!]’¤`ƒ‘õ\í\åB\ì$  º\ã v©ô\ÓÚ¬ª`f’4\ÍN\éŠd¶1EOÈ¦\ÍJ”\Ù\"ŒS\Ç\"\Zu\r#(\íJh ´\Ú¢\à:šÜŠ\\ñH}©Pz\Ó6ñR‘L\"Š#\Û\ïHS&)¬qI¡2óPI…«x\æ©\ÊÙ¤Z+Á9¬]tì›¾¿\ê\ÛùV\ØÒ±üEì›Hÿ\0V\İ~•QÜ·±\ã¤bŠq-2º\Î\'¸\áJ)½\éE1iÀs\ëQƒS G­*H$t¦µ³V\n\ã>\æ¡u œqÖ€°©!I7Á\â´,oš	–H\Ûi\Ï \Öp\nHù€\Í;aLã§¨ ³¹\ê:>ª·Q)†­\È\ä\' \ã\'¡¯%\Ó/\Ş\Òuec\Ï\Íwö\Z’\\\Û$›†\áÁ\ïR\Ñ\èÓšš:§$\ã¡ïŠšM—c”+¡\êd~µ›¡Ÿp\ìFjĞ“\'¥q05/\é—ñHö{­® òŸ¨\í^mªi—:M\ëZ\İÅ²A\Ğöa\ê=k\ÚK•p\Ê9ê¦¹£Á\â=5¢‘vÎ€´N\0\È>ŸCMÔ§us\ÄAæŸ*[»)\ì.\Ş\â&T8*G?Z‹ª8šiÙ‰KŠBOµ AE!¢€še-\0}QIE\È =\rQ„°÷\íW«.\æ\î+B\Û\ÏÍ“… q‹nÈ·,ñB»¥uQ\îkÿ\0ZYbh\áRñ¸÷¬«ûù.˜»c# ôª\ÊÁ‡\\\Õ$z°©Y\È\Î\Õf¸[wx7\Ç\0V•¤›“qw$œ\á½k°*:\Ó6a‹.3\î*µGL\ÕÕ‘n\Ò\Ù\"@ª8ªø@@\ãéš£k*—¿qZQûVOsI§¨ó\íO\áN;úTŠÖ¤U\íI\ØK]Y \áÔƒœ\ï\Æq•ñ‡iU~v\Æ\ãëŠ™#T›y@A\áH5(‹É“Á\\\ç\æ#¯¥\"nĞˆ”üS¶OzÁ¦+¢ÖŒP)Â›ÒŒš	E <\Ò\ĞM\Å)4™ aKšLıi3H\È\ÃÖ—­%0£cO\ÍE#q\Å&R ‘€âª°\'š’S\Í35&ˆhÂ©®{\ÄLNŸ8Ñ¿•t0\ny®k[fx™9ö«\å\Ú\èò ŠabxŒLõS]‡Z§) -H¢Ì‘øÈ§F\ÛH4\Ô#½=—ö h²~aÁ¨\Üd\çi>¸\ïQ\Ç!Z°\Ã{ûPQ‡<¯Lgƒ\å\Çµ31Á\ãŞ”¶\î¼§˜X„0A\Æ+oH¾1¶\Öb\Ö+p\Ïj|o´u¬]9¸;£\Ğ-o\ÛsfN6d{\×E¾dJ\ê{uõ¯1¶¿‘B“\È\×\èzºÈ¦a…\àgŞ¤ô#UT:\ÙL\ç¥>\ÖoŸh=j¶p\Ä	¦Àû.½)\ÇB·‰ü;·™T½Qò¿M\ã\Ğ×’\Í\Ã+F\êU”\àƒ\Ø×º\Èûˆ\Éükñ\æŒw.©åœ€ö?3–­+«œ\'jJR1ITp…R\ĞQKI@TQEAy3Al\Ò(Z\åò\émm\Ù\É\ç(õ5\Æ]\\5ÄŒ\Ì\Çq9\ëSj\Ó\Ëó;g\':Vs±„O\rIEs\rF)€²¶+\éN\í@Ö‡XğI\ïOQŠpb9‘K#C‚:\äõ­+YDŠ	\à v¬Á\Ğ\ZzH\Ñ\èpy…L£\ÔÊ¤.‚>y©€\âª[H\Ín3Š¶„\àVG\Üp9\Çô©v¢\Ş\îg*r\ZmKl\Åe*1Œg\ïEˆc@;y\ëŞ˜\İi»Ïy\á”6=)ı@ \Õ(\éH\0ñÒ€‡­:šz\Ğ!3ŠM\Ô56¡Ù¤&›A\éIŒ\\\Ò¦\æ˜I\Í\0?u½\ê\"Æ±\Å+\Ä\Ì\Ãš«+\Ò;\Z®ô„\î4”ª(4X²´\ï\Ôf±.£2nµg98õª\ÒF¢&#¨H´y~¹m\å^õ¬¦\\7×š\éüF \Ìkœp@÷®¨\ìsU£©§/LS­>?¼jÌ†•\Ø\Øõ§©8\ç‘Hy^}h_ºi\0ò«\ÔQ\Ê\ÈFQHN´œJ\0y\"Dÿ\0J`¤sÇµ,_1lõ\Å<?\Z`09E(\î1M¥\Ç~ô€r»#\ç9\Õz\Ş\å\ám\è\ä\n\ÏD\r’~µ*9SŒg¥¨Ë•Ş•­}¦W#x\à\äÖš\ÌËƒ\ÏÖ¼ö\Ò\âH™]O;±Òºx&rñ¶y5›\Ğõ¨Ï‹1Â‚pqP\ßZ¥ö=£\à‰PÇ±ü\éT—T\'ºŠxb®1Ú¨–»…à¹’9‡F*A¨k¥ñ\Äj¾\'”\èŒ~¸\Çô®k¡\ÅR<ªŠ\ÒŠ;\ÑT@RR\Ò\Ò`ÿ\Ù','ATPL00050','sandhya.jfif','image/jpeg'),('bc188013-d5f9-44ea-9244-3f926f2f8e32',_binary 'ÿ\Øÿ\Û\0„\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342			\r\r2!!22222222222222222222222222222222222222222222222222ÿÀ\0\Ì\Ì\"\0ÿ\Ä¢\0\0\0\0\0\0\0\0\0\0	\n\0\0\0}\0!1AQa\"q2‘¡#B±ÁR\Ñğ$3br‚	\n\Z%&\'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyzƒ„…†‡ˆ‰Š’“”•–—˜™š¢£¤¥¦§¨©ª²³´µ¶·¸¹º\Â\Ã\Ä\Å\Æ\Ç\È\É\Ê\Ò\Ó\Ô\Õ\Ö\×\Ø\Ù\Ú\á\â\ã\ä\å\æ\ç\è\é\êñòóôõö÷øùú\0\0\0\0\0\0\0	\n\0\0w\0!1AQaq\"2B‘¡±Á	#3Rğbr\Ñ\n$4\á%ñ\Z&\'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz‚ƒ„…†‡ˆ‰Š’“”•–—˜™š¢£¤¥¦§¨©ª²³´µ¶·¸¹º\Â\Ã\Ä\Å\Æ\Ç\È\É\Ê\Ò\Ó\Ô\Õ\Ö\×\Ø\Ù\Ú\â\ã\ä\å\æ\ç\è\é\êòóôõö÷øùúÿ\Ú\0\0\0?\0õŠQIJ*@(¢Š\0Z(¢€\n(¢€\n(¢€\n(¢€\n(¢€\nZJZ\0(¢’€\n( \ĞœSI\ç„œ\àg5FûU³Ó‘\ÄÁXtA\É4|`^\Õ“¤C\çtOwlWªø\âW\ÖÁYW w\àšä®µi\îÜ™eg\ÎO\'4\Ô[\ê7\Ş\'±±`\Å\Ã\Ó6\à~5\Ï^ø\Ú\ëyò#œ1\Íp]; ,r{zTBf\Èd\ÆŞ¦´TÀ\ën<a*üóÈ¸ôÂŠ ú\Õ\í\Ê\"™İs÷¿*Çv\ÈÁS\ÄUöyc\Ã+#œü¹úöªPHD{#HQò¬}NÕ‹k·`©\'Ì¹À\Îx_Â ‘’“ ıÀ\ë\×\è\İû\Ô\Â?/>Z„ü\Ê ûb®]\İqjÉ²U(\Ä$pG§ÿ\0^¶mõ™(<.~e+œ~u\Ê\Ã\æV`‡ª±\È\'Şµš?,„F1®‰Ÿ‘ôõ¥Ê…sº³Õ¢~‘±Á<\n\ÛûDMe‘GuyË†db	\È(s\Ğ{Ö«^\Èñ+\ÆIqŸ\ç\×ò¨p\Zg{\ÕH<0\ÍI‘\ë\\=®«4o´6\à„v\í[\Ñëˆ•¤S\ÉÁ p3ÿ\0\ê©qhfØ¥\ëT \Ô`˜|¹‘’8ô«y\ã5 ;4Rh¦\ÑIšZ\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0Œt¥ƒ¥(¤0¢Š(´QE\0QE\0QE\0QE\0QE\n(¢€\n(¢G,«\Z’{T7÷öúm¹\âB‹\Û$Ÿjóx½\ïY ¶Ü«v\ê~´Ò¸Í½w\Å\â\ÚW‚\ÖL\È\ç\ë\\¡¬]\Ü\Èd’RÅPš\ç|¹lŸsúUC+7­k ,<\ÎP’\äœóPœ±å©œ\äsH]B\áz÷\'½]„)¹\'Úƒ¸d\ã§ZŒ“\Ó4\ä\ç‘L	W8\çB\rZ\ä\èÊ®¤c“ƒQE:©\0€G¸«Ë“ \\ú\Z,œWq<k\Ô{•x\àg½I\äE·Í³›\å\ì½ÿ\0:\ÏEHĞ‚r\ã\æ\à›rVpOJ	5!‘“ø¾b \ã—‘FñyĞ‘‘€?½_\×œó¶TI \È<0\Í<]˜\Î	\ìE+\0ûyğF\æÃ¯B;Š\ÑKÆA(;ò\0\ãµf³y6\Şqòô©!vÙ·\×\Å\0iA)…Œ‰’\r\Çù\æµã™¤òs€x°¡1›¨\ÕÙ’ùX¯P}kcM‘m\î$Yòñ€z{œŸ­&€Ò…¦3Ã„d+»\Ó\ëkoK½i WÁ\ÚO=+ŸÓ¤A9‹.\Ñ-•\ã®9\ïÒ¯Y…‘r\ïò3ò;Vrˆ\\ê•§uª6²8UFy\ïWãµŞ–Ri\\Š(¦EPEPEPEPEPEPEPc¥(¦Šp¤0¢Š(´QE\0QE\0QE\0QE\0QE\n( \Ğ\0x¬­c^·\Ò`;™\Z\ãH\É\äûı*/k\é6‡\çS3p«^Q«j\Íwvò\È\í+|\ÍU¶À·­\ë³jSe·\\\0xAXRÜ†À\éÓ¾j´“$÷\Æ\0¨w15º€•\äcÛ¯J`¯`~¢“9¤\ÚI\äqLC²v\äŠlÒ” Âb˜vœ¥9T}?\ZLaA8Ç½H¬ \Ñ`+=\×ó«\0 †x\â¡ x\Í^·X•v¡\ã9\æ2õ¬‘ª\èÏL\ç\ëVeû;¡gD8Á\ÉY$D;# v¡{ƒ\ælX·JGğ¶1R\0ñ\ÆNS\æSıŞ•W\ÊØ¸W\ÆOC\Í,\Í6\î\Ì7f–(™\È\'•\êq\éEÆ\Ô,™€zƒü\ÅO®¤\ß0ôô©\í-%pZE\îTi«j¾\Î[ Û¥+¢\ä*\Ì“·c| ½*ú\Ëò9©‘pÇ§\â?)–\È\ÒF<\Ç\nö–©\ã¸\éS\Ü\Æ\É!‰U™Qv.\ŞÏ­&\Å}>ù s—8S¿\å=\È8üñ[\Ò\ê\n¬\n…PN\â~;W/övV\Ø\àprG&­Œ,C\åÜÀ\Ğ\É:ûiæ¹€\Èp£³O°Ô˜8YÁaƒŸZ\Í\Òei63³qqşrkP\ÚD¬¬©\ÈLŒ|Vm\r3n–e’GC\ÍJ\\ \Ë^\ÕË¬\Ó\Ú\Ü\í<‚~`¾8…mZ\ÜP—z…º\ç\Ğ\ÔX¤h†dSª¸bˆ\Çcı*d`\Ã\"•ÀuQLŠ( Š( Š( Š( Š( Š( …(¤£­!‹EP!h¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢ŠKT\Ô`\Ò\ì\Ú\æá°ª8å «7Z[I<\Ìd’k\È<M\âÕ®N]¼•\áğ½4®oY›Q¸–Y˜:\àzV¹<g\"‰%,O5\îq]1VCNiø\æ\np>ƒ4\Ä.8ºN>c\ïOI\ç\"°/ZD#,IsŠ\\cµ;pQœ÷\ïM\È\ÆOS\ïLH$š•ŠgA’)À\Ğ«ò|\ß{\Ø\Ô\Ğ\ÊKO\Ê~EQ/ƒÉ§y§i€i¨·C\î)\n;\àT\×2\Æ-€…§b\Çn\ã\ê@¬¸¤”‘\ß&´¬™\î.AûÀrw3\×ùRc¤\Äü°q¢¶¬ôGÉ•`F1S\ØBòò8!F>Zİ´U$\Ğ~µŒ¤h‘Ÿˆ¶µ*FI|“ƒüâššXŞ®Fœ•\ç\é[›U»Æ¥\äq*9†\ÑAt\Ñû\Å\\Yˆ\È\ì>•^ğ1cŒm\Ør\Ütö²U•q9<õª’A\æÍ¿GôùŒ\ÜLK\Ût’RKlEMÿ\0‰\'­W·³“]w\Õs¸õ®†{.˜u\ÏC\ïô¦Y\Ú.]\Î\Ğ1œpz\éúÕ©b¦t±jH@\Zò\Ø\Ç8÷­ˆu$1\ä\0q¸zş¹®Rùü‹§X\Îp	«úmÊ´­)\á€ô\êOÚ¹66d”\Ï$¦E(aNGù\ïS[^‹YJ\ìWˆş~\ÕTLfUYœmÈ‘ù\Ç\àz‚\ã3<r„=Gÿ\0_úT´\ë#d\n‘•ö ‡„\ï#º\×;§\ê{%ÊŒ#¡\È\ë]22ÊŸ\ŞSŞ³jÅGWÂŸU\0òf\ÏO^*\Ğ9¡\0´QE1Q@Q@Q@Q@Q@ƒ‘O®\Ãò]\ÙÈ³H\Ï\"\å›\'·\Å!‹EP!h¢Š\0(¢Š\0(¢ŠQE\0(¬½P\ZT\Ì$T‘”ªqƒ´\Äx\Û\Äms3\Ø@Ø†\ä¯ñ°\ç³\È\Îù|Õ»ûŸ2W!òI\äû\Ökİ«¢²˜\É\ã4¡y¤\r=s\ÅX\nJ\å\à\Ò(\0‚zS³¸\ç \ì)ˆv\î6ƒH\ÒmP\0\ËSs‚)§®\Ô\Ğ!\'\çsŞ—;›¤eEšy\\-{ry n\É\ÜO\áHNiHÚ¹4\ÌNhĞ¥˜óK\ß\ìaiQr\Ù#\éH¦s\ÅhÚ–\r¹yÀ\çÚ¨¢ä‚=\ëgO€21“ª$ËŒN†\Ë\Í1¸À=ùâ¶ \ÜOC‘\ÏJ\Í\ÓWû¸\ï[qBÃqXI›5b\Äj\n?:c8\à\n0q\ÍXARC/=TS\ÄJ¸ sR*\ZyRhFHW#Ò¢š\"\Ñt<u­/.›±@?/Zh“šk•ƒJ¿ 9\n=º\Z£slE(\Äc Şº‹¨Y—	Ó¡¬{‹m’\ä8À\â­H—5e”\r¸\È\'\Ü\Ñ$\Í÷L\0\êÿ\0Z´\r·›€\ÊGRGSUnm\\‚K»UÌ…\ÊTŠ\à#\áH\Üx$\×S¢\ß\ÈAˆô^Œy\ãŞ¸É’H	¼b\ÇR{iA’Wƒ\ÏQJJ\àzP\Ú\êË\éM‰™\Êcó\â¨iš”WĞ’£k95}€,$\Ç\Ì8\ÍfÒŠ8\çÿ\0\×RSQE\0QE\0QE\0QE\0QEÁø6\ç²FXüññõ»^O ^mV\ÖM\ÛW\Ì\ns\èxşµ\ê\êsN{”:Š($‹EPEPEP0¢Š(\0\Î+\Î<q«—¡	\Ê÷¹ç·°¯CšAL\äô\ã5½‰õ9b·e 1\ÉS{\ÕE]‚9iŸ\æc\Ğ\Z¯\ß¤\åÍšUO^•Ğ†»L?*n\à£IŸÎ˜\0OZx\ãŠj(9\Æ)€´`7\æ…\ëŠ|1ü\ä\Ğ!\èX\Ü{\Ó9;Ô®Fj\"H v\Z\Ùw\0p(\àsùRH¤\0\ãSG\ì’x\è6j\ä\ï0A#’)64ˆ­\Ôy\ê?‡8®®\Â\ÏqD#•Q³\Ò÷\à\É=3\Åtšlb“AÀ>¢±œ\ãµ‰¢¹8`\Ö\ìI…•P†“=1WUFq+&\ÂLEQ\ÓÖ¦U\Å=ª@1AÀS±F)Àb11\Å\ê1@ˆ\Êg¯J¥=¨s\Åh\Òt¦X·\Ø6H¤š\Ûzp v­ˆSJ{\ZC9k\Ë|†qık›º†KYwFr§‚¾•\è’Û«Ÿ™k™\×4¶DgŒeq\éš\Ò,Múnª\Ös+«m`xôÏ½zŸ©-ôk³’W ò’:\ï^H\Ì\É!V]µ¹£\êòÅ˜|Í¨!}O¯Öœ£\Õz]¼»ŒˆFüGcV\Ô\äV%•È¸¸Kˆ\Û*É‚3\×\ßù\ÖÊ‘Ÿ¨\ÍfHú(¢˜Q@Q@Q@Q@+`\ê&V#\åV\Ï=øş•\ëö“	\í\ÒQ\Ñ\Ô\ZòKˆ¾Íª\ŞG¹+\Üñü\Åz?…\îMÖ‹\çî’‡ğ5S\×R™¹@ sEA\"\ÑE\0QE\0QE(¢‘ Fn½8‡J™²¿Jğ½FF’\âVf\É,z\nõ\Ï\Ş,:Q‹\Ò0Ï°Á¯Ÿss\ÍiMj2¸@§$\Ò;\ã¶>”\Ù=º\Zq\ÆOZ\Üd€Ó†=\ê1À§h@y\âÇ’I¦ôSŠn~´\\	b\ÉlûU‘\Âó\×K€*B\Øùºâ€°\Ò\Ù|w\êh,3M©ô\æ˜XœP\É\ä\n‘ œSqœU¤^G©ô¥q¤K_(\'’kcIµ,\Î\äğV³µ20\ë\Ğfº{+1\Z°\ævúVS‘¼bZ¶´	\ä‘\ØsùV°³(¡\Ô\r\ã­:\Ş\Ø\ì£?Ò´\Ò1·õÁ²£ùF9\Ïz™*;J«…\éÓŠh!±@§@\ê	Š\\R\Ñ@„¢–’€ŠAK@	ŒÑŠZ(¤J£ym\æ\Ä\èTG¢#(=©ˆò}n\ÆK[“¸w\ÈÀ\íY1\Ï\å¾\å$y¯Dñ6›\æ[³¨9=+\Í\ç_.V®zV\ĞwCgk ê¬Rm»÷8$`Ÿ\ÌW}¢HC¯ğúŸzñ½&é£ºŒnbT\às\ÆO\éù×§ør\ì\\X*7*\á”õÿ\0=¿\n\ÎJÌ“zŠlg()Ô‰\n(¢€\n(¢€\n(¢€\n(¢€<Ä–\ím\âI˜UI\ãº¿\Ü³\Ü\Û\äe7ÿ\0şª¡\ã«u‰m&\0eK\'\áÁª\Ş”¦°ñ\ÏH\ÏÓŒıj·‰G¢ŠZj: B\Ñ@¢Q@Q@Â£™\Äq3œp3ÖO‘©J\×p\Ëm\á	\\M(#\åŸ\0p^8\Ö>\×~m\á*cˆm,9\ÉÇ­pr¶3µ\ÒxŸ\Ë[ù–!¶4!T`t\0b¹I$\×D\Æ1 ™¦÷\ëNA\Î{U€õ9§\Æi?„Î€Tc4Às\03J‹¸T}Xf§sR\ÃGµF\í•ô3p<šcò\áqÒ€\Ãl@g’iª9¤f\ÜØ¥(‹1õ>•£m\0¨\Ç?J§mgu\é]&•fY\Ãd`x\êj$\ìošzVœ\0O˜V\íµ¸kNş”\Ëh\n&\Õ1­{[r‹\Ôõ®v\î\ÊnÈš\Ş-©Ÿj²\"ŒSğ1HÉ± c?Zp\ëKŠ\\S \Ò\Ğ¦ ¢—b€µ%:’	E´\0QE\0¢M\ïJ)‰•\ï-\Å\Ä„Fy/ˆlZ\Îù\Æ	¯b=+„ñµ€1™†=j¢\ìÀà¢‘•ƒ!Ã„×¢øJğ\ËzÏ¿*É–\İ\îA8úú×š©\ÃcœWC\á\Û\ß*U¢°\'ı\ß\â­&€õø\Ó\Ôu©j¬\ØV~X¬GCõj±DQLŠ( Š( Š( KÆ–†\çH•ÁÁÄŸ‡Cüÿ\0J\ä|;r-õ›i~	ö<W¤j‹+¸qŸ2&_Ò¼¢	÷\"\ÍĞz÷Q\ØhöD9Ÿ\ëTt\É\ÍÆ™k19/’}ñWE@P( AEPFhªó“÷jJ\äP2¤òK{tmaÜ®’¯`iú—m¤\Ü6B*¡\É\Å[5‰\0P\0¥dø›û\çfwp\íÖ…¸1¬M\æ\\»3nf9\'Ş±‰<Ö† X\Ê\Üçµ›\ÍuEY=½j@p¡q\Í3 \æ—<dõ4À\\Œ\â€wgƒ¥38§•À ¢\äTÀğaLQ´S³Š@Ì€úR\×Ör3@ı¨£qÉ«¡r)‘/˜şõ«il]•““\ÅKv4„n\ËZu©gI\ÇN‚»]6Å™T\"mQÁ$rj¾¢ˆ\Ø;®[\Üô®ª±+	J\æ\ï\İZµ²Ä cñ«qLU\ç¥KPb\Ø\n~) b)’-R\Ğ ¥¢Š…Q@ ¤4´b€E)”\0QE€—¥%/øS\Ö>¿l.tö\\ı+`Š¯r“½°#Ã®c1\\È‡­ƒWtiB]®[¸ÿ\0tœ\çSx\Ø\Ùj÷€\Øqú\Öu‹709\È\Çò­÷ˆ\Ù\í:4\Í&œ«!\İ$gc7«/ùgñ­`rõ®kÃ³oNFDŸ9>¯Œ7ò®’1„Ç¥aÔ\ÔQE1Q@Q@Q@gÂ¼›P±û§ul2rzc9şµ\ër¸^}\â¤\ë®Lyó#G\ç¦yÒˆ\îR:Ÿ\\,\Ú$*LyCùñúV\à®CÁw’\æzÁJ\ë…q1Ô´†–‚Š)	\æ€\Z\Ù\"£€dguÏ©§K‡¤¬Qa\Í9ùWñ¬OÈ‘ø~XÌ›„\Ç^y­µS‘É®+\Çó²\ÅJHP¤\ç\ÔĞ·\Êo¹”\àğ;•Lñ\ÍXœî•°=*³WR\Óó7µ+~”ƒ®)	$\Ó dÕ„^:Th=ªP1@\Çv÷¦“A8¥@X\ç†; \nLvõ§qR[\Âe“ZL¥–l\í\Ë8©ö®\ßB\ÑüµY\\v\ã5WD\ÒT€ò*\í\ì=ë²¶ƒj\0\0ùG5„¥}\"‰a„\"ıj\â\n…9©‡QY£6\îJ´ñLZ§uª\Ão¡¤q\ÑWüh\"ÆJ\×?ı®em›\ng®i°k\00I\\&s\ì4õ)Ñ†¥š\ÄşÜ·R\ì\çŞ­¦¥2]@\Ï\\\ä~t\É\åf•H_Fz0Á\èsÖ]ûˆô÷¤¥\ê*¸¸VPÀñÒ¤s‚{P$¢\ZZ\'z(\ïE \n\\û\nJ)ƒ>Â‚i( B\ÔRŒ­KMuÊš`-ø…MV\Ö`$ˆ© wÿ\0¯\\Å¡\Û&q]\ÏÄˆO\Ø\ì\å\Ã)Sô\"¸‹%\Ì\Ê:\ä[C\á\ê^“}”,Šy¬8ˆ+¬N\ëŒğ\î`šH°Š1´sÕ–C\Ï\â?•vct¬I{¢Š)’QE\0QE\0QE\0C(\ä}+ñµ¨Å•\Ğ\ÎC4L~¼\ä:\ì$\ê+\ÅĞ™|=9U\Übe“C\Ï\èM!œ\ï„n¼o\Él*üzŠô^O¤\Ë\äjÖ²†ÛµÔ’\İ\ÆÂ½\\UHl}- \éEI\"\Ós\Íp3Lp{ó@Ÿ{FB\à¤šdD\Íó\nv5#6ÿ\0•AÇ­fjµ¼\r\n¹÷\ä\nEE]\Ø}öµ°+\0¸óò©®Å—77Jdd{Npxö­J\Ö\Ö3´€{\Ö;\ÎÚÊ¬ˆù¹\Ï\éU\ît*JÇŸM\Ø\ç\ëPGZ\í52†Kbp<W e%OQ]•\Ìe\rQ’Oµ­ÖœMQ©€3K»=)¹\àúS”qHbûTŠ6Šj\ÔÔˆ2\ŞÔŠŠcG_J\èt=,\Í ,§bõ\â³ô\ëVeÛx\è\ZU˜Š5Œ`\äd+)Ï¡\Ñ\Ù\\½cl\0t­8×Œ~t\È\ã*px¬P¤\î*Œt©7*®\âqQ–À÷¨˜\â‚¸¼\Ú6¢\îü+\Zf’\àü\î\ÊÏ°­Cn®\Ø$ŠQj6œ~”\"´F¶)’\Ş`\'	5šö\ï\ØòÕª¹~u\×Il6|ñ+©íŠ­-‚¿1\Ô8ÜµW£¹Š@ÀüûG<õ\ãQ¥\ìÁC	ªı\à\Ö\ç¿\Ù>“E/ccªgiúŠÈ»ğöÑ»nğ=$}=ª¹‘J\Å;{£\"\â9\Ê>\àqœ\îşF¯¶¥>\Ìb\0\àH=}\ë$\Ø\É\ä,Fr§=¨«‘(ò\Ì2tö¸\Æ\ÏjL«#¥´½i!.F	\ë\éW ¹\Ü\Ñ\à\ç¨9úš\æ\í%xcB±_Ò¯XNB’Ã•\çõ¬\Ù&ú\Ün\0\Í[F\Íb[?ø`Y»úV\ÄD\0~4\îg%b^(¤£½£™\æƒL\0œ\ZMÔ™õ¨\Ş@(6iO#]e¥	 ›¿\í\Ä\Ş™±óD\èùô\ç¼\Â\Ë&N	\ÎGJö/Û‹Ÿ\ê\ã$À\Ä}@\Ïô¯\Óñö˜†x.?m\r¬UL\Ğv\ï¸xÜøû»³ù“ùW^¿\êø\í\\o‡U“\ì²(bÏº6\r\ÔLŒşu\×Ú¹{Tv\à‘“Xõ%–(¤µDQ@Q@Q@I\ĞU{˜Õ¤¶\í\ÒD+ùŠ±\'AMHg·ú4¡\\±¶{ƒ^µc8º³Šu \ãğ¯5Ö òµ\İN‡\Í.™<r3ık´ğ„şw‡\ãÿ\0¦n\é\×<fªCfø¥¤)jIùCô¨\0!g·5`ôªÁ·H ©¤\È0\n\æµÛœ<ŠŸ4Œp\0ö®g	1\à\0y®;P/<© oq¸“\Û<óC6¢®Ìˆt\ãp\Ù\Éf\êÇ°ö­\ÓWû¢´\í­#··TU¾jY#\rœ\ãh4®t6aI¸yšuP6\à\àg<qŠò\İFäŠ£\å\ÜzÆª\0ñƒŒŒ(ş*ó-R·-‘‚2O\ç[Rfu—2Â´\ì\àbŒ‚=)¸\é[\ã”g­H:óÒš:S”võ¤4<u\ë\Í[‚/3\0s\ÅEx+“\ë]‘§–T8§ª[±µ8\Ü\Ô\Ğôı›r£\ØúWak@\0*ª\ÄF1Ş¶£Œ\Î\İÙ¤´4ı¸\íOA\Å)©2¸\ß,bš\ÑgÒŸ¼\nC%1j7x\Å\'Ëœ\àƒH\ÓP?\Z§6«knHyW>™\ä\ĞU›.\àc’qMl€š\Ç]{\Îl[\Ù\ÜI\ÇR0?Z”\Ş\êDdZD¾\Í\'ø\n\Ê_\'hÀ\àSœõ«\"mST%­ \Æ;1ÿ\0\n…µËµ\\µ¢ş\rŠ,R‹4f…9U	-TŒĞ‚\rB|B¤\íxO±\ÍXŠ\î;‘¹AVh×ƒ´õÁ?Z±%Wqü\é\É\ê\r[\æ\ã„\ÉPÀ\0UøzUx\ã\0ƒ‘VÓŠv2‘\'jJ\\\Ó_˜\ÙA\Ã€h †\Şv–i\0*6\Õ#½N[š¯k‘\ÆH,2Xû÷§H\áy¤\ÂÚšPŠNNjŒ·j£q`\\“U\ï\ï\ngh\çŞ¹mBñ¥$cƒÁ\çª¦‘s¡mn<‡§\0\â§Z\ë,\ì<\×=€\Åq¾p.Oš3‘€O\ãQ\Íyóœ`b­@RG¦¨g¸Ã©\èkÇ–ms$K\Õ¨üÒ¶\ì59w*I#Ş•Í§›ªA,d2t\'#ƒ–jÒ±™\İ\é¬6öck+™œÇ“”#?¥o\Ù\ç\ì¸=‹Èš\Ç\Ób\ÚYr\ÇaL\î9=ÿ\0k\Ùû1A;˜\ä}k¤²\È\è)i ¥ª$(¢Š\0(¢Š\0(¢Š\0”†f\Ï¥§·\İ5\Zô¤3…ñ|\ro­\Å8%\Ä[Xc¸ÿ\0\"­ø\åT\ŞXŒ\áHdcı“üª_\Æ³-®\çË›iú0\Åbx:f‹\Ä(¬\ç#&s\×úU}’º)iJZ’B«¬l—sòº‚¡b¡œ‘†rjC~\Å,¤À\É\Çˆşü\ä\n\Ş*\'<˜\Ç+6D\ØÑ“\ÔpH¤mMØ¯!+0S”†H\êi—í‹¥FY©\êR#°.\í¼“H×¡–\ï¶Gl>^üW”\ë¥ZòUM¸\Üy<gŠ\ë<Y\â7ƒ}´\Ãy\à\í\àŠ\áH’v]\Ü\0:•­5a=Šl§$R úWdU\0\0z¬Ãœf·2hgŸJ’2Y¸\ÅF~b8­M2\ÔMp‰ŒŠM1»,\ÙY<“Â§øˆü«¹²²q€£·­gi–hÚ\ì|±Œj\é\íb\É\Ç€k	³£\á,ZÃµE^Q\Æ)ˆ1Š™Efc\'¨\áÀ¦3N9\ÅW—p(„w©\Ü_¤*s¸‘\ÔLœ9R~•s¡ó\Û&™¬bˆ\ïu+™Ù–\"!ŒXõ\Åf¾¥a§–pK±\ç-\É5Ÿ©-\ë¿9\Ø=*¤\Ãq¦\Í&ògH\É\Øz\çü\æ´QEKE¡<5¸go²F?xŠ‘<A¯\İÆ²+!Lğq\Óô®j\Éş\Èû¸\ç¨<Ö¥5«NVKw\äfDsƒ–8ü°ZÓ–&L|>1Ô¤•U2\ã”\ëzMNxDk¨[°V<c‚\ÇÚ¸\èô»‡¹\0C½J\"œó\ìy¯l[—NXn#W\ä0\È\ÍD\ÒBö2\\E¹\Ï\åD¢”9=ó\éZ\Z×‡¢\Í=H\Ù\ËÄ£‚;šÌ†o:0\ë\Ã/QQ¡\Ó	s+¬\Ê\Ê9&´¢<+\Â@ı1[gŠ†)\Zpœ\àÕ¥UxU¥PsH\0¤#š“ŠkcÉ¹œ~F\æ\\¯Z[ë¤…N[\Êj>\"Š6)ocÒ•®kšW(<óY3iK9$u=rj’\ë3»g\Ë\ãÖ´muCŸ8=\Í=Q«F{ø~ğbt\Æ}j\á\Ë\â~`0zœ\×giyo2ğW\ß®…V\0ŒS\çfló\Õ\ÓE›o—;•½x«+\Å\í´¨ƒ—R¿Pk®½³0‰Æ¹\é,O\Ûm#vù™<vR‘œ‘\Öoc¤¬\Ãø|\İkR\Åv\ÙB;\ìú\â¨2c\Ã\ê®0<˜½¿\ÄÖ¯üz\Å\ì T-\Ìú”´‚–¨¢Š(\0¢Š(\0¢Š(‡¡¨\ÅH\İ\rF)›\â;Qw\áû\Ô\ãr\Æ\\g\Ôs^oaqöK\ÛyÀ`\É0\çŒuÁı\rz\ÌÑ‰¢x›îºŠòˆÀş[ü¯•\ã±\ÕG±Hö\0sÏ¯4ú§¦\Î.´\ËYÁ\Îø•\åW*D„dKE\0U€\'œ\Ç#Ş©\ß¦_öN\êÑ‘sXú„‡z\"’L‡\Ëlğ@\ÇQI—\r\Êvù’h\ä|ù\Ï\' ¬\Ï\êƒJÓ›cf\æl•#·jÓ»‘mv\ä\ìU95\æú¥\ÌÚ¾¢\ÎAØ¹À\ÏAšpWgF\æiV¹—Ì™‹¹$³\×Ö¯\Ík¡\nZF\\ \Ï\n\Úş‚Ÿj\í¼8,H1ÿ\0×­Ã¦‹O:sóôÊ‚G«v:\æ\á‡\Î\Ü\çÚª8\Úïµ³¨Ã²vV`Ó’K°\ìOoó\ëY“£(\É\\qõi‘( À\Õx~\Ùv†?{®k™·\ä»\í\Ğ,)‘\É3z5©¥£\Â¦B2+z\Ù8\éYz@+Œc\ïVÕ¸ùGÒ¹\Ùsdê¢¥š£š\nX\ÅFñî©ºÑ¶\\Ï–\ÛwN*”\ÖyGĞµ¸R x3\Å2”\ÎvKIù\ãQŸN3Q§‚\ãkvX885[\È\Ø~Cõ‹³^kœ…ï‚¼öy-œG(\'*Ç†ƒs\á\İB\Øa\í–\\wC^›\æ0E \0*ùØ¬q>\Ñõ$º\ÔbX˜2\Æ\İr;×¥>£o³U?CX¯3€¼¥R–¼“\Î}MK“dû4Ùªú¤±ˆÌªğYº­s\Z¥¬S‡±‚X!\áª\ÓEœ•\0\ÔFñ\åŒ{qB5„yK\Z,H\ì\Ç\ê:\Z\İX\Ê6j©§Ä¶\éò!T¹\Î:\Òo˜\äR&l¹\0\à\Z²*FTÔ‘\Î÷¡”\áMKU/e»°\ê4Ánpş%\Õ$’ñ\í`$\0v±®NK\Û;pÙ¸q\É\Úz\Zİ»·{˜.\îy3dw\Çù\ç\ê¾aù‰\ç®+X$o)r«m¿ˆnd‰\×L\Z¹€\È\0U­3\Ä\ry/–\Öh\Ä|\ØV\ëOƒU´ÿ\0„r\â7¶’Â´¾ß¼*{s\Ø\ÖgƒD‰\âk7Û•b\Êr8#iªi)³£µ\Ôl\æ¸1¡6ót\Ãpµo\ÛK4$nrXpGCR\ë^µ\Ô\í\ÉTX¦*\è s\ï\\m\åÖ—q.™vwÆœ†\Ç ık+_b”ùü¶øó\ê+.ùz†˜\Û\Ø$l~+ÿ\0Ö«Vó\î·\r\É\à•=\Äi>·H\"¶yÁ,§ù-J\"LĞ½R\ÚxB¤–Lô\ã5fÈ–´Œ‘‚T=)’\Æe‘DT\ã¦–È“i\'$Æ¿Ê¦wĞ´)iJQTHQE\0QE\0QE\0\ÓÒ£%D:\Ò\Õ\æ^(·X|As\Z\áC‘\'>\à\\×§W\ã»F]F\Şô•\ã1Ÿ|E8\î3sÁ—-q¢s“…G\Ğò?tu\Ã|?¸?é°¶~m¿€9ş•ÜŠ\àQE \Z\ã\ä8\ëXÓ€Q\ÃG‰ !÷g¨=•m1ÂšÊ¹$\Ï\"vu¸\Ç4;œOŠõ-’\"\Ä\ä±\ç+\Ùıd\×:ao³G\å£\rÿ\0y¹ı\ç¸ö©\å+ªk¾\\\Ò2Ä¹RO÷Et\Z}¬~yûJjg\î¨\íW±\×“i„bRªó3p9÷şu­xñ\Å\åŠ)8\ÆL’g©ª\×P)X°ba¹W¸³LŠ\ín\'Œò\0#­M\îUŒCd\'ºc\'«½\Ëq\ëúV^±l`&<d&\"»+»h\Ñ\Ã)‚;§\ë\\¿ˆ•„«´|„œûUÁŠ[ö\n\ëşğ¯H\Ñ\×+c¢×X³)¯GÑŸuªÃ“EAGbÖ™¸%\ÊôùÀúV\å¿\ÜJÆ² K0\ä¡\Ï\á[°V\"™mzT‚¢CŠ”sA‹:S€¤œ)ˆ1HE:—m2J\ï=\0ª¯«DŠ£•‹R2\ä·V\ãª\ÒZ¸û²Z\ÏWtÁ \ÑH\Êx&\ÇQ5•Á2~•®x\ãšXzR+˜\È]-Ø±÷«\ÙB„£ñ«€\ĞT±\Ûn`M0s#7zª\ĞAÚ¥ò€œ# \Í\Èt}*QLQN( q¨.|L¾£63HE;v<\Ş\ä]Z%\Ä*H\Ù\Ùv‘÷zƒ\\|\Ú\Ê1dM\ÊÇ ×¥\ë\æ-JB~\ä‡pşµœ«\á‡€z\Z¸\Ê\ÆöRW8H&¹²u\ä…\Ğğ;ƒô®óÁ\Ú\\÷+ªÜ±(£z\â‰-V\ã\ãP\à\ç$u­[{‰\áUùC¢Ò”\îL©ö:I\çŠ\Ş’Bª’y\è+Ê®RKV[w$‘\ÇPzWm<·Q!Y;«\rd®\ës¹”‚OğŒ\nIØ˜\Æ\Å\İ5\åò¡Q\Ë€§ò\Åtv\Ö\è/N§%˜ƒÔœ\Õx<›7•T´ƒhQqıkb\Ú%‰HnNH÷¤g7©0yÉ¨--\Â\áfUú\ÅX\'h\ÎzTpg™ü\è ˜t¥¤¥¦ ¢Š(\0¢Š(\0¢Š(µñ\Z–£\Ç\ÏHW5\ãxLš—0Ì§§bÿ\0\n\éj†³iö\İ\Z\îÜŒîŒ•\ã‘úŠ:Œóÿ\0\Üy\Zü’¤¡ºq^;Wi\Ó}šö\Ú\àü»$\Ùÿ\0õ×¯£‰\\ta‘U!±h¢Š‘\rnš\å|W{,zhH8š\åü¸öúw?•t\×\Â&÷±\é\\^ \ÒI\ÔÍ¾”•\àgœ}JĞ·\Z1´\İ;\Ë\×eFMµ¸8-Œs]\Ò\î;\0TVùxô\ëOğİ¹¹ğº\É ¦‘œpH\É\ÅRº\Şnwdı\ãC:)\Êú¥]\È\ç¹o•Q\Ô4¹`YÀ‘\×8\Éş•¯-¸G°)\Ë`ö«03Kqóóó\È\Î:…+š\Ş\Ç)5Üª¨¯Ø¬½Jc=°b2\Û:\êú\Õ\Üjvp\Ë\å\ÆP-ó689\ë\\«	„,xÀu\àJ¸±\èÑ‰le \×{\áé‰A®-\â\ÚT¯Bk«Ğœ \\\äSÂ¶†µ¡ò¯¥CœğG\Ó&¶í˜‘XU5eo\ïFÓšÖµnµ‘3\Ø\ÑCS-@‡©”óAƒ&)\ÔÁÒ)¢\nZAKLAŠB)Â’€#+š£t©\ÏZi ¤\Ê\ÆŠO!sÒ¬IHwd\":\nxA\éO¢€¸˜E/j¥” Q`õ\Í-P#;Sµ[ˆÕ»+Ú‰2²)R:•\ÔÈ¹ŒJ©%º\È3˜Pk\Ø\çü™ zûõ©£w|\ÈA\Íiù8aŠpµBAÛš\r9Ê‘È¯ü-ùU\ÈaFGJ;uZ J¥\"$‹Wøw)#\èj\áÀúu¨ö\à‘Ò‡m\ÌP~4Ì˜12g¦\Ş\Ø\ïR Àü1@ı©Ã¥µQLAEPEPEPi„a©ô\ÆûÔ€Z?•´ñ«\Ø~Ï¨][’C\Ç+\'<wÀşb½SB›\Ï\Ğ\ì¤\îb\0ıGÒ¸_Z,^ g8Tš5|ûÿ\0‘]W„oEÖš\Ññº6\Î\ìÉ­%ª)\ršAFqšÌ’©\'—d\ä	\à\ï\\¤\ìC]I,jc‚7c¡¼Š\éu@\Ò-¼JÀ˜g>€\\¡r\Ò\Ù\Ü@\Ä\Æ1\çx\çE4\Ö\ÇYa\nÁ¤AÂ\0+RŠ9u3:\0Y?\Z\è@ı\Ì|g+\ßşªËµ€\\\Ãyş²VÃ\éú\ĞÊƒ³*¼+‚v\à³cŠ’Q\\’X€@ô ü\íc+\×\ëO–ew9\n˜\ëA\Ñ{•\î6’«‚\äñ\\Şµj\Î\ê\áU8ë’n\ÂZYf\Èch=‡?\áLhY­›`\ÚX¹\Ïn08ıhZ\"\æ\r»1‚:\äVŞ6\Æ;ãš¡t¸Q\İ1;/\Ôv«ú^p@sVŞ…½‹—¥£d\ã‚Á”\ã\è\roYH9\Ç\\\Ö5ú\ì[G\Ïü´ÀüA­;˜\Õı@¬\È{\Z\Ë\ÍN*º©Òƒ\nTK\×5 4\Èc\ÇJp¦Ò”\ÈŠ( \ïHiOZNô\0\ÓM=iÆ˜~”ŠB\æ“4\ÜÒ‚(\ê1IšRi¡(¤¥\Í\0-.8 Ó±@†Á^¼ÕƒP‘‡4˜\Ó\ZPNX\ÔRŠp\Ğ;€Qšx¤\éKL–)\éJŠ\0¦çŠ‘~\è B÷¢Š)’-\n(\0¢Š(\0¢Š(\0¢Š(µûß…IL~¢A\É\é\Æ{\Òi\Ô\á¼l\ÂK¥4m\Ç~£ú\ÕoÜ˜õi-H\0K\Æz’§ÿ\0¯]/‹\í–\Ì\ì9…–AøBk‡ğ\å\â\Úø‚\ÍßŸa\' \ÎA\çò«½Õ†z­\'©¢†\èj	3ueXd\àlm\Ç=}+˜q3\é¶7!f7A›<nûÆºR5’\ÖL®\â#b8\ìk8\Ú;-5…\"\á>R{\'Š\nL\ÜI\ÔÇ´Æ¿0\ÇQ\íPÙ¼Q\Ûn%B¨û\ã&“P›Im\İB¯s\ëXW·f==¡xŸ{Ë€CN½ú~T›VÔ’\Ö3rŠ>n¼±=G\à*¬·Iª[n¶¶7Cv\Ã}Á´õ÷\Î+•Öµ–\ÉUæ•¤\Ïp0=O\ã\ÅtŸ¢Š}òV\'s\\`ó\0\ãM\Æ\Ê\æ±vZ—\í\îck`ıò}ª\×Zœ\ï˜\ê\n™öW^€Z\ê\"\Ş&eGRs\Ğv\Ë?q—ò:j-\Ò™\É=Nqı)E\\\İ.¦¼÷Pİ¼©\ëW¬	\Øq‘\ß\Õ\ÏiXó\äR1‘\Åt6jŠ õ¯¥9+\"\ÅıY¿ub½qp†¶4\á˜ûV«\"¢\Ún\ê%­\í-\Øa÷¶jlD´‰¤•2TCµJ´ŒY\"Ô€\Ô@óO™—4´ÁJ)Š\ÃÁ¥¦R\æ‚C4†ŠBi\r!¤\ÔN\Ø\çl\nª\ì\\\àP\ËHx³`TÃšlQ…ZI\ÖQ´€p%©\ÜÓ‘F*@ \Ó&\ä#vjE\ëO\ÛF\ÜPR\Ò\nwjdŒ=j)¸ Ô­Ö˜\ë¸b¡Šj^\Õ\nqRƒ\Å!±iE%\Ä.*Eû¢¢\Ï*ô	‹ES´RfŒ\Ğ!h£4™  ñÖ$€95˜d’òm°\İ\Æ6‘·’)\\\rLæŒŠ\È2Om>b1»qõ«0\Ş3D“ÜŠ.\ÊcñŠ}2CÀ iİ©‚Ÿ@\Ê\×ö\ÂóO¸·=$—ô¯\İ$Ñ£;I#<ƒÿ\0Ö¯j\ï^I­Û˜5\ëø»	\É\\Çš¨\î4z­´¢{Xf~b¦5\á{¯´\è\ç ˜Ç–q\í[j^\â*j–µ”§\Şp+4&\ÒÅ˜+\æBw™\ãù\Z\è¥\Ær\æ¹\ÈUP\İ\Ç Q„±¶0>S@\Í\İ\ãO‘S\nUqœ÷\ÍR\Ô\ãó\0F\Üûrª\Î\Õ\ëëšµª€,¤nOÎ§¹\"«_\æ\á&F—\ÊùV!·rI4!q\âH\î»]cy_nö9 }}ªÏ‚|Ki¥›©<±3„|¡º}:j¾¾#:´\ĞÅ³dñ“œ\à“\îpkvË’1ÖµQ\æ‰[•®\ß\Çwzòˆ4Á2yƒƒßŒó\Û\Ó?…p\Óİ­Æ®pn\ìc>øª\Ç©ˆ\ÅeV¡\ã‘¯>\È\ê¬AIP\às\ë]5˜¹\Åsvı\äp+~\ÚUŠ\Û\ÍwÀ\\œúÿ\0g3n„º‰ûV«mj£;F\æúWYj6Æ£\Â\×7¡\Û§–òPw¹\àz\n\é\áãŠ†D\ßBÀ\íR\rF•(¤b\Å\íOZm( D‚œ\r0S…;’:ŠLÑº€j7`)ñU$±\ÇjI\\Y$,vÎŸdri‘%[Q\Å$6\ì8t¨\çM\ê1\ÔT˜Á¥=)V!\Ò>£@–WÀ\î53Ä\Ô\ÔfÁS\Í+u\"·Ö¬n$ò\ã¸_3û­Áıjğ60k\"}&\Şq\Ìcp\èqPFn4ü¨%\â›’)\\§½€\ZuU‚a\"\î \ÔÛ©\ÜÉ«\nO&“ÒµA$øn\0‘!\áñRU!)/“VUòhE4KG€\Ò\Ó\éRD£snjjd° ô¢ŠQE\0S[v\ÖÛ\Ø\ã5š¬\í¸(Û¿PS\Ó#½+ˆ]N\á¾\Ğb\Üvª>µZ\Ş\ÖK¹6£_\ã`q\Å>[\é$’\êFP¸¶\ì\İô\Ï5 ³Z\ÙY±„\îU=3\É&§v+–­\Ñb\Ë\\\áN9=jZ­mqùuo¼Á<ƒ\éV7¨\ê\ÃóªC\n^&¤¦\È2†˜\rZx\éLZx¤0¯<ñµ¹µÖ£¹\\\â\ác\î¸\èu\Ëxò\Ú4S\ÌR€O `Gó\Å8\î8x\ç}İ¹epøúğQ]x¯<ğuö5¤F Q\Ğ\ã‘^‡D·#Œz\çµ[pf]œo-º’¼#]	\éYú°etÃ¨\ä\éHFwÛ¡¾\Ò\á¹\Îö,¹\ìÃ·çšŠ\é\ß\Ï0U³€\áF\ã\Ğş4—ñ\Æúdñ¢\â\r\ë)d\êA\çƒ\ìsTüMyöm5\áòy/Àş P·)q¨\İ$\Â\ê\ãI1\Ü2zd\çõ‡×š¹p\ä)ùx#\"©ôĞ´E0nœT@ñšq8\Å&8\éŞ˜“:ı9ZX*:Ö½…°3,\Ã\Ôğ+\'\Ã\Ï\æ@ bk|/—t®:•„Å±\ĞX‘\ã\Ğş•¡¬\Ûw\é\ÎsWĞŒqY™²\ä}*qÒ Œü¢§Q\ÅLp¸ t§PH€bœ))iˆZcS»S_¥*\Ê\Ù8¦\0ZaV–\åQ\Â÷44!Á«J>^9iM‰fŒ\ÒfŠdˆi¤\âœzSZCíƒš‚V\ÊäŠ†EW“€h.#m—•_ºyÇ¥[ó@šÎ¦\ç\Ô\Ğ7—d¹B„’I\ëP‚3OWÀ -m‡±\äúÕ‹g$sUs“\ÅKsš£Ah\'|\nz.\ï˜şT\ÌY$#©i¨0>´\êh–QE15\Ü\"3±@\É4\ãTuR\ë§\È\È3ŒdzŒ\Ò\Ô\n7š¬\ÅJÃ„¡\Æjƒ\\—U}\Ù\Èšµ§Yı©\Û\Î\Î\Õ\ì;úV”–„‰V0k€\àq\ì*lØ­s3\ì²²\ÈTù[8²\ÏJB† ‚¿Z\è·(aĞŠGE‘p\êz\Z,2-­¶”¸…A’BCõü3T˜(f­»<\åI®\ÔR |¤•(§a‰H\ßt\Ò\Ò•@1iâ˜½qO€+3\ÄV‚û@»„‚N\ÍËU\ä*Ó €Ad hò\Z\ïìº­” ‰F\ìÇk\×z€GJñ¹\í¥¶m¥1m/—·?7Œş•\ë\ZU\Ç\Úô«[ù\é“õ\ÅS*E³÷MB\Ë\æ! ‘\ÍJ\Ü\Ôdüø@H#œv5$œ½ğ[->E\È\Âîˆ«\Óó)Ç·5\Ëx²úY#‚\Î\ã\Î9\È\Â\àNùük¢ñ]¹+˜Áh\æõ)\ÎAüO\Ç_\Éæ½«±D6¸”$\ëø\Õ\ÅjZ9\İFEÜ±¨#f;ñœzVq9«WÒ‰/&~>gc\ÇNµH·Z\Ù\r\àâŸ*>¤g­J§q\äf™\'G\á‡ºdñŠ\ì7B\ê;\×\á§+z\ë\ë\ç]ü1\Ë5\Ï=Î¸lOe6\è‡<ƒƒZ‘0\â±P43\riA\'³H›€3V”\äVr?\0Š¹ú\Ñs\"\Ïju0iù¦@¸¢“4f…\íLñO\Í1úSBS´\\ı\Å\â-\ë3Ÿ•}ñ[÷u«.-)%\\8\Ï\'¨¤o‘5¶¹f\Ñ\àH£pzVŒz»t¡¬9ü5	”\É\Èq\Ó\Z[}#Pº°…;ŒYĞ‹ØÊ¤1‘ÿ\0×¬§mR\Â`@\ç\êAiq\ZP$Ò‹È/´&}hó\Ó=+®Œ‘2\ç¡\Ç¦7Ch%X\ß\ì†‡Ÿ\ëHşTƒ­gyª\ÄƒR4X9lJQ{Tf0A\äSŠñš¯&T\îv\Æ)\r\"C¹5—óŒ\Õ\Ö\"cSœ½§\Ã\Ü\ÊŒ.y¤ZZjkÛ’\è¤\ç8«ñ U­£\Ë}8«À\08ıh1“4\ŞH\ì:Õ•LIb4\ÇsOªHÅ±h¢Š	\n)3\Í.h\0=iª\èU”2‘‚zu%\028\Ò%\Û\Z*E¬»\ë\ëKy\Ì*dF~ğ>£½kV­b±\ÊeQÄ‡\'\ëI5¾ ’\Ü$\"i†\Ş	ÀŸJÚ®kM¶ó®#C \'ñ®“­$*G¨¡%\Ê\ê*n\à¶\É \r\é\×ùV©§\\\ÜŞ´–ó(9_~”\Û¥¢Š)û\Ô\êhûÆœ(´QE\0y‹-Ÿ‰\åeû³(—=óŸ\ä:\ì<#t&Ğ£¼LW\é\Îk\ÇÖ¬\×67\n¹­zõ\Èşf\\1š\îÕ³÷lUt)\ê®v˜,yz\nl\Ò£W’qJ“;A\Ï\0U9\Í)#\î\çjã­I%yl\ã\ŞDœ	A8Ï¡¯\'\Õk]N\æY	;‚A9\Ï\çÖ½n\î_!œU\ã¾•\å^\"¸C\"*\0û‰cŸ½Àü;\ÕCr\Ñ\Ç\ÌArG­BN*G\ë\êj\"x­Ğƒ ‘\Í>&;º\Ô§Å’Â˜/††\ë\ÙqŠô;%5oÂ¸\r¡\î\îÆ½\É1\Zñ\\ó\Ü\ê‡\Â>Xr:\Ôh\Æ2«\æ0G*a:VCN\ä\ĞJ«±¿½b¬\à\Õøe\È	\Ä\ÖG©Cf©G%XW \ÆH›4¹¦n½.i’;4\Ö\ïKšB3@\Ş=İ©bˆ/jœ%<(\r²\"€¯J‰¡5km3m0L¨«€GcÚ­G.>\\R\\S|¼)rSR©W@G½V{œ!\ãµL–¿\"‹‚m_\Ùò\ÄX«o\Éû´\åŠq‚cÚ´÷\æ\Ã\0Qr¹Ùui{)X‡sŒš‚{B\"(\ì\Í\Æ2\Ç9­ö*³fd˜@\ã&cÁ§$Q¨U\ÎzV½¼;W\áN*\ÌKŠ‘\ÊD±\Æ=\êhWsn#Q1,Á\ï*\â(¯oZh\ÂL\\€2x ‚2:W\âKf\Âgc’9c\n½¡\ê»<»9ˆCN\æ\\\Ëc£¢ô€ƒ\È9\ÔZ(\íI@RŠ°¥\ÄM‹•nµ\Îx£\Å\é \í‚\Z{§\0ı\Ñõ®O\ë\Ïr.Dˆ}\Ô\Û\Æj”—-ŞŸ¢A$—3,c8\Ç\æ~3ø\×\r­x\ÃP½”\r0M–cû\Î}Mqš¯ˆµ\ë£5\ÔÅ¤<\0>\è\ì;Vÿ\0€¯º\Üi6	d`¤úúÂ¯\Ùò­F‘\Õhš¸ò-Ö·ª\Èw.|ˆ›ş\ß\ĞWX«\Z(P£×Ÿ\çF\ã·75‹eXÑ£½w¦fGœÓ‡Ji?1§P1h£µ\ãq6…+ÿ\0L~x®C\Â&\ß_EcÄ€©\Éõ¯A\Õ-¾Ù¥\Ş@K\ÂÀ|qúŠò+7{kûY¿Š97¯^j–Å­b¹}°‘	õªñ\ÆcŒ36	\ä\ãÚ£‚o¶¸x\Î\è‰\ÜÄn”­(šñ¡\ròÆ¸bqREŠ·ÀK‹pm\Ç2\Ù{š\á|KnŸf½œˆ\Ó\å!q‚Xp?+»\\Ì\Ê1¼”Ï°\ë\Åp^\'ó`Ó§%¿u4»\0ë?0‡ô§©HóòãŠ¬çµpÆ¾fXw#­Qnµ\ÒT“»•3=¤Fk”T’qI‚Õ¶‡–\"\ìƒù\×kd¸rMsZ\\J¸85\ÖZ¦W4÷:ú•sô¤hóÒœŠŠ’ngMI8\æ¡FhŸ¥j<`Š¥<)™fA«jı9¬Xİ£|\Å_Šl\ãš(š\0÷\ÍHŠ¬\rJ®:S¹“D\à\æŞ£SR)\â‚\ZN\Å4sN¦!\r%;\ZFFi3´sRcÚ˜ËÔ€LƒÒšN)‡ \Ó	&‹•aI\Ïz21LÁ\Í\Ô\î;\nM A”\åCŞ£š\àb›»oAš‘¸Z–\ÚŸ2Q\Ïğ\ĞCc\í\áØ»›\ï‘Ïµdx›R\Î\Ã\Éó6\É&	\äğ¹ş§Š­\ãe´{;s…%2o\ãû£úr+‹\×|Fº²\Ç>Í¾b.\ä\ê3ıM;É\Ô\ã_ÀÀc\Ì~y\Ï9şµr[\è\éaAóñ¸©\É?şª\å!\Ô\ÚkˆVF,D€d\0\Ï5n9\ÑõÀ’z\Õ(˜´vÛ·Z”ÁY™Q[\Ëœnl\ã\ç5\ÛZFa´†20U\0?Z\ãü)£\Ïq*_\Ü)X#bĞ®~û­ô\æ»nzTš\ÇmBŠ=+×¼g¥h,\ĞK!–\ïnD1Œşg ¦•\Ë7\å–8#i%uD^K1ÀÀx\â4şe¶—\Z\ÌJ‘\ç¶p?\İ\ë×¼]©kÍ¶YvÀü° \Âş>µÎ»\ÔŠ\Ö4ûj\ëS¸º\Ë4\Ò\âf\æª4\ÌÇ’Hú\Ò\È\æšO+d»\0\ÙpúU­#R“N¿‚\ê3‡‰\Ã/¥T=*\"J6E\r]X.}¦_Çª\é^\Ä\0Y%A\Î\Ó\Ü¥NW&¼À~,\ZE\Ë\Ú\Ş3Iqœ\Ë6ş÷Ók\Ø1¼B¥H\È9\ë\\“‹L²\åè¢‘™}\êQI\'(p\ëA8\ÍzŞ€ô=k\Çõˆ±{\Ül•‚ı	\Èşu\ë\ìB‚OA^g\ã(U5\Ã&6™”1>¸\âœJ\Øønqÿ\0Õ´ª£pS¸\ç&¥´ƒr4»|\ì]\ÇC\É\éùV….šM;\ì¸ùb““œ\ätşµ\ÓıÓ€}Oÿ\0^“\ÜV\"VeDa\å$lK’[?S\\WŒW\ìVV¬˜W\É9?{\å\0Š\í4ödŒ\à1?Q\\g°–ñFÿ\0<Š]Aô !N;‚<İ†c!\Î‚û˜õª-÷«Bñ· cT|š\Î<š\é·<3jn/\Ë\à•A\Ôz\Ö \ä\â»\ß\Ù}›OÀ	%;\ã83vE\ÒWfı”AJƒ\é]\r¸ÂŠÈ¶‹q[W+z\'\"—m9¥HW½W +Q2g9«{iŒƒ­!¦gI\0 \Ô*Z2\éZ,™â¢’!ŠE©\rŠ`F3V\Ñ\Æ=\ë0¡Œ\är*h¦\Íjæš¿¤Wªk\'\"I\Í;™8—\Ğ\æŸUc“jÊ°4\Ó3jÃ¨£©¥¦!1IŠuF¨\Ìu«4„P;•L$(Œ\Ô\äSzP;ŒÛH\r<\Ó\àR\è\×Ì—‹üê¦¥\âm+R¶µ¸Â¬\ÊX\ÈƒœûVßŠF™\âC\îhÔ\Ù\ïõ®#\ÆZ\É\Ôõy\İ\Â&QF{J¨£92\ê_lñ\r\ÌbUx\â\Â&Ó\0\çõ\ÍsSL~\Í©\ÉUÁ‰¢\êbn99ş.OJ®ˆ³·\ß²Fd°¬²LJX€[\Üqš\Ø\Ó\"\ê\\e\É\Î\Ğ21\é\ïÒ¨é–—O%¹skİ™\Üv\Çs\í]\ï‡ş\Åo<piZg\Únù®g9>ùT\É\Ø,jiºn£ªm’ñ\æŠ\à##\ßò®ª`±¶ a#yf>É©\"y`JT¾9*0+\Ê|\âó¨\\6“c#-´,VgV\âVôú\n˜\Æì´‹¾+øˆ]g°ÑŠ”e\Ún²A÷\Ûş5\çJ\Ì\Å\ä%™¹%¹$\ÔM Á¢.y\ç5\Ñ¨Œ‘\ä¨\Ù\Í34•W\ÅÈ¤ó):\ÓH\â.OzBr:\ÔfŒ\ĞÕŒm‘]V“\ã\í_J°[XeC\Z’@‘wc\Ø{W%FjZLg\ÔôQErˆ^ÆD¿tzA@¤,*^\Õ\Z\ä)\'­3…\äı\Õ5\Çx\â\Ïu…\Ùp†?Q‘ü«­”\î\Â0ü…eø¢\Û\íz4ÀrĞ©”c\Ûÿ\0­š\ã\ç\'\à»\Ï\'VÈ’\Ãò0p?\n\í\áEtg\Æü\Ø\Çjó\Ü?@\ç\ÚNqÁ¯OTx\n8R {”\äTˆ\ä_$ÂŠ>A&\ÏOóš\àüv\ÎÓ‚Yœ÷(\ÃùWw!m\ÌFG\ÏÈ®7Æ“tö¶T$Š)~U\ë\ï\ËQÄ-€¶\ÇC¸q×ŒUŒ\Ô\×\r‚\Ğb Q“À?J\é]\Ò\íZóPŠ%RÀ°İÂ½N\Ò ¸\0qü«šğ¶öX>\Ó/ú\ÙG\İ\Ç*+°µŒ\ã>µ…G©\Ñ\Ù\áAÁ­(\ëÓ õª±§«‘Œ\â±c‘aiâš¢)™±vƒ\Å5—i\â”\Ğ\"» \ÆGZ–¬²ñ\ÅD\ËI¢“*¼`õU\â(rµ¢\ÃÚ¢t\ÏAAjET“\å\ëR¤õ\ÄrH¨\É+×ŠEZ\åôŸ­^ŠPÃ“X¡ªT¹(y4È”.nü\Ötw9š´’ƒTd\ãb\ÅÀ\Ô C‰£5nh\ß@4\ÓKœ\ÓY€^i\\\'ğ¬øŠ\ßF0Fò,¤`;\Õ\Í[Y´\Ò,\Ú\â\å\Æ\Ñ\Ñwr\Ç\ĞW‰\êš\İÖ«ª=\İ\Ï œ \ì\àV\ÃcOPÔ¥»\Õñ\Û\æ–M\Ç“Ú³õ-²\Ü3†^s\ÍGÀ zÔ²$,¹Vb¼\ä­¹R!¢º·˜FX9QÁSœV\å­ÅŸ¡©\æjRJ†2Ã”AódzqPË \ÚÁ£Zj2L\É\ç;.\Ï\ï\0z\È\Óm¡i&-°÷+=†x©dX\Ø\Ğ\ìöq&¯x–öıv—~{\Óñ¯O\ÑÆ™Ÿ•¦mò”ó€z÷\É=Mrº†#—l\Ó\ÍÀ\0LpË}\Ïøz\×_¾\ÛJ°wò£‚\ŞY•;õŒ\Ø\Î\Çúÿ\0ö6€öñ>Û»ÀcŒ¡ˆş\\}k\ÄYò0I$VÏ‰õ»R{\é\ÆV%\î¦r?\Z\çòI\æºa\"‡M4„óI»¬C‰ \Z:óI@—¨¦R\ä\Ğ!J\æ“\ëK’h#\"€¶›Šp¤\ãÒ†3\êj( \×ˆ\åûŸ1jI?ÕšM\0<S0I<ñO¤^8¤1Š\Ê\ÌG@\0¨. 3[K\0´Š\Ã\èx© m\Ê\Ç|\íü\é\ë\Ë\ã\êhÆˆx.ˆ;w+‘øƒ^·g8¹Ó’\à6w \É÷\ï^w¯iR§ˆî£‰N\ÍûòF\0gúÖ¥ŸŠm´­-l	&ûÀ\àu\Î+F®t{9I]f¢²y|\'lªTŒô#<ƒÇ¥y\ï‰o\í\ã°y¤iV\àI#\Æ1‘¹‰\ä\Û\0t©\î¾\"\É\"²Eo¯¯&¢\Ğ YÓ®¯\î¡,–\ç®\0\ÚNy­Ë«±i]s\Í\×ú˜Ë±\Æ\08\ÎN?™®³IğªÚ‘5\Ö$¹\ãhS\Â}}Mki6\";4\Ô<¬¹$‘\í[Á‚Xı\î\Üt§)\Üq¦–£a‡\n \nÔ‚<P\ÃÈ«\éfS\Ğtk\ÅZ‰j$Z8¤KdÀt§Š‘N\ÅaG4‚—\\SY§”´]”ŠˆŒsW6ƒP\É\"“+²f x*\É\Í\â‘w(´=‡Za\Çš¼ÉšaLö\ÅR*)t\î~•:]0?JVOj‰”f\î\\[\ì“R‹\Ô=\ëVm\Ø±õ\Ùt»’¬\Ê\ËAÁÖ¬\\‹s±{\Ô\î\Ê>¦\\§÷ÁÏ¡¯$¼¹ü\×·\ÕÉ¦‹™×¤\Ïÿ\0}VÊ‘4O¢\ç\Õm-\"/5\Äh]\Ì+”\Õş\"\é¶ÑºÙ—¸—(>\æ¼x\Ì\íÕ‰úšPüU*h9\âjj\Ú\Õ\î·vn/%\Ü\ã\î€0{\n£»\Ì¼D94gk†­RH–\îY‚\à‚\éEh#¸&<‚zs\È\ëX\Í\×#½X‚rƒ÷©’uWWR\êQ\ÛD\ê6ZE\å\ÇU§Ü“ı+sCğüº‘Š_\İÀ¤ŸŸq\Ø\0}»\×kz\Ã²a\ãuú~•\Ü\è\Z\â\ŞD¡\ØFûz©\Åe$ú\Z\Â\nZöŸ§\Ûi\ĞaŒ¨\ÎY\É\Éc\\¿\Ä\İJ;O\r%“Hw\İ\È1ü#’­{ùUp“ß“Y\Zök\â[±qu4\Ñ\\\n6chÂ¢1³+\Ø;E((A\\€GñL]\ÌHš\îo~\İ$G\ìW)pÜŒ»Iük‘¿\Ò5\r1ÿ\0\Òm%„dŒ²?>õ½\Ét\Ú(’sM§O4\ÚfMXUcŠ^ôÁÖ\ØĞ„:—&£É¥üi&h™š3@+L\'œRğh\ê:CKA®1\rõmô¨\æ§¸~•Z6\Ïj\0›µ!;W>is\Å6F	;É¤8\ê\ìs:§‰“UŒn.\ß1\äMsŸğŸ\Ş ^¿À*õ\ê­\ÂH’(*À}\ëÍ¯O“q$yûŒTVŠ\'©\ZPŒn\Ñ\Ñj>(¸º\Ş\Îûœ€\0q\\\ák©Ê -$€|ö«ºfwªÈ¥·Ew#ùWs¥hv\Ú\\! P\ÎG\Ï#ujnI!J¥•‘\Íi¾gÌº8\Ç#có5\İ\è\Ö\é\rµÅ·–Rª ‘\é\Û4‚,Ÿ†*{L%\Ê1U*~Sò\çƒYJM˜É¶dZÚ‹]\ÖÄœ\ÂJsúUô¡=\ÅY¾´û>¡\æ!]’¤`ƒ‘õ\í\åB\ì$  º\ã v©ô\ÓÚ¬ª`f’4\ÍN\éŠd¶1EOÈ¦\ÍJ”\Ù\"ŒS\Ç\"\Zu\r#(\íJh ´\Ú¢\à:šÜŠ\\ñH}©Pz\Ó6ñR‘L\"Š#\Û\ïHS&)¬qI¡2óPI…«x\æ©\ÊÙ¤Z+Á9¬]tì›¾¿\ê\ÛùV\ØÒ±üEì›Hÿ\0V\İ~•QÜ·±\ã¤bŠq-2º\Î\'¸\áJ)½\éE1iÀs\ëQƒS G­*H$t¦µ³V\n\ã>\æ¡u œqÖ€°©!I7Á\â´,oš	–H\Ûi\Ï \Öp\nHù€\Í;aLã§¨ ³¹\ê:>ª·Q)†­\È\ä\' \ã\'¡¯%\Ó/\Ş\Òuec\Ï\Íwö\Z’\\\Û$›†\áÁ\ïR\Ñ\èÓšš:§$\ã¡ïŠšM—c”+¡\êd~µ›¡Ÿp\ìFjĞ“\'¥q05/\é—ñHö{­® òŸ¨\í^mªi—:M\ëZ\İÅ²A\Ğöa\ê=k\ÚK•p\Ê9ê¦¹£Á\â=5¢‘vÎ€´N\0\È>ŸCMÔ§us\ÄAæŸ*[»)\ì.\Ş\â&T8*G?Z‹ª8šiÙ‰KŠBOµ AE!¢€še-\0}QIE\È =\rQ„°÷\íW«.\æ\î+B\Û\ÏÍ“… q‹nÈ·,ñB»¥uQ\îkÿ\0ZYbh\áRñ¸÷¬«ûù.˜»c# ôª\ÊÁ‡\\\Õ$z°©Y\È\Î\Õf¸[wx7\Ç\0V•¤›“qw$œ\á½k°*:\Ó6a‹.3\î*µGL\ÕÕ‘n\Ò\Ù\"@ª8ªø@@\ãéš£k*—¿qZQûVOsI§¨ó\íO\áN;úTŠÖ¤U\íI\ØK]Y \áÔƒœ\ï\Æq•ñ‡iU~v\Æ\ãëŠ™#T›y@A\áH5(‹É“Á\\\ç\æ#¯¥\"nĞˆ”üS¶OzÁ¦+¢ÖŒP)Â›ÒŒš	E <\Ò\ĞM\Å)4™ aKšLıi3H\È\ÃÖ—­%0£cO\ÍE#q\Å&R ‘€âª°\'š’S\Í35&ˆhÂ©®{\ÄLNŸ8Ñ¿•t0\ny®k[fx™9ö«\å\Ú\èò ŠabxŒLõS]‡Z§) -H¢Ì‘øÈ§F\ÛH4\Ô#½=—ö h²~aÁ¨\Üd\çi>¸\ïQ\Ç!Z°\Ã{ûPQ‡<¯Lgƒ\å\Çµ31Á\ãŞ”¶\î¼§˜X„0A\Æ+oH¾1¶\Öb\Ö+p\Ïj|o´u¬]9¸;£\Ğ-o\ÛsfN6d{\×E¾dJ\ê{uõ¯1¶¿‘B“\È\×\èzºÈ¦a…\àgŞ¤ô#UT:\ÙL\ç¥>\ÖoŸh=j¶p\Ä	¦Àû.½)\ÇB·‰ü;·™T½Qò¿M\ã\Ğ×’\Í\Ã+F\êU”\àƒ\Ø×º\Èûˆ\Éükñ\æŒw.©åœ€ö?3–­+«œ\'jJR1ITp…R\ĞQKI@TQEAy3Al\Ò(Z\åò\émm\Ù\É\ç(õ5\Æ]\\5ÄŒ\Ì\Çq9\ëSj\Ó\Ëó;g\':Vs±„O\rIEs\rF)€²¶+\éN\í@Ö‡XğI\ïOQŠpb9‘K#C‚:\äõ­+YDŠ	\à v¬Á\Ğ\ZzH\Ñ\èpy…L£\ÔÊ¤.‚>y©€\âª[H\Ín3Š¶„\àVG\Üp9\Çô©v¢\Ş\îg*r\ZmKl\Åe*1Œg\ïEˆc@;y\ëŞ˜\İi»Ïy\á”6=)ı@ \Õ(\éH\0ñÒ€‡­:šz\Ğ!3ŠM\Ô56¡Ù¤&›A\éIŒ\\\Ò¦\æ˜I\Í\0?u½\ê\"Æ±\Å+\Ä\Ì\Ãš«+\Ò;\Z®ô„\î4”ª(4X²´\ï\Ôf±.£2nµg98õª\ÒF¢&#¨H´y~¹m\å^õ¬¦\\7×š\éüF \Ìkœp@÷®¨\ìsU£©§/LS­>?¼jÌ†•\Ø\Øõ§©8\ç‘Hy^}h_ºi\0ò«\ÔQ\Ê\ÈFQHN´œJ\0y\"Dÿ\0J`¤sÇµ,_1lõ\Å<?\Z`09E(\î1M¥\Ç~ô€r»#\ç9\Õz\Ş\å\ám\è\ä\n\ÏD\r’~µ*9SŒg¥¨Ë•Ş•­}¦W#x\à\äÖš\ÌËƒ\ÏÖ¼ö\Ò\âH™]O;±Òºx&rñ¶y5›\Ğõ¨Ï‹1Â‚pqP\ßZ¥ö=£\à‰PÇ±ü\éT—T\'ºŠxb®1Ú¨–»…à¹’9‡F*A¨k¥ñ\Äj¾\'”\èŒ~¸\Çô®k¡\ÅR<ªŠ\ÒŠ;\ÑT@RR\Ò\Ò`ÿ\Ù','ATPL00050','sandhya.jfif','image/jpeg'),('f093ce3e-4a18-442e-93bb-23cd8b42cf2a',_binary 'ÿ\Øÿ\Û\0„\0		\n\r\Z\Z $.\' \",#(7),01444\'9=82<.342			\r\r2!!22222222222222222222222222222222222222222222222222ÿÀ\0\Ì\Ì\"\0ÿ\Ä¢\0\0\0\0\0\0\0\0\0\0	\n\0\0\0}\0!1AQa\"q2‘¡#B±ÁR\Ñğ$3br‚	\n\Z%&\'()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyzƒ„…†‡ˆ‰Š’“”•–—˜™š¢£¤¥¦§¨©ª²³´µ¶·¸¹º\Â\Ã\Ä\Å\Æ\Ç\È\É\Ê\Ò\Ó\Ô\Õ\Ö\×\Ø\Ù\Ú\á\â\ã\ä\å\æ\ç\è\é\êñòóôõö÷øùú\0\0\0\0\0\0\0	\n\0\0w\0!1AQaq\"2B‘¡±Á	#3Rğbr\Ñ\n$4\á%ñ\Z&\'()*56789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz‚ƒ„…†‡ˆ‰Š’“”•–—˜™š¢£¤¥¦§¨©ª²³´µ¶·¸¹º\Â\Ã\Ä\Å\Æ\Ç\È\É\Ê\Ò\Ó\Ô\Õ\Ö\×\Ø\Ù\Ú\â\ã\ä\å\æ\ç\è\é\êòóôõö÷øùúÿ\Ú\0\0\0?\0õŠQIJ*@(¢Š\0Z(¢€\n(¢€\n(¢€\n(¢€\n(¢€\nZJZ\0(¢’€\n( \ĞœSI\ç„œ\àg5FûU³Ó‘\ÄÁXtA\É4|`^\Õ“¤C\çtOwlWªø\âW\ÖÁYW w\àšä®µi\îÜ™eg\ÎO\'4\Ô[\ê7\Ş\'±±`\Å\Ã\Ó6\à~5\Ï^ø\Ú\ëyò#œ1\Íp]; ,r{zTBf\Èd\ÆŞ¦´TÀ\ën<a*üóÈ¸ôÂŠ ú\Õ\í\Ê\"™İs÷¿*Çv\ÈÁS\ÄUöyc\Ã+#œü¹úöªPHD{#HQò¬}NÕ‹k·`©\'Ì¹À\Îx_Â ‘’“ ıÀ\ë\×\è\İû\Ô\Â?/>Z„ü\Ê ûb®]\İqjÉ²U(\Ä$pG§ÿ\0^¶mõ™(<.~e+œ~u\Ê\Ã\æV`‡ª±\È\'Şµš?,„F1®‰Ÿ‘ôõ¥Ê…sº³Õ¢~‘±Á<\n\ÛûDMe‘GuyË†db	\È(s\Ğ{Ö«^\Èñ+\ÆIqŸ\ç\×ò¨p\Zg{\ÕH<0\ÍI‘\ë\\=®«4o´6\à„v\í[\Ñëˆ•¤S\ÉÁ p3ÿ\0\ê©qhfØ¥\ëT \Ô`˜|¹‘’8ô«y\ã5 ;4Rh¦\ÑIšZ\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢Š\0Œt¥ƒ¥(¤0¢Š(´QE\0QE\0QE\0QE\0QE\n(¢€\n(¢G,«\Z’{T7÷öúm¹\âB‹\Û$Ÿjóx½\ïY ¶Ü«v\ê~´Ò¸Í½w\Å\â\ÚW‚\ÖL\È\ç\ë\\¡¬]\Ü\Èd’RÅPš\ç|¹lŸsúUC+7­k ,<\ÎP’\äœóPœ±å©œ\äsH]B\áz÷\'½]„)¹\'Úƒ¸d\ã§ZŒ“\Ó4\ä\ç‘L	W8\çB\rZ\ä\èÊ®¤c“ƒQE:©\0€G¸«Ë“ \\ú\Z,œWq<k\Ô{•x\àg½I\äE·Í³›\å\ì½ÿ\0:\ÏEHĞ‚r\ã\æ\à›rVpOJ	5!‘“ø¾b \ã—‘FñyĞ‘‘€?½_\×œó¶TI \È<0\Í<]˜\Î	\ìE+\0ûyğF\æÃ¯B;Š\ÑKÆA(;ò\0\ãµf³y6\Şqòô©!vÙ·\×\Å\0iA)…Œ‰’\r\Çù\æµã™¤òs€x°¡1›¨\ÕÙ’ùX¯P}kcM‘m\î$Yòñ€z{œŸ­&€Ò…¦3Ã„d+»\Ó\ëkoK½i WÁ\ÚO=+ŸÓ¤A9‹.\Ñ-•\ã®9\ïÒ¯Y…‘r\ïò3ò;Vrˆ\\ê•§uª6²8UFy\ïWãµŞ–Ri\\Š(¦EPEPEPEPEPEPEPc¥(¦Šp¤0¢Š(´QE\0QE\0QE\0QE\0QE\n( \Ğ\0x¬­c^·\Ò`;™\Z\ãH\É\äûı*/k\é6‡\çS3p«^Q«j\Íwvò\È\í+|\ÍU¶À·­\ë³jSe·\\\0xAXRÜ†À\éÓ¾j´“$÷\Æ\0¨w15º€•\äcÛ¯J`¯`~¢“9¤\ÚI\äqLC²v\äŠlÒ” Âb˜vœ¥9T}?\ZLaA8Ç½H¬ \Ñ`+=\×ó«\0 †x\â¡ x\Í^·X•v¡\ã9\æ2õ¬‘ª\èÏL\ç\ëVeû;¡gD8Á\ÉY$D;# v¡{ƒ\ælX·JGğ¶1R\0ñ\ÆNS\æSıŞ•W\ÊØ¸W\ÆOC\Í,\Í6\î\Ì7f–(™\È\'•\êq\éEÆ\Ô,™€zƒü\ÅO®¤\ß0ôô©\í-%pZE\îTi«j¾\Î[ Û¥+¢\ä*\Ì“·c| ½*ú\Ëò9©‘pÇ§\â?)–\È\ÒF<\Ç\nö–©\ã¸\éS\Ü\Æ\É!‰U™Qv.\ŞÏ­&\Å}>ù s—8S¿\å=\È8üñ[\Ò\ê\n¬\n…PN\â~;W/övV\Ø\àprG&­Œ,C\åÜÀ\Ğ\É:ûiæ¹€\Èp£³O°Ô˜8YÁaƒŸZ\Í\Òei63³qqşrkP\ÚD¬¬©\ÈLŒ|Vm\r3n–e’GC\ÍJ\\ \Ë^\ÕË¬\Ó\Ú\Ü\í<‚~`¾8…mZ\ÜP—z…º\ç\Ğ\ÔX¤h†dSª¸bˆ\Çcı*d`\Ã\"•ÀuQLŠ( Š( Š( Š( Š( Š( …(¤£­!‹EP!h¢Š\0(¢Š\0(¢Š\0(¢Š\0(¢ŠKT\Ô`\Ò\ì\Ú\æá°ª8å «7Z[I<\Ìd’k\È<M\âÕ®N]¼•\áğ½4®oY›Q¸–Y˜:\àzV¹<g\"‰%,O5\îq]1VCNiø\æ\np>ƒ4\Ä.8ºN>c\ïOI\ç\"°/ZD#,IsŠ\\cµ;pQœ÷\ïM\È\ÆOS\ïLH$š•ŠgA’)À\Ğ«ò|\ß{\Ø\Ô\Ğ\ÊKO\Ê~EQ/ƒÉ§y§i€i¨·C\î)\n;\àT\×2\Æ-€…§b\Çn\ã\ê@¬¸¤”‘\ß&´¬™\î.AûÀrw3\×ùRc¤\Äü°q¢¶¬ôGÉ•`F1S\ØBòò8!F>Zİ´U$\Ğ~µŒ¤h‘Ÿˆ¶µ*FI|“ƒüâššXŞ®Fœ•\ç\é[›U»Æ¥\äq*9†\ÑAt\Ñû\Å\\Yˆ\È\ì>•^ğ1cŒm\Ør\Ütö²U•q9<õª’A\æÍ¿GôùŒ\ÜLK\Ût’RKlEMÿ\0‰\'­W·³“]w\Õs¸õ®†{.˜u\ÏC\ïô¦Y\Ú.]\Î\Ğ1œpz\éúÕ©b¦t±jH@\Zò\Ø\Ç8÷­ˆu$1\ä\0q¸zş¹®Rùü‹§X\Îp	«úmÊ´­)\á€ô\êOÚ¹66d”\Ï$¦E(aNGù\ïS[^‹YJ\ìWˆş~\ÕTLfUYœmÈ‘ù\Ç\àz‚\ã3<r„=Gÿ\0_úT´\ë#d\n‘•ö ‡„\ï#º\×;§\ê{%ÊŒ#¡\È\ë]22ÊŸ\ŞSŞ³jÅGWÂŸU\0òf\ÏO^*\Ğ9¡\0´QE1Q@Q@Q@Q@Q@ƒ‘O®\Ãò]\ÙÈ³H\Ï\"\å›\'·\Å!‹EP!h¢Š\0(¢Š\0(¢ŠQE\0(¬½P\ZT\Ì$T‘”ªqƒ´\Äx\Û\Äms3\Ø@Ø†\ä¯ñ°\ç³\È\Îù|Õ»ûŸ2W!òI\äû\Ökİ«¢²˜\É\ã4¡y¤\r=s\ÅX\nJ\å\à\Ò(\0‚zS³¸\ç \ì)ˆv\î6ƒH\ÒmP\0\ËSs‚)§®\Ô\Ğ!\'\çsŞ—;›¤eEšy\\-{ry n\É\ÜO\áHNiHÚ¹4\ÌNhĞ¥˜óK\ß\ìaiQr\Ù#\éH¦s\ÅhÚ–\r¹yÀ\çÚ¨¢ä‚=\ëgO€21“ª$ËŒN†\Ë\Í1¸À=ùâ¶ \ÜOC‘\ÏJ\Í\ÓWû¸\ï[qBÃqXI›5b\Äj\n?:c8\à\n0q\ÍXARC/=TS\ÄJ¸ sR*\ZyRhFHW#Ò¢š\"\Ñt<u­/.›±@?/Zh“šk•ƒJ¿ 9\n=º\Z£slE(\Äc Şº‹¨Y—	Ó¡¬{‹m’\ä8À\â­H—5e”\r¸\È\'\Ü\Ñ$\Í÷L\0\êÿ\0Z´\r·›€\ÊGRGSUnm\\‚K»UÌ…\ÊTŠ\à#\áH\Üx$\×S¢\ß\ÈAˆô^Œy\ãŞ¸É’H	¼b\ÇR{iA’Wƒ\ÏQJJ\àzP\Ú\êË\éM‰™\Êcó\â¨iš”WĞ’£k95}€,$\Ç\Ì8\ÍfÒŠ8\çÿ\0\×RSQE\0QE\0QE\0QE\0QEÁø6\ç²FXüññõ»^O ^mV\ÖM\ÛW\Ì\ns\èxşµ\ê\êsN{”:Š($‹EPEPEP0¢Š(\0\Î+\Î<q«—¡	\Ê÷¹ç·°¯CšAL\äô\ã5½‰õ9b·e 1\ÉS{\ÕE]‚9iŸ\æc\Ğ\Z¯\ß¤\åÍšUO^•Ğ†»L?*n\à£IŸÎ˜\0OZx\ãŠj(9\Æ)€´`7\æ…\ëŠ|1ü\ä\Ğ!\èX\Ü{\Ó9;Ô®Fj\"H v\Z\Ùw\0p(\àsùRH¤\0\ãSG\ì’x\è6j\ä\ï0A#’)64ˆ­\Ôy\ê?‡8®®\Â\ÏqD#•Q³\Ò÷\à\É=3\Åtšlb“AÀ>¢±œ\ãµ‰¢¹8`\Ö\ìI…•P†“=1WUFq+&\ÂLEQ\ÓÖ¦U\Å=ª@1AÀS±F)Àb11\Å\ê1@ˆ\Êg¯J¥=¨s\Åh\Òt¦X·\Ø6H¤š\Ûzp v­ˆSJ{\ZC9k\Ë|†qık›º†KYwFr§‚¾•\è’Û«Ÿ™k™\×4¶DgŒeq\éš\Ò,Múnª\Ös+«m`xôÏ½zŸ©-ôk³’W ò’:\ï^H\Ì\É!V]µ¹£\êòÅ˜|Í¨!}O¯Öœ£\Õz]¼»ŒˆFüGcV\Ô\äV%•È¸¸Kˆ\Û*É‚3\×\ßù\ÖÊ‘Ÿ¨\ÍfHú(¢˜Q@Q@Q@Q@+`\ê&V#\åV\Ï=øş•\ëö“	\í\ÒQ\Ñ\Ô\ZòKˆ¾Íª\ŞG¹+\Üñü\Åz?…\îMÖ‹\çî’‡ğ5S\×R™¹@ sEA\"\ÑE\0QE\0QE(¢‘ Fn½8‡J™²¿Jğ½FF’\âVf\É,z\nõ\Ï\Ş,:Q‹\Ò0Ï°Á¯Ÿss\ÍiMj2¸@§$\Ò;\ã¶>”\Ù=º\Zq\ÆOZ\Üd€Ó†=\ê1À§h@y\âÇ’I¦ôSŠn~´\\	b\ÉlûU‘\Âó\×K€*B\Øùºâ€°\Ò\Ù|w\êh,3M©ô\æ˜XœP\É\ä\n‘ œSqœU¤^G©ô¥q¤K_(\'’kcIµ,\Î\äğV³µ20\ë\Ğfº{+1\Z°\ævúVS‘¼bZ¶´	\ä‘\ØsùV°³(¡\Ô\r\ã­:\Ş\Ø\ì£?Ò´\Ò1·õÁ²£ùF9\Ïz™*;J«…\éÓŠh!±@§@\ê	Š\\R\Ñ@„¢–’€ŠAK@	ŒÑŠZ(¤J£ym\æ\Ä\èTG¢#(=©ˆò}n\ÆK[“¸w\ÈÀ\íY1\Ï\å¾\å$y¯Dñ6›\æ[³¨9=+\Í\ç_.V®zV\ĞwCgk ê¬Rm»÷8$`Ÿ\ÌW}¢HC¯ğúŸzñ½&é£ºŒnbT\às\ÆO\éù×§ør\ì\\X*7*\á”õÿ\0=¿\n\ÎJÌ“zŠlg()Ô‰\n(¢€\n(¢€\n(¢€\n(¢€<Ä–\ím\âI˜UI\ãº¿\Ü³\Ü\Û\äe7ÿ\0şª¡\ã«u‰m&\0eK\'\áÁª\Ş”¦°ñ\ÏH\ÏÓŒıj·‰G¢ŠZj: B\Ñ@¢Q@Q@Â£™\Äq3œp3ÖO‘©J\×p\Ëm\á	\\M(#\åŸ\0p^8\Ö>\×~m\á*cˆm,9\ÉÇ­pr¶3µ\ÒxŸ\Ë[ù–!¶4!T`t\0b¹I$\×D\Æ1 ™¦÷\ëNA\Î{U€õ9§\Æi?„Î€Tc4Às\03J‹¸T}Xf§sR\ÃGµF\í•ô3p<šcò\áqÒ€\Ãl@g’iª9¤f\ÜØ¥(‹1õ>•£m\0¨\Ç?J§mgu\é]&•fY\Ãd`x\êj$\ìošzVœ\0O˜V\íµ¸kNş”\Ëh\n&\Õ1­{[r‹\Ôõ®v\î\ÊnÈš\Ş-©Ÿj²\"ŒSğ1HÉ± c?Zp\ëKŠ\\S \Ò\Ğ¦ ¢—b€µ%:’	E´\0QE\0¢M\ïJ)‰•\ï-\Å\Ä„Fy/ˆlZ\Îù\Æ	¯b=+„ñµ€1™†=j¢\ìÀà¢‘•ƒ!Ã„×¢øJğ\ËzÏ¿*É–\İ\îA8úú×š©\ÃcœWC\á\Û\ß*U¢°\'ı\ß\â­&€õø\Ó\Ôu©j¬\ØV~X¬GCõj±DQLŠ( Š( Š( KÆ–†\çH•ÁÁÄŸ‡Cüÿ\0J\ä|;r-õ›i~	ö<W¤j‹+¸qŸ2&_Ò¼¢	÷\"\ÍĞz÷Q\ØhöD9Ÿ\ëTt\É\ÍÆ™k19/’}ñWE@P( AEPFhªó“÷jJ\äP2¤òK{tmaÜ®’¯`iú—m¤\Ü6B*¡\É\Å[5‰\0P\0¥dø›û\çfwp\íÖ…¸1¬M\æ\\»3nf9\'Ş±‰<Ö† X\Ê\Üçµ›\ÍuEY=½j@p¡q\Í3 \æ—<dõ4À\\Œ\â€wgƒ¥38§•À ¢\äTÀğaLQ´S³Š@Ì€úR\×Ör3@ı¨£qÉ«¡r)‘/˜şõ«il]•““\ÅKv4„n\ËZu©gI\ÇN‚»]6Å™T\"mQÁ$rj¾¢ˆ\Ø;®[\Üô®ª±+	J\æ\ï\İZµ²Ä cñ«qLU\ç¥KPb\Ø\n~) b)’-R\Ğ ¥¢Š…Q@ ¤4´b€E)”\0QE€—¥%/øS\Ö>¿l.tö\\ı+`Š¯r“½°#Ã®c1\\È‡­ƒWtiB]®[¸ÿ\0tœ\çSx\Ø\Ùj÷€\Øqú\Öu‹709\È\Çò­÷ˆ\Ù\í:4\Í&œ«!\İ$gc7«/ùgñ­`rõ®kÃ³oNFDŸ9>¯Œ7ò®’1„Ç¥aÔ\ÔQE1Q@Q@Q@gÂ¼›P±û§ul2rzc9şµ\ër¸^}\â¤\ë®Lyó#G\ç¦yÒˆ\îR:Ÿ\\,\Ú$*LyCùñúV\à®CÁw’\æzÁJ\ë…q1Ô´†–‚Š)	\æ€\Z\Ù\"£€dguÏ©§K‡¤¬Qa\Í9ùWñ¬OÈ‘ø~XÌ›„\Ç^y­µS‘É®+\Çó²\ÅJHP¤\ç\ÔĞ·\Êo¹”\àğ;•Lñ\ÍXœî•°=*³WR\Óó7µ+~”ƒ®)	$\Ó dÕ„^:Th=ªP1@\Çv÷¦“A8¥@X\ç†; \nLvõ§qR[\Âe“ZL¥–l\í\Ë8©ö®\ßB\ÑüµY\\v\ã5WD\ÒT€ò*\í\ì=ë²¶ƒj\0\0ùG5„¥}\"‰a„\"ıj\â\n…9©‡QY£6\îJ´ñLZ§uª\Ão¡¤q\ÑWüh\"ÆJ\×?ı®em›\ng®i°k\00I\\&s\ì4õ)Ñ†¥š\ÄşÜ·R\ì\çŞ­¦¥2]@\Ï\\\ä~t\É\åf•H_Fz0Á\èsÖ]ûˆô÷¤¥\ê*¸¸VPÀñÒ¤s‚{P$¢\ZZ\'z(\ïE \n\\û\nJ)ƒ>Â‚i( B\ÔRŒ­KMuÊš`-ø…MV\Ö`$ˆ© wÿ\0¯\\Å¡\Û&q]\ÏÄˆO\Ø\ì\å\Ã)Sô\"¸‹%\Ì\Ê:\ä[C\á\ê^“}”,Šy¬8ˆ+¬N\ëŒğ\î`šH°Š1´sÕ–C\Ï\â?•vct¬I{¢Š)’QE\0QE\0QE\0C(\ä}+ñµ¨Å•\Ğ\ÎC4L~¼\ä:\ì$\ê+\ÅĞ™|=9U\Übe“C\Ï\èM!œ\ï„n¼o\Él*üzŠô^O¤\Ë\äjÖ²†ÛµÔ’\İ\ÆÂ½\\UHl}- \éEI\"\Ós\Íp3Lp{ó@Ÿ{FB\à¤šdD\Íó\nv5#6ÿ\0•AÇ­fjµ¼\r\n¹÷\ä\nEE]\Ø}öµ°+\0¸óò©®Å—77Jdd{Npxö­J\Ö\Ö3´€{\Ö;\ÎÚÊ¬ˆù¹\Ï\éU\ît*JÇŸM\Ø\ç\ëPGZ\í52†Kbp<W e%OQ]•\Ìe\rQ’Oµ­ÖœMQ©€3K»=)¹\àúS”qHbûTŠ6Šj\ÔÔˆ2\ŞÔŠŠcG_J\èt=,\Í ,§bõ\â³ô\ëVeÛx\è\ZU˜Š5Œ`\äd+)Ï¡\Ñ\Ù\\½cl\0t­8×Œ~t\È\ã*px¬P¤\î*Œt©7*®\âqQ–À÷¨˜\â‚¸¼\Ú6¢\îü+\Zf’\àü\î\ÊÏ°­Cn®\Ø$ŠQj6œ~”\"´F¶)’\Ş`\'	5šö\ï\ØòÕª¹~u\×Il6|ñ+©íŠ­-‚¿1\Ô8ÜµW£¹Š@ÀüûG<õ\ãQ¥\ìÁC	ªı\à\Ö\ç¿\Ù>“E/ccªgiúŠÈ»ğöÑ»nğ=$}=ª¹‘J\Å;{£\"\â9\Ê>\àqœ\îşF¯¶¥>\Ìb\0\àH=}\ë$\Ø\É\ä,Fr§=¨«‘(ò\Ì2tö¸\Æ\ÏjL«#¥´½i!.F	\ë\éW ¹\Ü\Ñ\à\ç¨9úš\æ\í%xcB±_Ò¯XNB’Ã•\çõ¬\Ù&ú\Ün\0\Í[F\Íb[?ø`Y»úV\ÄD\0~4\îg%b^(¤£½£™\æƒL\0œ\ZMÔ™õ¨\Ş@(6iO#]e¥	 ›¿\í\Ä\Ş™±óD\èùô\ç¼\Â\Ë&N	\ÎGJö/Û‹Ÿ\ê\ã$À\Ä}@\Ïô¯\Óñö˜†x.?m\r¬UL\Ğv\ï¸xÜøû»³ù“ùW^¿\êø\í\\o‡U“\ì²(bÏº6\r\ÔLŒşu\×Ú¹{Tv\à‘“Xõ%–(¤µDQ@Q@Q@I\ĞU{˜Õ¤¶\í\ÒD+ùŠ±\'AMHg·ú4¡\\±¶{ƒ^µc8º³Šu \ãğ¯5Ö òµ\İN‡\Í.™<r3ık´ğ„şw‡\ãÿ\0¦n\é\×<fªCfø¥¤)jIùCô¨\0!g·5`ôªÁ·H ©¤\È0\n\æµÛœ<ŠŸ4Œp\0ö®g	1\à\0y®;P/<© oq¸“\Û<óC6¢®Ìˆt\ãp\Ù\Éf\êÇ°ö­\ÓWû¢´\í­#··TU¾jY#\rœ\ãh4®t6aI¸yšuP6\à\àg<qŠò\İFäŠ£\å\ÜzÆª\0ñƒŒŒ(ş*ó-R·-‘‚2O\ç[Rfu—2Â´\ì\àbŒ‚=)¸\é[\ã”g­H:óÒš:S”võ¤4<u\ë\Í[‚/3\0s\ÅEx+“\ë]‘§–T8§ª[±µ8\Ü\Ô\Ğôı›r£\ØúWak@\0*ª\ÄF1Ş¶£Œ\Î\İÙ¤´4ı¸\íOA\Å)©2¸\ß,bš\ÑgÒŸ¼\nC%1j7x\Å\'Ëœ\àƒH\ÓP?\Z§6«knHyW>™\ä\ĞU›.\àc’qMl€š\Ç]{\Îl[\Ù\ÜI\ÇR0?Z”\Ş\êDdZD¾\Í\'ø\n\Ê_\'hÀ\àSœõ«\"mST%­ \Æ;1ÿ\0\n…µËµ\\µ¢ş\rŠ,R‹4f…9U	-TŒĞ‚\rB|B¤\íxO±\ÍXŠ\î;‘¹AVh×ƒ´õÁ?Z±%Wqü\é\É\ê\r[\æ\ã„\ÉPÀ\0UøzUx\ã\0ƒ‘VÓŠv2‘\'jJ\\\Ó_˜\ÙA\Ã€h †\Şv–i\0*6\Õ#½N[š¯k‘\ÆH,2Xû÷§H\áy¤\ÂÚšPŠNNjŒ·j£q`\\“U\ï\ï\ngh\çŞ¹mBñ¥$cƒÁ\çª¦‘s¡mn<‡§\0\â§Z\ë,\ì<\×=€\Åq¾p.Oš3‘€O\ãQ\Íyóœ`b­@RG¦¨g¸Ã©\èkÇ–ms$K\Õ¨üÒ¶\ì59w*I#Ş•Í§›ªA,d2t\'#ƒ–jÒ±™\İ\é¬6öck+™œÇ“”#?¥o\Ù\ç\ì¸=‹Èš\Ç\Ób\ÚYr\ÇaL\î9=ÿ\0k\Ùû1A;˜\ä}k¤²\È\è)i ¥ª$(¢Š\0(¢Š\0(¢Š\0”†f\Ï¥§·\İ5\Zô¤3…ñ|\ro­\Å8%\Ä[Xc¸ÿ\0\"­ø\åT\ŞXŒ\áHdcı“üª_\Æ³-®\çË›iú0\Åbx:f‹\Ä(¬\ç#&s\×úU}’º)iJZ’B«¬l—sòº‚¡b¡œ‘†rjC~\Å,¤À\É\Çˆşü\ä\n\Ş*\'<˜\Ç+6D\ØÑ“\ÔpH¤mMØ¯!+0S”†H\êi—í‹¥FY©\êR#°.\í¼“H×¡–\ï¶Gl>^üW”\ë¥ZòUM¸\Üy<gŠ\ë<Y\â7ƒ}´\Ãy\à\í\àŠ\áH’v]\Ü\0:•­5a=Šl§$R úWdU\0\0z¬Ãœf·2hgŸJ’2Y¸\ÅF~b8­M2\ÔMp‰ŒŠM1»,\ÙY<“Â§øˆü«¹²²q€£·­gi–hÚ\ì|±Œj\é\íb\É\Ç€k	³£\á,ZÃµE^Q\Æ)ˆ1Š™Efc\'¨\áÀ¦3N9\ÅW—p(„w©\Ü_¤*s¸‘\ÔLœ9R~•s¡ó\Û&™¬bˆ\ïu+™Ù–\"!ŒXõ\Åf¾¥a§–pK±\ç-\É5Ÿ©-\ë¿9\Ø=*¤\Ãq¦\Í&ògH\É\Øz\çü\æ´QEKE¡<5¸go²F?xŠ‘<A¯\İÆ²+!Lğq\Óô®j\Éş\Èû¸\ç¨<Ö¥5«NVKw\äfDsƒ–8ü°ZÓ–&L|>1Ô¤•U2\ã”\ëzMNxDk¨[°V<c‚\ÇÚ¸\èô»‡¹\0C½J\"œó\ìy¯l[—NXn#W\ä0\È\ÍD\ÒBö2\\E¹\Ï\åD¢”9=ó\éZ\Z×‡¢\Í=H\Ù\ËÄ£‚;šÌ†o:0\ë\Ã/QQ¡\Ó	s+¬\Ê\Ê9&´¢<+\Â@ı1[gŠ†)\Zpœ\àÕ¥UxU¥PsH\0¤#š“ŠkcÉ¹œ~F\æ\\¯Z[ë¤…N[\Êj>\"Š6)ocÒ•®kšW(<óY3iK9$u=rj’\ë3»g\Ë\ãÖ´muCŸ8=\Í=Q«F{ø~ğbt\Æ}j\á\Ë\â~`0zœ\×giyo2ğW\ß®…V\0ŒS\çfló\Õ\ÓE›o—;•½x«+\Å\í´¨ƒ—R¿Pk®½³0‰Æ¹\é,O\Ûm#vù™<vR‘œ‘\Öoc¤¬\Ãø|\İkR\Åv\ÙB;\ìú\â¨2c\Ã\ê®0<˜½¿\ÄÖ¯üz\Å\ì T-\Ìú”´‚–¨¢Š(\0¢Š(\0¢Š(‡¡¨\ÅH\İ\rF)›\â;Qw\áû\Ô\ãr\Æ\\g\Ôs^oaqöK\ÛyÀ`\É0\çŒuÁı\rz\ÌÑ‰¢x›îºŠòˆÀş[ü¯•\ã±\ÕG±Hö\0sÏ¯4ú§¦\Î.´\ËYÁ\Îø•\åW*D„dKE\0U€\'œ\Ç#Ş©\ß¦_öN\êÑ‘sXú„‡z\"’L‡\Ëlğ@\ÇQI—\r\Êvù’h\ä|ù\Ï\' ¬\Ï\êƒJÓ›cf\æl•#·jÓ»‘mv\ä\ìU95\æú¥\ÌÚ¾¢\ÎAØ¹À\ÏAšpWgF\æiV¹—Ì™‹¹$³\×Ö¯\Ík¡\nZF\\ \Ï\n\Úş‚Ÿj\í¼8,H1ÿ\0×­Ã¦‹O:sóôÊ‚G«v:\æ\á‡\Î\Ü\çÚª8\Úïµ³¨Ã²vV`Ó’K°\ìOoó\ëY“£(\É\\qõi‘( À\Õx~\Ùv†?{®k™·\ä»\í\Ğ,)‘\É3z5©¥£\Â¦B2+z\Ù8\éYz@+Œc\ïVÕ¸ùGÒ¹\Ùsdê¢¥š£š\nX\ÅFñî©ºÑ¶\\Ï–\ÛwN*”\ÖyGĞµ¸R x3\Å2”\ÎvKIù\ãQŸN3Q§‚\ãkvX885[\È\Ø~Cõ‹³^kœ…ï‚¼öy-œG(\'*Ç†ƒs\á\İB\Øa\í–\\wC^›\æ0E \0*ùØ¬q>\Ñõ$º\ÔbX˜2\Æ\İr;×¥>£o³U?CX¯3€¼¥R–¼“\Î}MK“dû4Ùªú¤±ˆÌªğYº­s\Z¥¬S‡±‚X!\áª\ÓEœ•\0\ÔFñ\åŒ{qB5„yK\Z,H\ì\Ç\ê:\Z\İX\Ê6j©§Ä¶\éò!T¹\Î:\Òo˜\äR&l¹\0\à\Z²*FTÔ‘\Î÷¡”\áMKU/e»°\ê4Ánpş%\Õ$’ñ\í`$\0v±®NK\Û;pÙ¸q\É\Úz\Zİ»·{˜.\îy3dw\Çù\ç\ê¾aù‰\ç®+X$o)r«m¿ˆnd‰\×L\Z¹€\È\0U­3\Ä\ry/–\Öh\Ä|\ØV\ëOƒU´ÿ\0„r\â7¶’Â´¾ß¼*{s\Ø\ÖgƒD‰\âk7Û•b\Êr8#iªi)³£µ\Ôl\æ¸1¡6ót\Ãpµo\ÛK4$nrXpGCR\ë^µ\Ô\í\ÉTX¦*\è s\ï\\m\åÖ—q.™vwÆœ†\Ç ık+_b”ùü¶øó\ê+.ùz†˜\Û\Ø$l~+ÿ\0Ö«Vó\î·\r\É\à•=\Äi>·H\"¶yÁ,§ù-J\"LĞ½R\ÚxB¤–Lô\ã5fÈ–´Œ‘‚T=)’\Æe‘DT\ã¦–È“i\'$Æ¿Ê¦wĞ´)iJQTHQE\0QE\0QE\0\ÓÒ£%D:\Ò\Õ\æ^(·X|As\Z\áC‘\'>\à\\×§W\ã»F]F\Şô•\ã1Ÿ|E8\î3sÁ—-q¢s“…G\Ğò?tu\Ã|?¸?é°¶~m¿€9ş•ÜŠ\àQE \Z\ã\ä8\ëXÓ€Q\ÃG‰ !÷g¨=•m1ÂšÊ¹$\Ï\"vu¸\Ç4;œOŠõ-’\"\Ä\ä±\ç+\Ùıd\×:ao³G\å£\rÿ\0y¹ı\ç¸ö©\å+ªk¾\\\Ò2Ä¹RO÷Et\Z}¬~yûJjg\î¨\íW±\×“i„bRªó3p9÷şu­xñ\Å\åŠ)8\ÆL’g©ª\×P)X°ba¹W¸³LŠ\ín\'Œò\0#­M\îUŒCd\'ºc\'«½\Ëq\ëúV^±l`&<d&\"»+»h\Ñ\Ã)‚;§\ë\\¿ˆ•„«´|„œûUÁŠ[ö\n\ëşğ¯H\Ñ\×+c¢×X³)¯GÑŸuªÃ“EAGbÖ™¸%\ÊôùÀúV\å¿\ÜJÆ² K0\ä¡\Ï\á[°V\"™mzT‚¢CŠ”sA‹:S€¤œ)ˆ1HE:—m2J\ï=\0ª¯«DŠ£•‹R2\ä·V\ãª\ÒZ¸û²Z\ÏWtÁ \ÑH\Êx&\ÇQ5•Á2~•®x\ãšXzR+˜\È]-Ø±÷«\ÙB„£ñ«€\ĞT±\Ûn`M0s#7zª\ĞAÚ¥ò€œ# \Í\Èt}*QLQN( q¨.|L¾£63HE;v<\Ş\ä]Z%\Ä*H\Ù\Ùv‘÷zƒ\\|\Ú\Ê1dM\ÊÇ ×¥\ë\æ-JB~\ä‡pşµœ«\á‡€z\Z¸\Ê\ÆöRW8H&¹²u\ä…\Ğğ;ƒô®óÁ\Ú\\÷+ªÜ±(£z\â‰-V\ã\ãP\à\ç$u­[{‰\áUùC¢Ò”\îL©ö:I\çŠ\Ş’Bª’y\è+Ê®RKV[w$‘\ÇPzWm<·Q!Y;«\rd®\ës¹”‚OğŒ\nIØ˜\Æ\Å\İ5\åò¡Q\Ë€§ò\Åtv\Ö\è/N§%˜ƒÔœ\Õx<›7•T´ƒhQqıkb\Ú%‰HnNH÷¤g7©0yÉ¨--\Â\áfUú\ÅX\'h\ÎzTpg™ü\è ˜t¥¤¥¦ ¢Š(\0¢Š(\0¢Š(µñ\Z–£\Ç\ÏHW5\ãxLš—0Ì§§bÿ\0\n\éj†³iö\İ\Z\îÜŒîŒ•\ã‘úŠ:Œóÿ\0\Üy\Zü’¤¡ºq^;Wi\Ó}šö\Ú\àü»$\Ùÿ\0õ×¯£‰\\ta‘U!±h¢Š‘\rnš\å|W{,zhH8š\åü¸öúw?•t\×\Â&÷±\é\\^ \ÒI\ÔÍ¾”•\àgœ}JĞ·\Z1´\İ;\Ë\×eFMµ¸8-Œs]\Ò\î;\0TVùxô\ëOğİ¹¹ğº\É ¦‘œpH\É\ÅRº\Şnwdı\ãC:)\Êú¥]\È\ç¹o•Q\Ô4¹`YÀ‘\×8\Éş•¯-¸G°)\Ë`ö«03Kqóóó\È\Î:…+š\Ş\Ç)5Üª¨¯Ø¬½Jc=°b2\Û:\êú\Õ\Üjvp\Ë\å\ÆP-ó689\ë\\«	„,xÀu\àJ¸±\èÑ‰le \×{\áé‰A®-\â\ÚT¯Bk«Ğœ \\\äSÂ¶†µ¡ò¯¥CœğG\Ó&¶í˜‘XU5eo\ïFÓšÖµnµ‘3\Ø\ÑCS-@‡©”óAƒ&)\ÔÁÒ)¢\nZAKLAŠB)Â’€#+š£t©\ÏZi ¤\Ê\ÆŠO!sÒ¬IHwd\":\nxA\éO¢€¸˜E/j¥” Q`õ\Í-P#;Sµ[ˆÕ»+Ú‰2²)R:•\ÔÈ¹ŒJ©%º\È3˜Pk\Ø\çü™ zûõ©£w|\ÈA\Íiù8aŠpµBAÛš\r9Ê‘È¯ü-ùU\ÈaFGJ;uZ J¥\"$‹Wøw)#\èj\áÀúu¨ö\à‘Ò‡m\ÌP~4Ì˜12g¦\Ş\Ø\ïR Àü1@ı©Ã¥µQLAEPEPEPi„a©ô\ÆûÔ€Z?•´ñ«\Ø~Ï¨][’C\Ç+\'<wÀşb½SB›\Ï\Ğ\ì¤\îb\0ıGÒ¸_Z,^ g8Tš5|ûÿ\0‘]W„oEÖš\Ññº6\Î\ìÉ­%ª)\ršAFqšÌ’©\'—d\ä	\à\ï\\¤\ìC]I,jc‚7c¡¼Š\éu@\Ò-¼JÀ˜g>€\\¡r\Ò\Ù\Ü@\Ä\Æ1\çx\çE4\Ö\ÇYa\nÁ¤AÂ\0+RŠ9u3:\0Y?\Z\è@ı\Ì|g+\ßşªËµ€\\\Ãyş²VÃ\éú\ĞÊƒ³*¼+‚v\à³cŠ’Q\\’X€@ô ü\íc+\×\ëO–ew9\n˜\ëA\Ñ{•\î6’«‚\äñ\\Şµj\Î\ê\áU8ë’n\ÂZYf\Èch=‡?\áLhY­›`\ÚX¹\Ïn08ıhZ\"\æ\r»1‚:\äVŞ6\Æ;ãš¡t¸Q\İ1;/\Ôv«ú^p@sVŞ…½‹—¥£d\ã‚Á”\ã\è\roYH9\Ç\\\Ö5ú\ì[G\Ïü´ÀüA­;˜\Õı@¬\È{\Z\Ë\ÍN*º©Òƒ\nTK\×5 4\Èc\ÇJp¦Ò”\ÈŠ( \ïHiOZNô\0\ÓM=iÆ˜~”ŠB\æ“4\ÜÒ‚(\ê1IšRi¡(¤¥\Í\0-.8 Ó±@†Á^¼ÕƒP‘‡4˜\Ó\ZPNX\ÔRŠp\Ğ;€Qšx¤\éKL–)\éJŠ\0¦çŠ‘~\è B÷¢Š)’-\n(\0¢Š(\0¢Š(\0¢Š(µûß…IL~¢A\É\é\Æ{\Òi\Ô\á¼l\ÂK¥4m\Ç~£ú\ÕoÜ˜õi-H\0K\Æz’§ÿ\0¯]/‹\í–\Ì\ì9…–AøBk‡ğ\å\â\Úø‚\ÍßŸa\' \ÎA\çò«½Õ†z­\'©¢†\èj	3ueXd\àlm\Ç=}+˜q3\é¶7!f7A›<nûÆºR5’\ÖL®\â#b8\ìk8\Ú;-5…\"\á>R{\'Š\nL\ÜI\ÔÇ´Æ¿0\ÇQ\íPÙ¼Q\Ûn%B¨û\ã&“P›Im\İB¯s\ëXW·f==¡xŸ{Ë€CN½ú~T›VÔ’\Ö3rŠ>n¼±=G\à*¬·Iª[n¶¶7Cv\Ã}Á´õ÷\Î+•Öµ–\ÉUæ•¤\Ïp0=O\ã\ÅtŸ¢Š}òV\'s\\`ó\0\ãM\Æ\Ê\æ±vZ—\í\îck`ıò}ª\×Zœ\ï˜\ê\n™öW^€Z\ê\"\Ş&eGRs\Ğv\Ë?q—ò:j-\Ò™\É=Nqı)E\\\İ.¦¼÷Pİ¼©\ëW¬	\Øq‘\ß\Õ\ÏiXó\äR1‘\Åt6jŠ õ¯¥9+\"\ÅıY¿ub½qp†¶4\á˜ûV«\"¢\Ún\ê%­\í-\Øa÷¶jlD´‰¤•2TCµJ´ŒY\"Ô€\Ô@óO™—4´ÁJ)Š\ÃÁ¥¦R\æ‚C4†ŠBi\r!¤\ÔN\Ø\çl\nª\ì\\\àP\ËHx³`TÃšlQ…ZI\ÖQ´€p%©\ÜÓ‘F*@ \Ó&\ä#vjE\ëO\ÛF\ÜPR\Ò\nwjdŒ=j)¸ Ô­Ö˜\ë¸b¡Šj^\Õ\nqRƒ\Å!±iE%\Ä.*Eû¢¢\Ï*ô	‹ES´RfŒ\Ğ!h£4™  ñÖ$€95˜d’òm°\İ\Æ6‘·’)\\\rLæŒŠ\È2Om>b1»qõ«0\Ş3D“ÜŠ.\ÊcñŠ}2CÀ iİ©‚Ÿ@\Ê\×ö\ÂóO¸·=$—ô¯\İ$Ñ£;I#<ƒÿ\0Ö¯j\ï^I­Û˜5\ëø»	\É\\Çš¨\î4z­´¢{Xf~b¦5\á{¯´\è\ç ˜Ç–q\í[j^\â*j–µ”§\Şp+4&\ÒÅ˜+\æBw™\ãù\Z\è¥\Ær\æ¹\ÈUP\İ\Ç Q„±¶0>S@\Í\İ\ãO‘S\nUqœ÷\ÍR\Ô\ãó\0F\Üûrª\Î\Õ\ëëšµª€,¤nOÎ§¹\"«_\æ\á&F—\ÊùV!·rI4!q\âH\î»]cy_nö9 }}ªÏ‚|Ki¥›©<±3„|¡º}:j¾¾#:´\ĞÅ³dñ“œ\à“\îpkvË’1ÖµQ\æ‰[•®\ß\Çwzòˆ4Á2yƒƒßŒó\Û\Ó?…p\Óİ­Æ®pn\ìc>øª\Ç©ˆ\ÅeV¡\ã‘¯>\È\ê¬AIP\às\ë]5˜¹\Åsvı\äp+~\ÚUŠ\Û\ÍwÀ\\œúÿ\0g3n„º‰ûV«mj£;F\æúWYj6Æ£\Â\×7¡\Û§–òPw¹\àz\n\é\áãŠ†D\ßBÀ\íR\rF•(¤b\Å\íOZm( D‚œ\r0S…;’:ŠLÑº€j7`)ñU$±\ÇjI\\Y$,vÎŸdri‘%[Q\Å$6\ì8t¨\çM\ê1\ÔT˜Á¥=)V!\Ò>£@–WÀ\î53Ä\Ô\ÔfÁS\Í+u\"·Ö¬n$ò\ã¸_3û­Áıjğ60k\"}&\Şq\Ìcp\èqPFn4ü¨%\â›’)\\§½€\ZuU‚a\"\î \ÔÛ©\ÜÉ«\nO&“ÒµA$øn\0‘!\áñRU!)/“VUòhE4KG€\Ò\Ó\éRD£snjjd° ô¢ŠQE\0S[v\ÖÛ\Ø\ã5š¬\í¸(Û¿PS\Ó#½+ˆ]N\á¾\Ğb\Üvª>µZ\Ş\ÖK¹6£_\ã`q\Å>[\é$’\êFP¸¶\ì\İô\Ï5 ³Z\ÙY±„\îU=3\É&§v+–­\Ñb\Ë\\\áN9=jZ­mqùuo¼Á<ƒ\éV7¨\ê\ÃóªC\n^&¤¦\È2†˜\rZx\éLZx¤0¯<ñµ¹µÖ£¹\\\â\ác\î¸\èu\Ëxò\Ú4S\ÌR€O `Gó\Å8\î8x\ç}İ¹epøúğQ]x¯<ğuö5¤F Q\Ğ\ã‘^‡D·#Œz\çµ[pf]œo-º’¼#]	\éYú°etÃ¨\ä\éHFwÛ¡¾\Ò\á¹\Îö,¹\ìÃ·çšŠ\é\ß\Ï0U³€\áF\ã\Ğş4—ñ\Æúdñ¢\â\r\ë)d\êA\çƒ\ìsTüMyöm5\áòy/Àş P·)q¨\İ$\Â\ê\ãI1\Ü2zd\çõ‡×š¹p\ä)ùx#\"©ôĞ´E0nœT@ñšq8\Å&8\éŞ˜“:ı9ZX*:Ö½…°3,\Ã\Ôğ+\'\Ã\Ï\æ@ bk|/—t®:•„Å±\ĞX‘\ã\Ğş•¡¬\Ûw\é\ÎsWĞŒqY™²\ä}*qÒ Œü¢§Q\ÅLp¸ t§PH€bœ))iˆZcS»S_¥*\Ê\Ù8¦\0ZaV–\åQ\Â÷44!Á«J>^9iM‰fŒ\ÒfŠdˆi¤\âœzSZCíƒš‚V\ÊäŠ†EW“€h.#m—•_ºyÇ¥[ó@šÎ¦\ç\Ô\Ğ7—d¹B„’I\ëP‚3OWÀ -m‡±\äúÕ‹g$sUs“\ÅKsš£Ah\'|\nz.\ï˜şT\ÌY$#©i¨0>´\êh–QE15\Ü\"3±@\É4\ãTuR\ë§\È\È3ŒdzŒ\Ò\Ô\n7š¬\ÅJÃ„¡\Æjƒ\\—U}\Ù\Èšµ§Yı©\Û\Î\Î\Õ\ì;úV”–„‰V0k€\àq\ì*lØ­s3\ì²²\ÈTù[8²\ÏJB† ‚¿Z\è·(aĞŠGE‘p\êz\Z,2-­¶”¸…A’BCõü3T˜(f­»<\åI®\ÔR |¤•(§a‰H\ßt\Ò\Ò•@1iâ˜½qO€+3\ÄV‚û@»„‚N\ÍËU\ä*Ó €Ad hò\Z\ïìº­” ‰F\ìÇk\×z€GJñ¹\í¥¶m¥1m/—·?7Œş•\ë\ZU\Ç\Úô«[ù\é“õ\ÅS*E³÷MB\Ë\æ! ‘\ÍJ\Ü\Ôdüø@H#œv5$œ½ğ[->E\È\Âîˆ«\Óó)Ç·5\Ëx²úY#‚\Î\ã\Î9\È\Â\àNùük¢ñ]¹+˜Áh\æõ)\ÎAüO\Ç_\Éæ½«±D6¸”$\ëø\Õ\ÅjZ9\İFEÜ±¨#f;ñœzVq9«WÒ‰/&~>gc\ÇNµH·Z\Ù\r\àâŸ*>¤g­J§q\äf™\'G\á‡ºdñŠ\ì7B\ê;\×\á§+z\ë\ë\ç]ü1\Ë5\Ï=Î¸lOe6\è‡<ƒƒZ‘0\â±P43\riA\'³H›€3V”\äVr?\0Š¹ú\Ñs\"\Ïju0iù¦@¸¢“4f…\íLñO\Í1úSBS´\\ı\Å\â-\ë3Ÿ•}ñ[÷u«.-)%\\8\Ï\'¨¤o‘5¶¹f\Ñ\àH£pzVŒz»t¡¬9ü5	”\É\Èq\Ó\Z[}#Pº°…;ŒYĞ‹ØÊ¤1‘ÿ\0×¬§mR\Â`@\ç\êAiq\ZP$Ò‹È/´&}hó\Ó=+®Œ‘2\ç¡\Ç¦7Ch%X\ß\ì†‡Ÿ\ëHşTƒ­gyª\ÄƒR4X9lJQ{Tf0A\äSŠñš¯&T\îv\Æ)\r\"C¹5—óŒ\Õ\Ö\"cSœ½§\Ã\Ü\ÊŒ.y¤ZZjkÛ’\è¤\ç8«ñ U­£\Ë}8«À\08ıh1“4\ŞH\ì:Õ•LIb4\ÇsOªHÅ±h¢Š	\n)3\Í.h\0=iª\èU”2‘‚zu%\028\Ò%\Û\Z*E¬»\ë\ëKy\Ì*dF~ğ>£½kV­b±\ÊeQÄ‡\'\ëI5¾ ’\Ü$\"i†\Ş	ÀŸJÚ®kM¶ó®#C \'ñ®“­$*G¨¡%\Ê\ê*n\à¶\É \r\é\×ùV©§\\\ÜŞ´–ó(9_~”\Û¥¢Š)û\Ô\êhûÆœ(´QE\0y‹-Ÿ‰\åeû³(—=óŸ\ä:\ì<#t&Ğ£¼LW\é\Îk\ÇÖ¬\×67\n¹­zõ\Èşf\\1š\îÕ³÷lUt)\ê®v˜,yz\nl\Ò£W’qJ“;A\Ï\0U9\Í)#\î\çjã­I%yl\ã\ŞDœ	A8Ï¡¯\'\Õk]N\æY	;‚A9\Ï\çÖ½n\î_!œU\ã¾•\å^\"¸C\"*\0û‰cŸ½Àü;\ÕCr\Ñ\Ç\ÌArG­BN*G\ë\êj\"x­Ğƒ ‘\Í>&;º\Ô§Å’Â˜/††\ë\ÙqŠô;%5oÂ¸\r¡\î\îÆ½\É1\Zñ\\ó\Ü\ê‡\Â>Xr:\Ôh\Æ2«\æ0G*a:VCN\ä\ĞJ«±¿½b¬\à\Õøe\È	\Ä\ÖG©Cf©G%XW \ÆH›4¹¦n½.i’;4\Ö\ïKšB3@\Ş=İ©bˆ/jœ%<(\r²\"€¯J‰¡5km3m0L¨«€GcÚ­G.>\\R\\S|¼)rSR©W@G½V{œ!\ãµL–¿\"‹‚m_\Ùò\ÄX«o\Éû´\åŠq‚cÚ´÷\æ\Ã\0Qr¹Ùui{)X‡sŒš‚{B\"(\ì\Í\Æ2\Ç9­ö*³fd˜@\ã&cÁ§$Q¨U\ÎzV½¼;W\áN*\ÌKŠ‘\ÊD±\Æ=\êhWsn#Q1,Á\ï*\â(¯oZh\ÂL\\€2x ‚2:W\âKf\Âgc’9c\n½¡\ê»<»9ˆCN\æ\\\Ëc£¢ô€ƒ\È9\ÔZ(\íI@RŠ°¥\ÄM‹•nµ\Îx£\Å\é \í‚\Z{§\0ı\Ñõ®O\ë\Ïr.Dˆ}\Ô\Û\Æj”—-ŞŸ¢A$—3,c8\Ç\æ~3ø\×\r­x\ÃP½”\r0M–cû\Î}Mqš¯ˆµ\ë£5\ÔÅ¤<\0>\è\ì;Vÿ\0€¯º\Üi6	d`¤úúÂ¯\Ùò­F‘\Õhš¸ò-Ö·ª\Èw.|ˆ›ş\ß\ĞWX«\Z(P£×Ÿ\çF\ã·75‹eXÑ£½w¦fGœÓ‡Ji?1§P1h£µ\ãq6…+ÿ\0L~x®C\Â&\ß_EcÄ€©\Éõ¯A\Õ-¾Ù¥\Ş@K\ÂÀ|qúŠò+7{kûY¿Š97¯^j–Å­b¹}°‘	õªñ\ÆcŒ36	\ä\ãÚ£‚o¶¸x\Î\è‰\ÜÄn”­(šñ¡\ròÆ¸bqREŠ·ÀK‹pm\Ç2\Ù{š\á|KnŸf½œˆ\Ó\å!q‚Xp?+»\\Ì\Ê1¼”Ï°\ë\Åp^\'ó`Ó§%¿u4»\0ë?0‡ô§©HóòãŠ¬çµpÆ¾fXw#­Qnµ\ÒT“»•3=¤Fk”T’qI‚Õ¶‡–\"\ìƒù\×kd¸rMsZ\\J¸85\ÖZ¦W4÷:ú•sô¤hóÒœŠŠ’ngMI8\æ¡FhŸ¥j<`Š¥<)™fA«jı9¬Xİ£|\Å_Šl\ãš(š\0÷\ÍHŠ¬\rJ®:S¹“D\à\æŞ£SR)\â‚\ZN\Å4sN¦!\r%;\ZFFi3´sRcÚ˜ËÔ€LƒÒšN)‡ \Ó	&‹•aI\Ïz21LÁ\Í\Ô\î;\nM A”\åCŞ£š\àb›»oAš‘¸Z–\ÚŸ2Q\Ïğ\ĞCc\í\áØ»›\ï‘Ïµdx›R\Î\Ã\Éó6\É&	\äğ¹ş§Š­\ãe´{;s…%2o\ãû£úr+‹\×|Fº²\Ç>Í¾b.\ä\ê3ıM;É\Ô\ã_ÀÀc\Ì~y\Ï9şµr[\è\éaAóñ¸©\É?şª\å!\Ô\ÚkˆVF,D€d\0\Ï5n9\ÑõÀ’z\Õ(˜´vÛ·Z”ÁY™Q[\Ëœnl\ã\ç5\ÛZFa´†20U\0?Z\ãü)£\Ïq*_\Ü)X#bĞ®~û­ô\æ»nzTš\ÇmBŠ=+×¼g¥h,\ĞK!–\ïnD1Œşg ¦•\Ë7\å–8#i%uD^K1ÀÀx\â4şe¶—\Z\ÌJ‘\ç¶p?\İ\ë×¼]©kÍ¶YvÀü° \Âş>µÎ»\ÔŠ\Ö4ûj\ëS¸º\Ë4\Ò\âf\æª4\ÌÇ’Hú\Ò\È\æšO+d»\0\ÙpúU­#R“N¿‚\ê3‡‰\Ã/¥T=*\"J6E\r]X.}¦_Çª\é^\Ä\0Y%A\Î\Ó\Ü¥NW&¼À~,\ZE\Ë\Ú\Ş3Iqœ\Ë6ş÷Ók\Ø1¼B¥H\È9\ë\\“‹L²\åè¢‘™}\êQI\'(p\ëA8\ÍzŞ€ô=k\Çõˆ±{\Ül•‚ı	\Èşu\ë\ìB‚OA^g\ã(U5\Ã&6™”1>¸\âœJ\Øønqÿ\0Õ´ª£pS¸\ç&¥´ƒr4»|\ì]\ÇC\É\éùV….šM;\ì¸ùb““œ\ätşµ\ÓıÓ€}Oÿ\0^“\ÜV\"VeDa\å$lK’[?S\\WŒW\ìVV¬˜W\É9?{\å\0Š\í4ödŒ\à1?Q\\g°–ñFÿ\0<Š]Aô !N;‚<İ†c!\Î‚û˜õª-÷«Bñ· cT|š\Î<š\é·<3jn/\Ë\à•A\Ôz\Ö \ä\â»\ß\Ù}›OÀ	%;\ã83vE\ÒWfı”AJƒ\é]\r¸ÂŠÈ¶‹q[W+z\'\"—m9¥HW½W +Q2g9«{iŒƒ­!¦gI\0 \Ô*Z2\éZ,™â¢’!ŠE©\rŠ`F3V\Ñ\Æ=\ë0¡Œ\är*h¦\Íjæš¿¤Wªk\'\"I\Í;™8—\Ğ\æŸUc“jÊ°4\Ó3jÃ¨£©¥¦!1IŠuF¨\Ìu«4„P;•L$(Œ\Ô\äSzP;ŒÛH\r<\Ó\àR\è\×Ì—‹üê¦¥\âm+R¶µ¸Â¬\ÊX\ÈƒœûVßŠF™\âC\îhÔ\Ù\ïõ®#\ÆZ\É\Ôõy\İ\Â&QF{J¨£92\ê_lñ\r\ÌbUx\â\Â&Ó\0\çõ\ÍsSL~\Í©\ÉUÁ‰¢\êbn99ş.OJ®ˆ³·\ß²Fd°¬²LJX€[\Üqš\Ø\Ó\"\ê\\e\É\Î\Ğ21\é\ïÒ¨é–—O%¹skİ™\Üv\Çs\í]\ï‡ş\Åo<piZg\Únù®g9>ùT\É\Ø,jiºn£ªm’ñ\æŠ\à##\ßò®ª`±¶ a#yf>É©\"y`JT¾9*0+\Ê|\âó¨\\6“c#-´,VgV\âVôú\n˜\Æì´‹¾+øˆ]g°ÑŠ”e\Ún²A÷\Ûş5\çJ\Ì\Å\ä%™¹%¹$\ÔM Á¢.y\ç5\Ñ¨Œ‘\ä¨\Ù\Í34•W\ÅÈ¤ó):\ÓH\â.OzBr:\ÔfŒ\ĞÕŒm‘]V“\ã\í_J°[XeC\Z’@‘wc\Ø{W%FjZLg\ÔôQErˆ^ÆD¿tzA@¤,*^\Õ\Z\ä)\'­3…\äı\Õ5\Çx\â\Ïu…\Ùp†?Q‘ü«­”\î\Â0ü…eø¢\Û\íz4ÀrĞ©”c\Ûÿ\0­š\ã\ç\'\à»\Ï\'VÈ’\Ãò0p?\n\í\áEtg\Æü\Ø\Çjó\Ü?@\ç\ÚNqÁ¯OTx\n8R {”\äTˆ\ä_$ÂŠ>A&\ÏOóš\àüv\ÎÓ‚Yœ÷(\ÃùWw!m\ÌFG\ÏÈ®7Æ“tö¶T$Š)~U\ë\ï\ËQÄ-€¶\ÇC¸q×ŒUŒ\Ô\×\r‚\Ğb Q“À?J\é]\Ò\íZóPŠ%RÀ°İÂ½N\Ò ¸\0qü«šğ¶öX>\Ó/ú\ÙG\İ\Ç*+°µŒ\ã>µ…G©\Ñ\Ù\áAÁ­(\ëÓ õª±§«‘Œ\â±c‘aiâš¢)™±vƒ\Å5—i\â”\Ğ\"» \ÆGZ–¬²ñ\ÅD\ËI¢“*¼`õU\â(rµ¢\ÃÚ¢t\ÏAAjET“\å\ëR¤õ\ÄrH¨\É+×ŠEZ\åôŸ­^ŠPÃ“X¡ªT¹(y4È”.nü\Ötw9š´’ƒTd\ãb\ÅÀ\Ô C‰£5nh\ß@4\ÓKœ\ÓY€^i\\\'ğ¬øŠ\ßF0Fò,¤`;\Õ\Í[Y´\Ò,\Ú\â\å\Æ\Ñ\Ñwr\Ç\ĞW‰\êš\İÖ«ª=\İ\Ï œ \ì\àV\ÃcOPÔ¥»\Õñ\Û\æ–M\Ç“Ú³õ-²\Ü3†^s\ÍGÀ zÔ²$,¹Vb¼\ä­¹R!¢º·˜FX9QÁSœV\å­ÅŸ¡©\æjRJ†2Ã”AódzqPË \ÚÁ£Zj2L\É\ç;.\Ï\ï\0z\È\Óm¡i&-°÷+=†x©dX\Ø\Ğ\ìöq&¯x–öıv—~{\Óñ¯O\ÑÆ™Ÿ•¦mò”ó€z÷\É=Mrº†#—l\Ó\ÍÀ\0LpË}\Ïøz\×_¾\ÛJ°wò£‚\ŞY•;õŒ\Ø\Î\Çúÿ\0ö6€öñ>Û»ÀcŒ¡ˆş\\}k\ÄYò0I$VÏ‰õ»R{\é\ÆV%\î¦r?\Z\çòI\æºa\"‡M4„óI»¬C‰ \Z:óI@—¨¦R\ä\Ğ!J\æ“\ëK’h#\"€¶›Šp¤\ãÒ†3\êj( \×ˆ\åûŸ1jI?ÕšM\0<S0I<ñO¤^8¤1Š\Ê\ÌG@\0¨. 3[K\0´Š\Ã\èx© m\Ê\Ç|\íü\é\ë\Ë\ã\êhÆˆx.ˆ;w+‘øƒ^·g8¹Ó’\à6w \É÷\ï^w¯iR§ˆî£‰N\ÍûòF\0gúÖ¥ŸŠm´­-l	&ûÀ\àu\Î+F®t{9I]f¢²y|\'lªTŒô#<ƒÇ¥y\ï‰o\í\ã°y¤iV\àI#\Æ1‘¹‰\ä\Û\0t©\î¾\"\É\"²Eo¯¯&¢\Ğ YÓ®¯\î¡,–\ç®\0\ÚNy­Ë«±i]s\Í\×ú˜Ë±\Æ\08\ÎN?™®³IğªÚ‘5\Ö$¹\ãhS\Â}}Mki6\";4\Ô<¬¹$‘\í[Á‚Xı\î\Üt§)\Üq¦–£a‡\n \nÔ‚<P\ÃÈ«\éfS\Ğtk\ÅZ‰j$Z8¤KdÀt§Š‘N\ÅaG4‚—\\SY§”´]”ŠˆŒsW6ƒP\É\"“+²f x*\É\Í\â‘w(´=‡Za\Çš¼ÉšaLö\ÅR*)t\î~•:]0?JVOj‰”f\î\\[\ì“R‹\Ô=\ëVm\Ø±õ\Ùt»’¬\Ê\ËAÁÖ¬\\‹s±{\Ô\î\Ê>¦\\§÷ÁÏ¡¯$¼¹ü\×·\ÕÉ¦‹™×¤\Ïÿ\0}VÊ‘4O¢\ç\Õm-\"/5\Äh]\Ì+”\Õş\"\é¶ÑºÙ—¸—(>\æ¼x\Ì\íÕ‰úšPüU*h9\âjj\Ú\Õ\î·vn/%\Ü\ã\î€0{\n£»\Ì¼D94gk†­RH–\îY‚\à‚\éEh#¸&<‚zs\È\ëX\Í\×#½X‚rƒ÷©’uWWR\êQ\ÛD\ê6ZE\å\ÇU§Ü“ı+sCğüº‘Š_\İÀ¤ŸŸq\Ø\0}»\×kz\Ã²a\ãuú~•\Ü\è\Z\â\ŞD¡\ØFûz©\Åe$ú\Z\Â\nZöŸ§\Ûi\ĞaŒ¨\ÎY\É\Éc\\¿\Ä\İJ;O\r%“Hw\İ\È1ü#’­{ùUp“ß“Y\Zök\â[±qu4\Ñ\\\n6chÂ¢1³+\Ø;E((A\\€GñL]\ÌHš\îo~\İ$G\ìW)pÜŒ»Iük‘¿\Ò5\r1ÿ\0\Òm%„dŒ²?>õ½\Ét\Ú(’sM§O4\ÚfMXUcŠ^ôÁÖ\ØĞ„:—&£É¥üi&h™š3@+L\'œRğh\ê:CKA®1\rõmô¨\æ§¸~•Z6\Ïj\0›µ!;W>is\Å6F	;É¤8\ê\ìs:§‰“UŒn.\ß1\äMsŸğŸ\Ş ^¿À*õ\ê­\ÂH’(*À}\ëÍ¯O“q$yûŒTVŠ\'©\ZPŒn\Ñ\Ñj>(¸º\Ş\Îûœ€\0q\\\ák©Ê -$€|ö«ºfwªÈ¥·Ew#ùWs¥hv\Ú\\! P\ÎG\Ï#ujnI!J¥•‘\Íi¾gÌº8\Ç#có5\İ\è\Ö\é\rµÅ·–Rª ‘\é\Û4‚,Ÿ†*{L%\Ê1U*~Sò\çƒYJM˜É¶dZÚ‹]\ÖÄœ\ÂJsúUô¡=\ÅY¾´û>¡\æ!]’¤`ƒ‘õ\í\åB\ì$  º\ã v©ô\ÓÚ¬ª`f’4\ÍN\éŠd¶1EOÈ¦\ÍJ”\Ù\"ŒS\Ç\"\Zu\r#(\íJh ´\Ú¢\à:šÜŠ\\ñH}©Pz\Ó6ñR‘L\"Š#\Û\ïHS&)¬qI¡2óPI…«x\æ©\ÊÙ¤Z+Á9¬]tì›¾¿\ê\ÛùV\ØÒ±üEì›Hÿ\0V\İ~•QÜ·±\ã¤bŠq-2º\Î\'¸\áJ)½\éE1iÀs\ëQƒS G­*H$t¦µ³V\n\ã>\æ¡u œqÖ€°©!I7Á\â´,oš	–H\Ûi\Ï \Öp\nHù€\Í;aLã§¨ ³¹\ê:>ª·Q)†­\È\ä\' \ã\'¡¯%\Ó/\Ş\Òuec\Ï\Íwö\Z’\\\Û$›†\áÁ\ïR\Ñ\èÓšš:§$\ã¡ïŠšM—c”+¡\êd~µ›¡Ÿp\ìFjĞ“\'¥q05/\é—ñHö{­® òŸ¨\í^mªi—:M\ëZ\İÅ²A\Ğöa\ê=k\ÚK•p\Ê9ê¦¹£Á\â=5¢‘vÎ€´N\0\È>ŸCMÔ§us\ÄAæŸ*[»)\ì.\Ş\â&T8*G?Z‹ª8šiÙ‰KŠBOµ AE!¢€še-\0}QIE\È =\rQ„°÷\íW«.\æ\î+B\Û\ÏÍ“… q‹nÈ·,ñB»¥uQ\îkÿ\0ZYbh\áRñ¸÷¬«ûù.˜»c# ôª\ÊÁ‡\\\Õ$z°©Y\È\Î\Õf¸[wx7\Ç\0V•¤›“qw$œ\á½k°*:\Ó6a‹.3\î*µGL\ÕÕ‘n\Ò\Ù\"@ª8ªø@@\ãéš£k*—¿qZQûVOsI§¨ó\íO\áN;úTŠÖ¤U\íI\ØK]Y \áÔƒœ\ï\Æq•ñ‡iU~v\Æ\ãëŠ™#T›y@A\áH5(‹É“Á\\\ç\æ#¯¥\"nĞˆ”üS¶OzÁ¦+¢ÖŒP)Â›ÒŒš	E <\Ò\ĞM\Å)4™ aKšLıi3H\È\ÃÖ—­%0£cO\ÍE#q\Å&R ‘€âª°\'š’S\Í35&ˆhÂ©®{\ÄLNŸ8Ñ¿•t0\ny®k[fx™9ö«\å\Ú\èò ŠabxŒLõS]‡Z§) -H¢Ì‘øÈ§F\ÛH4\Ô#½=—ö h²~aÁ¨\Üd\çi>¸\ïQ\Ç!Z°\Ã{ûPQ‡<¯Lgƒ\å\Çµ31Á\ãŞ”¶\î¼§˜X„0A\Æ+oH¾1¶\Öb\Ö+p\Ïj|o´u¬]9¸;£\Ğ-o\ÛsfN6d{\×E¾dJ\ê{uõ¯1¶¿‘B“\È\×\èzºÈ¦a…\àgŞ¤ô#UT:\ÙL\ç¥>\ÖoŸh=j¶p\Ä	¦Àû.½)\ÇB·‰ü;·™T½Qò¿M\ã\Ğ×’\Í\Ã+F\êU”\àƒ\Ø×º\Èûˆ\Éükñ\æŒw.©åœ€ö?3–­+«œ\'jJR1ITp…R\ĞQKI@TQEAy3Al\Ò(Z\åò\émm\Ù\É\ç(õ5\Æ]\\5ÄŒ\Ì\Çq9\ëSj\Ó\Ëó;g\':Vs±„O\rIEs\rF)€²¶+\éN\í@Ö‡XğI\ïOQŠpb9‘K#C‚:\äõ­+YDŠ	\à v¬Á\Ğ\ZzH\Ñ\èpy…L£\ÔÊ¤.‚>y©€\âª[H\Ín3Š¶„\àVG\Üp9\Çô©v¢\Ş\îg*r\ZmKl\Åe*1Œg\ïEˆc@;y\ëŞ˜\İi»Ïy\á”6=)ı@ \Õ(\éH\0ñÒ€‡­:šz\Ğ!3ŠM\Ô56¡Ù¤&›A\éIŒ\\\Ò¦\æ˜I\Í\0?u½\ê\"Æ±\Å+\Ä\Ì\Ãš«+\Ò;\Z®ô„\î4”ª(4X²´\ï\Ôf±.£2nµg98õª\ÒF¢&#¨H´y~¹m\å^õ¬¦\\7×š\éüF \Ìkœp@÷®¨\ìsU£©§/LS­>?¼jÌ†•\Ø\Øõ§©8\ç‘Hy^}h_ºi\0ò«\ÔQ\Ê\ÈFQHN´œJ\0y\"Dÿ\0J`¤sÇµ,_1lõ\Å<?\Z`09E(\î1M¥\Ç~ô€r»#\ç9\Õz\Ş\å\ám\è\ä\n\ÏD\r’~µ*9SŒg¥¨Ë•Ş•­}¦W#x\à\äÖš\ÌËƒ\ÏÖ¼ö\Ò\âH™]O;±Òºx&rñ¶y5›\Ğõ¨Ï‹1Â‚pqP\ßZ¥ö=£\à‰PÇ±ü\éT—T\'ºŠxb®1Ú¨–»…à¹’9‡F*A¨k¥ñ\Äj¾\'”\èŒ~¸\Çô®k¡\ÅR<ªŠ\ÒŠ;\ÑT@RR\Ò\Ò`ÿ\Ù','ATPL00050','sandhya.jfif','image/jpeg');
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
