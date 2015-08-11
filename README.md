Node-Docker-Vagrant sample
==========================

Samples for creating web-project environment with Node.js, Docker and Vagrant

#### Note: At current moment I would prefer docker-compose to Vagrant, it provides much more convenient integration. See [node-docker-compose-sample](https://github.com/meredian/node-docker-compose-sample)

## What's it about

Repo represents a sample of creating web-based applicaion environment, which will allow you to implement and raise any infrastructure without manually installing service components.

Two differen usage patterns can be proposed for start:

 - Virtualizing environment only, running Node process from host system
 - Virtualizing whole application, including Node

First pattern can be used for standand developing procedure - your dependencies virtualized, but application process itself can be easily managed of demand. This prevents you from "create docker image" step, when you update code.

Second pattern can be used to implement multi-instance environment, like sharded application with many workers and/or processes with different roles. You can implement real production-like infrastructure to check your code in compilated conditions

## OS X How-To

Fact that OS X is not a Linux has some impact on usage of Docker and integrating it with Vagrant. In case of using Linux everything should be a bit easier.

## Installation
### VirtualBox

See detailed guide at https://www.virtualbox.org/

### Docker

While any Linux can install docker without extra pain, OS X is not originally a Linux, and it's kernel is not compatible with docker. So we have to run docker-server in VM. There is generic VirtualBox-based solution, called `boot2docker`

Detailed guide about launching docker at OS X I used to progress: http://viget.com/extend/how-to-use-docker-on-os-x-the-missing-guide

### Vagrant

Download installer at http://www.vagrantup.com/downloads

## Running things up

### Dockerize your project

 - Create `Dockerfile`
 - Build docker image
 - Push docker image to repo (hope you registered it?)
 - Try running image with exposing ports

### Joining docker with vagrant

 - Create `Vagrantfile` (you can start with `vagrant init` command)
 -
