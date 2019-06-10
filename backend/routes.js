const express = require('express');
const router = express.Router();

let Weapon = require('./weapon.model');

router.route('/').get(function (req, res) {
    Weapon.find(function (err, weapons) {
        if (err) {
            console.log(err);
        } else {
            res.json(weapons);
        }
    });
});

router.route('/search').post(function (req, res) {
    const body = req.body;

    // Create query object and set necessary default values to allow everything to be shown
    let query = {
        name: {
            $regex: ''
        },

        phys_atk: {
            $gte: -999,
            $lte: 999
        },
        ele_atk: {
            $gte: -999,
            $lte: 999
        },
        misc_2: {
            $ne: 'Literally nothing has this value'
        }
    };
    if (req.body.name) {
        query.name.$regex = body.name.toLowerCase();
    }

    if (body.type) {
        query.type = body.type;
    }

    if (body.pgt) {
        query.phys_atk.$gte = body.pgt;
    }

    if (body.plt) {
        query.phys_atk.$lte = body.plt;
    }

    if (body.egt) {
        query.ele_atk.$gte = body.egt;
    }

    if (body.elt) {
        query.ele_atk.$lte = body.elt;
    }

    if (body.m2ne) {
        if(body.m2ne === 'yes'){
            query.misc_2.$ne = '';
        }
        
        if(body.m2ne === 'no'){
            query.misc_2.$ne = 'Literally nothing has this value';
            query.misc_2 = '';
        }
    }

    // If user is not searching for a stat property
    if (!body.m_type){
        Weapon.find(query,
            function (err, weapons) {
                if (err) {
                    console.log(err);
                } else {
                    return res.json(weapons);
                }
            })
    }

    // If user is searching for a stat property
    else{
    Weapon.find(query,
        function (err, weapons) {
            if (err) {
                console.log(err);
            } else {
                return res.json(weapons);
            }
        })
        .where('misc_1.type').equals(body.m_type)
        .where('misc_1.value').gte(parseInt(body.mgt)).lte(parseInt(body.mlt));
}
});

router.route('/search/sort').post(function (req, res) {
    const body = req.body;

    // Create query object and set necessary default values to allow everything to be shown
    let query = {
        name: {
            $regex: ''
        },

        phys_atk: {
            $gte: -999,
            $lte: 999
        },
        ele_atk: {
            $gte: -999,
            $lte: 999
        },
        misc_2: {
            $ne: 'Literally nothing has this value'
        }
    };
    if (req.body.name) {
        query.name.$regex = body.name.toLowerCase();
    }

    if (body.type) {
        query.type = body.type;
    }

    if (body.pgt) {
        query.phys_atk.$gte = body.pgt;
    }

    if (body.plt) {
        query.phys_atk.$lte = body.plt;
    }

    if (body.egt) {
        query.ele_atk.$gte = body.egt;
    }

    if (body.elt) {
        query.ele_atk.$lte = body.elt;
    }

    if (body.m2ne) {
        if(body.m2ne === 'yes'){
            query.misc_2.$ne = '';
        }
        
        if(body.m2ne === 'no'){
            query.misc_2.$ne = 'Literally nothing has this value';
            query.misc_2 = '';
        }
    }

    // If user is not searching for a stat property
    if (!body.m_type){
        Weapon.find(query,
            function (err, weapons) {
                if (err) {
                    console.log(err);
                } else {
                    return res.json(weapons);
                }
            })
            .sort(body.sort_by)
    }

    // If user is searching for a stat property
    else{
    Weapon.find(query,
        function (err, weapons) {
            if (err) {
                console.log(err);
            } else {
                return res.json(weapons);
            }
        })
        .where('misc_1.type').equals(body.m_type)
        .where('misc_1.value').gte(parseInt(body.mgt)).lte(parseInt(body.mlt))
        .sort(body.sort_by);
}
});

module.exports = router;