import React, { ReactElement, useState, useEffect} from 'react'; 
 
type MenuItem = {
  title: string;
  subItems?: Array<string>;
};
  
type MenuConfig = Array<MenuItem>;
   
function Solution({ menuConfig }: { menuConfig: MenuConfig }): ReactElement {
  const [buttonStatus, setButtonStatus] = useState<any>({}); 

  const toggleBtnValue =  ( firstLevelTitle:string ) => {
		 
    const btnCurrentStatus:Boolean = buttonStatus[firstLevelTitle] 
    setButtonStatus({...buttonStatus, [firstLevelTitle]:!btnCurrentStatus})
  }
  
  function loadButton(firstLevelTitle:string, subItems:Array<string>) {
    if(subItems!==undefined) {
      return(
        <button 
            className={firstLevelTitle} 
            onClick={(e)=>{toggleBtnValue(firstLevelTitle)}} 
          
        > {buttonStatus[firstLevelTitle]?'Hide':'Show'}</button>
		  )
    }
  }

  const loadSubItems = (firstLevelTitle:string, subItems?:Array<string>) => {
		
		if(buttonStatus[firstLevelTitle] && subItems) { 
			// console.log(`msg_ loadSubItems`,firstLevelTitle, buttonStatus[firstLevelTitle], subItems);
     	return (
				<ul> { 
					subItems.map((title:string, index:number)=>{
						return <li key={ index.toString() }> { title } </li>
					}) 
				} 
				</ul>
		 	) 
    } 
  }

	const mainMenuLoad = ({title, subItems}:{title:string, subItems?:Array<string>}, index:number) => {  
    return(
      <li key={index.toString()} className="{title}">
        {title}
        {loadButton(title, subItems || [])}
        {loadSubItems(title, subItems)}
      </li>
    ) 
  }

  const loadDiv = (menuConfig:MenuConfig) => {
    return(
			<ul> { menuConfig.map( (mainRecord, index) => mainMenuLoad(mainRecord, index) ) } </ul>
		) 
  }
  
  return <div className="menu-wrapper" >{ loadDiv(menuConfig) }</div>; 
}

export default Solution; 
