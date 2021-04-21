__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creatorList = ['Hendrik'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'Apikey Invalid!! Chat Owner'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey Invalid:( Hub Owner Bro'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

router.get('/nsfwboruto', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'free') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/MikuWhatsBOT/Test/main/naru.json`))
        .then(response => response.json())
        .then(data => {
        	nimek =  data[Math.floor(Math.random() * data.length)];
        var result = nimek;
             res.json({
             	creator: `${creator}`,
                 result,
                 status : 200
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/javhd', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'free') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/MikuWhatsBOT/Test/main/jh.json`))
        .then(response => response.json())
        .then(data => {
        	nimek =  data[Math.floor(Math.random() * data.length)];
        var result = nimek;
             res.json({
             	creator: `${creator}`,
                 result,
                 status : 200
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/nsfwcosplay', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'free') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/MikuWhatsBOT/Test/main/cs.json`))
        .then(response => response.json())
        .then(data => {
        	nimek =  data[Math.floor(Math.random() * data.length)];
        var result = nimek;
             res.json({
             	creator: `${creator}`,
                 result,
                 status : 200
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/funfact', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'free') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://raw.githubusercontent.com/MikuWhatsBOT/Test/main/ff.json`))
        .then(response => response.json())
        .then(data => {
        	nimek =  data[Math.floor(Math.random() * data.length)];
        var result = nimek;
             res.json({
             	creator: `${creator}`,
                 result,
                 status : 200
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


module.exports = router
