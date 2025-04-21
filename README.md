You need Docker and Docker-Compose installed to run this.
From NPM:
    cd video-streaming

    npm start

Docker:
     docker buildx build --platform linux/amd64 -t  video-streaming --file Dockerfile .
    docker build -t video-streaming --file Dockerfile . &&  docker run -p 3000:80 -e PORT=80 video-streaming    

Boot it up from the terminal using:

    docker-compose up --build


    docker tag video-streaming  asrivastva/video-streaming:1.0
    docker push asrivastva/video-streaming:1.0

