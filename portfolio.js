var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
function opentab(tabName){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabContents){
        tabcontent.classList.remove("active");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right ="0";
}
function closemenu(){
    sidemenu.style.right ="-135px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxnJpq_2rRtLlV2-JDHMwfbJ7nNbU0VKbCXiFDf6_VfdYg3hv3pEBEbZO77mnAV4eOhqg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("confirmation");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Your response has been submitted! 	&#128515;";
        setTimeout(function(){
            msg.innerHTML= "";
        },4000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
