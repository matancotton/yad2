const setFilter = (filterObj) => {
    const {
        area,
        property,
        minRooms,
        maxRooms,
        minPrice,
        maxPrice,
        features,
        minFloor,
        maxFloor,
        minApartment,
        maxApartment,
        date,
        freeText,
        entryNow,
        sortBy,
        villagesOnly,
    } = filterObj;
    const result = {};
    console.log(date);

    if (property.length > 0) result["address.property"] = { $in: property };
    if (minRooms || maxRooms)
        result["about.roomsNumber"] = {
            $gte: parseFloat(minRooms) || 0,
            $lt: parseFloat(maxRooms) ? parseFloat(maxRooms) + 0.1 : Infinity,
        };
    if (minPrice || maxPrice)
        result["payment.price"] = {
            $gte: parseFloat(minPrice) || 0,
            $lt: maxPrice ? parseFloat(maxPrice) + 1 : Infinity,
        };
    if (minFloor || maxFloor)
        result["address.floor"] = {
            $gte: parseFloat(minFloor) || 0,
            $lt: parseFloat(maxFloor) ? parseFloat(maxFloor) + 1 : Infinity,
        };
    if (minApartment || maxApartment)
        result["payment.totalFeet"] = {
            $gte: parseFloat(minApartment) || 0,
            $lt: maxApartment ? parseFloat(maxApartment) + 1 : Infinity,
        };
    if (date !== "")
        result["payment.date"] = {
            $gte: new Date(date),
        };
    if (freeText !== "") {
        const regex = new RegExp(freeText);
        result["about.textArea"] = { $regex: regex };
    }
    if (features.length > 0) result["about.features"] = { $in: features };
    if (area !== "")
        result["$or"] = [
            { ["address.city"]: area },
            { ["address.street"]: area },
        ];
    console.log(result);

    return result;
};

module.exports = setFilter;
