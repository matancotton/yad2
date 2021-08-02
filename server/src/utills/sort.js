const setSort = (sort = { value: "date" }) => {
    const result = {};
    switch (sort.value) {
        case "date":
            return result["payment.date"];
        case "low-to-high":
            return result["payment.price"];
    }

    return result;
};

module.exports = setSort;
