# React FE for This Prject

We need prefix to install:

```
sail npm i --prefix react-fe
```

On run dev:

```
sail npm run dev --prefix react-fe
```

I have added small fix to run dev script:

```js
# package.json

{
// ...
"scripts": {
        "dev": "vite --host",
            // ...
        },
// ...
}

```

> Note: Please add prefix [`react-fe`] everytime you want to add new node package

## Run NPX

Example adding tailwindcss:

```
sail npm install --prefix ./react-fe/ -D tailwindcss postcss autoprefixer
```

You will get error when run npx, so you need some another way here:

```
cd react-fe
```

-   Copy Sail Script

```
ln -s ../vendor/laravel/sail/bin/sail sail
```

-   Run it

```
./sail npx tailwindcss init -p
```

-   Remove Sail Script

```
rm ./sail && cd ..
```

-   Config JS Error (`postcss.config` & `tailwind.config`). To fix change file type to `.cjs`

## Added Hero Icons

Got to [heroicons documentation page](https://github.com/tailwindlabs/heroicons)

-   Install

```
sail npm install --prefix ./react-fe/ @heroicons/react
```

-   Example use

```tsx
import { BeakerIcon } from "@heroicons/react/24/solid";

function MyComponent() {
    return (
        <div>
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            <p>...</p>
        </div>
    );
}
```

The 24x24 outline icons can be imported from @heroicons/react/24/outline, the 24x24 solid icons can be imported from @heroicons/react/24/solid, and the 20x20 solid icons can be imported from @heroicons/react/20/solid.

Icons use an upper camel case naming convention and are always suffixed with the word Icon.

[Browse the full list of icon names on UNPKG →](https://unpkg.com/browse/@heroicons/react@2.0.16/24/outline/)
