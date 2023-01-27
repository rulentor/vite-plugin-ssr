const contextPath = import.meta.env.BASE_URL;

export default class UserService {
    getItems() {
        return fetch(contextPath + 'demo/data/users.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getItemsWithOrders() {
        return fetch(contextPath + 'demo/data/users-orders.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
