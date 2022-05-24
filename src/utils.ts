export function urlPath(path: string): string {
    path = path.trim();

    //regex to check if is an absolute url (with *a* protocol) or a valid URI
    const urlRegex = /^([a-z0-9]+:\/\/|www.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

    if (path.match(urlRegex)) {
        return path;
    }

    //if path starts with a double slash, it's protocol relative URL
    if (path.startsWith('//')) {
        return window.location.protocol + path;
    }

    //if path starts with a slash, its relative in respect to page URL root
    if (path.startsWith('/')) {
        return window.location.origin + path;
    }

    let prefix = `${window.location.protocol}//${window.location.host}`;

    if (window.location.pathname.indexOf('/') > -1) {
        prefix = prefix + window.location.pathname.split('/').slice(0, -1).join("/");
    } else {
        prefix = prefix + window.location.pathname;
    }
    return `${prefix}/${path}`;
}

export async function getJSON<T>(url: string): Promise<T> {
    const res = await fetch(url);
    return res.json();
}
