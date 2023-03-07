drop database if exists political_notes;
create database if not exists political_notes;

-- use database 
use political_notes;

-- user table
create table if not exists user
(
    id           bigint auto_increment comment 'id' primary key,
    userName     varchar(256)                           not null comment 'user Name',
    userAccount  varchar(256)                           not null comment 'user Account: phone / email',
    userRole     varchar(256) default 'user'            not null comment 'user role: admin',
    userPassword varchar(512)                           not null comment 'password',
    createAt   datetime     default CURRENT_TIMESTAMP not null comment 'create time',
    updateAt   datetime     default CURRENT_TIMESTAMP not null comment 'update time'
)
    comment 'user';

-- blog table 
create table if not exists blog
(
    id         bigint auto_increment comment 'id' primary key,
    blogTitle  varchar(255)                            not null comment 'blog title',
    blogBody   text                                    not null comment 'blog body',
    createAt   datetime     default CURRENT_TIMESTAMP  not null comment 'create time',
    updateAt   datetime     default CURRENT_TIMESTAMP  not null comment 'update time',
    author     varchar(255)                            not null comment 'blog author',
    createUser bigint                                  not null comment 'create blog user'
) 
    comment 'blog';