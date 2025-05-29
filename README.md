# heyapi-opaque-errors

This is a minimal reproduction repo demonstrating opaque error output from the `@hey-api/openapi-ts` package. Although the file is there, it is resulting in a file not found error.

## How to Run

1. Clone the repository:
   ```bash
   git clone
   ```
2. Navigate to the project directory:
   ```bash
   cd heyapi-opaque-errors
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the script that triggers the error:
   ```bash
   npm run start
   ```
5. Observe the error log outputted to openapi-ts-error-{timestamp}.log
6. Try to follow the error message to understand what went wrong. You will notice that the error message is not very helpful and references minified code, making it hard to debug.
