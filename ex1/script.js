async function getHouses() {
    const response = await fetch('houses.json');
    const houses = await response.json();
    return houses;
}

async function renderHouses() {
    let housediv = document.getElementById("houses");
    const houses = await getHouses();

    houses.forEach(house => {
        let houseContainer = document.createElement('div');
        houseContainer.className = 'houseContainer';

        let image = document.createElement('img');
        image.src = house.image;
        image.className = 'houseImage';
        image.alt = "House image";

        let header = document.createElement('p');
        header.className = 'header';
        header.innerText = house.address;

        let size = document.createElement('p');
        size.innerText = `${house.size} m²`;

        let description = document.createElement('p');
        description.className = 'text';
        description.innerText = house.text;

        let price = document.createElement('p');
        price.className = 'price';
        price.innerText = `${house.price.toLocaleString()} euroa`;

        houseContainer.appendChild(image);
        houseContainer.appendChild(header);
        houseContainer.appendChild(size);
        houseContainer.appendChild(description);
        houseContainer.appendChild(price);

        housediv.appendChild(houseContainer);
    });
}

renderHouses();
