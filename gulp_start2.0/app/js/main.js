const open = document.querySelector('.open-modal');
 const dialog = document.querySelector('.dialog');
 const close = document.querySelector('.cose-modal');

 const openModal = ()=>{
   dialog.showModal();
   document.body.classList.add('scroll-block')
   
 }

 const returnScroll = ()=>{
   document.body.classList.remove('scroll-block')
 }
 const closeModal =()=>{
   dialog.close();
   returnScroll()
 }

 open.addEventListener('click',openModal );
 close.addEventListener('click', closeModal);


const closeOnOwerlayClick = (e)=>{
   if(e.target === dialog ){
      dialog.close();
   }
}
dialog.addEventListener('click',closeOnOwerlayClick);
dialog.addEventListener('cancel',()=>{
   returnScroll()
})




