import React, { Component } from 'react';

import styled from 'styled-components';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Link from './Link'

const List = styled.ul`

height: 49px;
display: flex;
justify-content: space-between;
align-items : center;
padding-left: 80px; 
`

class Header extends React.Component {
	render(){
		return(
			
				<Row>

					<Col lg={12}>
						<nav>
							<List>
								<Link link="#" text="Вызов мастера"/>
								<Link link="#" text="Прайс на ремонт"/>
								<Link link="#" text="Наши преимущества"/>
								<Link link="#" text="Схема работы"/>
								<Link link="#" text="Отзывы клиентов"/>
								<Link link="#" text="Примеры работ"/>
								<Link link="#" text="Контакты"/>       
							</List>
						</nav>
					</Col>


				</Row>

			)
	}
}

export default Header 