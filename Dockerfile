# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts as base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /app

# Stage 2b: Production build mode.
FROM base as prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /app
## Copy over the source code.
COPY . ./
## Install dependencies with `--immutable` to ensure reproducibility.
RUN npm ci
## Build the static site.
RUN npm run build

## Set the working directory to `/opt/docusaurus`.
WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/docusaurus.config.ts ./docusaurus.config.ts
COPY --from=builder /app/blog ./blog
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/docs ./docs
COPY --from=builder /app/src ./src
COPY --from=builder /app/static ./static
COPY --from=builder /app/babel.config.js ./babel.config.js
COPY --from=builder /app/sidebars.ts ./sidebars.ts
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Stage 3a: Serve with `docusaurus serve`.
FROM prod as serve
## Expose the port that Docusaurus will run on.
EXPOSE 8080
## Run the production server.
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--no-open"]