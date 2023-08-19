import Navbar from '../components/Navbar'
import About from './About';
import Clubs from './Clubs';
import Incubation from './Incubation';
import News from './News';

const Content = () => {
    return(
        <div className="h-[70vh] flex flex-col justify-center gap-4 px-20">
            <div className="flex flex-col gap-2 font-serif lg:text-6xl text-bluel md:text-5xl sm:text-4xl max-sm:text-2xl">
                <div className="">VIDYA DADATI VINAYAM,</div>
                <div className="">VINAYA DADATI PATRATAM</div>
            </div>
            <div className="text-2xl max-sm:text-lg text-bluedark">Knowledge gives you discipline, discipline makes you worthy.</div>
        </div>
    );
}

export default function Home() {
    return(
        <>
            <Navbar />
            <Content />
            <About />
            <Clubs />
            <Incubation />
            <News />
        </>
    );
}