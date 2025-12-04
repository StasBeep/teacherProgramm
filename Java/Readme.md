# Java - работа кода через VS code

## Установить пакет компилятора для java
<a href="https://www.oracle.com/java/technologies/downloads/">Установщик Oracle JDK</a>

Проверка установки
```
java -version
javac -version
```

Расширения добавляют в VS Code поддержку языка, отладку, автодополнение и многое другое.

    - Откройте VS Code.

    - Перейдите во вкладку "Расширения" (Extentions, иконка с квадратиками слева).

    - Найдите и установите пакет "Extension Pack for Java" от Microsoft.

### Пример простого кода
```
import java.util.Scanner; 

public class HelloWorld {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in, "UTF-8");

        System.out.print("Введите число: ");
        double num1 = scanner.nextDouble();

        System.out.println("Ваше число: " + num1);
        
        scanner.close();
    }
}
```

для запуска исходного кода
```
javac HelloWorld.java
```
```
java HelloWorld
```

`chikli.java` - пример выполнения лабораторной работа №3 (Циклы)