# Playground Setup

To get started you will need to run a playground, there are two options:
1. New Hyperledger Fabric Instance
2. Existing Hyperledger Fabric Instance

### New Hyperledger Fabric Instance

Follow this if you don't have an existing Fabric Instance:

```bash
$ cd scripts/
$ docker pull hyperledger/fabric-baseimage:x86_64-0.1.0
$ docker tag hyperledger/fabric-baseimage:x86_64-0.1.0 hyperledger/fabric-baseimage:latest
$ docker-compose up -d
```

If you get an error like:
```bash
  ERROR: for membersrvc  Cannot start service membersrvc: driver failed programming external connectivity on endpoint start_membersrvc_1 (c99c05cca95c9bbcd75c0520bb2166cbf67fc660cd58924f095cdbecf4ad86da): Bind for 0.0.0.0:7054 failed: port is already allocated
```

Then you already have a Fabric Instance up, use the next section.

### Existing Hyperledger Fabric Instance

You can do this with **Docker** or **Node.js**, for simplicity we will use Node.js

Follow this if you already have an existing Fabric Instance, run

```bash
$ npm run composer-playground
```

A web browser will be automatically opened once the playground has started, but should that not happen you should be able to access Fabric Composer Playground by clicking on this link: http://localhost:8080
