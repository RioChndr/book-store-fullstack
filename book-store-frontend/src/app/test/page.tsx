import { Logo } from "@/components/Logo";

export default function TestPage(){
    return (
        <div className="flex flex-col">
            <Logo size='sm' className="bg-gray-300 mb-3"></Logo>
            <Logo size='md' className="bg-gray-300 mb-3"></Logo>
            <Logo size='lg' className="bg-gray-300 mb-3"></Logo>
        </div>
    )
}