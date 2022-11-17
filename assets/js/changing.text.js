let changeSubtext = () => {
    const texts = [
      'We make you and your family lives make protected through flexible CCTV monitoring.',
      'We make your schools experience total security through the installation of quality CCTV cameras.',
      'The award winning technological and security company in Ghana And West Africa.'
   ]
   const subText = document.querySelector(".sub-text");
   const bg = texts[Math.floor(Math.random() * texts.length)]
   subText.innerText = bg;
   }
   setInterval(changeSubtext, 4000);

const scrollUp = document.getElementById("scrollUp");
window.addEventListener("scroll", ()=>{
  if(window.pageYOffset > 100){
    scrollUp.classList.add("active");
  }else {
    scrollUp.classList.remove("active");
  }
})