FROM node:20 AS build
WORKDIR /app

COPY . ./
RUN npm install
RUN npm run build

# Etapa de producción
FROM node:20
WORKDIR /app

COPY --from=build /app ./

# Puerto que usará tu server Remix (ej: express, vite, etc)
EXPOSE 4200
CMD ["npm", "run", "start"]


#Puntos a tener en cuenta!!


#crea dentro del proyecto el .dockerignore
#crear dentro del proyecto el Dockerfile

#dentro del Dockerfile poner:

# ver la version de node y poner en la linea 9 

#ver el puerto y poner el la linea 15 expose

# en la terminar crear la imagen con este comando.
#docker build -t frontend .  // se lepone cualquier nombre al final

#buscar imagen creada con este comando.
#docker images

#traer imagen ya que en mac, no se, en windos guardar las imagenes quien sabe donde para traerlas hay que tirar este comando.
#docker save -o net-backend.tar net-backend  // el primero es el nuevo nombre el segundo es de donde sale el nombre original de la imagen 
