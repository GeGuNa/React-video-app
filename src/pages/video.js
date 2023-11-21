import React from 'react';
import { useParams, Link, useLocation } from 'wouter';
import  { Header } from '../components/js/Header.js';
import  { Main } from '../components/js/Main.js';
import  { Left } from '../components/js/Left.js';
import  { Right } from '../components/js/Right.js';
import  { Footer } from '../components/js/Footer.js';
import '../components/css/main.css';





export default function Video() {
	
const [location, setLocation] = useLocation();

const Vid = useParams();	


if (!isNaN(Vid.id))  {
	
let VidQiD = Math.abs(parseInt(Vid.id))
	



const lq1 = []


for(var i=0; i<20; i++) {
	lq1.push(1)
}



	
	
	return (<>
	
<Header/>	
	
	
<Main>

<Left idName="left" />





<Right> 




<div className="cl112">



					<div className="cl113">
					
					
					
					
					
					
					
						<div className="cl114">
						
						
					<div className="bb_white">
					
						<div>
							<iframe className="cl115" src="//www.youtube.com/embed/CAUxzeBRcrI"></iframe>
						</div>	
					
					
					
		<div className="qq_zz1">
		
						<div className="vv_qqname1 cl116">Lulled you to sleep in a camping car with Soothing raindrops outside the window at night | ASMR</div>	
						
						<div className="cl117"> </div>
					
		
		
			
					<div className="cl118">

<div className="cl119">

	<div className="cl120">
							
							<div><img className="cl121" src="/images/artworks-QKm9oyJkmEdwOeyc-q4AtUw-t500x500.jpg"/></div>
							
							<div className="alselft1">
								<div className="vv_qqmnanqmanme12">Sweet Dreams</div>
								<div className="clqAlmostWh1">4.55K subscribers</div>
							</div>
							
							<div className="alselft1"> 
								<button className="cal12qz14 clsemibold kkqlq1clq1subs">Subscribe</button>  
							</div>
						</div>
						


</div>


<div className="cl119">



				
				
						
							<div className="cl1212">
								
								
								<div>
									<div className="qlsnbold1 cl12143zq cl1zbrdq21qz">
										<span className="material2">thumb_up</span> 955
									</div>	
								</div>
								
							
								<div>	
									<div className="qlsnbold1 cl12143zq cl1zbrdq21qz">
										<span className="material2">share</span> Share
									</div>	
								</div>
							
								<div>
			
								<div className="qlsnbold1 cl12143zq cl1zbrdq21qz">
										<span className="material2">more_horiz</span> 
									</div>
									
								</div>
										
							
							
			
							
							</div>
						
						


</div>



</div>				
						
						
	<div className="dezscofVid1zzz">
		
		
		<div className="qq_vidqp1z_qq1" >30,512 views  Oct 28, 2023</div>
	
	<div className="qq_zz2">Relaxing Sleep Music with Rain Sounds - Peaceful Piano Music, Insomnia, Sleep Music For Your Night

Welcome to "Relaxing Music for Better Sleep". Experience deep and restful sleep with the healing power of relaxing music and the gentle melodies of the piano. Let the soft sounds guide you into a peaceful sleep, helping you overcome insomnia and enjoy a refreshing sleep in just 5 minutes. Embrace the tranquility and wake up feeling refreshed with this sleep aid.
Healing music, sleeping music, insomnia music, study music, new age piano, daydreaming, stress relief, meditation music, white noise, rain, water, nature sounds.

#sleepmusic
#healingmusic
#HealingSleepMusic
#StressRelief 
#deepsleepmusic 
#TheDreamofWind

-----------------------------------------------⭐️⭐️⭐️---------------------------------------------

with a passion for creating soothing, calming and relaxing sounds. Bring good music to sleep. We hope you will support us to give us more motivation.

What can you find on our channel?

We have a wide selection of soothing and relaxing music to help you get the most out of your massage, meditation, yoga or other relaxation session. With a variety of options from classic to contemporary for everyone.

Thank you for watching the video, please like, share and subscribe to the channel for more good videos. Good night!

All rights belong to their respective owners.
✔ This video received a special license directly from the artists and rights holders.</div>
	
	</div>
	
		
		
		
		
		
		
		</div>			
					
					
				
	
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					</div>	
						
						
					
					
						
						
					
						
						
					
						
					
					
		
			
			
								
						</div>
						
						
						
						
						
						
						
						
						
						
		
					</div>
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					


					<div className="cl1215">
						
												
						<div className="kkscat1sqq1231">
							<div className="active">All</div>
							<div>Science</div>
							<div>Blabla</div>
							<div>Music</div>
						</div>					
						
						
						
						
					
						<div className="vvid_rigq1">
								
								
			

							{lq1.map((k,i)=>
								
								
								<div className="cl12156">
									
							<div className="cl121567">
								<div><img className="kbrzq1qdqq1" src="https://i.ytimg.com/vi/Wj0nTH5m3Jo/default.jpg"/></div>
								<div>
									<div className="vidName1">Rain sounds for sleeping</div>
									<div className="clqAlmostWh1">Sweet dreams</div>
									<div className="clqAlmostWh1">15 hours ago</div>
								</div>
							</div>
								
								
								</div>
								
								
								)}
		
								
								



							
								
								
								

			
						</div>
							
					
					</div>
								
						


			</div>














</Right>




</Main>

<Footer />





	
	</>)

} else {
	
	setLocation('/')
	
	return (<> zzz </>)
	
}

}
