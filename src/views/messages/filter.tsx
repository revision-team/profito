import {Contact} from "./typesInterfaces";

export default function filter(query:string, data: Contact[]) {
    const newQuery = query.replace(/[^a-z0-9]/gi, '').split('').join('.*');
    return data.filter((item) => {
        const regex = new RegExp(newQuery, 'i');
        return regex.test(item.name);
    });
}
