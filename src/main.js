import Navigo from 'navigo';
const router = new Navigo ('/',{linkSeclector: 'a'});
router.on({
    '/': () => console.log('Home page'),
    '/about': () => console.log('About'),
    '/product': () => console.log('Product Page'),
});

router.notFound(()=> console.log('not found page'));

router.resolve();
