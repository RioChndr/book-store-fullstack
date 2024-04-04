export const fetcher = (path: string, config?: RequestInit) => {
    const host = new URL(path, process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3000');
    return fetch(host.toString(), config).then((res) => res.json()).catch(err => {
        throw err;
    });
}
