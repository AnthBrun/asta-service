# Produktions-Build auf Basis von Node.js Alpine
FROM node:alpine

# Arbeitsverzeichnis im Container
WORKDIR /app

# Nur benötigte Dateien kopieren
COPY package.json package-lock.json ./

# Nur Production-Dependencies installieren
RUN npm install --production

# Rest kopieren (z.B. .next, public, etc.)
COPY . .
RUN npm run build

# Port für den Container
EXPOSE 3000

# Startbefehl
CMD ["npm", "run", "start"]
