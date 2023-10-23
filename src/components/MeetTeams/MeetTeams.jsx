
import img1 from "../../assets/tems/1.jpg"
import img2 from "../../assets/tems/2.jpg"
import img3 from "../../assets/tems/3.jpg"
import TeamsCard from './TeamsCard';
import SectionHeader from '../SectionHeader/SectionHeader';

const MeetTeams = () => {
    const teams = [
        {_id: 1, image : img1, title : "Car Engine Plug", post : "Engine Expert" },
        {_id: 2, image : img2, title : "Car Engine Plug", post : "Engine Expert" },
        {_id: 3, image : img3, title : "Car Engine Plug", post : "Engine Expert" },
    ]
    return (
        <section className='py-10'>
            <SectionHeader subTitle='Team' title='Meet Our Team' text="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />

            <div className="box">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        teams?.map(team => <TeamsCard key={team._id} team={team} /> )
                    }          
                </div>
            </div>
        </section>
    );
};

export default MeetTeams;