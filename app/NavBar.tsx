import { AnimatedTabsHover } from "./components/AnimatedTabs";
import { ModeToggle } from "./ModeToggle";

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center border-b bg-background/95 backdrop-blur px-4">
                <span className="text-2xl font-extrabold font-mono bg-gradient-to-r from-blue-400 to-violet-600 bg-clip-text text-transparent">QUANVNDZAI</span>
                <AnimatedTabsHover/>
                {/* <div className="ml-auto flex items-center space-x-4">
                    <ModeToggle />
                </div> */}
            </div>
        </nav>
    );
}
