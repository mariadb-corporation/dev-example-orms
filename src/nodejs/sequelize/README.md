# Introduction to Sequelize (a Node.js, Promise-based ORM)

This Node.js project uses the MariaDB Node.js connector in combination with the [Sequelize object-relational mapping module](https://sequelize.org/) to connect to and communicate to a MariaDB database instance.

This Node.js project is based on a demonstration given during a webinar, [Building Modern Applications Using Object-Relational Mapping and MariaDB](https://go.mariadb.com/20Q4-WBN-GLBL-OSSG-ORM-Object-Relational-Mapping-2020-8-20_Registration-LP.html), presented by [Rob Hedgpeth](https://mariadb.com/resources/blog/author/roberthedgpeth/).

This README is intended to provide instructions on how to get this application up and running. For more information on the details please refer to the webinar.

# Table of Contents
1. [Requirements](#requirements)
2. [Getting started with the app](#getting-started)
    1. [Configure the code](#configure-code)
    2. [Build the code](#build-code)
    3. [Run the app](#run-app)

## Requirements <a name="requirements"></a>

This sample was created using the following techologies and they must be installed before proceeding.

* [Node.js (v. 12+)](https://nodejs.org/docs/latest-v12.x/api/index.html)
* [NPM (v. 6+)](https://docs.npmjs.com/)

## Getting started with the app <a name="getting-started"></a>

### Configure the code <a name="configure-code"></a>

Configure the connection to your MariaDB instance within [db.js](db.js).

```javascript
const sequelize = new Sequelize('activities', 'your_user', 'your_user_password', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-6',
  },
  define: {
    timestamps: false
  }
});
```

**Configuring db.js for the MariaDB cloud database service [SkySQL](https://mariadb.com/products/skysql/)**

MariaDB SkySQL requires SSL additions to `dialectOptions` within the Sequelize settings. It's as easy as 1-2-3 (steps below).

```javascript
// 1.) Access the Node File System package
const fs = require("fs");

// 2.) Retrieve the Certificate Authority chain file (wherever you placed it - notice it's just in the Node project root here)
const serverCert = [fs.readFileSync("skysql_chain.pem", "utf8")];

const sequelize = new Sequelize('activities', skysql_user, skysql_password, {
  host: skysql_domain_address,
  port: skysql_port_number,
  dialect: 'mariadb',
  // 3.) Add an "ssl" property to the dialectOptions configuration, using the serverCert const defined above
  dialectOptions: {
    ssl: {
      ca: serverCert
    }
  },
  define: {
    timestamps: false
  }
});
```

> **Note:** Remember to add your `skysql_chain.pem` file to the project!

### Build the code <a name="build-code"></a>

Once you have retrieved a copy of the code you're ready to build and run the project! However, before running the code it's important to point out that the application uses several Node Packages.

Executing the CLI command 

```
$ npm install
```

Doing this targets relative `package.json` file and [install all dependencies](https://docs.npmjs.com/downloading-and-installing-packages-locally).

### Run the app <a name="run-app"></a>

Once you've pulled down the code and have verified that all of the required Node packages are installed you're ready to run the application! 

Execute the following CLI command 

```bash
$ npm start
```


