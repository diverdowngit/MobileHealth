let serverUrl;

const { REACT_APP_PRODUCTION_SERVER, REACT_APP_DEVELOPMENT_SERVER, NODE_ENV} = process.env

if (NODE_ENV === "production") {
    serverUrl = REACT_APP_PRODUCTION_SERVER
} else {
    serverUrl = REACT_APP_DEVELOPMENT_SERVER
}

export default serverUrl