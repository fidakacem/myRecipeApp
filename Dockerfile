# -----------------------------
# STAGE 1 : Build (Node)
# -----------------------------
FROM node:18-alpine AS build

WORKDIR /app

# Copier les fichiers package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet
COPY . .

# Construire l'application (dossier dist/)
RUN npm run build

# -----------------------------
# STAGE 2 : Runtime (Nginx)
# -----------------------------
FROM nginx:alpine

# Copier le build dans nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]