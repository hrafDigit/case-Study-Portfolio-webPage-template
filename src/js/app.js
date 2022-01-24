import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// == START Swiper script ==
import Swiper, { Navigation } from 'swiper';
// import 'swiper/css/navigation';
import 'swiper/css';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 100,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	dynamicBullets: true,
	// },
	mousewheel: true,
	keyboard: true,
});
// == END Swiper script ==

// == START Gsap script ==
// -- BEGIN portfolio animations script --
document.querySelectorAll('.project_cards__wrapper').forEach(portfolioCardElement => {
	let portfolioCards = portfolioCardElement.querySelectorAll('.project_cards__wrapper > figure');
	gsap.fromTo(portfolioCards, {
		y: '100%',
		opacity: 0,
	},
	{
		scrollTrigger: {
			trigger: portfolioCardElement,
			start: 'top center',
			end: 'bottom top',
			// end: '+=100',
			// scrub: true,
			// markers: true,
		},
		y: 0,
		opacity: 1,
		borderRadius: 0,
		duration: 1,
		stagger: 0.25,
	}
	);
});

document.querySelectorAll('.animatedBox').forEach(items => {
	let item = items.querySelectorAll('.project_cards__wrapper figure .box');
	let card = items.querySelectorAll('.project_cards__wrapper figure .card');
	let cardSubtitle = items.querySelectorAll('.project_cards__wrapper figure .card-content .subtitle');
	let cardContent = items.querySelectorAll('.project_cards__wrapper figure .card-content .content');
	let cardFooter = items.querySelectorAll('.project_cards__wrapper figure .card-footer');
	items.addEventListener('mouseenter', event => {
		event.target.style.background = '';
		gsap.fromTo(item,
			{
				y: '-50%',
				backgroundColor: 'rgba(250,250,250, .08)',
				opacity: 0,
			},
			{
				y: 0,
				opacity: .88,
				backgroundColor: 'rgba(250,250,250, .16)',
				ease: 'elastic',
			}
		);
		gsap.fromTo(card,
			{
				y: '100%',
				backgroundColor: 'rgba(250,250,250, .08)',
			},
			{
				y: 0,
				backgroundColor: 'rgba(250,250,250, .96)',
				duration: 1,
				ease: 'ease',
			}
		);
		gsap.fromTo(cardSubtitle,
			{
				x: '100%',
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.25,
				delay: 1,
				ease: 'bounce',
			}
		);
		gsap.fromTo(cardContent,
			{
				// x: '100%',
				opacity: 0,
			},
			{
				// x: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.25,
				delay: 2,
				ease: 'ease',
			}
		);
		gsap.fromTo(cardFooter,
			{
				// x: '100%',
				opacity: 0,
			},
			{
				// x: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.25,
				delay: 3,
				ease: 'ease',
			}
		);
	});
	items.addEventListener('mouseleave', event => {
		event.target.style.background = '';
		gsap.to(item,
			{
				opacity: 0,
				duration: 1,
				ease: 'none',
			},
		);
	});
});
// -- END portfolio animations script --

// -- BEGIN project-page animations script --
document.querySelectorAll('.project_resume__wrapper').forEach(projectThumbnails => {
	let projectThumbnail = projectThumbnails.querySelectorAll('.project_resume__card');
	gsap.fromTo(projectThumbnail, {
		x: '100%',
		opacity: 0,
	}, {
		scrollTrigger: {
			trigger: projectThumbnails,
			start: 'top bottom',
			end: 'bottom top',
		},
		x: 0,
		opacity: 1,
		duration: 1,
		stagger: 0.25,
	});
});
// -- END project-page animations script --
// == END Gsap script ==

console.log('It works');
