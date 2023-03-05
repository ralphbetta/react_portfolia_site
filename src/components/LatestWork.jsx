import React, {useState, useEffect} from 'react'
import { projectsNav, projectsData } from '../data'

const LatestWork = () => {

    const [tab, setTab] = useState('all');  //usf
    const [latestWork, setLatestWork] = useState([]);
    const [filteredWork, setFilteredWork] = useState([]);


    const loadData= () => {
        const fetchData = [...projectsData];
        setLatestWork(fetchData);
        setFilteredWork(fetchData);
    }

    const filterData= filterValue => {
        console.log(filterValue)
        if(filterValue == 'all'){
            setFilteredWork(latestWork);
        }else{
            const filter = latestWork.filter((e)=> e.category.toUpperCase() == filterValue.toUpperCase());
            setFilteredWork(filter);
        }

    }


    useEffect(() => {
        loadData();
    }, []);


    const switchTab = selectedTab => {

       setTab(selectedTab);
       filterData(selectedTab);
    }
    

    return (
        <div className='mt-10'>
            <h1 className=" text-center text-3xl font-black">My Latest Work</h1>
            <p className="px-[20%] my-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ducimus sequi nesciunt minima animi quis voluptatem nobis ullam, dolorum necessitatibus numquam molestiae eum, quae praesentium excepturi harum possimus illum quidem!</p>

            <ul className='md:flex justify-center gap-x-10 space-y-5 sm:space-y-0 font-bold my-10 capitalize'>
                {projectsNav.map((data, index) => (
                    <li key={index} onClick={()=>switchTab(data.name)} className={tab == data.name ? 'cursor-pointer text-accent text-center' :'cursor-pointer hover:text-accent text-white text-center'}>{data.name}</li>
                ))}
            </ul>
            <div className='grid md:grid-cols-3 gap-6 px-[15%]'>
               { filteredWork.map((data)=>(
                <div className='flex flex-col justify-center items-center' key={data.id}>
                    <img className='rounded-lg mb-3' src={data.image} alt="" />
                    <p className=" text-accent capitalize">{data.category}</p>
                    <h1 className=' text-xl font-semibold'>{data.name}</h1>
                </div>
               ))}
            </div>
        </div>

    )
}

export default LatestWork