import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import { FaBirthdayCake, FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import ContainerHeaderBottom from '../../components/ContainerHeaderBottom';

const Header = (props) => {
	useEffect(() => {
		const eachMenuItem = document.querySelectorAll('.dzb-header__top ul li');
		const headerBottom = document.querySelectorAll('.dzb-header__bottom-wrapper .dzb-header__bottom');
		
		const mouseOutHeaderBottom = (node) => {
			return () => {
				node.classList.remove('is-visible');
			}
		}
		
		const mouseEnterMenu = (event) => {
				const name = event.target.getAttribute('name');
				headerBottom.forEach(el => {
					if (el.getAttribute('name') === name) {
						el.classList.add('is-visible');
						console.log(el);
						el.addEventListener('mouseleave', mouseOutHeaderBottom(el))
					} else {
						el.removeEventListener('mouseleave', mouseOutHeaderBottom(el))
						el.classList.remove('is-visible');
					}
				})
			}
		
		eachMenuItem.forEach(item => {
			item.addEventListener('mouseenter', mouseEnterMenu);
		});

		// Scroll
		let nextValue = 0;
		const onScroll = () => {
			// Scroll to display navbar
			const currentValue = window.pageYOffset || document.documentElement.scrollTop;
			// Add animation
			const NavbarDOM = document.querySelector('.dzb-header__top');
			// Container Header Bottom
			const HeaderBottom = document.querySelectorAll('.dzb-header__bottom');
			NavbarDOM.style.transition = 'transform .3s';
			if (currentValue > 100) {
				if (currentValue > nextValue){
					// scroll down
					NavbarDOM.style.transform = 'translateY(-100%)';
					HeaderBottom.forEach(el => el.classList.remove('is-visible'))
				} else {
					// scroll up
					NavbarDOM.style.transform = 'translateY(0px)';
				}
			} else {
				NavbarDOM.style.transform = 'translateY(0px)';
			}
			nextValue = currentValue <= 0 ? 0 : currentValue;
		}

		window.addEventListener('scroll', onScroll);

		return () => {
			eachMenuItem.forEach(item => {
				item.removeEventListener('mouseenter', mouseEnterMenu);
			});
			window.removeEventListener('scroll', onScroll)
		}
		
	}, []);

	return (
		<div className="dzb-header">
			<Row className="dzb-header__top desktop-only">
				<Col xs="12" md="4" className="dzb-header__top--social">
					<a href="https://fb.com/donezombiee" target="_blank"><AiFillFacebook /></a>
					<a href="https://instagram.com/donezombie" target="_blank"><AiFillInstagram /></a>
					<a href="https://github.com/donezombie" target="_blank"><AiFillGithub /></a>
				</Col>
				<Col xs="12" md="8">
					<ul>
						<li name="about-me">About me</li>
						<li name="contact">Contact</li>
					</ul>
				</Col>
			</Row>
			<div className="dzb-header__bottom-wrapper desktop-only">
				<ContainerHeaderBottom name="about-me">
					<Row>
						<Col xs="12" md="12" className="about-me__info">
							<Row>
								<Col xs="12" md="4" className="about-me__img">
									<img src="static/assets/avatar.jpg" alt="avatar" />
								</Col>
								<Col xs="12" md="8" className="about-me__text">
									<h2>Pham Phu Quy Don</h2>
									<h6>Front-end Web Developer</h6>
									<hr />
									<div className="profile">
										<span><FaBirthdayCake /> 05/12/1996</span>
										<span><FaPhone /> +8439-5029-800</span>
										<span><MdLocationOn /> Ha Noi, Viet Nam</span>
									</div>
									<p>
									My objective is to become a professional front-end web developer. <br />
									I always try my best to learn new programming languages and develop new ideas to create quality products.
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</ContainerHeaderBottom>
				<div name="contact" className="dzb-header__bottom">
					contact
				</div>
			</div>
		</div>
	);
};
export default Header;
