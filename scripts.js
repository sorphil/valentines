document.addEventListener("DOMContentLoaded",()=>{
    let noCount=0;
    if(document.querySelector("#checkbox-cover").checked)
    {
        document.querySelector(".cover-main").style.display = "none"
    }
    else
    {
        document.querySelector(".cover-main").style.display = "block"
    }

    document.querySelector("#page1").addEventListener("transitionend", (ele)=>
    {
       if(document.querySelector("#checkbox-cover").checked)
       {
        // heartCounter--;
        document.querySelector(".cover-main").style.display = "none"
       }
       else
       {
        document.querySelector(".cover-main").style.display = "block"
       }
    })

    const handleNoClick = () => {
            noCount++;
      };

      const getNoButtonText = () => {
        const phrases = [
          "No.",
          "WAIT WHAT",
          "Must be a misclick haha",
          "Not this button honey.",
          "Nope, wrong again.",
          "The other one sweetheart.",
          "Okay huney bun, that's enough",
          "Hmmmmm, try again",
          "This ain't it G.",
          "BRRR WRONG ANSWER!",
          "WRONG AGAIN",
          "THE OTHER BUTTON",
          "Bruh.",
          "Either you stupid",
          "Or you're really tryna piss me off",
          "You being fucking fr rn?",
          "Real funny.",
          "Hahaha, aight stop.",
          "Bitch that's enough!",
          "I'll give you one more chance.",
          "CLICK THE OTHER ONE",
          "I SWEAR TO GOD WOMAN",
          "FINNA BEAT YO SHIT"
     
        ];
        if(noCount ==1)
        {
            document.querySelector(".page-image").src ="https://c.tenor.com/NqpgfoS_83gAAAAC/tenor.gif"
        }
        if(noCount ==6)
        {
            document.querySelector(".page-image").src ="https://media1.tenor.com/m/-s1PmLxTWSoAAAAd/mochi-cat.gif"
        }
        if(noCount==9)
        {
            document.querySelector(".page-image").src = "https://media1.tenor.com/m/BSXfPQkuF2cAAAAC/goma-mad-mad.gif"
        }
        if(noCount==19)
        {
            document.querySelector(".page-image").src = "https://media1.tenor.com/m/kM5gyjwUqOgAAAAC/mochi-cat-mochi.gif"
        }
        if(noCount> phrases.length-1)
        {
            if(!alert("Imma give you another chance to get this right since you out here thinking you funny and shiet.")){window.location.reload();}
        }
        return phrases[Math.min(noCount, phrases.length - 1)];
      };

      document.querySelector("#no-btn").addEventListener("click",(ele)=>{
        handleNoClick();
        ele.target.innerHTML = `${getNoButtonText()}`
      })
      document.querySelector("#yes-btn").addEventListener("click",(ele)=>{

            document.querySelector(".page-image").src = "https://media1.tenor.com/m/Ye7jK4dV19wAAAAC/goma-happy.gif"
            document.querySelector(".page-inputs").style.display = "none"
            document.querySelector(".page-text").innerHTML = "<br>YOU MAKE ME THE HAPPIEST MAN IN THE WORLDDDD. <br> <br> I LOVE YOU TAYLOR!!"
      })

})
