$(function() {
	$("#sysTree").tree({
		url: 'menu.json',
		onClick: function(node) {
			//往选项卡添加选项卡面板
			//判断选项卡面板在tabs组件中是否存在
			if ($("#myTabs").tabs("exists", node.text)) {
				//console.debug("存在");
				//根据标题选中面板
				$("#myTabs").tabs("select", node.text);
			} else {//不存在, 添加面板
				//判断是否有配置我们的url属性
				if (node.attributes) {
					$("#myTabs").tabs("add",{
						title:node.text,
						closable:true,
						href:node.attributes.url
					});
				}
				
			}
		}
	});
});