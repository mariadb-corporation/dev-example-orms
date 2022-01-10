# Object-Relational Mapping Samples

⚠️ **[UNMAINTAINED]** This repository has been moved and is currently maintained [here](https://github.com/mariadb-developers/mariadb-orm-samples). ⚠️

<br />

This repository contains samples of [Object-Relational Mapping (ORM)](https://en.wikipedia.org/wiki/Object-relational_mapping) libraries used with [MariaDB](https://mariadb.com/products/).

This README will walk you through the steps for getting the samples applications up and running using MariaDB. To ensure success, please follow the instructions in order.

**Note:** The code provided within this repository is completely open source. Please feel free to use it as you see fit.

# Table of Contents
1. [Requirements](#requirements)
2. [Introduction to MariaDB](#introduction)
    1. [MariaDB Platform](#platform)
    2. [MariaDB SkySQL](#skysql)
3. [Getting started](#get-started)
    1. [Get the code](#code)
    2. [Create the schema](#schema)
    3. [Anatomy of the app](#app)
4. [Support and contribution](#support-contribution)
5. [License](#license)

## Requirements <a name="requirements"></a>

For these sample applications, no matter which project you target, will require the following to be installed/enabled on your machine:

* [MariaDB Client](https://mariadb.com/products/skysql/docs/clients/), used to connect to MariaDB instances.

## Introduction to MariaDB <a name="introduction"></a>

### MariaDB Platform <a name="platform"></a>

[MariaDB Platform](https://mariadb.com/products/mariadb-platform/) integrates [transactional](https://mariadb.com/products/mariadb-platform-transactional/) and [analytical](https://mariadb.com/products/mariadb-platform-analytical/) products so developers can build modern applications by enriching transactions with real-time analytics and historical data, creating insightful experiences and compelling opportunities for customers – and for businesses, endless ways to monetize data. 

<p align="center" spacing="10">
    <kbd>
        <img src="media/platform.png" />
    </kbd>
</p>

To get started using MariaDB locally you can choose one of the following options:

* [Download and install MariaDB (Community or Enterprise) directly from mariadb.com](https://mariadb.com/docs/deploy/installation/) 

* [Download and install MariaDB using the official MariaDB Community Server 10.5 Docker Image available at hub.docker.com](https://hub.docker.com/r/mariadb/columnstore)

### MariaDB SkySQL <a name="skysql">

[SkySQL](https://mariadb.com/products/skysql/) is the first and only database-as-a-service (DBaaS) to bring the full power of MariaDB Platform to the cloud, including its support for transactional, analytical and hybrid workloads. Built on Kubernetes, and optimized for cloud infrastructure and services, SkySQL combines ease of use and self-service with enterprise reliability and world-class support – everything needed to safely run mission-critical databases in the cloud, and with enterprise governance.

[Get started with SkySQL!](https://mariadb.com/products/skysql/#get-started)

<p align="center" spacing="10">
    <kbd>
        <img src="media/skysql.png" />
    </kbd>
</p>

## Get started <a name="get-started"></a>

In order to run the applications in this repo you will need to have a MariaDB instance to connect to. For more information please check out "[Get Started with MariaDB](https://mariadb.com/get-started-with-mariadb/)".

### Get the code <a name="code"></a>

Download this code directly or use [git](git-scm.org) (through CLI or a client) to retrieve the code using `git clone`:

```
$ git clone https://github.com/mariadb-corporation/dev-example-orms.git
```

### Create the schema <a name="schema"></a>

Use the following command within (a terminal window) to [connect to MariaDB](https://mariadb.com/kb/en/connecting-to-mariadb/) and execute a SQL script to create and load the data to be used by all samples.

```bash
$ mariadb --host [your_host_address] --port [port_no] --user [db_user] -p[user_password] < data/schema.sql
```

Example:

```bash
$ mariadb --host 127.0.0.1 --port 3306 --user app_user -pPassword123! < data/schema.sql
```

### Anatomy of the apps <a name="app"></a>

The sample applications contained within this repository vary by language and ORM library. Check out the [src](src) directory for the options and more details!

## Support and Contribution <a name="support-contribution"></a>
    
Please feel free to submit PR's, issues or requests to this project project directly.

If you have any other questions, comments, or looking for more information on MariaDB please check out:

* [MariaDB Developer Hub](https://mariadb.com/developers)
* [MariaDB Community Slack](https://r.mariadb.com/join-community-slack)

Or reach out to us diretly via:

* [developers@mariadb.com](mailto:developers@mariadb.com)
* [MariaDB Twitter](https://twitter.com/mariadb)

## License <a name="license"></a>
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=plastic)](https://opensource.org/licenses/MIT)
