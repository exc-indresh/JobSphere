import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-sm shadow-xl shadow-gray-800 border border-gray-100 cursor-pointer bg-[#16191e]'>
            <div>
                <h1 className='font-medium text-slate-100'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-300'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2 text-slate-100'>{job?.title}</h1>
                <p className='text-sm text-gray-600 text-slate-300'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'bg-[#6A38C2] font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'bg-[#166c1d] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'bg-[#725d1d] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards