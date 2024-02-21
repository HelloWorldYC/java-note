---
title: 'Java FX'
---

## Java FX 启动
使用 Java FX 的时候要让 Main 继承 Application，Application 需要我们实现一个 start() 方法，并在 Main 方法中调用 launch(args) 方法，方法的参数就是 Main 方法的参数。   
```java
public class Main extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        // primaryStage 是舞台的意思，也就是窗口
        primaryStage.show();  // show() 方法显示窗口
    }
}
```

### 添加控件--按钮
```java
public class Main extends Application {
    Button button; // 定义按钮控件
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        button = new Button("按钮"); // 新建按钮控件实例
        // 要把按钮控件放到布局控件中，所以要定义一个布局控件
        StackPane stackPane = new StackPane();
        // 把按钮添加到布局控件的节点中去
        stackPane.getChildren().add(button);
        // 再把布局控件放到场景中去，所以要定义一个场景，还可以设置场景的大小
        Scene scene = new Scene(stackPane, 200, 200);
        // 把场景添加到窗口
        primaryStage.setScene(scene);
        primaryStage.show();  // show() 方法显示窗口
    }
}
```

### 添加事件
不同的控件可以有不同的事件，一旦事件触发就会由事件监听对象监听到并执行对应的行为。   
```java
public class Main extends Application {

    Button button; // 定义按钮控件
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        button = new Button("按钮"); // 新建按钮控件实例
        // 新建类的方式实现事件监听
        button.setOnMouseClicked(new MyMouseEvent()); 
        // 要把按钮控件放到布局控件中，所以要定义一个布局控件
        StackPane stackPane = new StackPane();
        // 把按钮添加到布局控件的节点中去
        stackPane.getChildren().add(button);
        // 再把布局控件放到场景中去，所以要定义一个场景，还可以设置场景的大小
        Scene scene = new Scene(stackPane, 200, 200);
        // 匿名内部类方式实例化事件监听接口，实现事件监听
        scene.setOnMousePressed(new EventHandler<MouseEvent>(){
            @Override
            public void handle(MouseEvent event) {
                System.out.println("你点击了场景");
            }
        });
        // 把场景添加到窗口
        primaryStage.setScene(scene);
        primaryStage.show();  // show() 方法显示窗口
    }
}

public class MyMouseEvent implements EventHandler<MouseEvent> {
    @Override
    public void handle(MouseEvent event) {
        System.out.println("你点击了按钮");
    }
}
```

### 切换场景
点击按钮1实现场景1切换到场景2，点击按钮2实现场景2切换到场景1，详看代码    
```java
public class Main extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        Button button1 = new Button("场景1"); 
        button1.setOnMouseClicked(new EventHandler<MouseEvent>(){
            @Override
            public void handle(MouseEvent event) {
                primaryStage.setScene(scene2);
            }
        });
        VBox vBox = new VBox();
        vBox.getChildren().add(button1);
        Scene scene1 = new Scene(vBox,200, 200);
        //---------------------------
        Button button2 = new Button("场景2");
        button2.setOnMouseClicked(new EventHandler<MouseEvent>(){
            @Override
            public void handle(MouseEvent event) {
                primaryStage.setScene(scene1);
            }
        });
        StackPane stackPane = new StackPane();
        stackPane.getChildren().add(button2);
        Scene scene2 = new Scene(stackPane, 300, 300);

        primaryStage.setScene(scene1);
        primaryStage.show();  
    }
}
```

### 弹出窗口
弹出窗口，实际上也就是切换窗口 Stage，。   
```java
public class AlertWindow {
    public static void display(String title，String msg) {
        Stage stage = new Stage();
        // 设置窗口的模式
        stage.initModality(Modality.APPLICATION_MODAL);
        Label label = new Label();
        label.setText(msg);
        Button button = new Button("关闭");
        VBox vBox = new VBox();
        vBox.getChildren().addAll(label, button);
        Scene scene = new Scene(vBox, 100, 100);
        // 设置窗口的标题
        stage.setTitle(title);
        stage.setScene(scene);
        stage.showAndWait(0);
    }
}

public class Main extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception{
        Button button = new Button("弹出窗口");
        button.setOnMouseClicked(event -> AlertWindow.display("新窗口", "我来了"));
        VBox vBox = new VBox();
        vBox.getChildren().add(button);
        Scene scene = new Scene(vBox, 200, 200);
        primaryStage.setScene(scene);
        primaryStage.show();
    }
}
```

### 建立 FXML
FXML 就是一个可视化的 Java FX 编辑工具，在 Java FX 中已经提供了。   
使用方法如下：  
1. 在使用时，新建一个 FXML 文件即可，想要添加什么控件在其中拖拽添加即可。  
2. 将 FXML 导入。  
```java
public class Main extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws Exception{
        Parent root = FXMLLoader.load(getClass().getResource("sample.fxml"));
        Scene scene = new Scene(root);
        primaryStage.setScene(scene);
        primaryStage.show();
    }
}
```