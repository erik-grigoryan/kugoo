import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import logo from './../../assets/images/logo.svg';

const Header = () => {
	return (
		<header className='header'>
			<div className='header-cap'>
				<div className='wrapper'>
					<div className='services-block'>
						<ul className='services-list'>
							<li className='service'>
								<Link to='/service'>Сервис</Link>
							</li>
							<li className='service'>
								<Link to='/cooperation'>Сотрудничество</Link>
							</li>
							<li className='service'>
								<Link to='/book_call'>Заказать звонок</Link>
							</li>
						</ul>
						<ul className='social-links'>
							<li className='social-link'>
								<Link to='#' className='icon-viber'>Viber</Link>
							</li>
							<li className='social-link'>
								<Link to='#' className='icon-whatsapp'>Whatsapp</Link>
							</li>
							<li className='social-link'>
								<Link to='#' className='icon-telegram'>Telegram</Link>
							</li>
						</ul>
					</div>
					<div className='tel-block'>
						<div className='default-tel-block'>
							<Link to='tel:+78005055461'>+7 (800) 505-54-61</Link>
							<button type='button' className='tel-list-trigger icon-plus'>Open Telephone List</button>
						</div>
						<div className='additional-tel-list'>
							<div className='additional-tel-block'>
								<p className='additional-tel-label'>Сервисный центр</p>
								<Link className='additional-tel' to='tel:+74993507692'>+ 7 (499) 350 76 92</Link>
							</div>
							<div className='additional-tel-block'>
								<p className='additional-tel-label'>Оптовый отдел</p>
								<Link className='additional-tel' to='tel:+74992816452'>+7 (499) 281-64-52</Link>
								<span className='additional-tel-time'>пн-сб 10:00 - 19:00</span>
							</div>
							<div className='additional-tel-block'>
								<p className='additional-tel-label'>Отдел рекламаций и претензий</p>
								<Link className='additional-tel' to='tel:+74993507692'>+ 7 (499) 350 76 92</Link>
								<span className='additional-tel-time'>ср-вс с 10:00 до 19:00</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='header-block'>
				<div className='wrapper'>
					<div className='header-left-block'>
						<Link className='logo' to='/'>
							<img src={logo} alt=''/>
						</Link>
						<div className='header-catalogue-block'>
							<button type='button' className='header-catalogue-btn'>
								<span className='header-catalogue-decor' />
								Каталог
							</button>
						</div>
					</div>
					<div className='header-search-block'>
						<div className='header-search-block-inner'>
							<div className='header-search-field-wrapper'>
								<div className='header-search-select'>
									<p className='header-search-selected'>Везде</p>
									<ul className='header-search-select-variants'>
										<li className='header-search-select-variant'>Везде</li>
										<li className='header-search-select-variant'>Эл. Скутеры</li>
										<li className='header-search-select-variant'>Эл. Самокаты</li>
										<li className='header-search-select-variant'>Эл. Мотоциклы</li>
									</ul>
								</div>
								<input type='text' className='header-search-field' placeholder='Искать самокат KUGO' />
							</div>
							<button type='button' className='header-search-submit icon-search'>Поиск</button>
						</div>
					</div>
					<div className='header-right-block'>
						<div className='header-action-buttons'>
							<button type='button' className='header-action-button'>
								<i className='icon-scales' />
								<span>Сравнить</span>
							</button>
							<Link to='#' className='header-action-button'>
								<i className='icon-heart' />
								<span>Избранные</span>
							</Link>
							<Link to='#' className='header-action-button cart'>
								<i className='icon-cart-filled' />
								<span>Корзина</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<nav className='site-navigation'>
				<div className='wrapper'>
					<ul className='main-menu'>
						<li className='main-menu-el'>
							<Link to='#'>О магазине</Link>
						</li>
						<li data-additional='Доступна рассрочка' className='main-menu-el'>
							<Link to='#'>Доставка и оплата</Link>
						</li>
						<li className='main-menu-el'>
							<Link to='#'>Тест-драйв</Link>
						</li>
						<li className='main-menu-el'>
							<Link to='#'>Блог</Link>
						</li>
						<li className='main-menu-el'>
							<Link to='#'>Контакты</Link>
						</li>
						<li data-additional='%' className='main-menu-el'>
							<Link to='#'>Акции</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;