export const StatusCode = {
  SUCCESS_OK: {
    code: 200,
    message: "Request was successful.",
  },
  SUCCESS_CREATED: {
    code: 201,
    message: "Resource was successfully created.",
  },
  SUCCESS_ACCEPTED: {
    code: 202,
    message: "Request has been accepted for processing.",
  },
  SUCCESS_NO_CONTENT: {
    code: 204,
    message: "Request was successful, but there is no content to send in response.",
  },
  ERROR_BAD_REQUEST: {
    code: 400,
    message: "The server could not understand the request due to invalid syntax.",
  },
  ERROR_UNAUTHORIZED: {
    code: 401,
    message: "The user is not authenticated. Please login and try again.",
  },
  ERROR_FORBIDDEN: {
    code: 403,
    message: "You don't have permission to access this resource.",
  },
  ERROR_NOT_FOUND: {
    code: 404,
    message: "The requested resource could not be found.",
  },
  ERROR_INTERNAL_SERVER: {
    code: 500,
    message: "An internal server error occurred. Please try again later.",
  },
  ERROR_BAD_GATEWAY: {
    code: 502,
    message: "Received an invalid response from the upstream server.",
  },
  ERROR_SERVICE_UNAVAILABLE: {
    code: 503,
    message: "The server is temporarily unavailable. Please try again later.",
  },
  ERROR_GATEWAY_TIMEOUT: {
    code: 504,
    message: "The server took too long to respond. Please try again later.",
  },
} as const;

type HttpStatusCodeType = (typeof StatusCode)[keyof typeof StatusCode];
