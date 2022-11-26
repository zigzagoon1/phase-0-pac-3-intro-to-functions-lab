function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const whispering = "I can't hear you!";
    const shouting = "YES INDEED!";
    const letsHaveDinner = "I would love to!";
    if (string === string.toLowerCase()){
        return whispering;
    }
    else if (string === string.toUpperCase()){
        return shouting;
    }
    else if (string === "Let's have dinner together!") {
        return letsHaveDinner;
    }
}