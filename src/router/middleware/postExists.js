export default function postExists({ next, to, store }) {

    if (!store.getters['posts/postById'](to.params['postId'])) {
        return next({
            name: '404'
        })
    }

    return next()
}