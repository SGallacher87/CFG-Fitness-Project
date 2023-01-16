const logo = document.getElementById ('logo');
logo.addEventListener ('mouseover', function handleMouseOver() {
    logo.style.color = 'white';
  });

  logo.addEventListener('mouseout', function handleMouseOut() {
    logo.style.color = 'black';
  });






const coach = document.getElementById ('coach');
coach.addEventListener ('mouseover', function handleMouseOver() {
    coach.style.color = 'coral';
  });

  coach.addEventListener('mouseout', function handleMouseOut() {
    coach.style.color = 'black';
  });



  const res = document.getElementById ('res');
res.addEventListener ('mouseover', function handleMouseOver() {
    res.style.color = 'coral';
  });

  res.addEventListener('mouseout', function handleMouseOut() {
    res.style.color = 'black';
  });


  const cust = document.getElementById ('cust');
cust.addEventListener ('mouseover', function handleMouseOver() {
    cust.style.color = 'coral';
  });

  cust.addEventListener('mouseout', function handleMouseOut() {
    cust.style.color = 'black';
  });

  const btn = document.getElementById ('btn');
  btn.addEventListener ('mouseover', function handleMouseOver() {
      btn.style.color = 'white';

    });
  
    btn.addEventListener('mouseout', function handleMouseOut() {
      btn.style.color = 'black';
    });









    const cfbtn = document.getElementById ('cf-button');
  cfbtn.addEventListener ('mouseover', function handleMouseOver() {
      cfbtn.style.color = 'white';

    });
  
    cfbtn.addEventListener('mouseout', function handleMouseOut() {
      cfbtn.style.color = 'black';
    });


    
    
    function myFunction() {
        let person = alert("Congratulations you're a top athlete! Your top tips are on their way to you");
        alert.style.color = 'coral';
    }





let mybutton = document.getElementById("go-top-button");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

