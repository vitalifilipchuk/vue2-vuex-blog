export default function auth({ next, router }) {
    if (!localStorage.getItem('currentLoggedUser')) {
        return router.push({ name: 'Login' });
    }

    return next();
}