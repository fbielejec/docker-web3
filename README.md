# DockerWeb3

This project contains docker and docker compose files for working with dockerized parity and nodejs app using web3.

## Installation

You need [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose) installed.

## Using

```bash
docker compose up
```

## Web3 connectivity problem

```bash
docker run --net dockerweb3_net -it dockerweb3_app /bin/bash

env URL_PARITY="http://qa_parity:8545" node app.js
```
