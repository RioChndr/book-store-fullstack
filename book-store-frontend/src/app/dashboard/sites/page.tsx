const sites = [
    { name: "Sites Food", url: "food.sites.com", posts: "10 posts", viewer: "78 viewers" },
    { name: "Sites Mechanic", url: "Mechanic.sites.com", posts: "512 posts", viewer: "23 viewers" },
    { name: "Sites Lorem", url: "Lorem.sites.com", posts: "23 posts", viewer: "12 viewers" },
    { name: "Sites Ipsum", url: "Ipsum.sites.com", posts: "56 posts", viewer: "52 viewers" },
    { name: "Sites Dolor", url: "Dolor.sites.com", posts: "85 posts", viewer: "512 viewers" },
  ]
  
  export default function Example() {
    return (
      <div className="px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6">
                Sites
            </h1>
            <p className="mt-2 text-sm">
              A list of all sites, Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Add Sites
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Url
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Total Post
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold">
                      Total Viewer
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {sites.map((siteInfo, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-inherit sm:pl-0">
                        {siteInfo.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">{siteInfo.url}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">{siteInfo.posts}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">{siteInfo.viewer}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-primary-600 hover:text-primary-900">
                          Edit<span className="sr-only">, {siteInfo.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  