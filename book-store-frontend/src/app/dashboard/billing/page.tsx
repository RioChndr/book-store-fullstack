'use client';
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@/components/Button';

const plans = [
    { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
    { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
    { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
    { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
]

export function ChoosePlan() {
    const [selected, setSelected] = useState(plans[0])

    return (
        <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-4">
                {plans.map((plan) => (
                    <RadioGroup.Option
                        key={plan.name}
                        value={plan}
                        className={({ active }) =>
                            clsx(
                                active ? 'border-primary-600 ring-2 ring-primary-600 dark:ring-primary-800 dark:bg-zinc-500' : 'dark:bg-zinc-700 border-gray-300 dark:border-zinc-900',
                                'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
                            )
                        }
                    >
                        {({ active, checked }) => (
                            <>
                                <span className="flex items-center">
                                    <span className="flex flex-col text-sm">
                                        <RadioGroup.Label as="span" className="font-medium text-gray-900 dark:text-gray-200">
                                            {plan.name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description as="span" className="text-gray-500 dark:text-gray-300">
                                            <span className="block sm:inline">
                                                {plan.ram} / {plan.cpus}
                                            </span>{' '}
                                            <span className="hidden sm:mx-1 sm:inline" aria-hidden="true">
                                                &middot;
                                            </span>{' '}
                                            <span className="block sm:inline">{plan.disk}</span>
                                        </RadioGroup.Description>
                                    </span>
                                </span>
                                <RadioGroup.Description
                                    as="span"
                                    className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                                >
                                    <span className="font-medium text-gray-900 dark:text-gray-200">{plan.price}</span>
                                    <span className="ml-1 text-gray-500 sm:ml-0 dark:text-gray-300">/mo</span>
                                </RadioGroup.Description>
                                <span
                                    className={clsx(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-primary-600' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-lg'
                                    )}
                                    aria-hidden="true"
                                />
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

export default function BillingPage() {
    return (
        <div className="min-h-screen">
            <h2 className="text-3xl font-bold leading-normal">
                Billing
            </h2>
            <p className='text-md text-zinc-500'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque nam voluptatibus quo voluptatum a laborum provident blanditiis facere consequuntur ad tempore aliquid quos, vel sed animi magni labore eveniet voluptatem.
            </p>

            <div className="mt-3 max-w-xl py-3">
                <ChoosePlan />
            </div>
            <Button size='lg'>
                Save
            </Button>
        </div>
    )
}