# Exercices

## Router

Générer un nouveau module `UsersModule` avec son module de routing (`UsersRoutingModule`).

Importer `UsersModule` dans `AppModule` en faisant attention à l'ordre

Dans le dossier `users` générer 3 composants :

- `users/users.component.ts|scss|html`
- `users/user-add/user-add.component.ts|scss|html`
- `users/user-details/user-details.component.ts|scss|html`

Configurer les routes dans `UsersRoutingModule` de sorte que :

`/users` -> `UsersComponent`
`/users/add` -> `UserAddComponent`
`/users/123` -> `UserDetailsComponent`

Ajouter un lien vers `/users` dans le menu de `app.component.html`

