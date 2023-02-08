import { Header, NavBar, Sections, Footer } from '@/components';
export default function Home() {
    return (
        <div className="h-screen w-screen min-h-screen flex flex-col items-center justify-start relative">
            <Header />
            <NavBar />
            <Sections />
            <Footer />
        </div>
    );
}

