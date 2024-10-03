'use client'
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowBigLeft } from 'lucide-react'
import Link from 'next/link'


interface PROPS{
  params:{
    "template-slug":string
  }
}

function CreateContent(props:PROPS) {

  const selectedTemplate:TEMPLATE|any=Templates?.find(item => item.slug==props.params['template-slug'])

  const GenerateAIContent=(formaData:any)=>{

  }
 

  return (
   <div className='p-5'>
    <Link href={'/dashboard'}>
    <Button><ArrowBigLeft /> back </Button></Link>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
      {/* form section */}
      <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIContent(v)} />

      {/* output section */}
     <div className='col-span-2'>
     <OutputSection />
     </div>
    </div>
   </div>
  )
}

export default CreateContent
