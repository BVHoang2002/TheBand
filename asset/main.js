//
    var $=document.querySelector.bind(document)
    var $$=document.querySelectorAll.bind(document)
function btnBuy(){
let btnElements=$$('.tour-item button')
    btnElements.forEach((btn)=>{
        btn.onclick= function(){
            $('.modal').classList.add('open-modal')
        }
        $('.modal-close').onclick= function(){
            $('.modal').classList.remove('open-modal')
        }
    })
}
btnBuy()
////////////////////////////////

 function autoImg(){
    let imgList=['https://www.w3schools.com/w3images/chicago.jpg','https://www.w3schools.com/w3images/la.jpg','https://www.w3schools.com/w3images/ny.jpg']
    let slider = $('#slider')
    let imgRandom= Math.floor(Math.random() * imgList.length)
    slider.style.backgroundImage = `url(${imgList[imgRandom]})`
    switch(imgRandom){
        case 0:
            slider.innerHTML=`
            <div class="text-content">
                <h2 calss="text-heading">Chicago</h2>
                <div class="text-decoration">Thank you, Chicago - A night we won't forget.</div>
            </div>
            `
            break;
        case 1:
            slider.innerHTML=`
            <div class="text-content">
                <h2 calss="text-heading">New York</h2>
                <div class="text-decoration">The atmosphere in New York is lorem ipsum.</div>
            </div>
            `
            break;
        default:
            slider.innerHTML=`
            <div class="text-content">
                <h2 calss="text-heading">Los Angeles</h2>
                <div class="text-decoration">We had the best time playing at Venice Beach!</div>
            </div>
            `
    }
    
 }
 setInterval('autoImg()', 3000)
// function auto(){
//  let imgList=['https://www.w3schools.com/w3images/chicago.jpg','https://www.w3schools.com/w3images/la.jpg','https://www.w3schools.com/w3images/ny.jpg']
//  let slider = $('#slider')
//  let i=0
//     for(; i<imgList.length;){
//         slider.style.backgroundImage = `url(${imgList[i]})`
//         switch(i){
//             case 0:
//                 slider.innerHTML=`
//                 <div class="text-content">
//                     <h2 calss="text-heading">Chicago</h2>
//                     <div class="text-decoration">Thank you, Chicago - A night we won't forget.</div>
//                 </div>
//                 `
//                 break;
//             case 1:
//                 slider.innerHTML=`
//                 <div class="text-content">
//                     <h2 calss="text-heading">New York</h2>
//                     <div class="text-decoration">The atmosphere in New York is lorem ipsum.</div>
//                 </div>
//                 `
//                 break;
//             default:
//                 slider.innerHTML=`
//                 <div class="text-content">
//                     <h2 calss="text-heading">Los Angeles</h2>
//                     <div class="text-decoration">We had the best time playing at Venice Beach!</div>
//                 </div>
//                 `
//         }
//         setTimeout(function() {
//             i=i+1
//             console.log(i)
//         },1000)
        
//     }
// }
// auto()
function btnPay(){
 let btnPay= $('.modal-body button')

    btnPay.onclick=function(){
        console.log(btnPay)
        $('.modal').classList.remove('open-modal')
        $('.loading').style.display='flex'
        $('.loading').innerHTML=`
        <div class="load"><div class="loader"></div>
        Vui Long doi day lat
        </div>
        `
        $('.loading').onclick=function(){
            $('.loading').classList.remove('load')
        }
    }
}
btnPay()

function btnMenuMobile(){
    const mobileMenu= $('.mobile-menu')
    const headerHeight=$('#header').clientHeight
    mobileMenu.onclick= function(){
       if($('#header').clientHeight===headerHeight){
        $('#header').style.height='auto'
       }else{
        $('#header').style.height=null
       }
    }
    const mobileTagLis=$$('#nav li a[href*="#"]')
    
    for(let i=0; i<mobileTagLis.length;i++){
        const isParentMenu=mobileTagLis[i].nextElementSibling&&mobileTagLis[i].nextElementSibling.classList.contains('subnav')
        //t??m ?????n th???ng anh em c???nh n?? v?? c?? class subnav tr??? v??? ????ng ho???c sai
        mobileTagLis[i].onclick= function(e){
            if(isParentMenu){//n???u l?? th??? a c?? anh em l?? ul c?? class subnav th??
                e.preventDefault()//x??a b??? thu???c t??nh m???c ?????nh c???a n??
            }else
            $('#header').style.height=null//ng?????c l???i th?? ???n menu
        }
    }
}
btnMenuMobile()