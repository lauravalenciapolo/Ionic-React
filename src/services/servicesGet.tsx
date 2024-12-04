const urlBase = "https://api.escuelajs.co/api/v1"

export const getProducts = async () => {
    try {
        const response = await fetch(`${urlBase}/products`);
        const data = response.json();
        return data;
    } catch (error) {
        return error
    }
};

export default getProducts