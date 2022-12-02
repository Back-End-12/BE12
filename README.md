## **Greenpeace API Spec**
Dokumen ini dibuat sebagai panduan jalannya sistem

1. **Users**

    | Field Name     | Type      | Description        |
    | -------------- | --------- | ------------------ |
    | id             | ObjectId  | user ID            |
    | full_name      | string    | users' full name   |
    | username       | string    | users' full name   |
    | email          | string    | users' email       |
    | password       | string    | users' password    |
    | status         | string    | users' status      |

    **a. User SignUp**
        
    Request :
    -   Method : POST            
    -   Endpoint : /signup            
    -   Header :
        -   Content-Type: application/json            
        -   Accept: application/json
    -   Body :

            {
                "full_name": "hahaha",
                "username": "hahaha",
                "email": "haha123@gmail.com",
                "password": "hahaha123",
                "status": "user"
            }   
    -   Response :

            {
                "success": true,
                "user": {
                    "full_name": "hahaha",
                    "username": "hahaha",
                    "email": "haha123@gmail.com",
                    "password": "$2a$10$Iwo5Pgt7A9GfwDluZdI8POKlBuGhcafVheyEcsULr6iRiJmaXACwW",
                    "status": "user",
                    "_id": "638997fe48e34d0178c744e3",
                    "createdAt": "2022-12-02T06:15:26.878Z",
                    "updatedAt": "2022-12-02T06:15:26.878Z",
                    "__v": 0
                }
            }                  

    **b.  User SignIn**

    Request :
    -   Method : POST            
    -   Endpoint : /signin          
    -   Header :
        -   Content-Type: application/json            
        -   Accept: application/json 
    -   Body  :
        
            {
                "email": "haha123@gmail.com",
                "password": "hahaha123"
            }    
    -   Response :

            {
                "success": true,
                "status": "user",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODk5N2ZlNDhlMzRkMDE3OGM3NDRlMyIsImlhdCI6MTY2OTk2MTg3MywiZXhwIjoxNjY5OTY1NDczfQ.e9kp4z3oSz0Y36ldADzSnAUfRCbQ26XU0m-vS-7zAJU"
            }        
    
    **c.  User Logout**

    Request :
    - Method : GET            
    - Endpoint : /logout          
    - Header :        
        - Accept: application/json
    -   Response :

            {
                "success": true,
                "message": "Logged out"
            }        

    **d.  Get All User**

    Request :
    - Method : GET            
    - Endpoint : /getAllUser          
    - Header :          
        - Accept: application/json
    -   Response :

            {
                "message": "Getting Data",
                "data": [
                    {
                        "_id": "6388fd6e40aa63262564ebe0",
                        "full_name": "Dustin Bayu Herlamabang",
                        "username": "dunss",
                        "email": "jarot@gmail.com",
                        "password": "$2a$10$UfNsZQ4cuWHG9HpK.Pp0UeDBn2BN7bUzZj6EIVN//lcmer9FOMaxa",
                        "status": null,
                        "createdAt": "2022-12-01T19:15:58.931Z",
                        "updatedAt": "2022-12-01T19:15:58.931Z"
                    },
                    {
                        "_id": "6388feb240aa63262564ebe6",
                        "full_name": "Admin",
                        "username": "admin",
                        "email": "admin@gmail.com",
                        "password": "$2a$10$HOn6zpqvoVMybzze3RzRJ.u7kuzvGce26kCrtMimym0WdklLBPyia",
                        "status": null,
                        "createdAt": "2022-12-01T19:21:22.867Z",
                        "updatedAt": "2022-12-01T19:21:22.867Z"
                    },
                    {
                        "_id": "6388ff0c40aa63262564ebeb",
                        "full_name": "Admin2",
                        "username": "admin2",
                        "email": "admin2@gmail.com",
                        "password": "$2a$10$LhsyrFIyf5/DGeBAq6Ot4OozBEeKMyJEVeA14d2umGVV4z8dgvQmS",
                        "status": "admin",
                        "createdAt": "2022-12-01T19:22:52.706Z",
                        "updatedAt": "2022-12-01T19:22:52.706Z"
                    },
                    {
                        "_id": "6389692e48e34d0178c74432",
                        "full_name": "Project BE 12",
                        "username": "Project",
                        "email": "sheha@gmail.com",
                        "password": "$2a$10$YYDf1Xm4yLab3ogkLWgMwOazD1Z9mRScPOJwkaZhWuQDM49njFBD2",
                        "status": "user",
                        "createdAt": "2022-12-02T02:55:42.145Z",
                        "updatedAt": "2022-12-02T02:55:42.145Z"
                    },
                    {
                        "_id": "63896ca948e34d0178c74454",
                        "full_name": "akak",
                        "username": "akak",
                        "email": "akak@gmail.com",
                        "password": "$2a$10$HJewkIq0W6PTxQeT5c/CB.zBLfhHept1JPSjBoFumynKdZAp/mPR.",
                        "status": "user",
                        "createdAt": "2022-12-02T03:10:33.889Z",
                        "updatedAt": "2022-12-02T03:10:33.889Z"
                    },
                    {
                        "_id": "6389881348e34d0178c744ad",
                        "full_name": "tes",
                        "username": "tes",
                        "email": "tes@gmail.com",
                        "password": "$2a$10$uoTd1kenwXSLF9Dpp50Kbu85sesFZt5PEZk4LLfwavlGJTObXkv3y",
                        "status": "user",
                        "createdAt": "2022-12-02T05:07:31.552Z",
                        "updatedAt": "2022-12-02T05:07:31.552Z"
                    }
                ]
            }   

    **e.  Get User By Id**

    Request :
    -   Method : GET            
    -   Endpoint : /user/:id          
    -   Header :          
        -   Accept: application/json
    -   Response :

            {
                "sucess": true,
                "user": {
                    "_id": "6388fd6e40aa63262564ebe0",
                    "full_name": "Dustin Bayu Herlamabang",
                    "username": "dunss",
                    "email": "jarot@gmail.com",
                    "password": "$2a$10$UfNsZQ4cuWHG9HpK.Pp0UeDBn2BN7bUzZj6EIVN//lcmer9FOMaxa",
                    "status": null,
                    "createdAt": "2022-12-01T19:15:58.931Z",
                    "updatedAt": "2022-12-01T19:15:58.931Z",
                    "__v": 0
                }   
            }    

2. **Activity**

    | Field Name     | Type      | Description        |
    | -------------- | --------- | ------------------ |
    | id             | ObjectId  | activity's ID      |
    | img_kegiatan   | string    | activity's image   |
    | judul_kegiatan | string    | activity's title   |
    | tgl_kegiatan   | Date      | activity's date    |
    | lokasi_kegiatan| string    | activity's location|
    | deskripsi      | string    | activity's desc    |

    **a.  Get All Activity**

    Request :
    -   Method : GET            
    -   Endpoint : /Allkegiatan          
    -   Header :          
        -   Accept: application/json 
    -   Body    :

            {
                "message": "Getting Data Kegiatan",
                "data": [
                    {
                        "_id": "6389646c9f327525ed520949",
                        "img_kegiatan": "https://bencana-alam.jpg",
                        "judul_kegiatan": "Gempa cianjur",
                        "tgl_kegiatan": "2022-02-11T17:00:00.000Z",
                        "lokasi_kegiatan": "cianjur",
                        "deskripsi": "Terjebak berjam-jam di tengah kemacetan, sulit mendapatkan transportasi online, sehingga membutuhkan waktu jauh lebih lama untuk pulang menuju rumah, adalah derita yang dirasakan warga Ibukota Jakarta beberapa hari belakangan ini akibat banjir dan hujan ekstrem. Sejumlah daerah pun, lagi-lagi, tergenang banjir. Sampai Kamis, 6 Oktober kemarin, Badan Penanggulangan Bencana Daerah DKI Jakarta mencatat ada 17 ruas jalan 41 RT yang terimbas banjir. Bertambah dari hari sebelumnya sebanyak tujuh ruas jalan dan lima RT. Tak hanya itu, banjir juga merenggut tiga nyawa siswa Madrasah Tsanawiyah (MTS) Negeri 19, Pondok Labu, Jakarta Timur."
                    },
                    {
                        "_id": "63896ac148e34d0178c7443b",
                        "img_kegiatan": "https://bencana-alam.jpg",
                        "judul_kegiatan": "Gempa cianjur",
                        "tgl_kegiatan": "2022-02-11T17:00:00.000Z",
                        "lokasi_kegiatan": "cianjur",
                        "deskripsi": "Terjebak berjam-jam di tengah kemacetan, sulit mendapatkan transportasi online, sehingga membutuhkan waktu jauh lebih lama untuk pulang menuju rumah, adalah derita yang dirasakan warga Ibukota Jakarta beberapa hari belakangan ini akibat banjir dan hujan ekstrem. Sejumlah daerah pun, lagi-lagi, tergenang banjir. Sampai Kamis, 6 Oktober kemarin, Badan Penanggulangan Bencana Daerah DKI Jakarta mencatat ada 17 ruas jalan 41 RT yang terimbas banjir. Bertambah dari hari sebelumnya sebanyak tujuh ruas jalan dan lima RT. Tak hanya itu, banjir juga merenggut tiga nyawa siswa Madrasah Tsanawiyah (MTS) Negeri 19, Pondok Labu, Jakarta Timur."
                    },
                    {
                        "_id": "63896c4048e34d0178c74450",
                        "img_kegiatan": "aaa",
                        "judul_kegiatan": "bbb",
                        "tgl_kegiatan": "2022-02-11T17:00:00.000Z",
                        "lokasi_kegiatan": "bandung",
                        "deskripsi": "ànwowbe7ebsbwkw"
                    },
                    {
                        "_id": "63896f9648e34d0178c74461",
                        "img_kegiatan": "https://image.jpg",
                        "judul_kegiatan": "tess",
                        "tgl_kegiatan": "2022-12-08T00:00:00.000Z",
                        "lokasi_kegiatan": "tegal",
                        "deskripsi": "tessssss"
                    },
                    {
                        "_id": "63896ff348e34d0178c74466",
                        "img_kegiatan": "https://halo.jpg",
                        "judul_kegiatan": "ajaaj",
                        "tgl_kegiatan": "2022-11-30T00:00:00.000Z",
                        "lokasi_kegiatan": "ajaj",
                        "deskripsi": "teaakkaka"
                    }
                ]
            }           

    **b.  Upload Activity**

    Request :
    -   Method : POST            
    -   Endpoint : /Kegiatan/create         
    -   Header :          
        -   Content-Type: application/json            
        -   Accept: application/json 

    -   Body :
            
            {
                "img_kegiatan": "aaa",
                "judul_kegiatan": "bbb",
                "tgl_kegiatan": "2022-02-11T00:00:00.000Z",
                "lokasi_kegiatan": "bandung",
                "deskripsi": "anwowbe7ebsbwkw"    
            } 
    -   Response :   

            {
                "success": true,
                "kegiatan": "638967c648e34d0178c7442a",
                "img_kegiatan": "aaa",
                "judul_kegiatan": "bbb",
                "tgl_kegiatan": "2022-02-11T00:00:00.000Z",
                "lokasi_kegiatan": "bandung",
                "deskripsi": "anwowbe7ebsbwkw"    
            } 
    **c.  Delete Activity By Id**

    Request :
    -   Method : DELETE           
    -   Endpoint : /Kegiatan/delete/:id          
    -   Header :          
        -   Content-Type: application/json            
        -   Accept: application/json 
    -   Body:

            {
                "message": "Kegiatan Deleted"
            }

    **d.  Update Activity By Id**

    Request :
    -   Method : PUT          
    -   Endpoint : /Kegiatan/update/:id          
    -   Header :          
        -   Content-Type: application/json            
        -   Accept: application/json
    -   Body:
    
                {
                    "img_kegiatan": "https://bencana-alam.jpg",
                     "judul_kegiatan": "Gempa cianjur",
                    "tgl_kegiatan": "2022-02-11T17:00:00.000Z",
                    "lokasi_kegiatan": "cianjur",
                    "deskripsi": "Terjebak berjam-jam di tengah kemacetan, sulit mendapatkan transportasi online, sehingga membutuhkan waktu jauh lebih lama untuk pulang menuju rumah, adalah derita yang dirasakan warga Ibukota Jakarta beberapa hari belakangan ini akibat banjir dan hujan ekstrem. Sejumlah daerah pun, lagi-lagi, tergenang banjir. Sampai Kamis, 6 Oktober kemarin, Badan Penanggulangan Bencana Daerah DKI Jakarta mencatat ada 17 ruas jalan 41 RT yang terimbas banjir. Bertambah dari hari sebelumnya sebanyak tujuh ruas jalan dan lima RT. Tak hanya itu, banjir juga merenggut tiga nyawa siswa Madrasah Tsanawiyah (MTS) Negeri 19, Pondok Labu, Jakarta Timur."
                }    
    -   Response:

            { 
                "message" : "Kegiatan updated!",
                "data": {
                    "img_kegiatan": "https://bencana-alam.jpg",
                    "judul_kegiatan": "Gempa cianjur",
                    "tgl_kegiatan": "2022-02-11T17:00:00.000Z",
                    "lokasi_kegiatan": "cianjur",
                    "deskripsi": "Terjebak berjam-jam di tengah kemacetan, sulit mendapatkan transportasi online, sehingga membutuhkan waktu jauh lebih lama untuk pulang menuju rumah, adalah derita yang dirasakan warga Ibukota Jakarta beberapa hari belakangan ini akibat banjir dan hujan ekstrem. Sejumlah daerah pun, lagi-lagi, tergenang banjir. Sampai Kamis, 6 Oktober kemarin, Badan Penanggulangan Bencana Daerah DKI Jakarta mencatat ada 17 ruas jalan 41 RT yang terimbas banjir. Bertambah dari hari sebelumnya sebanyak tujuh ruas jalan dan lima RT. Tak hanya itu, banjir juga merenggut tiga nyawa siswa Madrasah Tsanawiyah (MTS) Negeri 19, Pondok Labu, Jakarta Timur."
                }    
            } 
              