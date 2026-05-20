FROM node:18-alpine

# 1. Instalar pnpm globalmente dentro del contenedor
RUN npm install -g pnpm

# 2. Definir el directorio de trabajo
WORKDIR /usr/src/app

# 3. Copiar el archivo de dependencias
COPY package.json ./

# 4. Instalar las dependencias de forma segura y estricta usando pnpm
RUN pnpm install --prod

# 5. Copiar el resto del código de la API
COPY . .

# 6. Exponer el puerto
EXPOSE 3000

# 7. Comando de arranque usando pnpm
CMD ["pnpm", "start"]
