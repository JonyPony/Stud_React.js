import React, { Component } from 'react';

import styled from 'styled-components';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';


const Repair =styled.div`
color: #464646;
font-size: 18px;
font-weight: 300;
line-height: 22px;
`
const WorkTime = styled.div`
color: #2a2a2a;
font-size: 12px;
font-weight: 300;
line-height: 24px;

span{
	display:block;
	color: #464646;
	font-size: 21px;
	font-weight: 700;
}

`
const Calls= styled.div`
color: #2a2a2a;
font-size: 12px;
font-weight: 300;
line-height: 24px;

span{
	display:block;
	color: #464646;
	font-size: 21px;
	font-weight: 700;
}

`
const CallBut= styled.div`
width: 176px;
height: 48px;
background-color: #3fc7db;
border-radius: 30px;
color: #ffffff;
font-size: 14px;
font-weight: 400;
padding:15px 30px;



`
class TelNum extends React.Component{
	render(){
		return(
			<span> {this.props.tel}</span>
		)
	}
}

class Adress extends React.Component{
	render(){
		return(
			<span> {this.props.addr}</span>
		)
	}
}

class Menu extends React.Component {
	render(){
		return(
				<Row>
					<Col lg={3}>
						<Repair>Ремонт айфонов в сервисном
									центре и на выезде
						</Repair>
					</Col>

					<Col lg={3}lgOffset={1} >
						<WorkTime>Пн-пт с 10 до 20, сб,вс с 11 до 18
							<Adress addr="Ленинская, 301 "/>
						</WorkTime>
					</Col>
					<Col lg={3}>
						<Calls>Звонки принимаются 24 часа
							<TelNum tel= "8 (846) 922 55 44 "/>
						</Calls>
					</Col>

					<Col lg={2}>
							<CallBut> Заказать звонок!</CallBut>
					</Col>
				</Row>
								)
	}
}

export default Menu