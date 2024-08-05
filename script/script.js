const btn = document.querySelectorAll('.btn' );
const navForm  = document.querySelectorAll('.nav_form');
const navForms = document.querySelector('.nav_forms');
const close = document.querySelectorAll('.form_close');
const bg = document.querySelector('.bg');
const body = document.querySelector('body');

for (let i = 0; i < btn.length; i++)
 {
   btn[i].addEventListener('click', () => {
			navForm[i].classList.add('active')
			navForms.classList.add('active')
			bg.classList.add('active')
            body.classList.add('active')
		});
 }
 for (let j = 0; j < close.length; j++) {
		close[j].addEventListener('click', () => {
			navForm[j].classList.remove('active')
			navForms.classList.remove('active')
			bg.classList.remove('active')
			body.classList.remove('active')
		})
 }
 const navBtn = document.querySelector('.nav_btn');
 const navlist = document.querySelector('.nav_list');
 navBtn.addEventListener('click', () => 
 {
	navlist.classList.toggle('active')
	navBtn.classList.toggle('active')
	bg.classList.toggle('active')
	body.classList.toggle('active')
 })
 bg.addEventListener('click', () =>
 {
	for (let q = 0; q < navForm.length; q++)
	 {
		navForm[q].classList.remove('active')
	 }
	 for (let o = 0; o < servicesBlock.length; o++) 
	    {
			servicesBlock[o].classList.remove('active')
		}
	 bg.classList.remove('active')
	 navlist.classList.remove('active')
	 navBtn.classList.remove('active')
	 body.classList.remove('active')
	 navForms.classList.remove('active')
 })
 const navBtns = document.querySelector('.nav_btns');

 window.addEventListener('scroll', () =>
 {
	if (window.scrollY != 0) 
	{
		navBtns.classList.add('active')
	}
	else
	{
		navBtns.classList.remove('active')
	}
	
 
 })


///swiper

var swiper = new Swiper(".mySwiper", 
{
	loop: true, 
	autoplay:
	{
		delay: 5000,
	},
	pagination:
	{
		el:'.swiper-pagination',
		clickable: true,
	}
})
///boki

const arrow = document.querySelectorAll('.services_arrow');
const servicesBlocks = document.querySelector('.services_blocks');
const servicesBlock = document.querySelectorAll('.services_block');
const servicesBlockClose = document.querySelectorAll('.services_block-span');
const servicesBg = document.querySelector('.services_bg');
const nav = document.querySelector('.nav');

for (let f = 0; f < arrow.length; f++) 
{
	arrow[f].addEventListener('click', () =>
	{
		servicesBlocks.classList.add("active")
		servicesBlock[f].classList.add('active')
		servicesBg.classList.add('active')
		body.classList.add('active')
		if (servicesBg.classList.contains('active')) {
			nav.style.zIndex = '8'
		}
	})
	 
}
for (let a = 0; a < servicesBlockClose.length; a++) 
{
	servicesBlockClose[a].addEventListener('click', () => {
		servicesBlocks.classList.remove('active');
		servicesBlock[a].classList.remove('active');
		servicesBg.classList.remove('active');
		body.classList.remove('active')
		nav.style.zIndex = '9999'
	});
}

servicesBg.addEventListener('click', () =>
{
	servicesBlocks.classList.remove('active');
	servicesBg.classList.remove('active');
	body.classList.remove('active')
	const activeBlock = document.querySelector('.services_block.active');
	if (activeBlock) 
	{
		activeBlock.classList.remove('active');
	}
});

/// button-product

const ListBtns = document.querySelector('.list_btns');
const ListBtn = document.querySelectorAll('.list_btn');
const ListUslug = document.querySelectorAll('.list_uslug')
const prevS = document.querySelector('.swiper-button-prev');
const nextS = document.querySelector('.swiper-button-next')

// for (let kik = 0; kik < ListBtn.length; kik++)
// {
// 	ListBtn[kik].addEventListener('click', () => {
// 		ListBtn[kik].classList.toggle('active')
		
		
// 	})
	
// }
function Gog() 
{
	const ListBtn = document.querySelectorAll('.list_btn');
	const obshaK = document.querySelectorAll('.obsha');
	ListBtn.forEach(item =>
	{ 
        item.addEventListener('click', (e) =>
		{
        ListBtn.forEach(ListBtn => {
					ListBtn.classList.remove('active')
				})
        item.classList.add('active')
		})
	});	
	// obshaK.forEach(item => {
	// 	item.addEventListener('click', e => {
	// 		ListBtn.forEach(s => {
				
	// 				ListBtn.forEach(ListBtn => {
	// 					ListBtn.classList.remove('active')
						
	// 				})
					
	// 			})
				
	// 		})	
	// 	})	
	
	}
	nextS.addEventListener('click', () =>
	{
		ListBtn.forEach(c =>
			{
		 ListBtn.forEach(ListBtn => {
				ListBtn.classList.remove('active')
			})
			c.classList.add('active')
			
	})
	
});	
 
// ListBtn.forEach(item =>
// 	{ 
//         item.addEventListener('click', (e) =>
// 		{
//         ListBtn.forEach(ListBtn => {
// 					ListBtn.classList.remove('active')
// 				})
//         item.classList.add('active')
// 		})
// 	});	

	
		// ListBtn.forEach(item => {
		// 	item.addEventListener('click', e => {

		// 		Gog();
		// 	})
		// })	

	// nextS.addEventListener('click', () => {
		
	// 		ListBtn[0].classList.toggle('active')
	// 	ListBtn[1].classList.toggle('active')
	// 	ListBtn[2].classList.toggle('active')
	// 	ListBtn[3].classList.toggle('active')
	// })

	// ListBtn[1].classList.add('active')


ListUslug.forEach(item => {
	item.addEventListener('click',  e => {
		ListUslug.forEach(ListUslug => {
			ListUslug.classList.remove('active')
		})
		item.classList.add('active')
	})
})	
/// swiper-product


const swiperProduct = new Swiper('.swiper--product', {
	direction: 'horizontal',
	loop: true,
	navigation:
	 {
		type: 'custom',
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination--pop',
		type: 'custom',
		clickable: true,
		bulletClass: 'list_btn',
		// renderCustom: function (index, className) {
		// 	var buttonTexts = ['Стандарт', 'Бизнес', 'Премиум', 'Эксклюзив']
		// 	return (
		// 		'<button class="' +
		// 		className +
		// 		' swiper-pagination-custom-text"> ' +
		// 		buttonTexts[index] +
		// 		'</button>'
		// 	)
		// },
	},
})

//////uslug-swiper

const swiperUslug = new Swiper('.swiper--uslugi', {
	direction: 'horizontal',
	navigation: false,
	pagination: {
		el: '.swiper-pagination--lol',
		type: 'custom',
		clickable: true,
		bulletClass: 'list_btn',
	},
})
//lol
// var swiperGug = new Swiper('.swiper-slide--uslug', {
// 	loop: true,
// 	navigation: {
// 		nextEl: '.swipernext-uslug',
// 		prevEl: '.swiperprev-uslug',
// 	},
// })

////////////////btn-lol


const btnLol = document.querySelector('.btn-lol');
btnLol.addEventListener('click', () => {
	navForm[0].classList.add('active')
	navForms.classList.add('active')
	bg.classList.add('active')
	body.classList.add('active')
})
////////////////swiper-port

var swiperPort = new Swiper('.swiper--portfolio', {
	slidesPerView: 4,
	loop: true,
	centeredSlides: true,
	direction: 'horizontal',
	loop: true,
	navigation: {
		type: 'custom',
		nextEl: '.swiper-button-tuk',
		prevEl: '.swiper-button-tik',
	},
})