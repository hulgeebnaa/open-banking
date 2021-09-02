---
sidebar_position: 9
---

# Хавсралт 1

| Сервис нэр                                 | Тайлбар | 
|------------------------------------------|-----------|
|LGIN	      |  Нэвтрэх сервис                     |
|ACCTINQ	   |     Дансны дэлгэрэнгүй|
|ACCTSTA	   |     Дансны хуулга|
|RETCUSTINQ	|    Иргэн харилцагчийн мэдээлэл харах|
|DBCRDORD	  |  Дебит карт захиалах|
|SOLINQ	    |    Салбарын жагсаалт авах|
|CUSTIMGUP	 |   Харилцагчийн зураг хуулах|
|RETCUSTADD	|    Иргэн харилцагч бүртгэх|
|CORPCUSTADD|	    Байгууллага бүртгэх|


## Жишээ хүсэлт илгээх



## ЖАВА програмчлалын хэл дээр жишээ код:

```java
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Hex;

public class AESEncrypt {
    public static final String DEFAULT_TYPE = "base64";
    public static String HEX = "hex";
    private final String type;
    private String sessionKey;
    private String ivKey;

    public AESEncrypt() {
        this.type = "base64";
    }

    public AESEncrypt(String type, String sessionKey, String ivKey) {
        this.type = type;
        this.sessionKey = sessionKey;
        this.ivKey = ivKey;
    }

    public String getEncryption(String string) {
        return getEncryption(this.type, string, this.sessionKey, this.ivKey);
    }

    public static String getEncryption(String string, String sessionKey, String ivKey) {
        return getEncryption("base64", string, sessionKey, ivKey);
    }

    public static String getEncryption(String type, String string, String sessionKey, String ivKey) {
        try {
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
            byte[] bytes = string.getBytes(StandardCharsets.UTF_8);
            SecretKeySpec keySpec = new SecretKeySpec(sessionKey.getBytes(StandardCharsets.UTF_8), "AES");
            IvParameterSpec ivParameterSpec = new IvParameterSpec(ivKey.getBytes(StandardCharsets.UTF_8));
            cipher.init(1, keySpec, ivParameterSpec);
            byte[] byteCipherText = cipher.doFinal(bytes);
            return getStringFromBytes(type, byteCipherText);
        } catch (Exception var9) {
            var9.printStackTrace();
            return null;
        }
    }

    public String getDecryption(String string) {
        return getDecryption(this.type, string, this.sessionKey, this.ivKey);
    }

    public static String getDecryption(String string, String sessionKey, String ivKey) {
        return getDecryption("base64", string, sessionKey, ivKey);
    }

    public static String getDecryption(String type, String string, String sessionKey, String ivKey) {
        try {
            if (string != null && !"".equals(string)) {
                Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
                SecretKeySpec keySpec = new SecretKeySpec(sessionKey.getBytes(StandardCharsets.UTF_8), "AES");
                IvParameterSpec ivParameterSpec = new IvParameterSpec(ivKey.getBytes(StandardCharsets.UTF_8));
                cipher.init(2, keySpec, ivParameterSpec);
                byte[] bytePlainText = cipher.doFinal(getBytesFromString(type, string));
                return new String(bytePlainText, StandardCharsets.UTF_8);
            } else {
                return string;
            }
        } catch (Exception var8) {
            var8.printStackTrace();
            return null;
        }
    }

    private static byte[] getBytesFromString(String type, String string) throws DecoderException {
        return type.equals("base64") ? Base64.getMimeDecoder().decode(string.getBytes(StandardCharsets.UTF_8)) : Hex.decodeHex(string);
    }

    private static String getStringFromBytes(String type, byte[] bytes) {
        return type.equals("base64") ? new String(Base64.getEncoder().encode(bytes), StandardCharsets.UTF_8) : Hex.encodeHexString(bytes);
    }
}
```


