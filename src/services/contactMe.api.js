import axios from 'axios';

const URL = "https://test.ezworks.ai/api"
export default async function contactMe(email) {
    try {
        const res = await axios.post(URL, { email: email }, {
            "Content-Type": "application/json"
        })
        return res;
    } catch (err) {
        return err
    }
}