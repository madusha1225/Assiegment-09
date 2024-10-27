let lightSection = $("#light-section");

const lightCount = 6;
let currentLight = 0;
let direction = "RIGHT";

console.log($("#light-section > div").eq(1));

let updateLight = () => {
    for (let i = 0; i < lightCount; i++) {
        lightSection.children().eq(i).css("background-color", "white");
    }
    if (direction === "RIGHT") {
        lightSection.children().eq(currentLight).css("background-color", "red");
        lightSection.children().eq(currentLight-1).css("background-color", "pink");
        currentLight++;
        if (currentLight === 6){
            direction = "LEFT";
        }
    } else if (direction === "LEFT") {
        currentLight--;
        lightSection.children().eq(currentLight).css("background-color", "red");
        lightSection.children().eq(currentLight+1).css("background-color", "pink");
        if (currentLight === 0){
            direction = "RIGHT";
        }
    }
}

let interval;

$("#start-btn").on("click", function() {
    interval = setInterval(updateLight, 80);
});

$("#stop-btn").on("click", function() {
    clearInterval(interval);
});