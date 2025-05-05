// Online:
async function writeLetter() {
  const requestURL = "https://github.com/monrac5/monrac5/blob/main/lettergenerator/letters.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const letters = await response.json()

  writeHeader(letters);
  salute(letters);
  writeMsg(letters);
  valedict(letters);
  stamp(letters);
  generateDate(letters);
}

// Local:
/*async function writeLetter() {
  const requestURL = "letters.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const letters = await response.json();

  writeHeader(letters);
  salute(letters);
  writeMsg(letters);
  valedict(letters);
  stamp(letters);
  generateDate(letters);
}*/


// This is for the signature: 
const signatured = document.querySelector(".signatured");

const submitSig = document.querySelector(".submitSig");
const signField = document.querySelector(".signField");

// signField.focus();

function signLetter() {
  const unterschrift = signField.value;
  signatured.textContent = `${unterschrift}`;
}

submitSig.addEventListener("click", signLetter);

// This is for date and place:
function generateDate(obj) {
  const dd = Math.floor(Math.random() * (31 - 1) + 1);
  const mm = obj.month[Math.floor(Math.random(13 - 1) + 1)];
  const yyyy = Math.floor(Math.random() * (2036 - 1780) + 1780);
  const date = `${dd} ${mm} ${yyyy}`;
  const place = obj.cities[Math.floor(Math.random() * 23017)];
  const datum = document.querySelector(".date_place");
  datum.textContent = `${place}, ${date}`;
}

// This is for the header:
function writeHeader(obj) {
  const header = document.querySelector(".header");
  header.textContent = obj.header[Math.floor(Math.random() * 134)];
}

// This is for the stamp:
function stamp(obj) {
  const stamp = document.querySelector(".stamp");
  stamp.src = obj.stamp[Math.floor(Math.random() * 65)];
}

// This is for the salutation:
function salute(obj) {
  const salutation = document.querySelector(".salutation");
  salutation.textContent = obj.address[Math.floor(Math.random() * 86)];
}

// The message:
function writeMsg(obj) {
  const message = document.querySelector(".inhalt");
  message.textContent = obj.content[Math.floor(Math.random() * 84)];
}

// The valediction:
function valedict(obj) {
  const valediction = document.querySelector(".valediction");
  valediction.textContent = obj.valediction[Math.floor(Math.random() * 87)];
}


