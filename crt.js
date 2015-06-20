
var lines = document.createElement('img');
var text = ["> "];
var textStart = 0;
i = 0;

lines.onload = function(e) {};
lines.crossOrigin = ''; 


function writeToCanvas(){
    if (text[i].length > 36){
        if (text.length > 18){
            console.log("in");
            textStart = textStart + 1;
        }
        i++;
        text.push("");
    }
    
    var canvas = document.getElementById("hiddenCan");
    var ctx = canvas.getContext("2d");
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="black";
    ctx.fill();
    ctx.font = "30px Lucida Console";
    ctx.fillStyle = 'white';

    for (var j=textStart; j<text.length; j++){
        ctx.fillText(text[j],10,30+(j+1-textStart)*30);
    }
    for (var k = 0; k < 500; k++){
        ctx.beginPath();
        ctx.moveTo(0, k*5);
        ctx.lineTo(700, k*5);
        ctx.lineWidth = 1
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    }

    var dataURL = canvas.toDataURL();

    lines.src = dataURL;

}

function crtBulge(){
    var element = document.getElementById("blah");
    try {
        element.parentNode.removeChild(element);
    }
    catch(err) {
    }
    glcanvas = fx.canvas();
    source = document.getElementById('shownCan');
    srcctx = source.getContext('2d');
    texture = glcanvas.texture(source);

    w = source.width;
    h = source.height;
    hw = w / 2;
    hh = h / 2;
    w75 = w * 0.75;

    source.parentNode.insertBefore(glcanvas, source);
    source.style.display = 'none';

    glcanvas.className = source.className;
    glcanvas.id = "blah";

    srcctx.drawImage(lines, 0, 0, w, h);
        

    texture.loadContentsOf(source);
        

    glcanvas.draw(texture)
        .bulgePinch(hw, hh, w75, 0.05)
        .vignette(0.25, 0.7)
        .update();

}

setInterval(function(){crtBulge()}, 10);