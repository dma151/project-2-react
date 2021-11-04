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
- [React Structure](https://wireframepro.mockflow.com/view/react-structure)

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

| Components(MVP) | Description |
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


| Components(PostMVP) | Description |
| --- | :---: |
| Mod Navbar| Modified Navbar that renders more pages, including search bar |
| WeaponCategory | A component that adds a layer for the list of weapons per category |
| WeaponSkin Color | Renders a dropdown to the existing SkinList for color variants that the skin MIGHT have |
| WeaponSkin Levels | Renders a dropdown to the existing SkinList for level variants that the skin MIGHT have, (plays videos) |
| Search | A input that is added to the NavBar to search for a weapon |
| ExampleWeapon | Renders 3 popular weapons with a skin on homepage load |


#### Time Table

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: | :---: | :---: | :---: |
| App | H | 1hr | 1hr | 1hr |
| NavBar | H | 2hr | 3hr | 3hr |
| Arsenal | H | 3hr | 2.5hr | 2.5hr |
| Weapon | H | 3hr | 2hr | 2hr |
| WeaponStats | H | 1.5hr | 0.5hr | 0.5hr |
| SkinList | H | 1.5hr | 1hr | 1hr |
| WeaponImage | H | 1hr | 1hr | 1hr |
| CSS | H | 5hr | 5hr | 5hr |
| Mod NavBar(PostMVP) | L | 3hr | 1hr | |
| WeaponCategory(PostMVP) | L | 2hr | | |
| WeaponSkin Color Variants(PostMVP) | L | 3hr | | |
| WeaponSkin Levels videos(PostMVP) | L | 3hr | 1hr | |
| Search(PostMVP) | L | 2hr | 1hr | 1hr |
| Example Weapon div(PostMVP) | L | 1hr | 2hr | 2hr |
| PostMVP CSS | L | 5hr | 2hr | 2hr |
| Total(MVP) | H | 19.5hr | 16hr | 16hr |
| Total(PostMVP) | L | 15hr | 7hr | 5hr |


## Additional Libraries

## Code Snippet

```
    <Container>
      <h1 className='sectionTitle'>Choose Your Weapon</h1>
        <ListGroup>
          <Row xs={1} md={2} lg={4}>
            {props.weaponList &&
              props.weaponList.map((item, i) => {
                return (
                  <Col>
                    <ListGroup.Item action
                      id="bootstrapListOverride"
                      key={i}
                      onClick={() => props.onClick(item.displayIcon)}
                    >
                      <Link to={"/arsenal/" + item.displayName}>
                        {item.displayName}
                      </Link>
                    </ListGroup.Item>
                  </Col>
                );
              })}
          </Row>
        </ListGroup>
    </Container>
```