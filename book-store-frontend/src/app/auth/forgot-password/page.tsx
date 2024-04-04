import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function ForgotPasswordPage() {
    return (
        <>
            <div className="relative sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
                <Link href='/'>
                    <Logo size='sm'></Logo>
                </Link>
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-zinc-200">
                    Forgot your password ?
                </h2>
            </div>
            <form action="#">
                <div className="relative bg-white dark:bg-zinc-700 mt-6 p-3 py-6 shadow sm:rounded-lg sm:px-12 space-y-4 w-[23rem] md:w-[28rem]">
                    <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id='email' type="email" placeholder="Email" />
                    </div>

                    <div className="mt-6 w-full">
                        <Button type='submit' variant="primary" className="w-full">
                            Send me the magic code
                        </Button>
                    </div>

                    
                </div>
            </form>
            <p className="relative mt-8 text-center text-sm text-gray-500">
                Remember your password ?{' '}
                <Link href="/auth/login" className="font-semibold leading-6 text-brand-primary-500 hover:text-brand-primary-700 dark:hover:text-brand-primary-400">
                    Login now
                </Link>
            </p>
        </>
    )
}