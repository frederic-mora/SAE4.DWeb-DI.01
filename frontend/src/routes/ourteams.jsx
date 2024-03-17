import Team from '../ui/Team';
import TeamSkeleton from '../ui/Team/TeamSkeleton.jsx';
import Testimonial from '../ui/Testimonial';

import { useLoaderData, defer, Await } from 'react-router-dom';
import {fetchOurTeams, fetchTestimonialData} from '../lib/loaders.js';
import { Suspense } from 'react';


/* Version de base, monocomposant et sans gestion defer/Await

export async function loader({params}){
    const ourteams = await fetchOurTeams(params.teamName);
    return ourteams;
}   

export default function OurTeams(){
    
    const data = useLoaderData();
    
    return (
        <section>
            <Team {...data}  />
        </section>
    );
}   
*/

export async function loader({params}){
    const ourteams = fetchOurTeams(params.teamName);
    const testimonialData = await fetchTestimonialData(params.teamName);
    return defer({team: ourteams, testimonial: testimonialData});
}   

export default function OurTeams(){
    
    const data = useLoaderData();
    
    return (
        <section>
            <Suspense fallback={<TeamSkeleton / >}>
                <Await resolve={data.team} errorElement={<div>Failed to load team data</div>}>
                    {teamData => <Team {...teamData} />}
                </Await>
            </Suspense>

            <Testimonial data={data.testimonial}/>
        </section>
    );
}   