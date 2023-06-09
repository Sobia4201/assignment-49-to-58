function displayFormData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("contact").value;
  var password = document.getElementById("password").value;
 
  
  var formData = "<strong>Name:</strong> " + name + "<br>" +
                 "<strong>Email:</strong> " + email + "<br>" +
                 "<strong>Contact:</strong> " + contact + "<br>" +
                 "<strong>Password:</strong> " + password;
  
  document.getElementById("form-data").innerHTML = formData;
}


///////////////////////////////////////////

function toggleDetails(itemIndex) {
  var detailsElement = document.getElementById("details-" + itemIndex);
  var readMoreElement = document.getElementById("read-more-" + itemIndex);
  
  if (detailsElement.style.display === "none") {
    detailsElement.style.display = "block";
    readMoreElement.innerHTML = "Read less";
  } else {
    detailsElement.style.display = "none";
    readMoreElement.innerHTML = "Read more";
  }
}

///////////////////////////////////////////

var table = document.getElementById("table"),rIndex;
            
for(var i = 1; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        console.log(rIndex);

        document.getElementById("fname").value = this.cells[1].innerHTML;
        document.getElementById("lname").value = this.cells[2].innerHTML;
        document.getElementById("mNumber").value = this.cells[3].innerHTML;
    };
}
            
            function editRow(){
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("fname").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("lname").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("mNumber").value;
}


function editTableDisplay(){
    document.querySelector('.editTable').setAttribute('style', 'display: block;')
}


//////////////////////////////////////////////////////////////

// 1. Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.

// Modal functions
function openModal(src) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
// Paragraph zoom functions
function zoomIn() {
  var paragraph = document.getElementById("myParagraph");
  var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = fontSize + 10 + "px";
}

function zoomOut() {
  var paragraph = document.getElementById("myParagraph");
  var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = fontSize - 10 + "px";
}

