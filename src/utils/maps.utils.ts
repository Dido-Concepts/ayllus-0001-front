export function generateGoogleMapsURL({ address, city }: { address: string, city: string }) {

    const fullAddress = `${address}, ${city}`;

    const encodedAddress = encodeURIComponent(fullAddress);


    const mapsURL = `https://maps.google.com?q=${encodedAddress}`;

    return mapsURL;
}