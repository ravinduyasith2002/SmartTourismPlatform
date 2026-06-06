import React from 'react'
import {guides} from '../dummyData/guides'
import {GuideCard} from './guideListPage/GuideCard'

const FeatureGuides = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      <h2 className='text-2xl font-semibold text-gray-800'>Featured Guides</h2>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-10'>
        {guides.slice(0, 6).map((guide) => (
          <GuideCard key={guide.guideId} guide={guide} />
        ))}
      </div>
    </div>
  )
}

export default FeatureGuides