/**
 * @module jfabello/log-to-console
 * @description Console logger with coloring and configurable log levels for Node.js.
 * @license MIT
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Sets strict mode
"use strict";

// Module imports
const chalk = require("chalk");

/**
 * @description Console logger with coloring and configurable log levels.
 */
class ConsoleLogger {
	// Private instance variables
	#logLevel = null;
	#lastLogFunction = null;

	/**
	 * @static
	 * @type {number}
	 * @description Read-only constant representing the debug logging level (4).
	 */
	static get DEBUG() {
		return 4;
	}

	/**
	 * @static
	 * @type {number}
	 * @description Read-only constant representing the information logging level (3).
	 */
	static get INFO() {
		return 3;
	}

	/**
	 * @static
	 * @type {number}
	 * @description Read-only constant representing the warning logging level (2).
	 */
	static get WARNING() {
		return 2;
	}

	/**
	 * @static
	 * @type {number}
	 * @description Read-only constant representing the error logging level (1).
	 */
	static get ERROR() {
		return 1;
	}

	/**
	 * @static
	 * @type {number}
	 * @description Read-only constant representing the no logging level (0).
	 */
	static get NO_LOGGING() {
		return 0;
	}

	/**
	 * @description Creates a new instance of the console logger.
	 * @constructor
	 * @param {number} [logLevel=1] The desired console logger instance log level. 4 = Debug, 3 = Info, 2 = Warning, 1 = Error, 0 = No logging.
	 * @throws {TypeError} If the provided log level is not an integer.
	 * @throws {RangeError} If the provided log level is not between 0 and 4.
	 */
	constructor(logLevel = 1) {
		if (Number.isInteger(logLevel) === false) {
			throw new TypeError(`New log level "${logLevel}" is not valid, it should be an integer between 0 and 4.`);
		}
		if (logLevel < 0 || logLevel > 4) {
			throw new RangeError(`New log level "${logLevel}" is not valid, it should be an integer between 0 and 4.`);
		}
		this.#logLevel = logLevel;
	}

	/**
	 * @description Gets the current console logger instance log level.
	 * @returns {number} The current console logger instance log level. 4 = Debug, 3 = Info, 2 = Warning, 1 = Error, 0 = No logging.
	 */
	get logLevel() {
		return this.#logLevel;
	}

	/**
	 * @description Sets the new console logger instance log level.
	 * @param {number} newLogLevel The desired new console logger instance log level. 4 = Debug, 3 = Info, 2 = Warning, 1 = Error, 0 = No logging.
	 * @throws {TypeError} If the new log level is not an integer.
	 * @throws {RangeError} If the new log level is not between 0 and 4.
	*/
	set logLevel(newLogLevel) {
		if (Number.isInteger(newLogLevel) === false) {
			throw new TypeError(`New log level "${newLogLevel}" is not valid, it should be an integer between 0 and 4.`);
		}
		if (newLogLevel < 0 || newLogLevel > 4) {
			throw new RangeError(`New log level "${newLogLevel}" is not valid, it should be an integer between 0 and 4.`);
		}

		this.#logLevel = newLogLevel;
	}

	/**
	 * @description Logs a debug message to the console if the log level is set to DEBUG or higher.
	 * @param {string} message The debug message. Must be a string.
	 * @param {...any} rest Extra parameters.
	 * @returns {this} The console logger instance.
	 * @throws {TypeError} If the message is not a string.
	 */

	debug(message, ...rest) {
		this.#lastLogFunction = "debug";
		if (this.#logLevel < ConsoleLogger.DEBUG) return this;
		if (typeof message !== "string") throw new TypeError(`The message type "${typeof message}" is not valid, it should be a string`);
		if (rest.length === 0) {
			console.log(chalk.bgBlueBright.black.bold("DEBUG:") + " " + message);
		} else {
			console.log(chalk.bgBlueBright.black.bold("DEBUG:") + " " + message, ...rest);
		}
		return this;
	}

	/**
	 * @description Logs an information message to the console if the log level is set to INFO or higher.
	 * @param {string} message The information message. Must be a string.
	 * @param {...any} rest Extra parameters.
	 * @returns {this} The console logger instance.
	 * @throws {TypeError} If the message is not a string.
	 */
	info(message, ...rest) {
		this.#lastLogFunction = "info";
		if (this.#logLevel < ConsoleLogger.INFO) return this;
		if (typeof message !== "string") throw new TypeError(`The message type "${typeof message}" is not valid, it should be a string`);
		if (rest.length === 0) {
			console.log(chalk.bgWhiteBright.bold.black("INFO:") + " " + message);
		} else {
			console.log(chalk.bgWhiteBright.black.bold("INFO:") + " " + message, ...rest);
		}
		return this;
	}

	/**
	 * @description Logs a warning message to the console if the log level is set to WARNING or higher.
	 * @param {string} message The warning message. Must be a string.
	 * @param {...any} rest Extra parameters.
	 * @returns {this} The console logger instance.
	 * @throws {TypeError} If the message is not a string.
	 */
	warning(message, ...rest) {
		this.#lastLogFunction = "warning";
		if (this.#logLevel < ConsoleLogger.WARNING) return this;
		if (typeof message !== "string") throw new TypeError(`The message type "${typeof message}" is not valid, it should be a string`);
		if (rest.length === 0) {
			console.log(chalk.bgYellowBright.black.bold("WARNING:") + " " + message);
		} else {
			console.log(chalk.bgYellowBright.black.bold("WARNING:") + " " + message, ...rest);
		}
		return this;
	}

	/**
	 * @description Logs an error message to the console if the log level is set to ERROR or higher.
	 * @param {string} message The error message. Must be a string.
	 * @param {...any} rest Extra parameters.
	 * @returns {this} The console logger instance.
	 * @throws {TypeError} If the message is not a string.
	 */
	error(message, ...rest) {
		this.#lastLogFunction = "error";
		if (this.#logLevel < ConsoleLogger.ERROR) return this;
		if (typeof message !== "string") throw new TypeError(`The message type "${typeof message}" is not valid, it should be a string`);
		if (rest.length === 0) {
			console.error(chalk.bgRedBright.black.bold("ERROR:") + " " + message);
		} else {
			console.error(chalk.bgRedBright.black.bold("ERROR:") + " " + message, ...rest);
		}
		return this;
	}

	/**
	 * @description Logs a message to the console with the same log level as the previous message.
	 * @param {string} message The message.
	 * @param {...any} rest Extra parameters.
	 * @returns {this} The console logger instance.
	 * @throws {TypeError} If the message is not a string.
	 */

	same(message, ...rest) {
		if (this.#lastLogFunction === null) return this;
		if (this.#logLevel < ConsoleLogger.ERROR && this.#lastLogFunction === "error") return this;
		if (this.#logLevel < ConsoleLogger.WARNING && this.#lastLogFunction === "warning") return this;
		if (this.#logLevel < ConsoleLogger.INFO && this.#lastLogFunction === "info") return this;
		if (this.#logLevel < ConsoleLogger.DEBUG && this.#lastLogFunction === "debug") return this;

		if (this.#lastLogFunction === "error") {
			if (rest.length === 0) {
				console.error(" ".repeat(this.#lastLogFunction.length + 2) + message);
			} else {
				console.error(" ".repeat(this.#lastLogFunction.length + 2) + message, ...rest);
			}
		} else {
			if (rest.length === 0) {
				console.log(" ".repeat(this.#lastLogFunction.length + 2) + message);
			} else {
				console.log(" ".repeat(this.#lastLogFunction.length + 2) + message, ...rest);
			}
		}
		return this;
	}
}

module.exports = ConsoleLogger;
