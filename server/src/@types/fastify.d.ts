import "@fastify/jwt";
import "fastify";

declare module "fastify" {
  interface FastifyRequest {
    file: Express.Multer.File;
    files: Express.Multer.File[];
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: {
      sub: string;
      superUser: boolean;
    };
  }
}