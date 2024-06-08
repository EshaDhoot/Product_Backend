class User {
    name: String;
    email: String;
    password: String;
    phone_no: String;
    address: {
        landmark: String;
        city: String;
        state: String;
        pincode: String
    }
    profile_pic?: String;
    role: "admin" | "user";
}




