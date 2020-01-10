/***********************************************************
*		This file is originally liscensed by google, downloaded
*		from marzipano.net
*		This file is modified for building *virtual tour* system
*		for university of nottingham computer science second year
*		group project group9
*
*		**g52grp____group9**
*
*		This file stores all the information to form a Tour
*		The data stored in this file are read in index.js to create the Tour
*
*  	Modifications:
*
*		* different attribute is to be added to each infoHotspots element:
*				id: if the id is set to be 'link', then it should have a link attribute(url that this hotspot links to)
*				title: title of hotspots(non-existence means no title)(at most one allowed)
*				txt: main text of hotspots(non-existence means no text)(at most one allowed)
*
************************************************************/

var APP_DATA = {
	"scenes": [
		{
			"id": "0-at_m2",
			"name": "CS Atrium",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.6103036559457777,
				"pitch": -0.2423926267281189,
				"fov": 1.5085454020930418
			},
			"linkHotspots": [
				{
					"yaw": 0.4701408760824055,
					"pitch": 0.4402187513993674,
					"rotation": 0,
					"target": "2-at_m3"
				},
				{
					"yaw": -2.5917782960169724,
					"pitch": 0.44578049913478246,
					"rotation": 0,
					"target": "1-at_m1"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "1-at_m1",
			"name": "CS Atrium",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 1.0540271004435269,
				"pitch": -0.2084522132272255,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": -2.028438373183027,
					"pitch": 0.5597930894816727,
					"rotation": 0,
					"target": "0-at_m2"
				},
				{
					"yaw": 2.609518824066866,
					"pitch": 0.805012660116617,
					"rotation": 0,
					"target": "6-at_r1"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "2-at_m3",
			"name": "CS Atrium",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 1.3018999990176852,
				"pitch": 0.0487423047624258,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": 2.8907178237034925,
					"pitch": 0.6042032739391701,
					"rotation": 0,
					"target": "0-at_m2"
				},
				{
					"yaw": -1.7704102365420447,
					"pitch": 0.6490390272181479,
					"rotation": 0,
					"target": "12-reception"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "3-fl",
			"name": "Functional Programming Lab",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.036424262650314176,
				"pitch": -0.0327567763642822,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": 3.0179723800143927,
					"pitch": 0.06222423978898739,
					"rotation": 1.5707963267948966,
					"target": "7-hub"
				}
			],
			"infoHotspots": [
				{
					"yaw": -0.9360034249862714,
					"pitch": -0.03209781257073985,
					"title": "Functional Programming Lab",
					"text": "The aim of the FPL is to develop simple but powerful techniques for writing and reasoning about programs, by recognising and exploiting their underlying mathematical structure."
				}
			]
		},
		{
			"id": "4-a_f1",
			"name": "Floor A",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.434671018731457,
				"pitch": 0.07146933024931634,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": 0.6095879092067307,
					"pitch": 0.5469892608598226,
					"rotation": 0,
					"target": "7-hub"
				},
				{
					"yaw": -2.409885464882663,
					"pitch": 0.7356028251395834,
					"rotation": 0,
					"target": "18-a_f2"
				},
				{
					"yaw": -2.226474552808284,
					"pitch": 0.47061769688873056,
					"rotation": 19.63495408493622,
					"target": "6-at_r1"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "5-a_f4",
			"name": "Floor A",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.647062206738859,
				"pitch": -0.1943929253614769,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": 0.807521357122722,
					"pitch": 0.5589043553302986,
					"rotation": 0,
					"target": "16-a_f3"
				},
				{
					"yaw": 2.3407461350853715,
					"pitch": 0.7600486857549171,
					"rotation": 0,
					"target": "10-a_s"
				},
				{
					"yaw": -2.2498585506623243,
					"pitch": 0.7467038362984386,
					"rotation": 0,
					"target": "12-a_fd"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "6-at_r1",
			"name": "CS Atrium",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.9720043610604208,
				"pitch": 0.0006316157536740974,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": -0.9364999893202857,
					"pitch": 0.6820175896612106,
					"rotation": 0,
					"target": "4-a_f1"
				},
				{
					"yaw": -2.5916576846442254,
					"pitch": 0.7591843385632249,
					"rotation": 0,
					"target": "1-at_m1"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "7-hub",
			"name": "the Hub",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 1.1792355033039854,
				"pitch": -0.014889443801960667,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": -2.321546562136474,
					"pitch": 0.6359162114592962,
					"rotation": 0,
					"target": "4-a_f1"
				},
				{
					"yaw": -0.24193109465101337,
					"pitch": 0.008809978000503094,
					"rotation": 1.5707963267948966,
					"target": "3-fl"
				}
			],
			"infoHotspots": [
				{
					"yaw": 0.2920591419966314,
					"pitch": -0.1667741497082833,
					"title": "The Hub",
					"text": "Events such as open day, society event may be held here.<br>You might find free food here occasionaly."
				}
			]
		},
		{
			"id": "10-a_s",
			"name": "Floor A",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.6043343660769303,
				"pitch": -0.1352311140145055,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": -0.603042032424927,
					"pitch": 0.5674684132194443,
					"rotation": 0,
					"target": "5-a_f4"
				},
				{
					"yaw": -1.8994658696540458,
					"pitch": -0.034227418186972614,
					"rotation": 4.71238898038469,
					"target": "3-b_s"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "12-reception",
			"name": "Reception",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.0719754018934502,
				"pitch": -0.0719092048146166,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": -1.6062006518529905,
					"pitch": 0.6595190254280876,
					"rotation": 0,
					"target": "2-at_m3"
				},
				{
					"yaw": 0.45020112879953267,
					"pitch": 0.1041274773820362,
					"rotation": 7.853981633974483,
					"target": "14-a32_m"
				}
			],
			"infoHotspots": [
				{
					"yaw": 1.3400795079173822,
					"pitch": -0.025407757402039266,
					"title": "Reception",
					"text": "You can ask for help on issues related to school affairs here."
				}
			]
		},
		{
			"id": "14-a32_m",
			"name": "A32",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.4922315874350396,
				"pitch": 0.06268256891365986,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": -2.2067714233582098,
					"pitch": 0.025306347716494315,
					"rotation": 0.0707963267948966,
					"target": "12-reception"
				},
				{
					"yaw": 6.6067714233582098,
					"pitch": 0.025306347716494315,
					"rotation": 0.0707963267948966,
					"target": "18-a_f2"
				},
				{
					"yaw": 7.2067714233582098,
					"pitch": 0.025306347716494315,
					"rotation": 0.0707963267948966,
					"target": "16-a_f3"
				}
			],
			"infoHotspots": [
				{
					"yaw": -3.127729025017439,
					"pitch": 0.020099901262671693,
					"title": "Computer Lab",
					"text": "Number of PC: 160<br><br>Main lab for computer science. <br>Events such as exams, assessed lab sessions, society events may be held here."
				}
			]
		},
		{
			"id": "16-a_f3",
			"name": "Floor A",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.11235428744995,
				"pitch": -0.028786258017111876,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": -0.4067714233582098,
					"pitch": 0.025306347716494315,
					"rotation": 1.5707963267948966,
					"target": "14-a32_m"
				},
				{
					"yaw": 0.9711221906140128,
					"pitch": 0.7233834011554237,
					"rotation": 0,
					"target": "18-a_f2"
				},
				{
					"yaw": -2.048027809202569,
					"pitch": 0.6574427496021222,
					"rotation": 0,
					"target": "5-a_f4"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "18-a_f2",
			"name": "Floor A",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 1.9432578589449285,
				"pitch": -0.005955777520773253,
				"fov": 1.5514800441625776
			},
			"linkHotspots": [
				{
					"yaw": -2.869168875810935,
					"pitch": 0.047992385357567,
					"rotation": 1.5707963267948966,
					"target": "14-a32_m"
				},
				{
					"yaw": -1.2101077753617275,
					"pitch": 0.6778031186638156,
					"rotation": 0,
					"target": "4-a_f1"
				},
				{
					"yaw": 1.9372130244318786,
					"pitch": 0.6959463028277924,
					"rotation": 0,
					"target": "16-a_f3"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "0-b_b1",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.7574500806040554,
				"pitch": 0.07200605127402504,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": -2.2860248798649554,
					"pitch": 0.6555726362158492,
					"rotation": 0,
					"target": "11-b_b2"
				},
				{
					"yaw": 0.759345981276363,
					"pitch": 0.6850768208449676,
					"rotation": 0,
					"target": "2-b_b0"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "1-b_f1",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 2.7331681877819305,
				"pitch": 0.1283702974715144,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": -0.5127874200615139,
					"pitch": 0.516631139840122,
					"rotation": 0,
					"target": "4-b_f2"
				},
				{
					"yaw": 2.93387465078637,
					"pitch": 0.033962525658782994,
					"rotation": 1.5707963267948966,
					"target": "12-b_room2"
				},
				{
					"yaw": 2.647199857956993,
					"pitch": 0.7645725973894759,
					"rotation": 6.283185307179586,
					"target": "10-mix_2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "2-b_f4",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.944088536458505,
				"pitch": 0.03184054179859608,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": 2.377368039958,
					"pitch": 0.7613103013777884,
					"rotation": 0,
					"target": "3-b_s"
				},
				{
					"yaw": -2.165286115345868,
					"pitch": 0.6612904210761812,
					"rotation": 0,
					"target": "9-b_f5"
				},
				{
					"yaw": -2.3423440226462127,
					"pitch": 0.029290546119163707,
					"rotation": 4.71238898038469,
					"target": "13-b_room1"
				},
				{
					"yaw": 0.8586287417611516,
					"pitch": 0.6451415674972623,
					"rotation": 0,
					"target": "10-b_f3"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "3-b_s",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.6023097026490234,
				"pitch": 0,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": 0.543538391933458,
					"pitch": 0.6172813508966843,
					"rotation": 0,
					"target": "2-b_f4"
				},
				{
					"yaw": 2.137757190322775,
					"pitch": 0.6725660454740883,
					"rotation": 1.5707963267948966,
					"target": "10-a_s"
				},
				{
					"yaw": -1.051119370290042,
					"pitch": -0.010759671468196785,
					"rotation": 4.71238898038469,
					"target": "0-c_s"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "4-b_f2",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 1.1190201434044589,
				"pitch": -0.018784187288876097,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": -1.988897222537183,
					"pitch": 0.589595272734746,
					"rotation": 0,
					"target": "10-b_f3"
				},
				{
					"yaw": -0.49144895267117583,
					"pitch": 0.6112599449660063,
					"rotation": 0,
					"target": "6-b_c1"
				},
				{
					"yaw": 1.015554972239343,
					"pitch": 0.5922446625624396,
					"rotation": 0,
					"target": "1-b_f1"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "5-b_c2",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 2.3334414462203448,
				"pitch": 0.043829770340710894,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": -0.779493370949023,
					"pitch": 0.5692616572369982,
					"rotation": 0,
					"target": "10-b_f3"
				},
				{
					"yaw": 2.275271344256139,
					"pitch": 0.6605831282112042,
					"rotation": 0,
					"target": "7-b_b3"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "6-b_c1",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.9148719347055341,
				"pitch": 0.024049137105565777,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": 2.15252180119466,
					"pitch": 0.6909523097099584,
					"rotation": 0,
					"target": "10-b_f3"
				},
				{
					"yaw": -1.8284239171270826,
					"pitch": 0.020146014504945242,
					"rotation": 1.5707963267948966,
					"target": "14-b_lab2"
				},
				{
					"yaw": -0.9501318238725744,
					"pitch": 0.6458992591594406,
					"rotation": 0,
					"target": "11-b_b2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "7-b_b3",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.281890960242613,
				"pitch": -0.006261395762958699,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": 2.308974357077769,
					"pitch": 0.6622787289748988,
					"rotation": 0,
					"target": "11-b_b2"
				},
				{
					"yaw": -2.359692161277504,
					"pitch": 0.6155978721814357,
					"rotation": 0,
					"target": "5-b_c2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "8-b_c3",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 1.9201875769624088,
				"pitch": 0.05747926568145445,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": -1.1637148905885315,
					"pitch": 0.520547406623205,
					"rotation": 0,
					"target": "9-b_f5"
				},
				{
					"yaw": 1.9156977998280178,
					"pitch": 0.7310173162972582,
					"rotation": 0,
					"target": "4-b_b4"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "9-b_f5",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 2.462957203497644,
				"pitch": 0.055214126273366304,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": -2.2535984987068503,
					"pitch": 0.5676913411413018,
					"rotation": 0,
					"target": "2-b_f4"
				},
				{
					"yaw": 2.397597090923192,
					"pitch": 0.6370578752190532,
					"rotation": 0,
					"target": "8-b_c3"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "10-b_f3",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.766717604284807,
				"pitch": -0.037568374577752195,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": 0.4176236035664562,
					"pitch": 0.6249189822662746,
					"rotation": 0,
					"target": "2-b_f4"
				},
				{
					"yaw": 1.9307276739672936,
					"pitch": 0.6770990898653757,
					"rotation": 0,
					"target": "5-b_c2"
				},
				{
					"yaw": 2.347847559941232,
					"pitch": 0.07408350247771978,
					"rotation": 1.5707963267948966,
					"target": "15-b_lab1"
				},
				{
					"yaw": -2.74345762597261,
					"pitch": 0.5838998444495953,
					"rotation": 0,
					"target": "4-b_f2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "11-b_b2",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.7985166512392432,
				"pitch": -0.008650958326375857,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": -0.8211744366465936,
					"pitch": 0.5235745822518272,
					"rotation": 0,
					"target": "6-b_c1"
				},
				{
					"yaw": -2.4211465948616624,
					"pitch": 0.6143940717012644,
					"rotation": 0,
					"target": "0-b_b1"
				},
				{
					"yaw": 0.7026950227847273,
					"pitch": 0.6790122776582628,
					"rotation": 0,
					"target": "7-b_b3"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "12-b_room2",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 2.930541796204456,
				"pitch": 0.018784187288876097,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": -3.0785602328025767,
					"pitch": -0.02657207173649212,
					"rotation": 1.5707963267948966,
					"target": "1-b_f1"
				}
			],
			"infoHotspots": [
				{
					"yaw": 2.122790536124363,
					"pitch": -0.21858178906577308,
					"title": "Title",
					"text": "Text"
				}
			]
		},
		{
			"id": "13-b_room1",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.020533285317576144,
				"pitch": -0.05948325974810764,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": -0.2369685663001686,
					"pitch": 0,
					"rotation": 1.5707963267948966,
					"target": "2-b_f4"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "14-b_lab2",
			"name": "B52",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.6816121084843694,
				"pitch": -0.12333862794610972,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": 2.9930929266610242,
					"pitch": 0.07730487456087687,
					"rotation": 1.5707963267948966,
					"target": "6-b_c1"
				}
			],
			"infoHotspots": [
				{
					"yaw": -1.8746884618223056,
					"pitch": -0.15920638977116397,
					"title": "Computer Lab",
					"text": "You can study here"
				}
			]
		},
		{
			"id": "15-b_lab1",
			"name": "B53",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.5931837980634178,
				"pitch": 0.015653489407396748,
				"fov": 1.4056833487842166
			},
			"linkHotspots": [
				{
					"yaw": 0.5944150812048807,
					"pitch": 0.0712571709181038,
					"rotation": 1.5707963267948966,
					"target": "10-b_f3"
				}
			],
			"infoHotspots": [
				{
					"yaw": 0.1748046021937668,
					"pitch": -0.024764058242794817,
					"title": "Computer Lab",
					"text": "You can study here"
				}
			]
		},
		{
			"id": "0-c_s",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -1.7123531362042677,
				"pitch": -0.09907816795588076,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -1.6891831919794136,
					"pitch": 0.5540075695879949,
					"rotation": 0,
					"target": "17-c_f4"
				},
				{
					"yaw": -0.13941808531948752,
					"pitch": 0.5721539029868392,
					"rotation": 7.853981633974483,
					"target": "3-b_s"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "1-c50",
			"name": "C50",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 1.6184197252321688,
				"pitch": 0.09320757729151197,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -1.3389903883732082,
					"pitch": -0.006027639152279107,
					"rotation": 1.5707963267948966,
					"target": "15-c_f2"
				}
			],
			"infoHotspots": [
				{
					"yaw": 0.6803808502521811,
					"pitch": -0.13974971536391045,
					"title": "Apple Computer Lab",
					"text": "You can study here"
				}
			]
		},
		{
			"id": "2-c_b0",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -1.0426445183652504,
				"pitch": 0.07611546143849779,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -1.0185647748107307,
					"pitch": 0.7356917967977203,
					"rotation": 0,
					"target": "3-c_b1"
				},
				{
					"yaw": -2.700460977439647,
					"pitch": 0.7323046384608656,
					"rotation": 0,
					"target": "7-c_c0"
				},
				{
					"yaw": -0.8642323611774767,
					"pitch": 0.008309053142681933,
					"rotation": 1.5707963267948966,
					"target": "20-c_mroom"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "3-c_b1",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -1.5584585525692418,
				"pitch": 0.028037323602355002,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -1.5459718616076312,
					"pitch": 0.6688345719382713,
					"rotation": 0,
					"target": "4-c_b2"
				},
				{
					"yaw": 1.4858963789977588,
					"pitch": 0.7419130662894631,
					"rotation": 0,
					"target": "2-c_b0"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "4-c_b2",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.3943832680513353,
				"pitch": 0.09628608234788416,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.5720715158887959,
					"pitch": 0.6966804773623494,
					"rotation": 0,
					"target": "3-c_b1"
				},
				{
					"yaw": 2.1465263327638233,
					"pitch": 0.678595974490122,
					"rotation": 0,
					"target": "11-c_cross1"
				},
				{
					"yaw": -2.4116403221610465,
					"pitch": 0.7802450896678614,
					"rotation": 0,
					"target": "5-c_b3"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "5-c_b3",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 2.515756524799915,
				"pitch": 0.10897534799529751,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 2.419602097706676,
					"pitch": 0.8119729379194389,
					"rotation": 0,
					"target": "4-c_b2"
				},
				{
					"yaw": -2.214941546652332,
					"pitch": 0.7153860221487136,
					"rotation": 0,
					"target": "12-c_cross2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "6-c_b4",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 2.284070756719432,
				"pitch": 0.05939816745577531,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -0.8005422892909078,
					"pitch": 0.6740789543651591,
					"rotation": 0,
					"target": "10-c_c3"
				}
			],
			"infoHotspots": [
				{
					"yaw": 2.359881622487963,
					"pitch": -0.49927099474198755,
					"title": "Automated Scheduling, Optimisation & Planning",
					"text": "The ASAP research group carries out multi-disciplinary research into mathematical models and algorithms for a variety of real-world optimisation problems under uncertainty."
				}
			]
		},
		{
			"id": "7-c_c0",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.2595228713834974,
				"pitch": 0.012099385435970333,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.2607775829655097,
					"pitch": 0.6775074431034867,
					"rotation": 0,
					"target": "2-c_b0"
				},
				{
					"yaw": -2.9050974107201792,
					"pitch": 0.7007210212069879,
					"rotation": 0,
					"target": "13-c_f0"
				},
				{
					"yaw": 2.8370728959021694,
					"pitch": 0.04795543954535475,
					"rotation": 4.71238898038469,
					"target": "19-c_lab"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "8-c_c1",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.8854706440165003,
				"pitch": -0.020312892291070028,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -0.9386287212508151,
					"pitch": 0.6358290504961772,
					"rotation": 0,
					"target": "11-c_cross1"
				},
				{
					"yaw": 2.0851254531686196,
					"pitch": 0.6917605023971944,
					"rotation": 0,
					"target": "15-c_f2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "9-c_c2",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.726515508027372,
				"pitch": 0.10738852700077572,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.3356655436672664,
					"pitch": 0.6569024974333288,
					"rotation": 0,
					"target": "16-c_f3"
				},
				{
					"yaw": -2.829511899841229,
					"pitch": 0.7668009729464593,
					"rotation": 0,
					"target": "12-c_cross2"
				}
			],
			"infoHotspots": [
				{
					"yaw": 2.359881622487963,
					"pitch": -0.49927099474198755,
					"title": "Title",
					"text": "Text"
				}
			]
		},
		{
			"id": "10-c_c3",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.5648441845220056,
				"pitch": 0.022220911532162546,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.502484834879219,
					"pitch": 0.7205020868982892,
					"rotation": 0,
					"target": "18-c_f5"
				},
				{
					"yaw": -2.515046775150795,
					"pitch": 0.6906674133072297,
					"rotation": 0,
					"target": "6-c_b4"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "11-c_cross1",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.2447368597077393,
				"pitch": 0.02280151954134979,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.4527729328854786,
					"pitch": 0.6869915985069834,
					"rotation": 0.7853981633974483,
					"target": "8-c_c1"
				},
				{
					"yaw": 2.6192498702670406,
					"pitch": 0.7658667654496814,
					"rotation": 0,
					"target": "12-c_cross2"
				},
				{
					"yaw": -2.2485717667025575,
					"pitch": 0.6941676720439993,
					"rotation": 0,
					"target": "4-c_b2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "12-c_cross2",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -1.26989659478879,
				"pitch": 0.00029570159838243626,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.25968271820623556,
					"pitch": 0.712084552020773,
					"rotation": 0,
					"target": "11-c_cross1"
				},
				{
					"yaw": -1.2623635426482025,
					"pitch": 0.6716501867675255,
					"rotation": 0,
					"target": "5-c_b3"
				},
				{
					"yaw": 2.2651295154848716,
					"pitch": 0.7405649024803331,
					"rotation": 5.497787143782138,
					"target": "9-c_c2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "13-c_f0",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.960866556548698,
				"pitch": 0.04047483647149264,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -0.5837702366893431,
					"pitch": 0.6541254757999724,
					"rotation": 0,
					"target": "14-c_f1"
				},
				{
					"yaw": 1.003705568815704,
					"pitch": 0.722823995745399,
					"rotation": 0,
					"target": "7-c_c0"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "14-c_f1",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 2.4439236593806157,
				"pitch": 0.040282100292980516,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 2.308355814952204,
					"pitch": 0.7230271890907343,
					"rotation": 0,
					"target": "13-c_f0"
				},
				{
					"yaw": -0.7454292871002579,
					"pitch": 0.6329383890477018,
					"rotation": 0,
					"target": "15-c_f2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "15-c_f2",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.4262027993409916,
				"pitch": 0.10861252165224045,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.5669848574496328,
					"pitch": 0.6961951509900715,
					"rotation": 0,
					"target": "16-c_f3"
				},
				{
					"yaw": 2.1567324891766964,
					"pitch": 0.7129223818831818,
					"rotation": 0,
					"target": "9-c_c2"
				},
				{
					"yaw": -2.417922605953846,
					"pitch": 0.7706624258917714,
					"rotation": 0,
					"target": "14-c_f1"
				},
				{
					"yaw": -2.642258614838031,
					"pitch": 0.05330982535869566,
					"rotation": 4.71238898038469,
					"target": "1-c50"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "16-c_f3",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -2.183944757251865,
				"pitch": 0.06667255206023981,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.8859513525742511,
					"pitch": 0.6545144685705431,
					"rotation": 0,
					"target": "17-c_f4"
				},
				{
					"yaw": 2.515093494506467,
					"pitch": 0.7352674228655633,
					"rotation": 0,
					"target": "9-c_c2"
				},
				{
					"yaw": -2.139704884181537,
					"pitch": 0.7275467969563643,
					"rotation": 0,
					"target": "15-c_f2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "17-c_f4",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.7801700156852487,
				"pitch": 2.4868995751603507e-14,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -2.3367392720513465,
					"pitch": 0.6438097211575489,
					"rotation": 0,
					"target": "0-c_s"
				},
				{
					"yaw": -0.8850885020909978,
					"pitch": -0.04056864525906079,
					"rotation": 4.71238898038469,
					"target": "21-c_room2"
				},
				{
					"yaw": -0.6973400350256611,
					"pitch": 0.6412535811595337,
					"rotation": 0,
					"target": "18-c_f5"
				},
				{
					"yaw": 2.2945574292857094,
					"pitch": 0.7365606089447603,
					"rotation": 0,
					"target": "16-c_f3"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "18-c_f5",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -1.078997350188331,
				"pitch": -0.013448526198864386,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.5255282531322543,
					"pitch": 0.6410908664785815,
					"rotation": 0,
					"target": "17-c_f4"
				},
				{
					"yaw": -0.796251810211956,
					"pitch": 0.6519766960563764,
					"rotation": 0,
					"target": "10-c_c3"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "19-c_lab",
			"name": "C11",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 2.129987918459264,
				"pitch": 0.02940251499017066,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -3.105791195250493,
					"pitch": 0.056423476106605364,
					"rotation": 4.71238898038469,
					"target": "7-c_c0"
				}
			],
			"infoHotspots": [
				{
					"yaw": 1.3324304009801082,
					"pitch": -0.14007246342265134,
					"title": "Computer Lab",
					"text": "You can study here"
				}
			]
		},
		{
			"id": "20-c_mroom",
			"name": "C1",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0,
				"pitch": 0,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 2.6252453956001105,
					"pitch": 0.10421770350810178,
					"rotation": 4.71238898038469,
					"target": "2-c_b0"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "21-c_room2",
			"name": "Floor C",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.5577465218329642,
				"pitch": -0.06003212853647355,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -0.7372662190272496,
					"pitch": -0.09610777764907574,
					"rotation": 4.71238898038469,
					"target": "17-c_f4"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "4-b_b4",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.7610699990781882,
				"pitch": -0.033256591567313976,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -2.3814171409423146,
					"pitch": 0.7138794088917066,
					"rotation": 0,
					"target": "8-b_c3"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "12-a_fd",
			"name": "Floor A",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.17073873117335836,
				"pitch": -0.02117392451297917,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -2.5812311542777877,
					"pitch": 0.8412842497787913,
					"rotation": 6.283185307179586,
					"target": "5-a_f4"
				}
			],
			"infoHotspots": [
				{
					"id": "link",
					"yaw": -0.009106455413112613,
					"pitch": 0.014021160864615467,
					"title": "Title",
					"text": "Text",
					"link": "https://www.google.com/maps/@52.953183,-1.1867669,3a,75y,165.53h,95.16t/data=!3m6!1e1!3m4!1s3ybyfKIYAiKtYAYgdMTT3w!2e0!7i13312!8i6656"//"https://sanbi-storage.co.uk/Nottingham_University/"
				},
				{
					"yaw": 2.761488484072733,
					"pitch": 0.041423354958212144,
					"title": "PUC-MAN",
					"text": "Final year Individual Dissertation. <br><br>A re-creation and development of Namco’s 1980 arcade game, written from scratch and purely in Java 8. It features additional characters from the same era as well as extra powerups for an alternative experience."
				}
			]
		},
		{
			"id": "9-mix_1",
			"name": "Mixed Reality Lab",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 2.834740974427728,
				"pitch": 0.1032722677097766,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 0.3001427995940382,
					"pitch": 0.07299013408956156,
					"rotation": 4.71238898038469,
					"target": "10-mix_2"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "10-mix_2",
			"name": "Mixed Reality Lab",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.28255678858333866,
				"pitch": 0.06079684297202803,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -1.481397313547646,
					"pitch": 0.04469554177616786,
					"rotation": 1.5707963267948966,
					"target": "11-mix_3"
				},
				{
					"yaw": 0.8003352071539851,
					"pitch": 0.05284361335870891,
					"rotation": 1.5707963267948966,
					"target": "9-mix_1"
				},
				{
					"yaw": -2.830131365208306,
					"pitch": 0.08036012190154196,
					"rotation": 1.5707963267948966,
					"target": "1-b_f1"
				}
			],
			"infoHotspots": []
		},
		{
			"id": "11-mix_3",
			"name": "Mixed Reality Lab",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": -0.8719057871919453,
				"pitch": 0.04839754174393818,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": -0.8906903169702236,
					"pitch": -0.01927138983802834,
					"rotation": 1.5707963267948966,
					"target": "2-b_b0"
				},
				{
					"yaw": 2.12718484544663,
					"pitch": 0.05686895324372365,
					"rotation": 1.5707963267948966,
					"target": "10-mix_2"
				}
			],
			"infoHotspots": [
				{
					"yaw": 0.8908159246688481,
					"pitch": -0.3059851475523878,
					"title": "Mixed Reality Lab",
					"text": "The MRL is a dedicated studio facility within The University of Nottingham where computer scientists, psychologists, sociologists, engineers, architects and artists collaborate to explore the potential of ubiquitous, mobile and mixed reality technologies to shape everyday life."
				}
			]
		},
		{
			"id": "2-b_b0",
			"name": "Floor B",
			"levels": [
				{
					"tileSize": 256,
					"size": 256,
					"fallbackOnly": true
				},
				{
					"tileSize": 512,
					"size": 512
				},
				{
					"tileSize": 512,
					"size": 1024
				},
				{
					"tileSize": 512,
					"size": 2048
				}
			],
			"faceSize": 1368,
			"initialViewParameters": {
				"yaw": 0.6387158969116129,
				"pitch": 0.005286899633400566,
				"fov": 1.5063734867801815
			},
			"linkHotspots": [
				{
					"yaw": 1.9230835369088313,
					"pitch": 0.05693871688749752,
					"rotation": 1.5707963267948966,
					"target": "11-mix_3"
				},
				{
					"yaw": -2.5490192760251276,
					"pitch": 0.6604832263130138,
					"rotation": 0,
					"target": "0-b_b1"
				}
			],
			"infoHotspots": []
		}
	],
	"name": "Computer Science Building",
	"settings": {
		"mouseViewMode": "drag",
		"autorotateEnabled": true,
		"fullscreenButton": true,
		"viewControlButtons": true
	}
};
