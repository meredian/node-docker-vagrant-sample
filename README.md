# Node-Docker-Vagrant sample

Samples for creating web-project environment with Node.js, Docker and Vagrant

## What's it about

Repo represents a sample of creating web-based applicaion environment, which will allow you to implement and raise any infrastructure without manually installing service components.

Two differen usage patterns can be proposed for start:

    - Virtualizing environment only, running Node from OS X
    - Virtualizing whole application, including node

First pattern can be used for standand developing procedure - your dependencies virtualized, but application process itself can be easily managed of demand. This prevents you from "create docker image" step, when you update code.

Second pattern can be used to implement multi-instance environment, like sharded application with many workers and/or processes with different roles. You can implement real production-like infrastructure to check your code in compilated conditions
