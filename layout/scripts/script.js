document.querySelector("#footer button").addEventListener('click', showMessage);


const cbox = document.querySelectorAll("#services article");

for (let i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("click", showMessage2);
}



function showMessage(){
  swal("Your subscription is successfully. Thank you very much!");
}

function showMessage2(){
    swal({
            title: "Are you ready?",
            text: "Do you want to sign up this event?",
            buttons: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Congratulations! You have signed up this activity, hope to see you soon!", {
                icon: "success",
              });
            } else {
              swal("Hope you have great day, see you next time");
            }
          });
}