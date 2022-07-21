SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `tech` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `tech` (`id`, `name`) VALUES
(1, 'Javascript'),
(2, 'PHP'),
(3, 'NodeJS'),
(4, 'ExpressJS'),
(5, 'mySQL');

ALTER TABLE `tech`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tech`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

CREATE TABLE `project` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NULL,
  `image` varchar(255) NOT NULL,
  `link` varchar(255) NULL,
  `repo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `project` (`id`, `title`, `description`, `image`, `link`, `repo`) VALUES
(1, 'Hero Corporation', "Réalisation dans le cadre de la Wild Code School d'un application web dynamique React consommant une API", 'https://i.imgur.com/XbAgQS7.png', 'https://theodep.github.io/Hero-Corporation/', 'https://github.com/theoDep/Hero-Corporation');

ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `project`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

CREATE TABLE `project_tech` (
  `project_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_project_tech_project
        FOREIGN KEY (project_id)
        REFERENCES project(id),
  `tech_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_project_tech_tech
        FOREIGN KEY (tech_id)
        REFERENCES tech(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `project_tech` (`project_id`,`tech_id`) VALUES
(1, 1),
(1, 3),
(1, 4);
  