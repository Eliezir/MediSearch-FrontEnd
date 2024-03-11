<div align="center">
<img style="height:300px" src="./src/assets/logo-dark.png" alt="project logo"/>
<p>
This is the front end of the MediSearch project. It is a web application that allows users to search for medical professionals and book appointments with them. The front end is built using Vue and the back end is built using Django.</p>
</div>


## Technologies Used
- [Vue.js](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)


## Usage <a name = "usage"></a>
To run the project, you need to have Docker and Docker Compose installed on your local machine. Once you have these installed, you can run the following commands to start the project:

```bash

# mkdir MediSearch

$ git clone https://github.com/Eliezir/MediSearch-backEnd

$ git clone https://github.com/Eliezir/MediSearch-frontEnd

```
create a docker-compose.yml file in the root of the project and add the following content:
version: "3.8"

```bash

include:
  "./frontend/docker-compose.yml"
  "./backend/docker-compose.yml"

```

 Then go to your backend folder, and in your docker-compose.yml file, add your database credentials in the environment section of the db service. Then, go to your database and import the csv file in the data folder. Then run the following command to start the project:

```bash

$ docker-compose up -d --build

```

<sub>Made with 💜 by <a href="https://github.com/Eliezir">Eliezir Neto</a> </sub>
