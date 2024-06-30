import React from "react"

interface TabProps {
  tabList: {
    name: string
    Component: React.FC
  }[]
  currentTabIndex: number
  tabClickHandler: (index: number) => void
  selectTabClass: string
  unselectedTabClass: string
  tabContainerClass: string
  tabOptionsClass: string
}

export const Tab: React.FC<TabProps> = ({
  tabList,
  currentTabIndex,
  tabClickHandler,
  selectTabClass,
  unselectedTabClass,
  tabContainerClass,
  tabOptionsClass,
}) => {
  return (
    <div className={tabContainerClass}>
      <div className={tabOptionsClass} role="tablist" aria-label="Tabs">
        {tabList.map(({ name }, index) => (
          <button
            key={name}
            className={
              currentTabIndex === index ? selectTabClass : unselectedTabClass
            }
            role="tab"
            aria-selected={currentTabIndex === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            onClick={() => tabClickHandler(index)}
          >
            {name}
          </button>
        ))}
      </div>
      {tabList.map(({ Component }, index) => {
        return (
          <div
            key={index}
            role="tabpanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            hidden={currentTabIndex !== index}
          >
            {currentTabIndex === index && <Component />}
          </div>
        )
      })}
    </div>
  )
}
