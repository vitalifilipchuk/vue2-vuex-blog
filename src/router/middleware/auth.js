export default function auth({ next, store }) {
    if (!localStorage.getItem('currentLoggedUser')) {

        return next({
            name: 'Login'
        })
    }

    return next();
}