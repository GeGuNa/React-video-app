import React from 'react';
import '../components/css/main.css';
import '../components/css/bootstrap-icons.css';
import  { Header } from '../components/js/Header.js';
import  { Main } from '../components/js/Main.js';
import  { Left } from '../components/js/Left.js';
import  { Right } from '../components/js/Right.js';
import  { Footer } from '../components/js/Footer.js';



export default function Watched() {


const lq1 = []


for(var i=0; i<20; i++) {
	lq1.push(1)
}


	
	return (<>

<Header/>	
	
	
<Main>

<Left idName="left" />






<Right> 


<div className="pqq_11pqzzbkcw">



<div className="mW_mainCnq">

		<div className="ww_diivq2">

<div>
		<div className="ppwh600"> Watch history </div>
	</div>
	
	<div className="ppwh600"> Today </div>
	
	
	
	
		<div className="ldivzW">

				

						{lq1.map((k,i) =>
		
							<div className=""> 
							
									<div className="ldivzinsidecss">
									
										<div className="vidMq1z_z">
										
										
												<div className="vidNameHow1">qqqqq</div>
									
											
											<img className="kbrz1qdq1" src="https://i.ytimg.com/vi/5lbM9hwep28/default.jpg"/>
										</div>
										
										<div>
												
													
															<div className="ldivzinsiqdecssqq">
																<div className="kzsiqAQQ31">Otherworldly Ambience: Rainfall on an Alien Planet (Black screen)</div>
																<div className="llkqkcivdq_qq1olq">Phantom, 15K views</div>
																<div className="llkqkcivdq_qq1olq">Driving in Rain Soothing Sounds from The Road Sleep, ASMR, Relax and Study Date recorded: April 7, 2023. Equipment used: GoPro 9/10,</div>
															</div>

													
												
												
										</div>
									
									</div>
							
							
							 </div>
							
							)}

						


</div>	
	
	
	
	
	



		</div>



















		<div className="ww_diivq">
		
		
		<div className="sepbtwdivsz">
		<div className="ppwh600"> Watch menu </div>
		<div className="pp_zz_db10"><input type="text" className="waInput" placeholder="Search watch history"/></div>
		
		
		<div className="sepbtwdivsz2">
			
					<div>
						<div className="sepbtwdivsz4"> 
							<div><i className="bi bi-trash3"></i></div> 
							<div className="alselft1"><a href=""> Clear watch history</a></div></div>
					</div>
					
					
					<div>
						<div className="sepbtwdivsz4"> 
							<div><i className="bi bi-gear"></i></div> 
							<div className="alselft1"><a href=""> Manage watch settings </a></div></div>
					</div>					
					
		
		</div>
	
		
		
		
		<div className="sepbtwdivsz3">
			<div><a href="">Comments</a></div>
			<div><a href="">Community posts</a></div>
			<div><a href="">Live chats</a></div>
		</div>
		
		
	</div>
	
		
		
		
		
		
		
		</div>

</div>

</div>



</Right>




</Main>	


<Footer/>
	
	
	
	</>)
}
