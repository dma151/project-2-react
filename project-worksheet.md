# Project Overview
## Project Links
- [https://github.com/dma151/project-2-react](https://github.com/dma151/project-2-react)
## Project Description

This Project will showcase the different weapons that are in the popular 
FPS, (first-person-shooter), game Valorant, and their respective skin selections

## API Reference

Valorant api
- https://dash.valorant-api.com/

```
{
    "status": 200,
    "data": [
        {
            "uuid": "97af88e4-4176-9fa3-4a26-57919443dab7",
            "displayName": "Glitchpop Odin",
            "themeUuid": "5b014f36-414b-4703-9c65-1876c630feaa",
            "contentTierUuid": "e046854e-406c-37f4-6607-19a9ba8426fc",
            "displayIcon": "https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png",
            "wallpaper": null,
            "assetPath": "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_PrimaryAsset",
            "chromas": [],
            "levels": []
        },
```

## Wireframes

- [Wireframe](https://images.unsplash.com/photo-1635465473812-1efcfb5ad17d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80)

## MVP/Post MVP
#### MVP

- Fully functional database showcasing all weapon types and skins
    - Selected Weapon populated by clicking desired weapon
    - Populated list of weapon skin names
    - Selected skin will populate weapon with new aesthetic
- NavBar to home

#### PostMVP

- Another layer of options before list of weapons into categories (i.e. rifle, heavy, etc.)
- Different perspective views of weapon (i.e front, side, etc.)
- NavBar with layers of options (list of weapons)
- Create a form that allows search for specific weapon

## Components

| Components | Description |
| --- | :---: |
| App | Set up app with React Router, also the homepage with Navbar |
| NavBar | Renders the Navbar with its functionality |
| Arsenal | Render the list of weapons by name, will render on homepage with route |
| WeaponList| Renders list of weapons in Valorant |
| Weapon | Renders chosen weapon with statistics and list of weapon skins |
| WeaponStats | Renders the data of the weapon chosen |
| SkinList | Renders a list of weapon skin aesthetics by name |
| WeaponImage | Renders image of weapon, with or without skin modification on Weapon Component |
| CSS | Styling all of the above |

#### Time Table

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| App | H | 1hr | | |
| NavBar | H | 2hr | | |
| Arsenal | H | 3hr | | |
| WeaponList | H | 1.5hr | | |
| Weapon | H | 3hr | | |
| WeaponStats | H | 1.5hr | | |
| SkinList | H | 1.5hr | | |
| WeaponImage | H | 1hr | | |
| CSS | H | 5hr | | |
| Mod NavBar(PostMVP) | L | 3hr | | |
| WeaponCategory(PostMVP) | L | 2hr | | |
| Search(PostMVP) | L | 2hr | | |
| Total(MVP) | H | 19.5hr | | |
| Total(PostMVP) | L | 9hr | | |


## Additional Libraries

## Code Snippet