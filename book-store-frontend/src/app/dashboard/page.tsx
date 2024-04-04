import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { Tag } from "@/components/Tag";

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import clsx from "clsx";

const stats = [
    { name: 'Total Subscribers', stat: '71,897', previousStat: '70,946', change: '12%', changeType: 'increase' },
    { name: 'Avg. Open Rate', stat: '58.16%', previousStat: '56.14%', change: '2.02%', changeType: 'increase' },
    { name: 'Avg. Click Rate', stat: '24.57%', previousStat: '28.62%', change: '4.05%', changeType: 'decrease' },
]

function Stats() {
    return (
        <div>
            <h3 className="text-base font-semibold leading-6">Last 30 days</h3>
            <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white dark:bg-zinc-700 dark:divide-zinc-800 shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal">{item.name}</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-primary-600">
                                {item.stat}
                                <span className="ml-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">from {item.previousStat}</span>
                            </div>

                            <div
                                className={clsx(
                                    item.changeType === 'increase' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
                                    'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                                )}
                            >
                                {item.changeType === 'increase' ? (
                                    <ArrowUpIcon
                                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500 dark:text-green-200"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <ArrowDownIcon
                                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500 dark:text-red-200"
                                        aria-hidden="true"
                                    />
                                )}

                                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                {item.change}
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}



export default function DashboardPage() {
    return (
        <div className="min-h-screen">
            <h2 className="text-3xl font-bold">
                Dashboard
            </h2>

            <div className="mt-3">
                <Stats />
            </div>

            <div className="mt-8 border-t border-zinc-300 py-3">
                <h3 className="text-lg">
                    Components
                </h3>
                <p className="text-md text-zinc-500">List of preset component</p>
            </div>

            <div className="flex flex-col gap-3 mt-3">
                <div className="font-bold">Button</div>
                <pre className="code border-zinc-400 border bg-zinc-200 dark:bg-zinc-600 dark:border-zinc-800 dark:text-zinc-100 p-3 rounded-lg text-zinc-600">
                    {`import { Button } from "@/components/Button";

<Button variant="filled">Filled</Button>
<Button variant="outline">Outline</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Seconday</Button>
<Button variant="text">text</Button>`}
                </pre>

                <div><Button variant="filled">Filled</Button></div>
                <div><Button variant="outline">Outline</Button></div>
                <div><Button variant="primary">Primary</Button></div>
                <div><Button variant="secondary">Seconday</Button></div>
                <div><Button variant="text">text</Button></div>
            </div>

            <div className="flex flex-col gap-3 mt-3 border-t border-zinc-300 pt-3">
                <div className="font-bold">Tag</div>
                <pre className="code border-zinc-400 border bg-zinc-200  dark:bg-zinc-600 dark:border-zinc-800 dark:text-zinc-100 p-3 rounded-lg text-zinc-600">
                    {`import { Tag } from "@/components/Tag";

<Tag color="amber">Amber</Tag>
<Tag color="emerald">Emerald</Tag>
<Tag color="rose">Rose</Tag>
<Tag color="sky">Sky</Tag>
<Tag color="zinc">Zinc</Tag>`}
                </pre>

                <div><Tag color="amber">Amber</Tag></div>
                <div><Tag color="emerald">Emerald</Tag></div>
                <div><Tag color="rose">Rose</Tag></div>
                <div><Tag color="sky">Sky</Tag></div>
                <div><Tag color="zinc">Zinc</Tag></div>
            </div>

            <div className="flex flex-col gap-3 mt-3 border-t border-zinc-300 pt-3">
                <div className="font-bold">Logo</div>
                <div className="flex flex-col">
                    <Logo size='sm' className="mb-3"></Logo>
                    <Logo size='md' className="mb-3"></Logo>
                    <Logo size='lg' className="mb-3"></Logo>
                    <div className="flex">
                        <Logo size='lg' className="mb-3 text-brand-primary-500"></Logo>
                    </div>
                </div>
            </div>
        </div>
    )
}