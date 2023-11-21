import React from 'react';
import '../components/css/main.css';
import  { Header } from '../components/js/Header.js';
import  { Main } from '../components/js/Main.js';
import  { Left } from '../components/js/Left.js';
import  { Right } from '../components/js/Right.js';
import  { Footer } from '../components/js/Footer.js';



export default function Home() {


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
	<div>All</div>
	<div>Science</div>
	<div>Blabla</div>
	<div>Music</div>
	<div>Tv &amp; Shows</div>
	<div>Anime</div>
	<div>Entertainment</div>
</div>




<div>

				<div className="mmflxfov">

					
				

						{lq1.map((k,i)=>
							<div className="vid_disp" key={i}> 
							
									<div className="kvidins">
									
										<div className="vidMq1z_z">
										
										
												<div className="vidNameHow1">qqqqq</div>
									
											
											<img className="kbrz1qdq1" src="https://i.ytimg.com/vi/5lbM9hwep28/hqdefault.jpg"/>
										</div>
										
										<div className="ooppdd10top">
												
													<div>
														
														
															<div className="vidqlqm_12">
																<div><img className="ipqimg1" src="/images/grumpy.gif"/></div>
																<div className="vidName1 alselft1">Grumpy cat</div>
															</div>
														
														<div className="vidDeqlzlq1">10K views . 2Years ago</div>
												
    
		
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
