#imagen base
FROM node:alpine

#ir al directorio donde va a vivir mi aplicacion 
WORKDIR /app

#copiar el package.json
COPY package*.json ./

#instalar las dependencias
RUN npm install

#copiar el package.json los archivos de mi local al contenedor 
COPY . .

#instalar las dependencias
RUN  npm run build

#comando de inicio de contenedor 
CMD ["node","dist/src/index.js"]




