# github认证过程

## 基本逻辑

登陆页面跳转到github认证页面

```javascript
getGithub() {
	window.location.href ="https://github.com/login/oauth/authorize?client_id=8a98ceca42bdf7bd689e&redirect_uri=http://127.0.0.1:3000/login";
}
```

用户手动点击同意认证，github服务器会发动一个get请求到我们的服务器，其中就附带了我们需要的code参数

```javascript
var code = req.query
```

利用用户的code与服务器在github上注册时留下的client_id、client_secret 向github服务器发送一个post请求，为了获取github的access_token

```javascript
url: "https://github.com/login/oauth/access_token"
```

通过获取的access_token ，再向github服务器发送get请求，最后获得用户在github上的个人信息

```javascript
https://api.github.com/user
```

因为我做的是前后端分离，所以最后我会在拿到用户数据之后，为此用户提供一个本服务器的token，之后重定向到前端路由的/login页面

```javascript
res.redirect("http://127.0.0.1:8080/#/login?token=xxxxxxxxxxxxxxxxxxxxxxxxxx");
```

$route.query可以获取此次的token，存储到本地计算机然后再重定向到/login



## 具体设置

github点击个人信息的settings按钮

之后点击developer settings

默认会选择oauth apps，我们需要在这里注册一个认证应用

github设置参考地址：https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/