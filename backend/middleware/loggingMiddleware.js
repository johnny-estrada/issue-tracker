import fs from "fs";
import path from "path";
import morgan from "morgan";

export const setupLogging = (app) => {
  const logFilePath = path.join(process.cwd(), "logs", "morgan.log");
  const logStream = fs.createWriteStream(logFilePath, { flags: "a" });
  const logFormat =
    ":date[web] :method :url :status :response-time ms - :res[content-length]\n";

  morgan.token("date", (req, re) => {
    const pacificOptions = {
      timeZone: "America/Los_Angeles",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    return new Date().toLocaleString("en-US", pacificOptions);
  });

  // Add log rotation functionality
  // have to install a package

  app.use(
    morgan(logFormat, {
      stream: logStream,
      skip: (req, res) => res.statusCode < 400,
    })
  );
};
