---
sidebar_position: 3
---

# Кредит карт хуулга харах

- **URI:** `card/credit/statement`

- **X-Golomt-Service:** `CCSTATM`

- **Хүсэлтийн төрөл:** `POST`

- **Хүсэлтийн тайлбар**

| Талбарын нэр                                 | Утга   |  Тайлбар | Заавал эсэх |
|------------------------------------------|-----------|--------------|-----------|
|registerNo	       | БЖ66060606	               | Мэдээллийг нь харах боломжтой банканд бүртгэлтэй харилцагчийн регистрийн дугаар|	Тийм|
|cardToken	       | 123412341234	           | Картын дугаартай токен	                                                        |Тийм|
|monthStart	|2021.9	|Хуулга харах сарын интервалын бага утга. 1-12 хүртэл тоо утга байна.<br/> **Формат:** yyyy.MM	|Тийм|
|monthEnd	|2021.10|	Хуулга харах сарын интервалын их утга. 1-12 хүртэл тоо утга байна. <br/> **Формат:** yyyy.MM|	Үгүй|




- **Хариу тайлбар**

`Сарын интервалтай жагсаалт байна. [ ] – жагсаалтаар байна`

| Талбарын нэр                                 | Утга   |  Тайлбар | 
|------------------------------------------|-----------|--------------|
|cardNumber	       | String	|Маскласан картын дугаар|
|cardName	       | String	|Картын нэр|
|creditLimit	   | Number	|Картын лимит|
|minPmnt	       | Number	|Тухайн сард төлсөн бага дүн|
|openBal	       | Number	||
|currBal	       | Number	||
|month	           | Number	|Хуулга авсан дүн|
|**statements**	       |        | `[ ] – тухайн сард хийгдсэн гүйлгээний жагсаалт байна`|
|transactionDate	| Date	|Гүйлгээ хийгдсэн огноо.  <br/> **Формат:** Yyyy-mm-dd|
|postDate	       | Date	|Гүйлгээ баталгаажсан огноо. <br/> **Формат:** Yyyy-mm-dd |
|description	   | String	|Гүйлгээний утга|
|billingAmount	   |Number	|Нэхэмжлэхийн дүн|
|transactionAmount|	Number	|Гүйлгээний дүн|
