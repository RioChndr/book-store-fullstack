import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <>
            <div className="relative sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
                <Link href='/'>
                    <Logo size='sm'></Logo>
                </Link>
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-zinc-200">
                    Register your account
                </h2>
            </div>
            <form action="#">
                <div className="relative bg-white dark:bg-zinc-700 mt-6 p-3 py-6 shadow sm:rounded-lg sm:px-12 space-y-4 w-[23rem] md:w-[28rem]">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id='name' type="text" placeholder="Your name" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id='email' type="email" placeholder="Email" />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id='password' type="password" placeholder="Your Password" />
                    </div>

                    <div>
                        <Label htmlFor="password-confirm">Confirmation Password</Label>
                        <Input id='password-confirm' type="password" placeholder="Your Password" />
                    </div>

                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-brand-primary-500 focus:ring-brand-primary-600"
                        />
                        <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900 dark:text-zinc-200">
                            I agree to the {' '}
                            <Link href='#' className="text-brand-primary-500 hover:text-brand-primary-600 dark:text-brand-primary-400 dark:hover:text-brand-primary-200">
                            Terms and Conditions
                            </Link>
                        </label>
                    </div>

                    <div className="mt-6 w-full">
                        <Button type='submit' variant="primary" className="w-full">
                            Sign Up
                        </Button>
                    </div>

                    
                </div>
            </form>
            <p className="relative mt-8 text-center text-sm text-gray-500">
                Already a member ?{' '}
                <Link href="/auth/login" className="font-semibold leading-6 text-brand-primary-500 hover:text-brand-primary-700">
                    Login now
                </Link>
            </p>
        </>
    )
}