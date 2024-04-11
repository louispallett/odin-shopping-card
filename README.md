# Shopping Cart
#### _Course of [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart)_

![Screenshot from the live website, displaying a page of clothing items. A navigation bar on the left floats, laying over the items behind it.](https://res.cloudinary.com/divlee1zx/image/upload/v1712847095/gyffl815kwdxxvvrrfrf.png)

### [Live link to the page](https://elegant-genie-5ddd42.netlify.app/)
Hosted by [Netlify](https://www.netlify.com/)

---

_Shopping Cart_ is a [React Application](https://react.dev/) built with [Vite](https://vitejs.dev/). It utilizes client-side routing via [React Router](https://reactrouter.com/en/main) to generate quick navigation between pages. It fetches items from the [Fake Store API](https://fakestoreapi.com/docs) and displays to the user. The user can add items to their cart and see them appear on this page.

## Purpose
The purpose of this site is to display and build upon my knowledge of React and React Router. This site uses React Components throughout to display and manipulate elements on the page. 

It also utilises React hooks, such as useState and useEffect, a good example of which is is the Shop component, which fetches data from an API and displays it on the page, giving a simple 'loading icon' as feedback to the user:

```js
export default function Shop({ itemsInBasket, setItemsInBasket }) {
    // Set states
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Get API data
        const getData = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products", {mode: "cors"}
                );
                if(!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                const actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(null);
            }
        }
        getData();
    }, []);

    // Return our HTML, based on the current state of loading, data, and error:
    return (
        <>
            <div className="cards-wrapper">
            {loading && (
                <div className="main-page-wrapper">
                    <img src={loadingIcon} alt="" className="loading-icon" />
                </div>
            )}
            {data && (
                data.map(item => (
                    <Card key={item.id} data={item} itemsInBasket={itemsInBasket}  setItemsInBasket={setItemsInBasket}/>
                ))
            )}
            {error && (
                <div className="main-page-wrapper">
                    <img src={errorLogo} alt="" className="error"/>
                    <p>{error}</p>
                    <p>Apologies - an error has occured trying to fetch data from the server. Please try again later.</p>
                </div>
            )}
            </div>
        </>
    );
}
```

## Tech

This site repository on:

- [React](https://react.dev/) - the primary purpose 
- [Country Codes List](https://www.npmjs.com/package/country-codes-list) - an npm package for displaying country phone codes (which is used in a form)
- [SASS](https://sass-lang.com/)

## Installation

If you want to run the site locally, you can do so by either forking the repository or simply downloading the files. You'll then want to download all the packages by running (you'll need to have [npm](https://www.npmjs.com/) installed):

```sh
npm install
```

You can then run the following npm script and the page should start:

```sh 
npm run dev
```

## Acknowledgements

| Asset | Source |
| ------ | ------ 
| checkout.svg | "Payment Euro SVG Vector", Icooon Mono, freepik.com |
| checkout-cart.svg | "Basket Free Material SVG Vector", Icooon Mono, freepik.com |
| overlock.woff/woff2 | by Dario Manuel Muhafara, Google Fonts |
| error.svg | "400 error bad request concept illustration", storyset, freepik.com |
| exit.svg | "Cross SVG Vector", prmack, svgrepo.com |
| home.svg | "Home 1391 SVG Vector", bypeople, freepik.com |
| main-logo.svg | "Ebook concept illustration", storyset, freepik.com |
| menu.svg | "Menu Alt 1 SVG Vector", Dazzle UI, svgrepo.com |
| react.svg | vite/react template (via command npm create vite@latest directory_name -- --template react) |
| shop.svg | "Cash SVG Vector", Khushmeen Sidhu, freepik.com |