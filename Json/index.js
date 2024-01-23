const c = {
    "first_name": "John",
    "last_name": "Smith",
    "is_alive": true,
    "age": 27,
    "address": {
        "street_address": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postal_code": "10021-3100"
    },
    "phone_numbers": [
        {
            "type": "home",
            "number": "212 555-1234"
        },
        {
            "type": "office",
            "number": "646 555-4567"
        }
    ],
    "children": [
        "Catherine",
        "Thomas",
        "Trevor"
    ],
    "spouse": null
}

window.onload = function () {

    document.getElementById("json").innerText = `${c.first_name} ${c.last_name}\n${c.address.city}\n${c.phone_numbers[1].number}`;


}
