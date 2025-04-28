/**
 * @module log-to-console-tests
 * @description Console logger with coloring and configurable log levels for Node.js tests.
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
import { ConsoleLogger } from "../src/log-to-console.js";

// Creates a new console logger instance
const logToConsole = new ConsoleLogger(ConsoleLogger.DEBUG);

// Writes several messages to the console.
logToConsole.debug("This is a debug message.");
logToConsole.same("This is the continuation of a debug message.");
logToConsole.info("This is an info message.");
logToConsole.same("This is the continuation of an info message.");
logToConsole.warning("This is a warning message.");
logToConsole.same("This is the continuation of a warning message.");
logToConsole.error("This is an error message.");
logToConsole.same("This is the continuation of an error message.");

// Sets the console logger instance log level to WARNING
logToConsole.logLevel = ConsoleLogger.WARNING;

// Writes several messages to the console.
logToConsole.debug("This is a debug message.");
logToConsole.same("This is the continuation of a debug message.");
logToConsole.info("This is an info message.");
logToConsole.same("This is the continuation of an info message.");
logToConsole.warning("This is a warning message.");
logToConsole.same("This is the continuation of a warning message.");
logToConsole.error("This is an error message.");
logToConsole.same("This is the continuation of an error message.");