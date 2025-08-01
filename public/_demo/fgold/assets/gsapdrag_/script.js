console.clear();

gsap.registerPlugin(Draggable);

var wrapper = document.querySelector(".portfolio");
var right = document.querySelector("#right");
var left = document.querySelector("#left");
var boxes = document.querySelectorAll(".portfolio li");
const height_item = 78;
var boxHeightValue = document.querySelector('.portfolio li');
var boxHeight = boxHeightValue.clientHeight;
var imgHeight = boxHeight;
var wrapHeight = boxes.length * (boxHeight + height_item);
var viewHeight = wrapper.offsetHeight;

gsap.set(wrapper, {height: '100vh'});

for (var i = 0; i < boxes.length; i++) {
  let box = boxes[i];
  console.log(boxHeight, boxes[i]);
  gsap.set(box, {y: i * (boxHeight + height_item), top: -boxHeight -100 });
}

var wrapProgress = gsap.utils.wrap(0, 1);
var snapBox = gsap.utils.snap(boxHeight);
var clickAnimation = gsap.set({}, {});
var proxy = document.createElement("div");
var props = gsap.getProperty(proxy);

var animation = gsap.to(".portfolio li", {
  duration: 1,
  y: "+=" + wrapHeight,
  ease: Linear.easeNone,
  paused: true,
  repeat: -1,
  modifiers: {
    y: function(y, target) {
      y = parseFloat(y) % wrapHeight;
      return y + "px";
    }
  }
}).progress(1 / boxes.length);

Draggable.create(proxy, {
  // type: "x", 
  trigger: "#portfolio-wrap",
  throwProps: true,
  onDrag: updateProgress,
  onThrowUpdate: updateProgress,
  snap: {
    y: snapBox
  }
});

left.addEventListener('click', animateCarousel.bind(null, -1));
right.addEventListener('click', animateCarousel.bind(null, 1));

function updateProgress() {  
  animation.progress(wrapProgress(props("y") / wrapHeight));
}
function animateCarousel(direction) {
  
  clickAnimation.kill();
  
  clickAnimation = gsap.to(proxy, {
    duration: 0.2,
    y: snapBox(props("y") + direction * (boxHeight + height_item)),
    onUpdate: updateProgress
  });  
}
