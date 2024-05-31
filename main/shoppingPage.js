function changeItemCount(change) {
    var inputElement = document.getElementById('item_count');
    var currentCount = parseInt(inputElement.value);
    var newCount = currentCount + change;
    if (newCount < 1) newCount = 1;
    inputElement.value = newCount;
    updateTotalAmount();
}

function updateTotalAmount() {
    var count = parseInt(document.getElementById('item_count').value);
    var discountPrice = 900000;
    var coupon = document.getElementById('coupon').value;
    var discount = discountPrice * (coupon / 100);
    var totalAmount = count * (discountPrice - discount);
    document.getElementById('total_amount').innerText = totalAmount.toLocaleString();
}

window.onload = function() {
    updateTotalAmount();
}

function init() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");

	context.lineWidth = 2;
	context.strokeStyle = "blue";

	canvas.addEventListener("mousemove", function (e) { move(e) }, false);
	canvas.addEventListener("mousedown", function (e) { down(e) }, false);
	canvas.addEventListener("mouseup", function (e) { up(e) }, false);
	canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}

var canvas, context;
var startX=0, startY=0;
var dragging=false;
function draw(curX, curY) { 
	context.beginPath();
	context.moveTo(startX, startY);
	context.lineTo(curX, curY);
	context.stroke();
}
