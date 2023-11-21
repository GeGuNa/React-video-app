import React from 'react';
import '../components/css/main.css';
import  { Header } from '../components/js/Header.js';
import  { Main } from '../components/js/Main.js';
import  { Left } from '../components/js/Left.js';
import  { Right } from '../components/js/Right.js';
import  { Footer } from '../components/js/Footer.js';



export default function Likedv() {


const lq1 = []


for(var i=0; i<20; i++) {
	lq1.push(1)
}


	
	return (<>

<Header/>	
	
	
<Main>

<Left idName="left" />





<Right> 

<div className="kkscat1s">
	<div className="active">All</div>
	<div>Videos</div>
	<div>Shorts</div>
</div>	



<div>


<div className="kkqbakc1_234">
	
<div className="kkqbakc1_2">Random video</div>	
	

<div className="kkqbakc1_23">
	<div> 
		<div><img className="kbrz1qdq1 kk_zz_img1" src="https://i.ytimg.com/vi/5lbM9hwep28/default.jpg"/></div>
		<div className="vv_pdkq"><button className="vidpLq"><i className="fa-solid fa-play"></i> Play it</button></div>
	</div>
	

		<div className="ldivzinsiqdecssqq">
				<div><a href="">Otherworldly Ambience: Rainfall on an Alien Planet</a></div>
				<div className="fwhite1">Uknown person</div>
				<div className="fwhite1">20 videos, No views, Updated yesterday</div>
		</div>	
	
	
</div>




	
</div>
	








			<div className="ldivz">

					
				

						{lq1.map((k,i)=>
							<div  key={i}> 
							
								<div className="ldivzinsidecss">
									
									<div className="alselft1"> {i} </div>
									
										<div className="vidMq1z_z">
										
										
												<div className="vidNameHow1">qqqqq</div>
									
											
											<img className="kbrz1qdq1" src="https://i.ytimg.com/vi/5lbM9hwep28/default.jpg"/>
										</div>
										
										<div>
												
													
															<div className="ldivzinsiqdecssqq">
																<div>Otherworldly Ambience: Rainfall on an Alien Planet (Black screen)</div>
																<div className="llkqkcivdq_qq1olq">Phantom, 15K views</div>
															</div>

													
												
												
										</div>
									
									</div>
							
							
							 </div>
							
							)}

				
							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							

							
							
							



				</div>	
	


	</div>







</Right>


</Main>	


<Footer/>
	
	
	
	</>)
}
