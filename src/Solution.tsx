import React, { ReactElement, useState } from 'react';

type MenuItem = {
  title: string;
  subItems?: Array<string>;
};

type MenuConfig = Array<MenuItem>;

function Solution({ menuConfig }: { menuConfig: MenuConfig }): ReactElement {
  const [buttonStatus, setButtonStatus] = useState<any>({});

  const toggleBtnValue = (firstLevelTitle:string) => {
    console.log('toggleBtnValue buttonStatus', buttonStatus, firstLevelTitle)
    const btnCurrentStatus:Boolean = buttonStatus[firstLevelTitle];

    setButtonStatus({buttonStatus, [firstLevelTitle]:!btnCurrentStatus})
  }

  function loadButton(firstLevelTitle:string, subItems:Array<string>) {
    //console.log('subItems', subItems)
    if(subItems.length>0) {
      return (
        <button data-test-id={`button-${firstLevelTitle.toLowerCase()}`}
          className={firstLevelTitle}
          onClick={(e)=> {toggleBtnValue(firstLevelTitle)}}
        > {buttonStatus[firstLevelTitle]?'Hide':'Expand'}</button>
      )
    }
  }

  const loadSubItems = (firstLevelTitle:string, subItems?:Array<string>)=> {
    if(buttonStatus[firstLevelTitle] && subItems) {
      return (
        <ul data-test-id={`ul-${firstLevelTitle.toLowerCase()}`}>{
          subItems.map((title:string, index:number)=> {
            return(
                    <li 
                      data-test-id={`li-${firstLevelTitle.toLowerCase()}-${title.toLowerCase()}`} 
                      key={index.toString()}> {title} 
                    </li>
                  )
          })
        }</ul>
      )
    }
  }


  const mainMenuLoad = ({title, subItems}:{title:string, subItems?:Array<string>}, index:number) => {
    return(
      <div key={index.toString()} data-test-id={`first-level-${title.toLowerCase()}`}>
        {title}
        {loadButton(title, (subItems || [] ))}
        {loadSubItems(title, (subItems || [] ))}
      </div>
    )
  }



  const loadDiv = (menuConfig:MenuConfig) => {
    return menuConfig.map((mainRecord, index)=> mainMenuLoad(mainRecord, index)) 
  }


  return <div className="menu-wrapper">{loadDiv(menuConfig)}</div>;
}

export default Solution;
