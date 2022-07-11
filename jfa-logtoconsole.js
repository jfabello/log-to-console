/**
 * @module jfabello/logtoconsole
 * @description Console logger with coloring and configurable log levels.
 * @license GPL-3.0-only
 * @author Juan F. Abello <juan@jfabello.com>
 */

// Import required modules
const chalk = require("chalk");

/**
 * @function getInstance
 * @description Gets a new instance of the console logger.
 * @param {number} [logLevel=1] The desired console logger instance log level. 4 = Debug, 3 = Info, 2 = Warning, 1 = Error, 0 = No logging.
 * @returns {object} A new console logger instance.
 */

function getInstance(logLevel = 1) {
	// Log levels
	const DEBUG = 4;
	const INFO = 3;
	const WARNING = 2;
	const ERROR = 1;
	const NO_LOGGING = 0;

	/**
	 * @function getLogLevel
	 * @description Gets the current console logger instance log level.
	 * @returns {number} The current console logger instance log level. 4 = Debug, 3 = Info, 2 = Warning, 1 = Error, 0 = No logging.
	 */

	function getLogLevel() {
		return logLevel;
	}

	/**
	 * @function setLogLevel
	 * @description Sets the new console logger instance log level.
	 * @param {number} newLogLevel The desired new console logger instance log level. 4 = Debug, 3 = Info, 2 = Warning, 1 = Error, 0 = No logging.
	 * @returns {number} The new console logger instance log level. 4 = Debug, 3 = Info, 2 = Warning, 1 = Error, 0 = No logging.
	 * @throws {TypeError} If the new log level is not a valid integer between 0 and 4.
	 * @throws {RangeError} If the new log level is not a valid integer between 0 and 4.
	 */

	function setLogLevel(newLogLevel) {
		if (Number.isInteger(newLogLevel) === false) {
			throw new TypeError(`New log level "${newLogLevel}" is not valid, it should be an integer between 0 and 4.`);
		}
		if (newLogLevel < 0 || newLogLevel > 4) {
			throw new RangeError(`New log level "${newLogLevel}" is not valid, it should be an integer between 0 and 4.`);
		}

		logLevel = newLogLevel;
		return logLevel;
	}

	/**
	 * @function debug
	 * @description Logs a debug message to the console.
	 * @param {string} message The debug message.
	 * @param {any...} rest Extra parameters.
	 * @throws {TypeError} If the debug message is not a string.
	 */

	function debug(message, ...rest) {
		if (logLevel < DEBUG) return;
		if (typeof message !== "string") throw new TypeError(`The message type "${typeof message}" is not valid, it should be a string`);
		if (rest.length === 0) {
			console.log(chalk.bgBlueBright.bold("DEBUG:") + " " + message);
		} else {
			console.log(chalk.bgBlueBright.bold("DEBUG:") + " " + message, ...rest);
		}
	}

	function info(message, ...rest) {
		if (logLevel < INFO) return;
		if (typeof message !== "string") throw new TypeError(`The message type "${typeof message}" is not valid, it should be a string`);
		if (rest.length === 0) {
			console.log(chalk.bgWhiteBright.bold("INFO:") + " " + message);
		} else {
			console.log(chalk.bgWhiteBright.bold("INFO:") + " " + message, ...rest);
		}
	}

	function warning(message, ...rest) {
		if (logLevel < WARNING) return;
		if (typeof message !== "string") throw new TypeError(`The message type "${typeof message}" is not valid, it should be a string`);
		if (rest.length === 0) {
			console.log(chalk.bgYellowBright.bold("WARNING:") + " " + message);
		} else {
			console.log(chalk.bgYellowBright.bold("WARNING:") + " " + message, ...rest);
		}
	}

	function error(message, ...rest) {
		if (logLevel < ERROR) return;
		if (typeof message !== "string") throw new TypeError(`The message type "${typeof message}" is not valid, it should be a string`);
		if (rest.length === 0) {
			console.error(chalk.bgRedBright.bold("ERROR:") + " " + message);
		} else {
			console.error(chalk.bgRedBright.bold("ERROR:") + " " + message, ...rest);
		}
	}

	return {
		DEBUG: DEBUG,
		INFO: INFO,
		WARNING: WARNING,
		ERROR: ERROR,
		NO_LOGGING: NO_LOGGING,
		getLogLevel: getLogLevel,
		setLogLevel: setLogLevel,
		debug: debug,
		info: info,
		warning: warning,
		error: error
	};
}

module.exports = { getInstance };
