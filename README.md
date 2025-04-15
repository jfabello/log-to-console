# Console logger with coloring and configurable log levels for Node.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [What is New](#what-is-new)
  - [Version 2.0.0](#version-200)
  - [Version 1.0.0](#version-100)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Using Multiple Message Types](#using-multiple-message-types)
  - [Changing the Log Level](#changing-the-log-level)
- [The `ConsoleLogger` Class](#the-consolelogger-class)
  - [Static Properties](#static-properties)
  - [Instance Properties](#instance-properties)
  - [Instance Methods](#instance-methods)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## What is New

### Version 2.0.0

- `ConsoleLogger` is now an ES6 module. This provides better support for tools like ESLint 9 and a cleaner code syntax.

### Version 1.0.0

- Initial release.

## Installation

You can install this module via `npm`:

```shell
npm install @jfabello/log-to-console
```

## Usage

To use the `log-to-console` module, first import it into your code and then create an instance of the `ConsoleLogger` class.

Here are some examples:

### Basic Usage

```javascript
import { ConsoleLogger } from "@jfabello/log-to-console";

// Creates a new console logger instance
const logToConsole = new ConsoleLogger(ConsoleLogger.DEBUG);

// Writes an info message to the console.
logToConsole.info("This is an info message.");
logToConsole.same("This is the continuation of the info message above.");
```

### Using Multiple Message Types

```javascript
import { ConsoleLogger } from "@jfabello/log-to-console";

// Creates a new console logger instance
const logToConsole = new ConsoleLogger(ConsoleLogger.DEBUG);

// Writes several messages to the console.
logToConsole.debug("This is a debug message.");
logToConsole.same("This is the continuation of the debug message above.");
logToConsole.info("This is an info message.");
logToConsole.same("This is the continuation of the info message above.");
logToConsole.warning("This is a warning message.");
logToConsole.same("This is the continuation of the warning message above.");
logToConsole.error("This is an error message.");
logToConsole.same("This is the continuation of the error message above.");
```

### Changing the Log Level

```javascript
import { ConsoleLogger } from "@jfabello/log-to-console";

// Creates a new console logger instance
const logToConsole = new ConsoleLogger(ConsoleLogger.DEBUG);

// Writes several messages to the console.
// All the messages will be displayed because the log level is set to DEBUG.
logToConsole.debug("This is a debug message.");
logToConsole.same("This is the continuation of the debug message above.");
logToConsole.info("This is an info message.");
logToConsole.same("This is the continuation of the info message above.");
logToConsole.warning("This is a warning message.");
logToConsole.same("This is the continuation of the warning message above.");
logToConsole.error("This is an error message.");
logToConsole.same("This is the continuation of the error message above.");

// Sets the console logger instance log level to WARNING
logToConsole.logLevel = ConsoleLogger.WARNING;

// Writes several messages to the console.
// Only the warning and error messages will be displayed because the log level is set to WARNING.
logToConsole.debug("This is a debug message.");
logToConsole.same("This is the continuation of the debug message above.");
logToConsole.info("This is an info message.");
logToConsole.same("This is the continuation of the info message above.");
logToConsole.warning("This is a warning message.");
logToConsole.same("This is the continuation of the warning message above.");
logToConsole.error("This is an error message.");
logToConsole.same("This is the continuation of the error message above.");
```

## The `ConsoleLogger` Class

Console logger with coloring and configurable log levels.

### Static Properties

- `DEBUG`: Read-only constant representing the debug logging level (4).
- `INFO`: Read-only constant representing the information logging level (3).
- `WARNING`: Read-only constant representing the warning logging level (2).
- `ERROR`: Read-only constant representing the error logging level (1).
- `NO_LOGGING`: Read-only constant representing the no logging level (0).

### Instance Properties

- `logLevel`: Gets or sets the current console logger instance log level.

### Instance Methods

#### `constructor(logLevel = 1)`

Creates a new instance of the console logger.

##### Parameters

- `logLevel` (number): The desired console logger instance log level. 4 = Debug, 3 = Info, 2 = Warning, 1 = Error, 0 = No logging. Defaults to 1.

##### Throws

- `TypeError`: If the provided log level is not an integer.
- `RangeError`: If the provided log level is not between 0 and 4.

#### `debug(message, ...rest)`

Logs a debug message to the console if the log level is set to `DEBUG` or higher.

##### Parameters

- `message` (string): The debug message. Must be a string.
- `...rest` (any): Extra parameters.

##### Returns

- `this`: The console logger instance.

##### Throws

- `TypeError`: If the message is not a string.

#### `info(message, ...rest)`

Logs an information message to the console if the log level is set to `INFO` or higher.

##### Parameters

- `message` (string): The information message. Must be a string.
- `...rest` (any): Extra parameters.

##### Returns

- `this`: The console logger instance.

##### Throws

- `TypeError`: If the message is not a string.

#### `warning(message, ...rest)`

Logs a warning message to the console if the log level is set to `WARNING` or higher.

##### Parameters

- `message` (string): The warning message. Must be a string.
- `...rest` (any): Extra parameters.

##### Returns

- `this`: The console logger instance.

##### Throws

- `TypeError`: If the message is not a string.

#### `error(message, ...rest)`

Logs an error message to the console if the log level is set to `ERROR` or higher.

##### Parameters

- `message` (string): The error message. Must be a string.
- `...rest` (any): Extra parameters.

##### Returns

- `this`: The console logger instance.

##### Throws

- `TypeError`: If the message is not a string.

#### `same(message, ...rest)`

Logs a message to the console with the same log level as the previous message.

##### Parameters

- `message` (string): The message. Must be a string.
- `...rest` (any): Extra parameters.

##### Returns

- `this`: The console logger instance.

##### Throws

- `TypeError`: If the message is not a string.

## Testing

To run the tests for this module, first clone the repository using the following command:

```shell
git clone https://github.com/jfabello/log-to-console.git
```

Then, navigate to the project directory and install the npm dependencies:

```shell
cd log-to-console
npm install
```

Finally, run the tests using the following command:

```shell
npm test
```

## Contributing

Unfortunately, we are not able to accept contributions at this time.

If you find a bug in the code, please open an issue.

Thank you for your understanding.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.