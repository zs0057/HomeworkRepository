// Handle scrolling when tapping on the navbar menu 
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
	const target = event.target;
	const link = target.dataset.link;
	scrollIntoView(link);
});

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	if (window.scrollY > navbarHeight) {
		navbar.classList.add('navbar--dark');
	} else {
		navbar.classList.remove('navbar--dark');
	}
});

// Make navbar menu of current page active
let sectionIds = ['#home', '#lotte', '#doosan', '#kiwoom', '#footer'];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

const observerOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 0.3,
	
};

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
	console.log(selectedNavItem);
	selectedNavItem.classList.remove('active');
	selectedNavItem = selected;
	selectedNavItem.classList.add('active');
}

function scrollIntoView(selector) {
	const scrollTo = document.querySelector(selector);
	scrollTo.scrollIntoView({ behavior : 'smooth' });
	selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

const observerCallback = (entries, observer) => {
	entries.forEach(entry => {
		if(!entry.isIntersecting && entry.intersectionRatio > 0) {
			const index = sectionIds.indexOf(`#${entry.target.id}`);
			if(entry.boundingClientRect.y < 0) {
				selectedNavIndex = index + 1;
			} else {
				selectedNavIndex = index - 1;
			}
		}
	});
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
	if(window.scrollY === 0) {
		selectedNavIndex = 0;
	} else if (Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight){
		selectedNavIndex = navItems.length - 1;
	}
	selectNavItem(navItems[selectedNavIndex]);
})

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
	navbarMenu.classList.toggle('open');
});

// Lotte Category
const btnlotteContainer = document.querySelector('.lotte__categories');
const lotteUniformContainer = document.querySelector('.lotte__uniforms');
const lotteUniforms = document.querySelectorAll('.lotte__uniform');

btnlotteContainer.addEventListener('click', (e) => {
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if(filter == null) {
		return;
	}
	// Remove selection from the previous item and select the new one
	const active = document.querySelector('.category__btn.selected');
	active.classList.remove('selected');
	const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
	target.classList.add('selected');
	
	lotteUniformContainer.classList.add('anim-out');
	setTimeout (() => {
		lotteUniforms.forEach((uniform) => {
			if(filter === "*" || filter === uniform.dataset.type) {
				uniform.classList.remove('invisible');
			} else {
				uniform.classList.add('invisible');
			}
		});
		lotteUniformContainer.classList.remove('anim-out');
	}, 300);
});

// Doosan Category
const doosanBtnContainer = document.querySelector('.doosan__categories');
const doosanUniformContainer = document.querySelector('.doosan__uniforms');
const doosanUniforms = document.querySelectorAll('.doosan__uniform');

doosanBtnContainer.addEventListener('click', (e) => {
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if(filter == null) {
		return;
	}
	// Remove selection from the previous item and select the new one
	const active = document.querySelector('.category__btn.selected');
	active.classList.remove('selected');
	const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
	target.classList.add('selected');
	
	doosanUniformContainer.classList.add('anim-out');
	setTimeout (() => {
		doosanUniforms.forEach((uniform) => {
			if(filter === "*" || filter === uniform.dataset.type) {
				uniform.classList.remove('invisible');
			} else {
				uniform.classList.add('invisible');
			}
		});
		doosanUniformContainer.classList.remove('anim-out');
	}, 300);
});

// Kiwoom Category
const kiwoomBtnContainer = document.querySelector('.kiwoom__categories');
const kiwoomUniformContainer = document.querySelector('.kiwoom__uniforms');
const kiwoomUniforms = document.querySelectorAll('.kiwoom__uniform');

kiwoomBtnContainer.addEventListener('click', (e) => {
	const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
	if(filter == null) {
		return;
	}
	// Remove selection from the previous item and select the new one
	const active = document.querySelector('.category__btn.selected');
	active.classList.remove('selected');
	const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
	target.classList.add('selected');
	
	kiwoomUniformContainer.classList.add('anim-out');
	setTimeout (() => {
		kiwoomUniforms.forEach((uniform) => {
			if(filter === "*" || filter === uniform.dataset.type) {
				uniform.classList.remove('invisible');
			} else {
				uniform.classList.add('invisible');
			}
		});
		kiwoomUniformContainer.classList.remove('anim-out');
	}, 300);
});