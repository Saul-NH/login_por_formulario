import Router from 'express';
const router = Router();


router.get('/', (req, res) => {
    const username = req.session.username;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.render('logout', { username });
    });
});


export default router;