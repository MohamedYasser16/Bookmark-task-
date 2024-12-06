var BookmarkNameInput = document.querySelector("#BookmarkName");
var WebsiteURLInput = document.querySelector("#WebsiteURL");
var con = document.querySelector("#mycon");

var form = document.forms;

var buttonsub = document.querySelector("#Submit");

console.log(BookmarkName);
var regex1 = /^[A-Za-z]{1,}[0-9]{0,}\W{0,}\w{0,}[0-9]{0,}\W{0,}\w{0,}[0-9]{0,}\W{0,}\w{0,}[0-9]{0,}\W{0,}\w{0,}[0-9]{0,}$/,
  regexUrl =
    /(https:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;


var arrcontainer = [];

if ( localStorage.getItem("local") != null) {
  var localItem = JSON.parse(localStorage.getItem("local"));
  console.log(localItem);
  console.log(JSON.parse(localStorage.local));
  var arrcontainer = JSON.parse(localStorage.local).slice(0);
  console.log(arrcontainer);
  show();
}

form[0].addEventListener("submit", function (e) {
  e.preventDefault();
});

buttonsub.addEventListener("click", function (e) {
  add();
});

// bookmark = {
//     NameOpject : null ,
//     URLOpject: null ,
// }
function add() {
  // bookmark = {
  //     NameOpject : null ,
  //     URLOpject: null ,
  // }
  console.log(validateName() && validateUrl() );
  
 if ( validateName() && validateUrl() ) {
    bookmark = {
        NameOpject: BookmarkNameInput.value,
        URLOpject: `www.${WebsiteURLInput.value} `,
      };
      console.log(bookmark);
      bookmark.NameOpject = BookmarkNameInput.value;
      bookmark.URLOpject = WebsiteURLInput.value;
      console.log(bookmark);
      arrcontainer.push(bookmark);
      localStorage.setItem("local", JSON.stringify(arrcontainer));
    //   console.log(arrcontainer[arrcontainer.length-1].URLOpject);
    
      console.log(arrcontainer);
      clean ()
      show();
 }
  else {
    window.alert("try again .. ")
  }

}

function clean () {
    BookmarkNameInput.value = null ;
    WebsiteURLInput.value = "" ;
    WebsiteURLInput.classList.remove("is-valid");
    BookmarkNameInput.classList.remove("is-valid");

}

function show() {
  var str = "";
  for (var i = 0; i < arrcontainer.length; i++) {
    str += `
                            <tr class="">
                                <td><span> ${i+1}</span></td>
                                <td><span> ${arrcontainer[i].NameOpject} </span></td>
                                <td> <a  class="btn btn-info text-white" href="www.${arrcontainer[i].URLOpject}" target="_blank"><i class="fa-regular fa-eye"></i> Visit</a> </td>
                                <td><button  onclick=" deletefun( ${i} )" class="btn btn-danger text-white text-center"> <i class="fa-solid fa-trash-can"></i> Delete</button></td>
                            </tr>
                   `;
  }

  con.innerHTML = str;
}

function deletefun(y) {
  arrcontainer.splice(y, 1);
  localStorage.setItem("local", JSON.stringify(arrcontainer));
  show();
}

// -------------------------------------------------

var alerts = document.getElementsByClassName("alert");
var alertName = alerts[0];
var alertUrl = alerts[1];

BookmarkNameInput.addEventListener("blur", validateName);

function validateName() {
  console.log(regex1.test(`${BookmarkNameInput.value}`));
  console.log(`${BookmarkNameInput.value}`);

  if (regex1.test(`${BookmarkNameInput.value}`)) {
    BookmarkNameInput.classList.add("is-valid");
    BookmarkNameInput.classList.remove("is-invalid");
    console.log("valid");
    alertName.classList.add("d-none");
    return true ;
  } else {
    alertName.classList.remove("d-none");
    BookmarkNameInput.classList.remove("is-valid");
    BookmarkNameInput.classList.add("is-invalid");
    return false ;
  }
}

WebsiteURLInput.addEventListener("blur", validateUrl);

function validateUrl() {
  console.log(regexUrl.test(`${WebsiteURLInput.value}`));
  console.log(`${WebsiteURLInput.value}`);

  if (regexUrl.test(`${WebsiteURLInput.value}`)) {
    WebsiteURLInput.classList.add("is-valid");
    WebsiteURLInput.classList.remove("is-invalid");
    console.log("valid");
    alertUrl.classList.add("d-none");
    return true ;
  } else {
    alertUrl.classList.remove("d-none");
    WebsiteURLInput.classList.remove("is-valid");
    WebsiteURLInput.classList.add("is-invalid");
    return false ;
  }
}






// hover using js 

// var h1 = document.querySelector("#h1") ;
// console.log(h1);
// var after = document.querySelector(".after") ;
// console.log(after);


// h1.addEventListener("mouseover", function () {
//   after.style.height="40"+"px" ;
//   after.classList.add("tran1")
// })

// h1.addEventListener("mouseout", function () {
//   after.style.height="18"+"px" ;
  
// })
