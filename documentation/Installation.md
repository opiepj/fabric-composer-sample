# Installation

`npm install` will run several scripts that are packaged into the getting-started repository.

1. *`scripts/download-hyperledger.sh`* - This kills any docker images started with the /scripts/docker-compose.yml file, remove the current default connection profile, ~/.composer-connection-profiles/defaultProfile and pull the required Hyperledger Fabric base image.
2. *`scripts/start-hyperledger.sh`* - This uses the /scripts/docker-compose.yml by running docker-compose up -d --build to create a Hyperledger Fabric peer and memebership service docker container.
3. *composer archive create* - using Composer CLI, create an archive of the npm module digitalproperty-network and archive it into a digitalPropertyNetwork.bna.
4. *composer network deploy* - Deploy the digitalPropertyNetwork.bna business network to the deployed fabric using the defaultProfile connection progfile.
5. *composer network list* - Lists the contents of a deployed business network.

There is [Reference material](https://fabric-composer.github.io/reference/commands.html) for Composer CLI.
