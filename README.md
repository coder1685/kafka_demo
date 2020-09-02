## Produce messages using Fake KafkaPublish

api to produce KafkaPublish messages via fake kafka client.

#### Create environment file

Create .env file in root folder by using `.env.sample` as a template

#### Run Kafka Locally

```
docker-compose up
```

Check Status

```
docker-compose ps
 ```

If status is not up

```
docker-compose up -d
```

Open confluent page on 

```
http://localhost:9021/
```

#### Create Topic

1. Open Local host `http://localhost:9021/`
2. Go to clusters
3. Click on Topics
4. Add topic
5. Add the same name of topic in .env file

## Installation and Usage

### Installation

To install the dependencies for the project:

```j
npm install
```

### Building

To build the project:

```
npm run build
```

### Running

To start the project service:

```
npm start
```

Once started the doPublish endpoint can be accessed via:

```
POST -> http://localhost:3000/doPublish

body: {
   "message": "kafka test"
}

```

