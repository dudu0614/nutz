//Nutz默认配置
{
	"EL":{
		"custom":[
			"org.nutz.el.opt.custom.Max",
			"org.nutz.el.opt.custom.Min",
			"org.nutz.el.opt.custom.Trim"
		]}
	,"MVC":{
		"localization":{
			"type": "org.nutz.mvc.impl.NutMessageLoader",
			"value":""
		},
		"iocBy":{
			"type":"org.nutz.mvc.ioc.provider.ComboIocProvider",
			"args":["*org.nutz.ioc.loader.json.JsonLoader","org/nutz/mvc/init/module/base.js",
			    	"*org.nutz.ioc.loader.annotation.AnnotationIocLoader","org.nutz.mvc.init.module"]
		},
		"setupBy":{
			"type":"org.nutz.mvc.Setup",//属性名与注解中名字不一样, 但是为了统一
			"args":[]
		}
	}
}