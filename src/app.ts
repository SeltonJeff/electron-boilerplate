class WebApplication {

    constructor() {
        this.prepareRoot();
    }

    private prepareRoot() {
        const root = document.createElement('div');
        root.setAttribute('id', 'root');
        document.body.appendChild(root);
    }

    public renderPage(page: string) {
        const root = document.querySelector('#root');
        root!.innerHTML = page
    }
}

const webApp = new WebApplication()

// test
const pageTeste = `
    <div style=" height: 100%; width: 100%; display: flex; justify-content: center; align-items: center; ">
        <h1 style="font-size: 50px; color: white;">
            Welcome to Electron!
        </h1>
    </div>
`

webApp.renderPage(pageTeste);