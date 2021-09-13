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

}
```
