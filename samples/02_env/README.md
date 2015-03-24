Node.js server with dockerized dependency
=========================================

Server with redis dependency. Here I run only dockerized Redis, expose it's port to outher world (non-standard `44010` to prevent conflicts). Application itself can be run from host OS. You can run all infrastructure from services and map the to default ports.

This appoach destroys expected "same environment" approach, since application runs directly in your host system, but it can be used as quich development environment, and if you want to have direct access to application memory. It will be far not that simple in isolated guest system/container.

To run server after installing vagrant and docker:

 - `vagrant up` to launch environment
 - `vagrant docker-logs` to see agregated logs from docker containers
