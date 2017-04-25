function coardz(front, back) {
 this.front = front,
 this.back = back
};

var sosoBasic = new coardz("Who created Star Trek?", "Gene Roddenberry");
console.log(sosoBasic.front);
console.log(sosoBasic.back);

function ClozeCard(text, cloze) {
 this.text = text,
 this.cloze = cloze
};

ClozeCard.prototype.showCloze = function () {
 console.log(this.cloze);
};

ClozeCard.prototype.showPartial = function () {
 if (this.text.indexOf(this.cloze) >= 0) {
   var newText = this.text.replace(this.cloze, "...");
   console.log(newText);
 }
};

ClozeCard.prototype.showFull = function () {
 console.log(this.text);
};

var meCloze = new ClozeCard("Who played number one?", "Jonathan Frakes");
meCloze.showCloze();
meCloze.showPartial();
meCloze.showFull();