export const environment  = {
    protocol: "http",
    host : "127.0.0.1",//A changer pour localhost
    port: "3000",
    endpoints: {
        getAll: '/musics/',
        random: '/musics/random',
        findByTitle: '/musics/title/:title',
        findById: '/musics/:id',
        create: '/musics/',
        update: '/musics/:id',
        deleteById: '/musics/:id'
    }
}
