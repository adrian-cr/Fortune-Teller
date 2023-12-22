/*
Overview: This message generator provides randomized fortune-telling text outputs every time user runs its source code. User may choose to get a linefor each signs or just for one of them
*/

// DATA
const signs = ["Aries","Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const topics = ["love", "fortune", "family", "work", "feelings"];
const subj = {
    "love": ["You", "Your special one", "The love of your life", "A new potential mate", "A secret lover"],
    "fortune": ["You", "An unexpected opportunity", "A huge business deal", "Good fortune", "A change of winds"],
    "family": ["You", "The closest people around you", "Your loved ones", "A family member", "A close relative"],
    "work": ["You", "Your boss", "A coworker of yours", "Everyone at work", "Your boss's boss"],
    "feelings": ["You", "The way you've been feeling these days", "That lonely feeling that's bugging you", "Much of what's been making you sad", "More gleeful times"],
};
const aux = {
    "you": ["need to", "must", "should", "will"],
    "other": ["may", "might", "will", "could"]
}
const pred = {
    "love": {
        "you": ["learn to love yourself before loving those closest to you.",
            "find the love you deserve in the strangest of all places.",
            "appreciate the good in others so you can truly see the love that lies within yourself."
        ],
        "other": [
            "be waiting around the corner, so get ready for a new adventure!",
            "can help you shine, but remember: Your light always comes from within, never from the outside.",
            "not be something you need right now. After all your effort, your goals right now are what truly matters."
        ]
    },
    "fortune": {
        "you": ["start to save more: Pretty challenging times lie ahead!",
            "watch your step! You might find a nice surprise lying on the street real soon ...",
            "buy a new wallet for the wealth that's headed your way!"
        ],
        "other": [
            "show up in a couple of days; if you don't see it, maybe it's time to get yourself some better glasses!",
            "be about to happen to a close acquaintance, so make sure to be supportive and helpful: Good deeds will be rewarded!",
            "be offered you, but only you will be responsible for making the most of it."
        ]
    },
    "family": {
        "you": ["do what your heart says, and it's saying, \"No pride will ever mend a broken soul. Go home now.\"",
            "give her a call soon; there are some things you need to know, and they're important.",
            "find the comfort you're looking for in someone who let you down in the past. You just need to forgive."
        ],
        "other": [
            "are easy to take for granted. Don't.",
            "be desperate to get your help, but doesn't know how to let you know. Make sure to ask if they're OK. They'll thank you.",
            "try to open up to you about the past you shared together. Will you let them in?"
        ]
    },
    "work": {
        "you": ["go with that business idea you've been keeping to yourself for so long. It'll work, and you know it!",
            "reconsider your current situation at work soon. Is your skill being truly appreciated?",
            "go for that recent job offer. No one's better fitted for the position than Mr. Yourself!"
        ],
        "other": [
            "be your key ally to find success at your job.",
            "be secretely planning something for you. Is that a good thing? Well, I'm sure you know the answer better than I do ...",
            "be about to give you some really good news; don't take it from me, though: go find out yourself!"
        ],
    },
    "feelings": {
        "you": ["stop feeling embarrassed by that recent mistake. It was nothing, really!",
            "be thinking of doing what you love; well, don't just think: do it!",
            "start appreciating the bright side of things, which will make you live a happier life."
        ],
        "other": [
            "have to do with how you see the world. Help build the world you'd like to live in!",
            "not be great, but you still have plenty of chances to be happy: don't miss them!",
            "be about to change. Time for a new you!"
        ],
    },
};

//RANDOMIZERS
let sign_idx = Math.floor(Math.random() * 12);
let topic_idx = Math.floor(Math.random() * 5);
let subj_idx = Math.floor(Math.random() * 5);
let aux_idx = Math.floor(Math.random() * 4);
let pred_idx = Math.floor(Math.random() * 3);


//HELPER FUNCTIONS
function getLuckyNumbers(){
    let luckyNumbers = [];
    for (i=0; i<8; i++){
        luckyNumbers.push(Math.floor(Math.random() * 10));
    }
    return luckyNumbers.join(" ");
}

function getFortune(){
    topic = topics[topic_idx];
    subject = subj[topic][subj_idx];
    auxiliary = subject.toLowerCase() === "you" ? aux["you"][aux_idx] : aux["other"][aux_idx];
    predicate = subject.toLowerCase() === "you" ? pred[topic].you[pred_idx] : pred[topic].other[pred_idx];
    fortune = `${subject} ${auxiliary} ${predicate}`
    return fortune
}


//FORTUNE-TELLER FUNCTION
function tellFortune() {
    let fortune = 
    
    `
    -------- + MADAME SASOON'S FORTUNE TELLING + --------

    ${signs[sign_idx]},
    ${getFortune()}

    Your lucky numbers: ${getLuckyNumbers()}.

    -------- + --------
    `;
    

    return fortune;
}

console.log(tellFortune());