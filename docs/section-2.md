---
sidebar_position: 2
---

# Хүсэлтийн ерөнхий мэдээлэл 

Өгөгдөл илгээхдээ `HTTP` протоколоор, `POST` функцээр `REST` ашиглан `Request Body` хэсэгт уг `SPEC`-ийн дагуу хүсэлтийн `JSON`-ийг бэлдэж илгээх шаардлагатай. Хүсэлт амжилттай болсон тохиолдолд `ACCESS_TOKEN` утгыг ашиглана. Мөн хүсэлт хоёр талдаа нууцлагдсан явах бөгөөд урьдчилан өгөгдсөн түлхүүрийг ашиглаж тайлах боломжтой байх юм.


| Protocol                                 | HTTP     |  
|------------------------------------------|-----------|
| Method                                   | POST        | 
| URL (Үндсэн орчин)                       | [https://openbank.golomtbank.com/api](https://openbank.golomtbank.com/api)         | 
| URL (Тест орчин)                         | [https://openapi-uat.golomtbank.com/api](https://openapi-uat.golomtbank.com/api)        | 
| **Request Headers**                      |           | 
| Content-Type                             | Application/json        | 
| X-Golomt-Checksum                        | Тухайн хүсэлтийг (JSON request)  sha256 – аар hash гаргаж хэрэглэгч систем уруу өгөгдсөн түлхүүрээр нууцлагдсан текст байна. Дэлгэрэнгүй Системийн аюулгүй байдал сэдвээс харна уу        | 
| X-Golomt-Service                         | Хавсралт 1 дээр өгөгдсөн жагсаалтаас тухайн үйлдэлд хамааруулж сонгоно        | 
| Authorization                            | Bearer …       | 
| **Response Headers**                     |           | 
| Content-Type                             | Application/json        | 