import React from 'react';
import { LeftSidebar }  from './Sidebar.js';
import { Link }  from 'wouter';




export function Header() {
	
const  [ifsidebar, setifsidebar] = React.useState(false);	



function setSdbq() {
	setifsidebar(true)
	//console.log(`1`)
}

function unsetSidebar() {
	setifsidebar(false)
	//console.log(`2`)
}	


window.addEventListener("click", (event) => {
	
	
   // Check if the clicked element is not part of the sidebar
    if (!event.target.closest('#barmore')) {
      unsetSidebar();
    }	
	
})

	
return (<>

{ifsidebar && <LeftSidebar /> }

<header className="header">
	
	<div className="headerleft"> 
		
		
		<div className="flex1">
			<div id="barmore" onClick={setSdbq} className="alselft1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z"></path></svg></div>
			<div id="kyou"><div className="fsize25 material-symbols-outlined">public</div> </div>
			<div className="alselft1"> <span className="fname1">Youtube</span></div>
		</div>
		

	</div>	
	
	

	<div className="headerright"> 
		
			<div>
			
	
			
			<div className="hhhdrlrr1">
				
				
				<div className="hhhdr1" id="sss_rch_bar1">
					<input className="mw100 brdq1" type="text" placeholder="Searching for something ?" />
				</div>
				
		

		
		
				
				<div className="hhddre2">
					
					<div className="ddlqkddre3">
						<div>	<span id="srcbqzbarq1"  className="matl111 faq25 material-symbols-outlined">search</span>	</div>
						<div>	<span className="matl111 faq25 material-symbols-outlined">notifications</span>	</div>
						<div>
						
						<Link href="/login"><span className="matl111 faq25 material-symbols-outlined">account_circle</span>	</Link>


	
	
	</div>
					</div>
				
		
					
				</div>
				
			
			</div>
			
			
			
			

			
			
			
			</div>

	</div>	


</header>


</>
)
	
}
