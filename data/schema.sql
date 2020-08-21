create database activities;

use activities;

create table players (
    id int unsigned not null auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) null null,
    age int unsigned,
    primary key (id)
);

create table teams (
    id int unsigned not null auto_increment,
    name varchar(50) not null,
    primary key (id)
);

create table teams_players (
    team_id int unsigned not null,
    player_id int unsigned not null,
    primary key(team_id, player_id),
    constraint fk_tp_teams foreign key (team_id) references teams (id),
    constraint fk_tp_players foreign key (player_id) references players (id)
);

/* Add Players */
insert into players (first_name, last_name, age) values ('Patrick', 'Mahomes', 24);
insert into players (first_name, last_name, age) values ('Lamar', 'Jackson', 22);
insert into players (first_name, last_name, age) values ('Drew', 'Brees', 41);
insert into players (first_name, last_name, age) values ('Travis', 'Kelce', 28);
insert into players (first_name, last_name, age) values ('Tyreek', 'Hill', 26);

/* Add Teams */
insert into teams (`name`) values ('Chiefs');
insert into teams (`name`) values ('Ravens');
insert into teams (`name`) values ('Saints');

/* Add Team Player associations */
insert into teams_players values (1,1);
insert into teams_players values (2,2);
insert into teams_players values (3,3);
insert into teams_players values (1,4);
insert into teams_players values (1,5);

/* Test query */
/*
select t.name team, concat(p.first_name, ' ', p.last_name) player 
from teams t inner join teams_players tp on t.id = tp.team_id inner join players p on tp.player_id = p.id;
*/