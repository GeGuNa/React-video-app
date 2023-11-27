import React from 'react';
import '../components/css/main.css';
import  { Header } from '../components/js/Header.js';
import  { Main } from '../components/js/Main.js';
import  { Left } from '../components/js/Left.js';
import  { Right } from '../components/js/Right.js';
import  { Footer } from '../components/js/Footer.js';
import  { Link, useParams } from 'wouter';



export default function Page() {
	
const qPageName = useParams().uid;
	
	
//let qq = [0,1,2,3,4,5,6,7,8,9,10]
let qq = Array(50).fill(1)
	
	
console.log(qPageName)	
	
	return (<>
	
<Header/>	
	
	
<Main>

<Left idName="left" />




		<Right> 



		<div className="ppp_ggg1">

				<div className="ppp_ggg2"> </div>
				
				
				
				
				
	   <div className="ppp_ggg3">

				<div className="ppp_ggg31">
					
					<div> <img src="/images/testimonial-4.jpg" className="bbb_qq1505"/> </div>
					
					
					<div className="alselft1">  
							<div className="k_ne1"> Anything about everything</div>
							
							<div className="ppt5pp_ggg31">
								
								<div className="p_pq1pp_ggg31">
									<div className="probmenq1">@Anything</div>
									<div>136K subscribers </div>
									<div>88 videos</div>
								</div>  

								
							</div>
							
						
							
							
					</div>
					
					
				</div>




<div className="ppql_lq1mrtop15_131">
	
<div className="kk_llpaq_us1Mn"> 

<a href="">Home</a>
<a href="">Videos</a>
<a href="">Shorts</a>
<a href="">Community</a>
<a href="">About</a>


</div>	

<div className="kk_llqpaq_us1Mn1"></div>


					<div className="kkscat1sqq1231frvq">
							<div className="active">Latest</div>
							<div>Popular</div>
							<div>Oldest</div>
						</div>



	
	 </div>




<div className="kvidqp1_21">


						{qq.map((k,i)=>
							
								<div className="">
									
							<div className="kvidqp1_22">
							
							
								<div><img className="kbrzq1qdqq1" src="https://i.ytimg.com/vi/Wj0nTH5m3Jo/mqdefault.jpg"/></div>
								
								<div className="kvidqp1_23">
									<div className="kqq_fqoq1213">Sweet dreams</div>
									<div className="clqAlmostWh1">31K views, 10 hours ago</div>
							</div>
								
								
								
								
								
							</div>
								
								
								</div>
								
								
								)}
		

</div>






		</div>		
				
				
				
				
				
				
				
				
				

		</div>





    




		</Right>


</Main>	


<Footer/>
	
	
	</>)
}
