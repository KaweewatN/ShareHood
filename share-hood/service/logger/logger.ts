import {createLogger, format, transports} from "winston";
import z from "zod";

const METHOD = z.enum(["GET", "POST", "PUT", "DELETE"]);
type methodType = z.infer<typeof METHOD>;

const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
    format.printf(({timestamp, level, message}) => {
      return `${timestamp} ${level}: ${message}`;
    }),
  ),
  transports: [new transports.Console(), new transports.File({filename: "app.log"})],
});

export function getLogger(method: methodType, path: string, log: string, message: any): void {
  switch (log) {
    case "info": {
      console.log("-".repeat(50));
      logger.info(`${method} ${path} ${JSON.stringify(message)}`);
      console.log("-".repeat(50));
      break;
    }
    case "error": {
      console.log("-".repeat(50));
      logger.error(`${method} ${path} ${JSON.stringify(message)}`);
      console.log("-".repeat(50));
      break;
    }
    case "warn": {
      console.log("-".repeat(50));
      logger.warn(`${method} ${path} ${JSON.stringify(message)}`);
      console.log("-".repeat(50));
      break;
    }
    case "debug": {
      console.log("-".repeat(50));
      logger.debug(`${method} ${path} ${JSON.stringify(message)}`);
      console.log("-".repeat(50));
      break;
    }
    case "verbose": {
      console.log("-".repeat(50));
      logger.verbose(`${method} ${path} ${JSON.stringify(message)}`);
      console.log("-".repeat(50));
      break;
    }
  }
}
