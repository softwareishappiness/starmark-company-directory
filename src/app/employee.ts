/*
{
"id": 0,
"firstName": "Dejuan",
"lastName": "Hessel",
"dob": "1971-12-12T23:21:55.027Z",
"address": {
"street": "36948 Daugherty Crescent",
"city": "North Baileeborough",
"state": "LA",
"zip": "57539-9128"
},
"phone": "812-157-1264",
"username": "Dejuan_Hessel39",
"password": "Adc_4PxXBjC6FTf",
"email": "Dejuan62@hotmail.com",
"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kennyadr/128.jpg",
"tags": []
},
 */
export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    dob: Date;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    phone: string;
    username: string;
    password: string;
    email: string;
    avatar: string;
    tags: string;
}
