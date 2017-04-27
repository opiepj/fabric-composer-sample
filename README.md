# Fabric Composer Example
Fabric Composer Application with the following:

* Business Network & Blockchain interface (accenture-network)
* Fabric Composer Node Module for building transaction smart contracts (composer-node-application)
* Fabric Composer client frontend app interfacing with smart contracts and using REST api's to deploy to the network. (composer-client-app)

## Requirements

* Docker
* Docker Compose
* Python 2.7 (For Node GYP)
* Node.JS >= 6
* npm >= 3

## Setup

1. `git clone git+https://github.com/1337programming/fabric-composer-example.git`
2. `cd fabric-composer-example`
3. `npm install -g composer-cli` (recommended)

Follow Playground Setup under `documentation/Playground-Setup.md` to check out the playground first.

## Simple Development Start 

### Starting up the network

Before you do anything, you will need to start up the accenture network and get a fabric blockchain running locally.

1. `$ cd accenture-network/`
2. `$ npm install` This will automatically run the bash scripts to start Fabric via Docker

### Deploy Transaction Logic to Network

Now with the server up you can push transaction models or chain code (Smart Contracts) to the network.

Assuming your in root of the project.

`$ cd composer-node-application/`
`$ npm install` This will automatically generate the smart contract binary on your local file and deploy it to the blockchain server

### Running Local Client

Now spin up the local machine

`$ cd composer-client-app/`
`$ npm install`
`$ npm run start` This will run a REST API server based on your network (accenture-network) and it will run the application.
The node server is a facade between the UI and the blockchain fabric network.

### Advance Guide

After you got this all working, you will need to understand what each application is doing. We will explain this more further, but
 in the meantime you can read up on the fabric composer site or refer to the package.json.


