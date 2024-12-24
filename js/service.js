const faditem=document.querySelectorAll(".faq-item");
faditem.forEach((item)=>{
    item.addEventListener('click',()=>{
        faditem.forEach(i=>{
            if(i !==item){
                i.classList.remove('active');
                i.querySelector('icon').innerHTML='<i class="fas fa-plus"></i>';
            }
        })
        item.classList.toggle("active");
        const icon=item.querySelector('icon');
        icon.innerHTML=item.classList.contains('active')?'<i class="fas fa-minus"></i>':'<i class="fas fa-minus"></i>';
    })
})