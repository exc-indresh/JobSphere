import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
    // const jobId = "lsekdhjgdsnfvsdkjf";

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    
    return (
        <div className='p-5 rounded-sm shadow-xl shadow-gray-800 border border-gray-100 cursor-pointer bg-[#16191e]'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-300'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full bg-[#16191e]" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg text-slate-100'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-300'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2 text-slate-100'>{job?.title}</h1>
                <p className='text-sm text-slate-300'>{job?.description}</p>
                <p className='text-sm text-slate-300'>{job?.requirements}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'bg-[#6A38C2] font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'bg-[#166c1d] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'bg-[#725d1d] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=> navigate(`/description/${job?._id}`)} variant="outline" className="bg-[#2c2a2a]">Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job