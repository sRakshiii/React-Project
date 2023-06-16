const Data = [
  {
    id: 1,
    cover: "https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    category: "Life",
    title: "Stay Calm And Surf",
  },
  {
    id: 2,
    cover: "https://ichef.bbci.co.uk/news/976/cpsprodpb/9CB5/production/_128271104_pathaancleanposter.jpg",
    category: "Bollywood",
    title: "Fashion is part of the daily air and it changes all the time, with all the events.",
  },
  {
    id: 3,
    cover: "https://youmatter.world/app/uploads/sites/2/2019/11/travel-world.jpg",
    category: "Travel",
    title: "There's always light at the end of the tunnel",
  }  
];

const blog = [
  {
    id: 1,
    title: "ZEE 5 (Bollywood Video on Demand) 12-Month Subscription $49.99 (50% off)",
    category: "Nature",
    cover: "https://files.ozbargain.com.au/n/43/781043x.jpg?h=102e46ed",
    date: "Jun 12 2023",
    desc: "Recently discovered that Manoj Bajpayee’s new show came out so was looking around and discovered its available on Zee5 and which i checked is on 50% off for yearly subscription. Asked my mate and we split the cost. 5 screens.",
  },
  {
    id: 1,
    title: "(PR) 4th Gen Intel Xeon Outperforms Competition on Real-World Workloads",
    category: "Nature",
    cover: "https://www.techpowerup.com/img/c2b8sFjpYd1KCI6E.jpg",
    date: "Jun 12 2023",
    desc: "With the launch of 4th Gen Intel Xeon Scalable processors in January 2023, Intel delivered significant advancements in performance with industry-leading Intel accelerator engines and improved performance per watt across key workloads like AI, data analytics, …",
  },
  {
    id: 1,
    title: "Shed of the Year shortlist includes Japanese tea room and ski chalet",
    category: "Nature",
    cover: "https://i.dailymail.co.uk/1s/2023/06/12/15/72042787-0-image-a-2_1686579493362.jpg",
    date: "Jun 12 2023",
    desc: "We take a look at the 26 sheds that have made the shortlist for Shed of the Year 2023, a Japanese-inspired tea room in Bristol and a bee cafe in the Suffolk village of Great Bealings are just a few of the entries on the shortlist for the Shed of the Year.",
  },
];

const latestArticle = [
  {
    id: 1,
    title:"Microsoft stakes Xbox video game sales on long-awaited space adventure Starfield",
    category: "hollywood",
    cover:"https://scx2.b-cdn.net/gfx/news/hires/2023/microsoft-stakes-xbox.jpg",
    date:"Jun 09 2023",
    desc:"One small step for an intrepid crew of 24th century space explorers could be a giant leap—or flop—for Microsoft when the Xbox-maker launches its long-awaited video game Starfield."
  },
  {
    id: 2,
    title:"'Tiku Weds Sheru' to release on June 23",
    category: "Bollywood",
    cover:"https://static.toiimg.com/thumb/msid-100934180,width-1070,height-580,imgsize-138806,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    date:"June 9, 2023",
    desc:"\"Tiku Weds Sheru\" takes audiences on a whimsical journey into the world of Bollywood, following the story of two eccentric and ambitious characters. Filled with starry-eyed dreams and a burning desire to achieve fame and success, Tiku and Sheru embark on a hi…"
  },
  {
    id: 3,
    title:"As water from destroyed dam rises, Ukrainians face a fresh new horror",
    category: "News World",
    cover:"https://images.indianexpress.com/2023/06/UKRAINE-DAM-16.jpg?resize=600,378",
    date:"June 9, 2023",
    desc:"Water was filling the streets of her low-lying neighbourhood — and rising quickly. A dam had been destroyed, and soon the power went out, the gas stopped working and the water supply to her apartment stopped flowing"
  },
  {
    id:4,
    title:"Colruyt N : Repurchase treasury shares",
    category: "Fitness",
    cover:"https://www.marketscreener.com/images/twitter_MS_fdgris.png",
    date:"June 9, 2023",
    desc:"(marketscreener.com) \n \n PRESS RELEASE - Halle , 13 June 2023 - 08h30 - Regulated information\n \n \n Repurchase of treasury shares\n \n \n Referring to article 7:215 § 1 of the Companies and Associations Code and article 8:4 of the Royal Decree of 29 April 2019 in…"
  }

];
const topPosts=[
  {
    id:1,
    title:"The odd couple! 9 of the strangest celebrity pairings",
    cover:"https://media.zenfs.com/en/evening_standard_239/ae7622d6407d2b77b9e27a427e6a76de",
    category:"News",
    date:"June 6, 2023",
  },
  {
    id:2,
    title:"Letter from London: We Are Family",
    cover:"https://www.counterpunch.org/wp-content/uploads/2023/06/Screen-Shot-2023-06-10-at-7.57.14-AM-680x676.png",
    category:"News",
    date:"May 10, 2023"
  },
  {
    id:3,
    title:"Har Ghar Tiranga campaign:",
    cover:"https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_160x90/public/2022/08/09/194183-untitled-design-51.jpg?itok=fpDGuRxe&c=22a12e4955a45ac46b05732047323c73",
    category:"National Program",
    date:"May 9 2023"
  },
  {
    id:4,
    title:"Metal Cutting Tools Market Size to Hit USD 120.44 Billion ",
    cover:"https://ml.globenewswire.com/Resource/Download/05408ba1-26b1-4fdd-8f48-1af4df373348",
    date:"May 5 2023"
  }
]
const latestStories=[
  {
    id:1,
    title:"AI plane for passengers stuck in Russia takes off, will reach early Thursday; carrying 'food, essentials'",
    desc:"Air India has sent a replacement plane to ferry 216 passengers and 16 crew stranded in Russia's Magadan after its Delhi-San Francisco flight was forced to land, the carrier said Wednesday. Air India flight AI173 developed a 'technical issue' with one engine and had to land at the remote Russian town.",
    date:"Jun 07, 2023 03:53 PM IST"
  },
  {
    id:2,
    title:"'Must ensure maximum prices are within limit': Govt on surge in airline tickets",
    desc:"Aviation minister Jyotiraditya Scindia on Wednesday spoke of the need to ensure airline ticket prices - which have surged (for various reasons) since domestic air travel resumed post-Covid lockdowns - remain 'within a certain limit'.",
    date:"Jun 07, 2023 04:53 PM IST"
  },
  {
    id:3,
    title:"Cyclone Biprajoy in Arabian Sea puts cloud over monsoon progress",
    desc:"Biparjoy is not good for our monsoon because it is pulling all the moisture along with it away from the Indian coast. Its formation is not near the India coast and hence monsoon’s progress will remain very poor until around June 12. It may strengthen the cross-equatorial flow after the cyclone dissipates, but that’s a long way away.",
    date:"Jan 07,2023"
  }

]

const detailDesc=[
  {
    id:1,
    title:"Sudan: Crisis fuels ‘desperate’ situation for civilians, as Security Council demands ",
    cover:"https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/02-06-2023_WFP_Sudan.jpg/image1170x530cropped.jpg",
    category:"World",
    date:"Jun 07, 2023",
    desc:"In a press statement issued late on Friday, the UN Security Council expressed its “deep concern” over the continued clashes, condemning all attacks on civilians, and calling for “rapid, safe and unhindered humanitarian access throughout Sudan”."
  },
  {
    id:2,
    title:"A young woman in Gujarat helps her community save their forest",
    cover:"https://idronline.org/wp-content/uploads/2023/05/2.jpg",
    category:"India",
    date:"Jun 08, 2023",
    desc:"People in my village had to consider alternative sources of livelihoods because farming alone wasn’t a viable option. There is not much land available for cultivation, and the unfriendly topography of the village makes agriculture even more challenging. The produce cultivated by each farmer would only be enough to sustain them and their families",
  },
  {
    id:3,
    title:"After ‘purple revolution’, CSIR scientists focus on medicinal properties of lavender",
    cover:"https://images.indianexpress.com/2023/06/lavender.jpg?w=640",
    category:"Health",
    date:"Jun 08, 2023",
    desc:"The ‘purple revolution’ that started with farmers planting lavender in the picturesque slopes of this Jammu and Kashmir town is gathering steam with scientists at the CSIR-Indian Institute of Integrative Medicine studying the medicinal properties of the aromatic, flowering plants."
  }
]

const Total=[
  {
    id:1,
    title:"Badtameez Dil' Trailer Out: Ridhi Dogra, Barun Sobti's Chemistry",
    cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3U3oJBOFeR_xAs6YMw5D3-p9C_9iU0d0CaQ&usqp=CAU",
    desc:"The impressive trailer of ‘Badtameez Dil’ launched recently sees the prolific performer in a fresh, bubbly avatar. Apart from her sizzling on-screen chemistry with Barun Sobti, Ridhi has been hugely praised for her impressive look, impressive dialogue delivery and incredible performance as her character Liz in the series.",
    category:"Entertainment",
    date:"Jun 06, 2023, 03:43 PM IST",
    class:"Bollywood1"
  },
  {
    id:2,
    title:"Kangana Ranaut Sparks Controversy With Scathing Attacks On Ranbir Kapoor & Karan Johar",
    cover:"https://static.toiimg.com/thumb/msid-100931444,width-1280,height-720,imgsize-17784/photo.jpg?dimension=640",
    desc:"In her latest social media outburst, Bollywood actress Kangana Ranaut has once again stirred up controversy, this time targeting actor Ranbir Kapoor and filmmaker Karan Johar.",
    category:"Entertainment",
    date:"Jun 09, 2023, 05:40 PM IST",
    class:"Bollywood1"
  },
  {
    id:3,
    title:"One Direction’s Niall Horan Sets Cameo in ‘Trainspotting with Francis Bourgeois’ – Global Bulletin",
    cover:"https://variety.com/wp-content/uploads/2023/06/Collage-Maker-12-Jun-2023-11-03-AM-4865.jpg?w=1000&h=563&crop=1",
    desc:"NEW DIRECTION One Direction star Niall Horan is set to cameo on rail-themed Channel 4 digital series, “Trainspotting with Francis Bourgeois.” Produced by Untold Studios, the series sees TikTok creator Bourgeois introduce celebrities to the obscure hobby. Hora…",
    category:"Entertainment",
    date:"Jun 08, 2023, 05:46 PM IST",
    class:"Bollywood1"
  },
  {
    id:4,
    title:"Rashmika is turning out to be a b'wood fav",
    cover:"https://static.toiimg.com/thumb/msid-100913220,imgsize-103114,width-900,height-1200,resizemode-6/100913220.jpg",
    desc:" Rashmika Mandanna is turning out to be a Bollywood favourite, and here's proof",
    category:"Entertainment",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"Bollywood1"
  },
  {
    id:5,
    title:"Celebs who own the most expensive cars",
    cover:"https://static.toiimg.com/thumb/msid-100917621,imgsize-70290,width-900,height-1200,resizemode-6/100917621.jpg",
    desc:"Shah Rukh Khan, Ranveer Singh, John Abraham, Hrithik Roshan and many other Bollywood stars own the most expensive cars in the industry.",
    category:"Entertainment",
    date:"Jun 06, 2023, 03:43 PM IST",
    class:"Bollywood1"
  },
  {
    id:6,
    title:"Bollywood Actor Mangal Dhillon passes away: Check his best movies, TV shows",
    cover:"https://www.livemint.com/lm-img/img/2023/06/11/600x338/Mangal_Dhillon_1686471006800_1686471038813.jpg",
    desc:"Actor Mangal Dhillon, known for working in shows such as Junoon and Buniyaad, has passed away. He was suffering from cancer and was undergoing treatment at a private hospital in Ludhiana.",
    category:"Entertainment",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"Bollywood1"
  },
  {
    id:7,
    title:"Luv Ranjan, Vishal Bhardwaj come together for multi-starrer 'Kuttey'",
    cover:"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/08/23/963547-kuttey-poster.jpg",
    desc:"Talking about 'Kuttey' Vishal shared, The movie is extremely special to me as it is my first collaboration with Aasmaan and I'm excited to see what he does with it.  Luv Films and Vishal Bhardwaj Films are also coming together for the first time and I am immensely excited about this association, as I really admire Luv's brave attitude towards filmmaking and strong commercial sense.",
    category:"Entertainment",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"Bollywood2"
  },
  {
    id:8,
    title:"Raid Movie Review : Ajay Devgn-Ileana D'Cruz starrer is a powerful film on combating corruption",
    cover:"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2018/03/16/668566-raid.jpg",
    desc:"Just when you think the Bollywood thriller is running out of steam there comes 'Raid', a film so taut and clenched, so caustic and brimming with political sarcasm that you wonder where was director Raj Kumar Gupta hiding himself for so many years?",
    category:"Entertainment",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"Bollywood2"
  },
  {
    id:9,
    title:"'Selfiee' makes its way into theatres this month",
    cover:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/selfiee-new-release.jpg?VersionId=P3OcTMPuKiDIC9TqVRtToFxdZ.W9OQOS&size=690:388",
    desc:"An interesting premise offering an opportunity to talk about the transience of fame, the meaning of it in the time of social media, the nature of genuine stardom, the manipulation of media, the pitfalls of petty egos, and whether Big Bad Bollywood is really all that big or all that bad, is explored, but not really allowed to overshadow its larger-than-life hero Akshay Kumar himself",
    category:"Entertainment",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"Bollywood2"
  },
  {
    id:10,
    title:"​Checkout movie stills of the Bollywood movie 'Kisi Ka Bhai Kisi Ki Jaan'​",
    cover:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZMm5H0iWTyIVrKthKmDjlj8mO1CFrKT54PxpOH43Zh1uxPIbn",
    desc:"reacting to the alleged box office failure of Kisi Ka Bhai Kisi Ki Jaan, Raghav Juyal told Hindustan Times, “I’m not in the league to worry about crores. For me doing a hundred crore movie is enough. I don’t know what Salman Khan thinks about it. But for me it has been good. You are as good as your last release. Jo bhi tha mere liye bohot accha tha. Rate badh gaye, ab aur kitne honestly bolu.”",
    category:"Entertainment",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"Bollywood2"
  },
  {
    id:11,
    title:"PHP Development in Internet Of Things",
    cover:"https://www.javacodegeeks.com/wp-content/uploads/2021/04/php-logo.jpg",
    desc:"Internet of Things (IoT) is a concept that refers to the interconnection of everyday objects and devices to the internet, enabling them to collect and exchange data. These objects, often referred to as “smart” or “connected” devices, can include a wide range …",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology1"
  },
  {
    id:12,
    title:"Tecno Phantom V Fold Review: A compelling debut",
    cover:"https://images.hindustantimes.com/tech/img/2023/05/29/960x540/Untitled_design_1685331346398_1685331354946.jpg",
    desc:"Foldable smartphones are a new breed of devices, offering users a unique experience and an innovative way to interact with their smartphones. It wasn't long ago that the smartphone revolution occurred which gave rise to Androids and iPhones that are popular nowadays. Since then, smartphone technology has seen rapid development, but it has also led to the smartphone industry stagnating, well at least until 2019. That's when Samsung launched its first-ever foldable smartphone, the Samsung Galaxy Z Fold, and it sent the market into a frenzy. Foldable displays were not just something out of a Star Trek film anymore and you could now fold a smartphone in half and keep it in your pocket. Since then, many brands have made their mark in this segment including the likes of Oppo, Huawei, and Xiaomi.",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology1"
  },
  {
    id:13,
    title:"Gizmore Vogue Review:Smartwatch looks premium, but does it work like one?",
    cover:"https://images.hindustantimes.com/tech/img/2023/04/27/960x540/gizmore_1_1682575834204_1682575845051.jpg",
    desc:"Analogue timepieces have become a thing of the past. Although people still purchase analogue watches, many of them are collectors' pieces which are to be preserved in time and not worn on a daily basis. This is where smartwatches come in, and they have come a long way in the last few years. Never in my early years did I think that I'd be wearing a gadget on my wrist which could do almost anything that my phone could, but then, here we are.",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology1"
  },
  {
    id:14,
    title:"WWDC23: Top 5 features iOS 17 has brought to iPhones; from Messages to Journal, check them out",
    cover:"https://images.hindustantimes.com/tech/img/2023/06/05/960x540/WhatsApp_Image_2023-06-06_at_10746_AM_1685994392760_1685994393093.jpeg",
    desc:"iOS 17 was just announced at WWDC 2023 and while it does not include any revolutionary changes, it is still a substantial upgrade with several new features coming to iPhones. This was previously leaked by Bloomberg's Mark Gurman who said several months ago that iOS 17 would not bring anything major but have some “nice to have” features. Apple has announced updates to apps such as Phone, Messages, and FaceTime, which have got even better.",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology1"
  },
  {
    id:15,
    title:"This ChatGPT-powered AI app can generate the perfect text message",
    cover:"https://images.hindustantimes.com/tech/img/2023/06/03/960x540/FireTexts_1685773424263_1685773433748.jpg",
    desc:"We have all been in that situation where we have to draft a message either wishing someone or conveying important information and we struggle with what could be the best way of saying it. Then comes typing and a lot of deleting over and over till we finally manage to muster up something decent half an hour later. But those were the struggles of 2022. In 2023, we have artificial intelligence! And now, using the same generative AI technology, there is an app called FireTexts that claims it can generate the perfect text message for all occasions for you. Let us take a closer look.",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology1"
  },
  {
    id:16,
    title:"BGMI brings new voice packs featuring Mortal and Thug; New map added too",
    cover:"https://images.hindustantimes.com/tech/img/2023/05/30/960x540/Untitled_design_16_1685449620689_1685449620825.png",
    desc:"After a long wait, the popular battle royale game Battlegrounds Mobile India (BGMI) has made its return to India. The game was officially released to Play Store and App Store on Monday, May 29. Alongside, the BGMI 2.5 update was also dropped that brought some new changes and features to the game including a new map and voice packs featuring popular BGMI streamers Mortal and Thug. Fans who have been waiting for ten months for the game to return can now not only play the game but also enjoy these new and cool updates.",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology1"
  },
  {
    id:17,
    title:"NASA’s Psyche Asteroid Mission Back on Stellar Track – Extraordinary Turnaround Wows Review Board",
    cover:"https://scitechdaily.com/images/Psyche-Spacecraft-Asteroid-Composite-777x437.jpg?ezimgfmt=ngcb2/notWebP",
    desc:"An independent review board praised the “world-class” efforts of NASA’s Jet Propulsion Laboratory and Caltech in addressing issues that caused a delay in the Psyche mission’s launch, originally scheduled for 2022. These efforts included staff reorganization, improved management oversight, and institutional changes, positioning the mission for a successful launch in October 2023.An independent review board finds JPL’s response to address factors contributing to the mission’s 2022 launch delay has been ‘world class.’",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology2"
  },
  {
    id:18,
    title:"Critical Oversight in EPA’s PFAS Rules: Ignoring a Key Contaminant Source",
    cover:"https://scitechdaily.com/images/Chemicals-Chemistry-777x777.jpg?ezimgfmt=ngcb2/notWebP",
    desc:"PFAS are present in fire retardant foams among other products and have been building up in the environment since they were first invented by Dupont in the 1930s and manufactured widely by 3M beginning in the 1950s. Exposures to some PFAS are linked to a range of health risks including cancer, immune suppression, diabetes, and low infant birth weight.PFAS compounds come in two forms: a precursor form and a terminal form. Most of the monitored PFAS compounds are terminal compounds. The EPA’s draft drinking water rules are for six terminal compounds that do not degrade under normal environmental conditions. Precursor compounds can be transformed through biological or environmental processes into terminal forms. There are many precursor compounds, most of which are not routinely monitored, and none are currently regulated.",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology2"
  },
  {
    id:19,
    title:"Genes Don’t Lie: DNA Reveals a New Twist in Human Origin Story",
    cover:"https://scitechdaily.com/images/DNA-Human-Origins.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1",
    desc:"At different times, people who embraced the classic model of a single origin for Homo sapiens suggested that humans first emerged in either East or Southern Africa,” says Brenna Henn, a population geneticist in the Department of Anthropology and in the Genome Center at the University of California, Davis and co-lead author of the research. “But it has been difficult to reconcile these theories with the limited fossil and archaeological records of human occupation from sites as far afield as Morocco, Ethiopia, and South Africa which show that Homo sapiens were to be found living across the continent as far back as at least 300,000 years ago.",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology2"
  },
  {
    id:20,
    title:"Stellar Archaeology: Chemical Clues Reveal Supernova Secrets From Universe’s First Massive Stars",
    cover:"https://scitechdaily.com/images/Stellar-Fossil-Imprints-of-Pair-Instability-Supernovae-From-Very-Massive-First-Stars.jpg?ezimgfmt=ngcb2/notWebP",
    desc:"A new study led by Prof. Gang Zhao from the National Astronomical Observatories of the Chinese Academy of Sciences (NAOC) has identified a chemically peculiar star (LAMOST J1010+2358) in the Galactic halo as clear evidence of the existence of PISNe from very massive first stars in the early Universe, based on the Large Sky Area Multi-Object Fiber Spectroscopic Telescope (LAMOST) survey and follow-up high-resolution spectra observation by Subaru Telescope. It has been confirmed that this star was formed in the gas cloud dominated by the yields of a PISN with 260 solar masses",
    category:"Technology",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"technology2"
  },
  {
    id:21,
    title:"Kevin Federline Says Article Featuring Britney Spears Drug Allegation Was Fabricated",
    cover:"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/53139d93494cf57211de07b53124ea1b.jpg",
    desc:"No news is good news when Kevin Federline is at its center. This weekend, the Daily Mail published a bombshell article with the extremely Daily Mail headline: “EXCLUSIVE: Britney Spears’ family say they fear she is on METH and will die like Amy Winehouse: Fat…",
    category:"Hollywood",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"hollywood1"
  },
  {
    id:22,
    title:"The Expendables 4 trailer out: Sylvester Stallone",
    cover:"https://www.pinkvilla.com/images/2023-06/2084646419_the-expendables-4.jpg",
    desc:"The popular film franchise The Expendables is back with a new installment almost a decade after the third film was released. The official description reads, Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world's last line of defense and the team that gets called when all other options are off the table. It adds, But new team members with new styles and tactics are going to give 'new blood' a whole new meaning. Directed by Scott Waugh, it is set for a September 22, 2023, release.",
    category:"Hollywood",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"hollywood1"
  },
  {
    id:23,
    title:"Fast X movie review: Jason Momoa takes the wheel while Vin Diesel's defense remains predictable",
    cover:"https://movies.universalpictures.com/media/fstx-montage1sheet2-rgb-1-64108e93e63dd-1.jpg",
    desc:"For this movie which appears to be the beginning of the end, it is safe to say that Jason carries the movie while Vin does what he is best at i.e. talking about family. From adrenaline-filled car-chasing to blowing up Rome, Fast X runs on thrilling scenes. With the last nine films, it is quite predictable as to what the tenth installment will offer. In this movie, there are many characters who will reappear and surprise you. Along with them, we do have new addition like Brie Larson who tries to take the place of Mr. Nobody. ",
    category:"Hollywood",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"hollywood1"
  },
  {
    id:24,
    title:"How Striking Writers Are Disrupting Hollywood Shoots",
    cover:"https://c.biztoc.com/p/fc5c64701fc75b62/s.webp",
    desc:"The iconic white Ghostbusters ambulance sped down New York’s Fifth Avenue on a recent Saturday morning, dodging yellow taxis and nearly colliding with a cyclist as part of the filming of a wild chase scene for a new movie.#newyorks #fifthavenue",
    category:"Hollywood",
    date:"Jun 06, 2023, 05:42 PM IST",
    class:"hollywood1"
  },
  {
    id:25,
    title:"The Boys star teases new sides to the villains in The Boys season 4",
    cover:"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2Fimage-exchange%2F2022%2F06%2Fie_87976.jpeg",
    desc:"Yes, Marvel makes some good TV shows. But was there a scene in Loki where a tiny man crawled into his lover’s penis and then grew back to normal size instantaneously, leaving a bloody mess on the bed? No there was not. But there was on The Boys, which is why …",
    category:"Hollywood",
    date:"Jun 06, 2023, 05:42 PM IST",
    class:"hollywood1"
  },
  {
    id:26,
    title:"Transformers: Rise of the Beasts ending explained: Does action film hint at biggest crossover ever?",
    cover:"https://www.pinkvilla.com/images/2023-06/772362741_.jpg",
    desc:"The ending of Transformers: Rise of the Beasts may have hinted at a massive potential future crossover, spoiler alert: you've been warned. Towards the end of the film, Noah Diaz, played by Anthony Ramos, goes for an interview for a security job after successfully becoming the saviour in the story. The interviewer, played by Michael Kelly, is aware of who Noah is and how he saved the world from Unicron, who unfortunately survived the portal collapse.",
    category:"Hollywood",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"hollywood1"
  },
  {
    id:27,
    title:"Jeff Beck, famed rock guitarist, dead at 78; 5 things to know about the Yardbirds and Jeff Beck Group member",
    cover:"https://www.pinkvilla.com/images/2023-01/1351050448_jeff-beck-guitarist-dead_1280*720.jpg",
    desc:"Jeff Beck, the iconic musician, and legendary rock guitarist died on Tuesday. He was 78. He was the founder of the Jeff Beck Group. His family released a statement on his official handles across social media platforms, informing his fans, friends, and followers about the same. The statement revealed that Jeff Beck died after contracting bacterial meningitis",
    category:"Hollywood",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"hollywood2"
  },
  {
    id:28,
    title:"Jack Ryan Season 4: From explosive actions to final mission",
    cover:"https://www.pinkvilla.com/images/2023-06/1718528770_whatsapp-image-2023-06-06-at-11-06-57.jpg",
    desc:"John Krasinski is back for one last mission in Jack Ryan season 4. All scheduled to be released on June 30, 2023, Jack Ryan season 4 consists of six episodes and can be streamed on Prime Video.  The season 4 trailer certainly seems more tense with Jack Ryan taking over corruption within the higher ranks of the U.S. military and government. Here are five things that you could have possibly missed from the trailer. ",
    category:"Hollywood",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"hollywood2"
  },
  {
    id:29,
    title:"Jared Leto seen climbing hotel wall in Berlin, fans say ‘bro thinks he’s Spider-Man’",
    cover:"https://www.hindustantimes.com/ht-img/img/2023/06/07/550x309/jared_1686134134464_1686134134860.jpg",
    desc:"Jared Leto was spotted wearing a black tee with a pair of joggers, as he was seen climbing the stone wall of the five-star Hotel De Rome in Berlin without a harness. He climbed only a few feet off the ground to the hotel balcony, before tracing his way down by climbing back through the stone wall again. Although the intentions behind this act is still unclear, he was seen there with TikToker Younes Zarou, according to a report by TMZ. The actor was also seen shooting some other segments near the hotel, that included a smoke-filled shot as well.",
    category:"Hollywood",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"hollywood2"
  },
  {
    id:30,
    title:"The Rock ends feud with Vin Diesel, confirms return to ‘Fast & Furious’ franchise",
    cover:"https://www.hindustantimes.com/ht-img/img/2023/06/02/550x309/ezgif-1-d243c3bc25_1685686148013_1685686161100.jpg",
    desc:"Dwayne 'The Rock' Johnson announces his reconciliation with Vin Diesel and returns to the Fast & Furious franchise, bringing excitement and unity to fans.Dwayne ‘The Rock’ Johnson took to Instagram to announce his reconciliation with Vin Diesel and his highly-anticipated return to the Fast & Furious franchise.",
    category:"Hollywood",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"hollywood2"
  },
  {
    id:31,
    title:"Between treadmill and stationary bike, this equipment helps burn more calories per hour",
    cover:"https://images.indianexpress.com/2023/05/treadmills.jpg?w=640",
    desc:"It would probably not be wrong to say that treadmills and exercise bikes are among the most common and popular exercise equipment. They can be seen everywhere, from commercial gyms and fitness studios to even home workout spaces. And why not? Both are excellent ways to train indoors if stepping out to exercise does not please you much, especially in the sweltering heat.",
    category:"Fitness",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"fitness1"
  },
  {
    id:32,
    title:"Planks vs push-ups: Know the differences, and which is better for beginners",
    cover:"https://images.indianexpress.com/2023/05/pushups.jpg",
    desc:"Planks and push-ups are two popular bodyweight exercises that mainly target the core muscle. Both can be done nearly anywhere as neither do they require any equipment, or much space. But is one exercise better than the other when it comes to achieving your fitness goals? To get the answers, we turned to an expert.",
    category:"Fitness",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"fitness1"
  },
  {
    id:33,
    title:"Top Exercises for Back Strengthening",
    cover:"https://www.usnews.com/object/image/00000165-a5bd-dcec-a5ed-e7ff57920000/gettyimages-568776037.jpg?update-time=1536083974035&size=responsiveFlow300",
    desc:"Understanding the functions of all the muscles in the back is complex, but training them does not have to be. The muscles of the back help us do everything from standing up straight and opening doors to rotating our upper body to throw a baseball or hit a golf ball. Strengthening back muscles can also help reduce some types of back pain.",
    category:"Fitness",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"fitness1"
  },
  {
    id:34,
    title:"Advanced Weight Training Fitness Workout",
    cover:"https://www.verywellfit.com/thmb/4vqRMmrX0TBfakMdn1vUUxuZxV4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-142020286-5680acd65f9b586a9ede357d.jpg",
    desc:"This is a high-intensity, circuit-type workout. You should be in good health and have some intermediate to advanced fitness experience to manage this level of intensity. When first starting out, do just one round of the exercises and see how you feel. If it is too difficult, revert to a moderate intensity program. Get clearance from your healthcare provider if you have any medical conditions, injuries, or are returning to exercise after pregnancy.Seven exercises are included with instructions below. You can use dumbbells, kettlebells, or a barbell with weight plates to complete the exercises. Be sure to focus on proper form before increasing the amount of weight.",
    category:"Fitness",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"fitness1"
  },
  {
    id:35,
    title:"Agonist Muscles and Strength Training",
    cover:"https://cdn.shopify.com/s/files/1/1525/5556/files/New_2_Shopify.jpg?v=1570035288",
    desc:"Exercise and everyday activities require the use of your muscles. Reaching up, leaning over, or bending down all use a series of muscles that are arranged in opposing pairs. When the muscles in the front of your body contract, the muscles in the back stretch and vice versa. The muscle group that is contracting is known as the agonist muscle and its opposing muscle group is the antagonist. This is great information to know when putting together your own strength training workouts.",
    category:"Fitness",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"fitness1"
  },
  {
    id:36,
    title:"Resistance Sprint Drills to Boost Speed",
    cover:"https://www.verywellfit.com/thmb/4q4AhlDDI9Mg48Bnl_SsL6-bqp0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sledsprints119422771-5a452a19842b1700379b0d78.jpg",
    desc:"One of the best ways for any athlete to boost his or her acceleration, top speed, and agility is to practice sprinting against resistance. This training technique has been around for decades, but advances in equipment and gear make the methods of practicing sprint-resistance drills more widespread, safe and even more fun.Whether you are an athlete or a coach, you may want to add a variety of the following resistance-based sprint exercises to your workout.1 Here is what you need to know about sprinting against resistance as well as some ideas for different types of resistance sprinting",
    category:"Fitness",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"fitness1"
  },
  {
    id:37,
    title:"What Are Calisthenics?",
    cover:"https://whitecoattrainer.com/wp-content/uploads/2019/06/calisthenics-exercises.jpg",
    desc:"When you think of calisthenics, images of military boot camps or physical education classes may come to mind. But the usefulness and health benefits of calisthenics are not limited to these two scenarios. In fact, because calisthenics are easily adaptable to any fitness level, require little to no equipment, and are great for beginners as well as experienced exercise enthusiasts, you might want to give them a second look.Calisthenics not only help to develop strength, but also flexibility, balance, and coordination, explains John Landry, RRT, a registered respiratory therapist and the founder and CEO of Respiratory Therapy Zone. It is a fantastic full-body workout and an excellent way to build strength and muscle. In addition, it is a low-impact form of exercise, which makes it accessible to people of all ages and fitness levels",
    category:"Fitness",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"fitness2"
  },
  {
    id:38,
    title:"Best Leg Workout You Can Do Without Equipment",
    cover:"https://www.verywellfit.com/thmb/Lxen5s_sV-H83kLqWCWVouU4_To=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1338923571-a2c7452d1d954fdfb4fb74f1d67021d9.jpg",
    desc:"When you don't have access to a gym, you may need to find more creative ways to build muscle. Fortunately, you don't have to look far for one of the best pieces of equipment we have free access to—body weight.Studies show that performing simple bodyweight workouts at a challenging pace required no specialized equipment to create results. They also can be used to build our cardiorespiratory fitness, just as much as weighted exercises.",
    category:"Fitness",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"fitness2"
  },
  {
    id:39,
    title:"The Best Lower Body Strength Exercises",
    cover:"https://www.verywellfit.com/thmb/mM241uF1bYeDLJHW0isTMCSJkks=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/asianwomandeadlifts-58bd77e63df78c353c33fd08.jpg",
    desc:"Doing a regular lower body strength workout can help to shape your legs, hips, and butt by building lean muscle mass in those areas. You'll strengthen muscles in the quadriceps, hamstrings, glutes, and calves Lower Body Strength Training Workout1.Dumbbell lunge2. Dumbbell 3.shoulder squat4.Bulgarian split squat 5.Deadlift 6.Hip thrust 7.Side lunge 8.Weighted step up 9.Good morning 10.Barbell 11.jammer press",
    category:"Fitness",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"fitness2"
  },
  {
    id:40,
    title:"This is the secret to gaining muscle naturally",
    cover:"https://www.muscleandfitness.com/wp-content/uploads/2020/07/Muscular-Fitness-Model-With-A-Six-Pack.jpg?quality=86&strip=all",
    desc:"Muscle plays vital roles in overall health, allowing the body to move freely, maintain its strength and even prevent injury. To maximize muscle growth and development, a process known as muscle hypertrophy, it’s important to maintain a balanced diet and an exercise routine featuring resistance training. Furthermore, certain dietary supplements can help you achieve desired muscle growth results, regardless of whether your ultimate goal is to compete in a bodybuilding competition or simply be stronger and more active in everyday life.",
    category:"Fitness",
    date:"Jun 06, 2023, 04:53 PM IST",
    class:"fitness2"
  },
  {
    id:41,
    title:"Grubhub layoffs 2023: CEO announces mass layoffs; parent company Just Eat Takeaway is losing profits",
    cover:"https://c.biztoc.com/p/892a83cbff074ca9/og.webp",
    desc:"CHICAGO -- Food delivery service Grubhub said Monday it is laying off about 400 workers, or 15% of its corporate staff. Grubhub employs 850 at its Chicago headquarters and another 2,000 nationally. A spokesperson said the cuts in Chicago should be in line wit…",
    category:"Agriculture",
    date:"Jun 06, 2023, 04:45 PM IST",
    class:"food1"
  },
  {
    id:42,
    title:"How Sustainable Agriculture Can Combat Drought and Creates Resilient Food Systems",
    cover:"https://foodtank.com/wp-content/uploads/2023/04/cover-crops-drought-sustainable-land-management-desertification.jpg",
    desc:"Droughts have increased globally by nearly 30 percent since the year 2000, posing one of the most significant threats to agricultural systems and costing billions in global economic losses, according to a report by the U.N. Convention to Combat Desertification (UNCCD). But the use of sustainable land management practices, such as cover cropping as well as reduced tillage and improved irrigation techniques can help farmers regain control over their land, revitalize the soil, and mitigate the effects of drought.The underlying cause of drought is rarely acknowledged, Roland Bunch, Founder and CEO of Better Soils, Better Lives, tells Food Tank. “People don’t understand that it’s not because of a decrease in total rainfall.",
    category:"Agriculture",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"food1"
  },
  {
    id:43,
    title:"The Relationship Between Debt and Global Hunger: A Special IPES-Food Report",
    cover:"https://foodtank.com/wp-content/uploads/2023/03/Max_Featured-Image-1.png",
    desc:"The International Panel of Experts on Sustainable Food Systems (IPES-Food) released a special report sounding the alarm on global food insecurity and debt crises. The report finds that 349 million people are facing acute starvation and many more will experience hunger with food prices remaining at historic highs and countries failing to meet debt repayments.In “Breaking the Cycle of Unsustainable Food Systems, Hunger, and Debt,” IPES-Food reports that the COVID-19 pandemic and Russian invasion of Ukraine contributed to rising food prices in the last two years.",
    category:"Food",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"food1"
  },
  {
    id:44,
    title:"Is Recycling Urine the Secret to Building Sustainable Food Systems?",
    cover:"https://foodtank.com/wp-content/uploads/2023/01/Food-Talk-with-Dani-Nierenberg-Rich-Earch-Institute-urine-recycling-peecycling-fertilizer.jpg",
    desc:"Through research and education, the Rich Earth Institute is encouraging the conversion of human urine into fertilizer. They argue that this diversion of human waste can help to save water, reduce pollution, and provide farmers with a sustainable alternative to synthetic fertilizers. According to Rich Earth, a single adult produces between 378-567 liters of urine each year. While the majority of households flush this waste, the organization wants to help the public see urine as a resource, rich in nitrogen, phosphorous, and potassium—the very nutrients needed to produce food. ",
    category:"Food",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"food1"
  },
  {
    id:45,
    title:"Upcycling for Hydroponics in Singapore",
    cover:"https://foodtank.com/wp-content/uploads/2022/12/Food-Tank-Singapore-Hydroponic-Farming-Upcycling-Input.jpg",
    desc:"A team of scientists in Singapore find that the keratin in hair can contribute to the country’s local vegetable production and food security. Hair and other biowaste have the potential to become sustainable agricultural inputs for hydroponic farming.Over 90 percent of food consumed in Singapore is imported, according to the Singapore Food Agency (SFA). And with multiple competing land needs, just 1 percent of Singapore’s land is set aside for agriculture, Poh Bee Ling, Director of SFA’s Urban Food Solutions Division, tells Food Tank.",
    category:"Food",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"food1"
  },
  {
    id:46,
    title:"A Model for Bold Agricultural Transformation in Kenya",
    cover:"https://foodtank.com/wp-content/uploads/2022/11/Picture2.jpg",
    desc:"The agriculture sector in Kenya employs more than 70 percent of the rural population. But the impact of climate change along with inflated costs of food, fuel, and fertilizer have put pressure on smallholder farmers, and millions across the country are experiencing hunger. Now, the Drylands Farmer Research Network (FRN) in West Pokot County, Kenya, hopes to serve as a model for community-led food systems transformation and climate adaptation.The West Pokot County region is arid, and degraded soils grow weak plants. Over 45 years, 1.4 million tons of soil have washed away. Deep gullies, carved by water and intensified by drought and climate change, have threatened food and pasture production. The community has considered the situation irreversible and beyond repair.",
    category:"Food",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"food1"
  },
  {
    id:47,
    title:"U.S. Farmers Need Incentives to Grow Organic Grains",
    cover:"https://foodtank.com/wp-content/uploads/2022/08/Food-Tank_organic-grains-liz-joseph.jpg",
    desc:"Demand for organic livestock feed is rising in the United States, leading to insufficient supply and higher prices, according to a U.S. Department of Agriculture Economic Research Service (USDA ERS) report. The ERS indicates that increasing incentives for organic grain production in the U.S. may help reduce synthetic fertilizer use and import dependency while increasing soil health and generating farmer income.In 2021, organic meat sales increased by 2.5 percent, according to the Organic Trade Association (OTA), representing nearly US$2 billion in annual sales. Inexpensive imported organic livestock feed, consisting of organic corn and soy, is grown by foreign producers with lower land and labor costs. The competitive advantage of imported organic feed is fueling the high growth rate of organic meat sales, according to the OTA.",
    category:"Food",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"food2"
  },
  {
    id:48,
    title:"Stakeholders ‘Think Bigger’ About Solutions to Food Waste",
    cover:"https://foodtank.com/wp-content/uploads/2023/05/food-waste-ReFED-events-Food-Waste-Solutions-Summit-investment.jpg",
    desc:"During a summit hosted by ReFED, food waste experts, policymakers, and innovators convened to explore promising solutions to food waste.The Food Waste Solutions Summit asserts that “food waste is a problem that can be solved.” The event unites business stakeholders and solutions to reduce food loss and waste.Dana Gunders, Executive Director at ReFED, encourages attendees to “think bigger” in imagining solutions to the problem of food waste. “I say this as matter-of-factly as I can, we’re not making enough progress…we’re not moving the needle as much as we need to be moving it.”",
    category:"Food",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"food2"
  },
  {
    id:49,
    title:"New Food Waste Data Is Out. What Do the Numbers Mean for Our Food System?",
    cover:"https://foodtank.com/wp-content/uploads/2023/04/food-waste-food-loss-ReFED-EPA-data.jpg",
    desc:"A version of this piece was featured in Food Tank’s newsletter, released weekly on Thursdays. To make sure it lands straight in your inbox and to be among the first to receive it, subscribe now by clicking here.ReFED—an important nonprofit focused on data-driven solutions to food waste—just released the latest statistics from their powerful Insights Engine. Updated numbers from the U.S. Environmental Protection Agency are out this month, too.In 2021, the U.S. produced 91 million tons of surplus food, or about 38 percent of our total food supply. That is an average of 548 pounds of excess food per person—it is worth US$444 billion, or about 2 percent of the country’s GDP.",
    category:"Food",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"food2"
  },
  {
    id:50,
    title:"New ‘Spray-On Wrapper’ Offers Plastic-Free Food Packaging Alternative",
    cover:"https://foodtank.com/wp-content/uploads/2022/12/Unsplash-Spray-on-wrapper-courtesy-of-Nico-Rueda_1500x900.jpg",
    desc:"A team of scientists from Rutgers and Harvard University recently developed a biodegradable spray-on food wrapper. The researchers believe this wrapper can preserve the shelf-life of food, reduce food and plastic waste, and increase food safety.In 2018, the United States generated 35.7 million tons of plastics, according to the U.S. Environmental Protection Agency (EPA). That’s the equivalent of approximately 6.1 million male elephants, each weighing six tons – or 13,000 pounds. As of 2018, over 75 percent of plastics produced in the U.S. ended up in the landfill. And according to research published in Our World in Data, plastic packaging is the leading source of global plastic waste generation.",
    category:"Food",
    date:"Jun 05, 2023, 03:43 PM IST",
    class:"food2"
  }
]
export { Data, blog, latestArticle,topPosts ,latestStories ,detailDesc,Total};
