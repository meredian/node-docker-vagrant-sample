# Configuration for docker host OS, used by other examples
Vagrant.configure(2) do |config|

  config.vm.provision "docker"

  # Copy from some manual (with comment):
  # The following line terminates all ssh connections. Therefore
  # Vagrant will be forced to reconnect.
  # That's a workaround to have the docker command in the PATH
  config.vm.provision "shell", inline: "ps aux | grep 'sshd:' | awk '{print $2}' | xargs kill"

  # Define vm name
  config.vm.define "dockerhost"
  config.vm.box = "chef/centos-7.0"

  # Forward port from docker host OS to our main OS (OS X or Windows)
  config.vm.network :forwarded_port, guest: 3000, host: 3000

  config.vm.provider :virtualbox do |vb|
    vb.name = "dockerhost"
  end

end