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
