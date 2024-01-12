


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table knex_migrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `knex_migrations`;

CREATE TABLE `knex_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;

INSERT INTO `knex_migrations` (`batch`, `id`, `migration_time`, `name`) VALUES
	(1, 1, '2024-01-11 13:22:46', '20240109151150_init_migration.js');

/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table knex_migrations_lock
# ------------------------------------------------------------

DROP TABLE IF EXISTS `knex_migrations_lock`;

CREATE TABLE `knex_migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
	(1, 0);

/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`createdAt`, `email`, `gender`, `id`, `name`, `password`, `photo`, `salt`, `surname`, `updatedAt`) VALUES
	('2023-06-26', 'steve.test@gmail.com', 1, '0b9205a3-e31b-4000-b7aa-b41bdd99dfad', 'Steve', 'b76508bb0731b1e91d91bfa467fda38a0dc8844c96404878af6a0c066d5e2a35747760b1f9b70d0594e36e0f1394af412d8f49b762a3c833b585fc2c4e7bbd16', '/photo/photo_1705047551036.jpg', '9cacb322c04eec8b691922bf28e1693df229a4c0deb97c7a2d163d0aea200614', 'Maslouski', '2024-01-12'),
	('2024-01-12', 'misha.test@gmail.com', NULL, '0df931ac-20e4-420e-b7eb-00b23ab7683d', 'Misha', '5a6e9b541f0eb233dacac1dd2f91a91029a6ba8e2ea8261d45ed411770cc70fe9bf99a27ff717d24a401c7f4b29e1b3f629b7880022109a87f7f8a9fe564a005', NULL, 'add69e741be5053af117ac6f0137ef1abbf8b440e92c3da2c46cf31311e79b95', NULL, '2024-01-12'),
	('2024-01-11', 'sergey.test@gmail.com', NULL, '14517984-1d1c-419a-95fd-4c2190db6959', 'Sergey', '15ad923696559a15d7fd01410d3d6d15b2693d65621a603c77644ae8520c842fbab14d6e71b25f2ec2872218e2dc2370c47da8dee5b73b3698521e51ec6a8e69', NULL, '5619b06ec290e8210159bbf30cf30f73756ae648333899b93d8c6d318dfdccd7', NULL, '2024-01-11'),
	('2024-01-11', 'dmitry.test@gmail.com', NULL, '422d14ac-24bc-4c44-b586-2ae670334b66', 'Dmitry', '406f09b2c2e8d06f9ff0101b4b0b90a834c3a1fb5189b637b1dff2be1638ba42c213accce7794a427029b96d3541d85e2e0a3f20f4b780aceac5d82c15892b1b', NULL, 'df1b23d6a6efeed25c11eeecb93dc10443c898e12a5686535502252193c9c8bd', NULL, '2024-01-11'),
	('2024-01-11', 'inna.test@gmail.com', NULL, '5529e048-686b-4e1b-b257-b801a9c87bfb', 'Inna', 'c098b98521754185f9948456c367d83832604d4efc6738e7715ef10b4055e9b9a9ee3f43120e2096f83a4d13d62890a33c37a92e88061024de1d7f6a951f1145', NULL, 'e9b40480b18d2481f453f79d7c592b333b3082d4eb923b85d80f4b743ee34891', NULL, '2024-01-11'),
	('2024-01-12', 'pasha.test@gmail.com', NULL, '5be53ef9-41ee-4d36-9032-26cd3ba310e8', 'Misha', '6b25bd86261dd283c6f2d1a920c72253563f66637a147bdaec47fb5dd9919f2af1b3b9c9919e1f089a3e57c30aa7d48f1609c4ff9c3e48283160e023c0027c3e', '/photo/photo_1705056260981.jpg', '4af88cd231a1ec35857d9d35dc5c7d6e9bd806bee7bcec84507fe004ace685a2', NULL, '2024-01-12'),
	('2024-01-11', 'andrew.test@gmail.com', NULL, '6cf773b8-b4b6-48ea-a962-7a32063391fe', 'Andrew', 'fb3a7929f9883b9b289e3713d423966ca11c6e9d6c5e188b5b0125a13de7a5f337379e4e9312cc9a17db8d9fd01df77eb54f6a6cf375e11d3b88c3dfe4769cc8', NULL, '5d292a3a078d783fc75ac5ab27afdb51c478b4616dc341fdc7465a77fb65902a', NULL, '2024-01-11'),
	('2024-01-11', 'alex.test@gmail.com', NULL, '6d307571-71f4-402d-8da3-f0d5c5146eb2', 'Alex', 'a2feada1c004119ef9d1eac07f8c81db3d0f3362063b6457b4f2a286b1f1dc3c1ed655f729ca0920c12dbc82dfe94219338fda8b138ef79fa0409925abb10a72', NULL, '58d736224dc051f7989e95acc289667bff2f7e2eaabe78a7f754cecc296cf41d', NULL, '2024-01-11'),
	('2024-01-11', 'eugene.test@gmail.com', NULL, '77acb5a7-2aef-4020-a244-4c5b20417eaf', 'Eugene', 'cfa967328d763b7f3bf36fd65bee139085c5b96cdcbd923e7c75d226112a2cf3213e8ed44f08c0ed0b06a9624fa7d891a02b5fa861b16857936db7af885ce925', NULL, '757624f1ed7427f334467bbe488240067b01cd22c69ffb49ec1d3aa709045ea7', NULL, '2024-01-11'),
	('2024-01-11', 'nina.test@gmail.com', NULL, '8910e4cd-bfc2-465a-a8b1-986d3fe7493f', 'Nina', '03dd52cf844d4f8b25cc6c2001591b13352f367b6f5b984dc91fb8146fba7cb9ea15b161524641caecd36910f1d594eacb9fc294dfc021c3017bb0cb41f5d54a', NULL, 'a11ca2f264db052114bb7ef37041f3b985e7e1fcf5dbfd7b15255f8f5943dcc3', NULL, '2024-01-11'),
	('2024-01-11', 'oleg.test@gmail.com', NULL, '9e58b895-ea2e-49b1-9122-950031e4d368', 'Oleg', 'bab6d33b54930730363b5ce0c6ee4d7da2980b7a14087702c836e4e8ff442b6a0ea05cefad1970936a271316f9e0c95832ee631f8a96b84e1780733b9e003bc7', NULL, '9dc336570ce26e79620de9348db16666ab0e50a76ac3a21bce500a7befbcc386', NULL, '2024-01-11'),
	('2024-01-11', 'kate.test@gmail.com', NULL, 'b81ef719-5823-4ba2-99b4-2fe1d0fed775', 'Kate', '17c8016f3f4a92997f04691df59e21b9a11d1e8e7976bfac3a7ae29a66807977a4869a973845c8543bd20a48ff1680442a9585c4a1873bcfb176ceff2a5f0e24', NULL, '215150d61a193e47aa6f2650b33747080bb28742f62d1e0eb9d4dcbaa02bb597', NULL, '2024-01-11'),
	('2024-01-11', 'jogn.test@gmail.com', NULL, 'c6e659bf-310d-4bcd-8dfb-610702b647ff', 'John', '6e2f2b0c880820251f442a58c876658bbe821953fe9f430a99a70c56b53d676b3bc4238f0c645bab1742eda08c16a0bb815041fe4932f988b43e2f0774ed3b6b', NULL, '8bb67993ab7a9c61036161d3de84f5f8a932c7f3f849b279fb0d178d1e109d37', NULL, '2024-01-11'),
	('2024-01-11', 'mira.test@gmail.com', NULL, 'dc695cd5-2f46-4d78-ba74-30df917254fd', 'Mira', 'd735bc8a463d5d64f24033f8f8f4680411984d65af32c4d3a84958970ec591cc4119592bb77c5b2b609cea41e4c9375792f47818683953c5fd7fb429c684bfbf', NULL, '510c327f26a2dfdaf8611b92c57e10d63f6334b3edc3f3919d004deadc767344', NULL, '2024-01-11');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


