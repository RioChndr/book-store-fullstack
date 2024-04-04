'use client'
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Logo } from "@/components/Logo";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        switch (name) {
            case 'form-email':
                setEmail(value)
                break
            case 'form-password':
                setPassword(value)
                break
        }
    }

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const res = await fetcher('/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            console.log(res);
        } catch (error: any) {
            alert("Failed login")
        }
    }

    return (
        <>
            <div className="relative sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
                <Link href='/'>
                    <Logo size='sm'></Logo>
                </Link>
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-zinc-200">
                    Sign in to your account
                </h2>
            </div>
            <form onSubmit={onSubmit}>
                <div className="relative bg-white dark:bg-zinc-700 mt-6 p-3 py-6 shadow sm:rounded-lg sm:px-12 space-y-4 w-[23rem] md:w-[28rem]">
                    <div>
                        <Label htmlFor="form-email">Email Address</Label>
                        <Input id='form-email' name='form-email' type="text" value={email} onChange={handleOnChange} placeholder="Email" />
                    </div>
                    <div>
                        <Label htmlFor="form-password">Password</Label>
                        <Input id='form-password' name='form-password' type="password" value={password} onChange={handleOnChange} placeholder="Your Password" />
                    </div>
                    <div className="ml-auto text-sm flex justify-between font-semibold leading-6">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-brand-primary-500 focus:ring-brand-primary-600"
                            />
                            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-zinc-900 dark:text-zinc-200">
                                Remember me
                            </label>
                        </div>

                        <Link href='/auth/forgot-password' className="text-brand-primary-500 hover:text-brand-primary-700 dark:hover:text-brand-primary-300">
                            Forgot Password ?
                        </Link>
                    </div>

                    <div className="mt-6 w-full">
                        <Button type='submit' variant="primary" className="w-full">
                            Sign in
                        </Button>
                    </div>
                </div>
            </form>
            <p className="relative mt-8 text-center text-sm text-gray-500 dark:text-zinc-200">
                Not a member?{' '}
                <Link href="/auth/register" className="font-semibold leading-6 text-brand-primary-500 hover:text-brand-primary-700 dark:hover:text-brand-primary-300">
                    Register now !
                </Link>
            </p>
        </>
    )
}