interface ICoordinates {
    lat: string,
    lon: string,
}

interface ICities {
    [key: string]: ICoordinates
}

export const cities: ICities = {
    Tbilisi: { lat: "41.6941", lon: "44.8337" },
    Kutaisi: { lat: "42.2496", lon: "42.6997" },
    Batumi: { lat: "41.6416", lon: "41.6359" },
    Winnipeg: { lat: "49.8951", lon: "97.1384" }
}