import Router from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.render('login', {});
});

router.post('/', (req, res) => {
    req.session.username = req.body.username.trim();
    if (req.session.username == '') {
        res.redirect('login');
    }else{
        res.redirect('/');
    }
});



export default router;