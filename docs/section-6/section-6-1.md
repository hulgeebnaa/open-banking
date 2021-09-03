---
sidebar_position: 1
---

# Харилцагчийн мэдээлэл харах

- **URI:** `/customer/inquire`

- **X-Golomt-Service:** `RETCUSTINQ`

- **Хүсэлтийн төрөл:** `GET`

- **Хүсэлтийн тайлбар**

| Талбарын нэр                                 | Утга   |  Тайлбар | Заавал эсэх |
|------------------------------------------|-----------|--------------|-----------|
| registerNo                                  | БЖ66060606      | Мэдээлэлийг нь харах боломжтой банканд бүртгэлтэй харилцагчийн регистрийн дугаар| Тийм |
		


- **Хариу тайлбар**


| Талбарын нэр                                 | Утга   |  Тайлбар | 
|------------------------------------------|-----------|--------------|
|customer	|Object                     	    |Үндсэн мэдээлэл |
|registerNo	|String	                            |Харилцагчийн регистрийн дугаар|
|firstName	|String	                            |Өөрийн нэр|
|lastName	|String	                            |Эцэг- эхийн нэр|
|name	                   |      String	    |Бүтэн нэр|
|familyName	               |     String	        |Овог|
|salutation	               |     String	        |Хүйс|
|birthDate	               |  Date (yyyy-MM-dd)	|Төрсөн огноо|
|branchId	               | String         	|Үндсэн салбарын дугаар|
|isInternetBankingEnabled	|Boolean	        |Интернэт банк ашигладаг эсэх|
|phoneEmails	           |     Object	        | Холбоо барих мэдээлэл|
|type	                   | String	            |`PHONE` - Утасны дугаар уу <br/>`EMAIL` -  и-мэйл хаяг|
|subType	               | String	            |Утас, И-мэйл хаягийн төрөл. <br/>Жишээ нь: <br/>  `CELLPH` – гар утас <br/>  `HOMEEML` – үндсэн и-мэйл хаяг г.м|
|countryCode	           | String	            |    Улсын код|
|emailId	               | String	            | `<type>` талбарын утга EMAIL үед энэхүү талбар дээр бүртгэлтэй и-мэйл хаяг байна|
|phoneNo	               | String	            | `<type>` талбарын утга PHONE үед энэхүү талбар дээр утасны дугаар байна|