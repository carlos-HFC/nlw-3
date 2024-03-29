import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifyStatic from "@fastify/static";
import fastify from 'fastify';
import multer from 'fastify-multer';
import path from "node:path";
import { ZodError } from "zod";

import { env } from "@/env/env";
import { deleteFiles } from "@/http/helpers/delete-files";

import { authRoutes } from "./routes/auth";
import { orphanagesRoutes } from "./routes/orphanages";
import { usersRoutes } from "./routes/users";

interface ValidationErros {
  [key: string]: string;
}

const app = fastify();

app.setErrorHandler((error, request, reply) => {
  deleteFiles(request);

  if (error instanceof ZodError) {
    let message: ValidationErros = {};

    error.issues.forEach(err => {
      const path = err.path.length <= 0 ? 'images' : err.path as never;
      (message[path] as unknown as string) = err.message;
    });

    return reply.status(400).send({
      statusCode: 400,
      error: "Bad Request",
      message
    });
  }

  return reply.send(error);
});

app.register(fastifyCors);
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: env.COOKIE_NAME,
    signed: false
  }
});
app.register(fastifyCookie, {
  hook: 'onRequest',
  secret: env.COOKIE_SECRET,
  parseOptions: {
    maxAge: env.EXPIRES_TOKEN,
    path: '/',
    httpOnly: true,
    secure: true,
  },
});
app.register(fastifyStatic, {
  root: path.join(__dirname, '..', '..', 'uploads'),
  prefix: '/uploads'
});
app.register(multer.contentParser);

app.register(authRoutes, { prefix: "/auth" });
app.register(orphanagesRoutes, { prefix: "/orphanages" });
app.register(usersRoutes, { prefix: "/users" });

app
  .listen({
    port: env.PORT,
    host: "0.0.0.0"
  })
  .then(() => console.log(`HTTP Server running in http://localhost:${env.PORT}`));