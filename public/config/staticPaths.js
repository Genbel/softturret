const params = {
    server: {
        domain: '192.168.0.2',
        port: 3001,
        scheme: 'http'
    }
};
export const APIPath = `${params.server.scheme}://${params.server.domain}:${params.server.port}/api/dataservice`;