import React from 'react'
import { convertDate } from '../../../utils/utils'
import ViewRaceDetailsButton from './ViewRaceDetailsButton'

function RacesCardView({ races, pinnedRaces, setPinnedRaces }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-5' >
            {
                races?.map(race => {
                    const date = convertDate(race.date)
                    const isPinned = pinnedRaces.includes(race.raceName)
                    return (
                        <div className='flex flex-col col-span-1 justify-center space-y-3 items-center border-2 p-5 rounded-xl shadow-sm shadow-red-200 h-[200px]'>

                            <p className='text-[18px] font-semibold'>Race: <span className='text-gray-700'>{race.raceName}</span></p>
                            <p className='text-[18px] font-semibold'>Circuit: <span className='text-gray-700'>{race.Circuit.circuitName}</span></p>
                            <p className='text-[18px] font-semibold'>Date: <space className='text-gray-700'>{date}</space></p>

                            <ViewRaceDetailsButton season={race.season} round={race.round} name={race.raceName} pinned={isPinned} setPinnedRaces={setPinnedRaces} />
                        </div>
                    )
                })
            }
        </div>

    )
}

export default RacesCardView