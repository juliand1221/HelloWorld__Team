import React from 'react';
import {Slideshow, Slide, TextoSlide} from '../components/SliderTwo'
import '../styles/SliderTwo.css';
import styled from 'styled-components';
import img1 from '../media/celulares.png';
import img2 from '../media/tablet_teclado.png';
import img3 from '../media/portatil.png';
import img4 from '../media/consola_adobespark.png';
import img5 from '../media/smartwatch.png';
import img6 from '../media/parlante.png';


function Index() {
    return(
        <main className="main-slider-two">
			<Titulo>Productos Destacados</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
					<a href="/articulos">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide>
						<p>Promoción en celulares</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="/articulos">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>Descuento en tablets</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="/articulos">
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p>Los mejores portatiles</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="/articulos">
						<img src={img4} alt=""/>
					</a>
					<TextoSlide>
						<p>Encuentra tu consola</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="/articulos">
						<img src={img5} alt=""/>
					</a>
					<TextoSlide>
						<p>Descuentos en smartwatch</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="/articulos">
						<img src={img6} alt=""/>
					</a>
					<TextoSlide>
						<p>Parlantes de todo tipo</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
        
    
    );

};
const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
`;
 



export default Index;