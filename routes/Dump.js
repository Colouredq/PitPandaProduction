const router = require('express').Router();
const hypixelAPI = require('../apiTools/playerRequest');

router.use('/:tag', async (req, res) => {
    const target = await hypixelAPI(req.params.tag);
    if (target.error) return res.json({ success: false, error: target.error });

    await target.loadInventorys();
    res.json({ success: true, data: target });
});

module.exports = router;