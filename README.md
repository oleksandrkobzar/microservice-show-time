# microservice-show-time

## Build docker without clone project 

**Docker build**
```bash
sudo docker build -t web-service https://github.com/oleksandrkobzar/microservice-show-time.git#master:WebService
```

**Docker run**
```bash
sudo docker run -p 8080:8080 --name web-service web-service
```


##  Test
**Clone repo**
```bash
git clone https://github.com/oleksandrkobzar/microservice-show-time.git
```
**Change the shell working directory to WebService**
```bash
cd microservice-show-time/WebService
```

**Build an image from a Dockerfile**
```bash
sudo docker build -t web-service .
```

**Run a command in a new container**
```bash
sudo docker run -p 8080:8080 --name web-service web-service
```

**Open Google Chrome with url 0.0.0.0:8080**
```bash
google-chrome 0.0.0.0:8080
```

### Additionally
**List of useful commands**
```bash
sudo docker images      List images
sudo docker ps          List containers
sudo docker ps -a       Show all containers (default shows just running)
sudo docker run -p 8080:8080 -d web-service     Run container in background and  print container ID
sudo docker rm id-container [id-container...]        Remove one or more containers
sudo docker rmi id-image [id-image...]         Remove one or more images
sudo docker rmi $(sudo docker images -q)        Remove all images
```