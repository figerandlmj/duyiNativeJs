import { createApp } from "../src/main";

export default () => {
    return new Promise((resolve, reject) => {
        let app = createApp();
        resolve(app);
    })
}