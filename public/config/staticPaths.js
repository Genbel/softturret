const params = {
    server: {
        domain: 'localhost',
        port: 3001,
        scheme: 'http'
    }
};
export const APIPath = `${params.server.scheme}://${params.server.domain}:${params.server.port}/api/dataservice`;