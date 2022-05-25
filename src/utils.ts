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

export async function loadScripts(target: HTMLElement, scripts: string[]) {
    const existingScripts = target.getElementsByTagName('script');
    const existingH5PScripts = [];

    //filter all scripts with `data-h5p` attribute
    for (let i = 0; i < existingScripts.length; i++) {
        if (existingScripts[i].dataset.h5p) {
            existingH5PScripts.push(existingScripts[i]);
        }
    }

    const scriptRequests = [];
    scripts.forEach((path) => {
        //if script already exists, ignore
        if (existingH5PScripts.some((script) => script.dataset.h5p === path)) {
            return
        }

        const script = document.createElement("script");
        script.src = path;
        script.async = false;
        script.defer = false;
        script.dataset.h5p = path;
        const scriptRequest = new Promise((resolve) => {
            //listen for load
            script.onload = resolve
        })

        //attach it to the target
        target.append(script);

        scriptRequests.push(scriptRequest);
    });

    await Promise.all(scriptRequests);
}

export function loadStylesheets(target: HTMLElement, styles: string[]) {
    const existingStylesheets = target.getElementsByTagName('link');
    const existingH5PStylesheets = [];

    //filter all styles links with `data-h5p` attribute
    for (let i = 0; i < existingStylesheets.length; i++) {
        if (existingStylesheets[i].dataset.h5p) {
            existingH5PStylesheets.push(existingStylesheets[i]);
        }
    }


    styles.forEach((path) => {
        //if style already exists, ignore
        if (existingH5PStylesheets.some((link) => link.dataset.h5p === path)) {
            return
        }

        const link = document.createElement("link");
        link.href = path;
        link.dataset.h5p = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        //attach it to the target
        target.append(link);
    })
}
