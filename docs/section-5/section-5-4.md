---
sidebar_position: 4
---

# Дансны хуулга харах

- **URI:** `/account/statement`

- **X-Golomt-Service:** `ACCTSTA`

- **Хүсэлтийн тайлбар**

| Талбарын нэр                                 | Утга   |  Тайлбар | Заавал эсэх |
|------------------------------------------|-----------|--------------|-----------|
| accountId                                  | 1100100101      | Дансны дугаар явуулна | Тийм |
| startDate                                 | 2020-10-10    |Эхлэх огноо байна.<br/> ISO Date форматтай байна | Тийм |
| endDate                                 | 	2020-10-20      |Дуусах огноо.<br/> ISO Date форматтай байна| Тийм |


- **Хариу тайлбар**


| Талбарын нэр                                 | Утга   |  Тайлбар | 
|------------------------------------------|-----------|--------------|
| accountId	                                |        | 	Тухайн дансны дугаар      | 
| statements		                    |      | Дансны хуулганы жагсаалт – [ ] – Array Object | 
| recNum                                 |   1     | Дарааллын дугаар| 
| tranId                          | S99088 |  Гүйлгээний дугаар | 
| drOrCr                               |   Debit	     | Debit – Зарлага <br/> Credit – Орлого   |
| tranId                          | S99088 |  Гүйлгээний дугаар | 
| tranAmount                          |300  |  Гүйлгээний дүн | 
| tranDesc                          | Test guilgee |  Гүйлгээний утга | 
| tranPostedDate                          | 2020-10-20T15:01:21 |  Гүйлгээ амжилттай болсон огноо | 
| tranCrnCode                          | MNT|  Гүйлгээний валют| 
| exchRate                         | 1|  Гүйлгээний ханш| 
		
		
		
		
		