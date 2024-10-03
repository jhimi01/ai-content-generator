"use client"


import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {

  const [useSearchInput, setUserSearchInput]=useState<string>();



  return (
    <div>
      {/* search section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />


      {/* template list section */}
      <TemplateListSection useSearchInput={useSearchInput}/>
    </div>
  )
}

export default Dashboard
