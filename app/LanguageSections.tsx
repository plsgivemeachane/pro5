import { BiTerminal } from 'react-icons/bi';

// Data
const languages = [
    { name: 'Python', proficiency: 100 },
    { name: 'Java', proficiency: 90 },
    { name: 'Go', proficiency: 70 },
    { name: 'Node.js', proficiency: 95 },
    { name: 'PostgreSQL', proficiency: 90 },
    { name: 'MongoDB', proficiency: 85 },
    { name: 'Redis', proficiency: 80 },
    { name: 'Docker', proficiency: 85 },
];

export default function LanguageSections() {
    return (
        <div className="m-16">
            <h3 className="text-xl font-bold mb-6 text-center">
                Backend Technologies <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Proficiency
                </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {languages.map((lang, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg flex items-center gap-3 border border-gray-800 hover:border-blue-500 transition-colors"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                            <BiTerminal size={20} className="text-blue-400" />
                        </div>
                        <div className="flex flex-col w-full">
                            <h4 className="font-medium">{lang.name}</h4>
                            <div className="w-full bg-gray-800 h-1.5 rounded-full mt-1.5">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                                    style={{ width: `${lang.proficiency}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
