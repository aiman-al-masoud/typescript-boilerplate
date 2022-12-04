/**
 * Used to export/import multimedia resources as es6 modules.
 * 
 * Something about "declaration files":
 * https://stackoverflow.com/questions/21247278/about-d-ts-in-typescript
 */

declare module "*.mp3" {
    const value: string;
    export default value;
}

declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}