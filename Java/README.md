# JAVA


1. [Default value](#default-value)
2. [Java String format](#java-string-format)
3. [Class of Constants](#class-of-constants)
4. [Coding to interfaces]
4. [Performance Tips](#performance-tips)

---

## Default value

| Data Type |	Default Value (for fields) |
| :---------: | :--------------------------: |
| byte | 0 |
| short | 0 |
| int	| 0 |
| long | 0L |
| float	| 0.0f |
| double | 0.0d | 
| char	| '\u0000' |
| String (or any object) | null |
| boolean	| false |


---

## Java String format
See the below [link](https://examples.javacodegeeks.com/core-java/lang/string/java-string-format-example/)


---


## Class of Constants
``` java
public final class Constants {
        public static final int ICE_CREAM_SANDWICH = 14;
        public static final int ICE_CREAM_SANDWICH_MR1 = 15;
        public static final int JELLY_BEAN = 16;
        public static final int JELLY_BEAN_MR1 = 17;
        public static final int JELLY_BEAN_MR2 = 18;
        public static final int KITKAT = 19;
        public static final int KITKAT_WATCH = 20;
        public static final int LOLLIPOP = 21;
        public static final int LOLLIPOP_MR1 = 22;

        public Constants() {
            throw new RuntimeException("Stub!");
        }
    }
```

---

## Performance Tips
#### String vs StringBuilder
``` java
// Circa 8secondi
String string = "hello";
for (int i = 0; i < 10000; i++) {
    string += " world";
}

// Meno di 5ms
StringBuilder sb = new StringBuilder("hello");
for (int i = 0; i < 10000; i++) {
    sb.append(" world");
}
String string = sb.toString();
```
[Source](https://www.toptal.com/android/android-performance-tips-tools)

---

## Coding to interfaces


---

