import { Header, NavBar, Sections, Footer } from '@/components';
export default function Home() {
    return (
        <div className="h-screen w-screen min-h-screen flex justify-center relative">
            <Header />
            <NavBar />
            <Sections />
            <Footer />
        </div>
    );
}

