$(function() {
    $( "#tabs" ).tabs();
    $( "#tabs_inter" ).tabs({
        collapsible: true
    });
    $( document ).tooltip({
        track: true, hide: {duration: 0}
        ,position: { my: "left-20 top+25", at: "right bottom" }
    });
});
function changePadding() { // used in document.ready for elements in filter, and in showTable for colums in result
    $("div[class^='col-']").css("padding-left","5px").css("padding-right","0");
};
function changeInputSize() {
    if ($(window).width()<751 || window.innerWidth<768) {
        for (let i = 0; i < 4; i++) {
            $(".input-group .form-control")[i].style.height = '42px';
            $(".input-group .form-control")[i].style.fontSize = '1.05em';
            $(".input-group .input-group-btn")[i].style.fontSize = '1em';
            $(".input-group .input-group-btn .btn")[i].style.height = '42px';
            $(".input-group .input-group-btn .btn")[i].style.width = '40px';
            $(".clear")[i].style.right = '50px';
            $(".clear")[i].style.margin = '13px 0 0 -20px';
            $("div[id^='filter_']")[i].style.margin = "0 -11px";
        };
    };
};
function clickCopy(content) {
    if (content.length == 0) {
        return 1;
    };
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
    if(getSelectedTabId%2==1){ 
        toast("Copied: "+content, 700);
    }
    else{
        toast("已复制: "+content, 700);
    };
};

function gotoid(idname){
    var _targetTop = $('#'+idname).offset().top;//获取位置
    jQuery("html,body").animate({scrollTop:_targetTop},300);//跳转
};
    
var example_zz = ["带山和水的词","最好的人","高调地宣布","两个人非常相爱","形容声音好听"];
var example_ze = ["特别好","大声叫嚷","开飞机的人"];
var example_ee = ["sleep too much","road where cars go fast","very good"];
var example_ez = ["get up very early","road where cars go fast","not happy"];
var prompt_z = "请输入描述，或直接点击🔍查看示例";
var prompt_e = "Enter a description or click 🔍 directly to see an example";

$(document).ready(function(){ // 必须有这一行，在页面加载之后执行，否则无效。
    changePadding();
    changeInputSize();
    $('a.pop0').unbind("click").click(function(){ //.unbind("click") 部分解决（点词条重复触发的问题解决，但重新查询后重新触发还存在）重复绑定click从而重复触发click事件的问题【解决不易，这个很重要】
        $('a.pop0').popover({ trigger: "manual" , html: true, animation:false})
            .on("mouseover", function () {
                var _this = this;
                $(this).unbind("click").click(function () { //.unbind("click") 部分解决（同上）重复绑定click从而重复触发click事件的问题【解决不易，这个很重要】
                    $(this).popover("show");
                    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 记录点击结果。
                    var description = $("#description").val();
                    //console.log($(_this).text()+"||"+description);
                    $.get("/feedback/", { 'content': $(_this).text()+"||"+description, 'mode': 'FBW' });
                    $(".popover").on("mouseleave", function () { //【解决不易，这个很重要】
                        $(_this).popover('hide'); 
                    });
                });
            }).on("mouseout", function () { //mouseleave也有问题，在弹框里出现tip时，指针移到tip上就相当于离开目标了，此时弹框会消失（按需求是不应该消失的）
                var _this = this;
                setTimeout(function () {
                    if (!$(".popover:hover").length) {
                        $(_this).popover("hide");
                        if ($(window).width()>768) { //手机端不能加这一条，会发生框只闪一下而不显示的问题。【解决不易，这个很重要】
                            $("div.popover").hide(); //清理卡死的popover弹框
                        }
                    }
                }, 200);
            });
    });
    $('a.pop1').unbind("click").click(function(){ //.unbind("click") 部分解决（点词条重复触发的问题解决，但重新查询后重新触发还存在）重复绑定click从而重复触发click事件的问题【解决不易，这个很重要】
        $('a.pop1').popover({ trigger: "manual" , html: true, animation:false})
            .on("mouseover", function () {
                var _this = this;
                $(this).unbind("click").click(function () { //.unbind("click") 部分解决（同上）重复绑定click从而重复触发click事件的问题【解决不易，这个很重要】
                    $(this).popover("show");
                    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 记录点击结果。
                    var description = $("#description_EE").val();
                    //console.log($(_this).text()+"||"+description);
                    $.get("/feedback/", { 'content': $(_this).text()+"||"+description, 'mode': 'FBW' });
                    $(".popover").on("mouseleave", function () { //【解决不易，这个很重要】
                        $(_this).popover('hide'); 
                    });
                });
            }).on("mouseout", function () { //mouseleave也有问题，在弹框里出现tip时，指针移到tip上就相当于离开目标了，此时弹框会消失（按需求是不应该消失的）
                var _this = this;
                setTimeout(function () {
                    if (!$(".popover:hover").length) {
                        $(_this).popover("hide");
                        if ($(window).width()>768) { //手机端不能加这一条，会发生框只闪一下而不显示的问题。【解决不易，这个很重要】
                            $("div.popover").hide(); //清理卡死的popover弹框
                        }
                    }
                }, 200);
            });
    });
    $('a.pop2').unbind("click").click(function(){ //.unbind("click") 部分解决（点词条重复触发的问题解决，但重新查询后重新触发还存在）重复绑定click从而重复触发click事件的问题【解决不易，这个很重要】
        $('a.pop2').popover({ trigger: "manual" , html: true, animation:false})
            .on("mouseover", function () {
                var _this = this;
                $(this).unbind("click").click(function () { //.unbind("click") 部分解决（同上）重复绑定click从而重复触发click事件的问题【解决不易，这个很重要】
                    $(this).popover("show");
                    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 记录点击结果。
                    var description = $("#description_CE").val();
                    //console.log($(_this).text()+"||"+description);
                    $.get("/feedback/", { 'content': $(_this).text()+"||"+description, 'mode': 'FBW' });
                    $(".popover").on("mouseleave", function () { //【解决不易，这个很重要】
                        $(_this).popover('hide'); 
                    });
                });
            }).on("mouseout", function () { //mouseleave也有问题，在弹框里出现tip时，指针移到tip上就相当于离开目标了，此时弹框会消失（按需求是不应该消失的）
                var _this = this;
                setTimeout(function () {
                    if (!$(".popover:hover").length) {
                        $(_this).popover("hide");
                        if ($(window).width()>768) { //手机端不能加这一条，会发生框只闪一下而不显示的问题。【解决不易，这个很重要】
                            $("div.popover").hide(); //清理卡死的popover弹框
                        }
                    }
                }, 200);
            });
    });
    $('a.pop3').unbind("click").click(function(){ //.unbind("click") 部分解决（点词条重复触发的问题解决，但重新查询后重新触发还存在）重复绑定click从而重复触发click事件的问题【解决不易，这个很重要】
        $('a.pop3').popover({ trigger: "manual" , html: true, animation:false})
            .on("mouseover", function () {
                var _this = this;
                $(this).unbind("click").click(function () { //.unbind("click") 部分解决（同上）重复绑定click从而重复触发click事件的问题【解决不易，这个很重要】
                    $(this).popover("show");
                    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 记录点击结果。
                    var description = $("#description_EC").val();
                    //console.log($(_this).text()+"||"+description);
                    $.get("/feedback/", { 'content': $(_this).text()+"||"+description, 'mode': 'FBW' });
                    $(".popover").on("mouseleave", function () { //【解决不易，这个很重要】
                        $(_this).popover('hide'); 
                    });
                });
            }).on("mouseout", function () { //mouseleave也有问题，在弹框里出现tip时，指针移到tip上就相当于离开目标了，此时弹框会消失（按需求是不应该消失的）
                var _this = this;
                setTimeout(function () {
                    if (!$(".popover:hover").length) {
                        $(_this).popover("hide");
                        if ($(window).width()>768) { //手机端不能加这一条，会发生框只闪一下而不显示的问题。【解决不易，这个很重要】
                            $("div.popover").hide(); //清理卡死的popover弹框
                        }
                    }
                }, 200);
            });
    });
    /*//检测浏览器版本
    var browser=navigator.appName;
    var b_version=navigator.appVersion;
    var version=parseFloat(b_version);
    console.log(browser);
    console.log(b_version);
    console.log(version);*/
    /*//临时显示二维码
    var tabs = document.getElementById("tabs");
    if ($(window).width()>768) { //手机端不加二维码
        //$("#tabs").append('<div align="center"><img src="https://wantwords.thunlp.org/static/image/QR.png" alt="Wantwords.thunlp.org" style="margin-top: 5px;"/></div>');
        $("#tabs").append('<a href="#" id="toTop" style="position:fixed;right:50px;bottom:100px;"><img style="height:150px" src="../static/image/QR.png"></img></a>');
    }*/
    const imgs = [
        //"../static/image/copy.svg",
        //"../static/image/copy-.svg",
        "../static/image/copy+.svg",
        //"../static/image/like.svg",
        //"../static/image/like-.svg",
        //"../static/image/hate.svg",
        //"../static/image/hate-.svg",
    ];
    let len = imgs.length;
    for (let i = 0; i < len; i++) {
        let imgObj = new Image(); 
        imgObj.src = imgs[i];
        imgObj.addEventListener('load', function () { 
            ;//console.log('imgs' + i + 'OK');
        }, false);
    };
    $("footer").before('<div id="light" class="pop_win" style="display: none/*flex*/;position: absolute;top: 10%;left: 20%;width: 60%;height: 75%;padding: 10px;background-color: #FBFBFB;z-index: 9999;border-radius: 10px;flex-direction: column;"><div><a href="javascript:void(0)" onclick="closeWin();" style="float: right;background: #FBFBFB; border: 0; border-radius: 0; box-shadow: none; cursor: pointer; display: inline-block; height: 24px; margin: 0; position: relative; transition: color .2s; vertical-align: top; visibility: inherit; width: 30px;" class="fancybox-button fancybox-button--close" aria-label="关闭"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path></svg></a></div><div style="padding: 30px; padding-top: 0; overflow-y: scroll;"> <h3 style="text-align: center; margin-top: 0; font-size: 20px;">📢 来自研发团队的一封信</h3> <br> <p>致打开万词王的你：</p> <div> <p>&emsp;&emsp;我们是来自清华大学计算机系自然语言处理实验室（THUNLP）的万词王研发团队。😆</p> <p>&emsp;&emsp;非常高兴万词王突然被很多人知道和喜爱，也对近期因服务器压力过大而带来的糟糕的使用体验深表歉意！🥺</p> <p>&emsp;&emsp;因为开发经验的欠缺，也未曾预料到有如此多用户访问，所以导致了最近偶现的网站卡顿。目前我们已经加紧对服务器扩容，同时着手对网站进行重构升级以彻底解决问题（由于团队成员都不常用微博并且最近在准备论文投稿，所以有些后知后觉😅）。</p> <p>&emsp;&emsp;另外，我们在后台看到了很多反馈，其中的赞赏和鼓励让我们异常振奋和开心，当然也提出了很多有用的建议、指出了不少问题，我们都特别感谢！🙏</p> <p>&emsp;&emsp;我们深知万词王还有很大的优化空间，我们会根据大家的反馈进行改进，同时也希望更多的人参与进来一起让它变得更好用。✊</p> <p>&emsp;&emsp;如果你愿意的话，真诚欢迎你加入<b>QQ群 489825497</b> 进行交流，不管是报告问题还是提出意见或建议，我们都很欢迎。此外，我们也有若干正在实验室<b>内部开发的实用工具项目</b>，也将会在群中邀请试用。👀</p> </div> <br> <div style="text-align: right;"> <p>万词王WantWords研发团队<br>敬上</p> <p>2021年11月10日于清华大学FIT楼</p> </div> <hr> <h3>FAQ</h3>  <p><b>Q1：网站好慢！太卡了！</b></p> <p>A1：经过服务器两次扩容，现在应该好很多了，我们最近会监控服务器使用情况，尽量确保流畅使用。另外我们已经开始重构网站以支持任意高并发访问。</p>  <p><b>Q2：XX词结果不对，和输入的描述没关系</b></p> <p>A2：因为反向查词模型训练数据以及性能所限，很难避免查出不太相关甚至特别离谱的词。一方面需要大家多多对查词结果点赞或踩来帮助我们更好地训练模型，另一方面我们也会考虑优化模型和词表，提高查词精确度。</p>  <p><b>Q3：XX词的定义/字形/拼音等有错误</b></p> <p>A3：现有的词语信息均来自于网络词典，如果你发现某个词的基本信息存在错误，请点击“上报错误”来进行反馈，我们会收集一波反馈后集中修正。</p>  <p><b>Q4：是否会出一个APP/小程序？</b></p> <p>A4：如果大家确实有很大的需求，我们会认真考虑！当然我们团队几乎没有APP/小程序开发经验，如果有人愿意提供帮助甚至参与开发，可以通过微信联系岂凡超（微信号：fanchao_qi）。</p>  <p><b>Q5：目前的TODO有哪些？</b></p> <p>A5：除了重构网站之外，还有（1）一键复制特定词语；（2）保留查询历史</p>  <p><b>Q6：开个捐款渠道吧，好给你们买服务器</b></p> <p>A6：谢谢好意，特别感动！不过我们现阶段还是能买得起服务器的，未来也会考虑通过更成熟的方式维持万词王的正常运营和迭代更新。</p> <br></div></div>');
    $("footer").before('<div id="light_v2" class="pop_win" style="display: none/*flex*/;position: absolute;top: 10%;left: 20%;width: 60%;height: 75%;padding: 10px;background-color: #FBFBFB;z-index: 9990;border-radius: 10px;flex-direction: column;"><div><a href="javascript:void(0)" onclick="closeWin_v2();" style="float: right;background: #FBFBFB; border: 0; border-radius: 0; box-shadow: none; cursor: pointer; display: inline-block; height: 24px; margin: 0; position: relative; transition: color .2s; vertical-align: top; visibility: inherit; width: 30px;" class="fancybox-button fancybox-button--close" aria-label="关闭"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path></svg></a></div><div style="padding: 30px; padding-top: 0; overflow-y: scroll;"> <h3 style="text-align: center; margin-top: 0; font-size: 20px;">📢 来自研发团队的第二封信</h3> <br> <p>致打开万词王的你：</p> <div> <p>&emsp;&emsp;你好呀，我们还是来自清华大学计算机系自然语言处理实验室（<a href="http://nlp.csai.tsinghua.edu.cn/" target="_blank"><b>THUNLP</b></a>）的万词王研发团队。😆</p> <p>&emsp;&emsp;最近万词王被越来越多的人知道和使用，在后台也看到访问量不断增加，一方面我们非常高兴和自豪——我们的研究成果得以落地并帮到了更多人，尤其是得知万词王能被用在各种各样的场景，包括做PPT、发朋友圈、翻译，甚至是给宝宝和盲盒新产品起名，很多超出了我们的想象。 🤣</p> <p>&emsp;&emsp;另一方面我们也颇感忐忑不安，在解决完服务器压力的问题后，又面临很多新的挑战，比如敏感词的处理、爬虫导致的异常并发访问（虽然感觉很奇怪，项目已经开源而且我们这个也没啥好爬的吧🤔），以及解决大家提出的很多有意思的需求。而我们的开发经验还十分有限，也同时有很多科研任务，<span style="text-decoration: line-through;">承受了这个年纪不该承受的压力，</span>大部分时候只能利用闲暇时间快速学习以应对这些挑战。</p> <p>&emsp;&emsp;但令我们十分荣幸和感动的是，有很多热心网友主动联系我们愿意提供各方面的帮助，他们来自天南海北，有着不同的职业或身份，但无一不满腔热忱、急公好义。无论是精神上还是实际上，他们都提供了巨大的鼓舞和支持。💪</p> <p>&emsp;&emsp;而我们也为之振奋，并定了一个小目标：将万词王打造成<b>中文互联网最好用的免费查词工具</b>。一方面完善现有功能，提高性能；另一方面增加更多查词的功能，以适用于更多场景。我们也欢迎有更多人加入进来，无论是参与设计&开发，还是提出需求，反馈问题、意见或建议，希望能在大家的共同努力下实现这个目标。✊</p> <p>&emsp;&emsp;最后，也欢迎你加入QQ群（群号489825497）或微信群（请添加小助手微信：prodigal_910，注明“万词王用户”后等待拉你进群，如果等待10分钟后没有响应可再添加：aidududedaba422。注意小助手只负责拉群，有问题可以进群后在群里提出或者联系群主）。除了围绕万词王进行交流之外，我们也有若干正在实验室内部开发的实用工具项目，会在群中邀请试用。👀</p> </div> <br> <div style="text-align: right;"> <p>万词王WantWords研发团队<br>敬上</p> <p>2021年12月16日于清华大学紫荆公寓</p> </div> <hr> <h3>FAQ</h3>  <p><b>Q1：XX词结果不对，和输入的描述没关系/意思相反</b></p> <p>A1：因为反向查词模型训练数据以及性能所限，很难避免查出不太相关甚至特别离谱的词。一方面需要大家多多对查词结果点赞或踩来帮助我们更好地训练模型，另一方面我们也会考虑优化模型和词表，提高查词精确度。</p>  <p><b>Q2：XX词的定义/字形/拼音等有错误</b></p> <p>A2：现有的词语信息均来自于网络词典，如果你发现某个词的基本信息存在错误，请点击“上报错误”来进行反馈，我们会收集一波反馈后集中修正。</p>  <p><b>Q3：是否会出一个APP/小程序？</b></p> <p>A3：在热心网友的帮助下，小程序和APP的开发已经在进行中了！敬请大家期待。过渡期间大家可以在浏览器收藏本网站，同时可以参考<a href="https://zhuanlan.zhihu.com/p/54907494" target="_blank"><b>此文章</b></a>把网页放在手机桌面上（iOS和Android均可）。</p>  <p><b>Q4：目前的项目更新进展如何？</b></p> <p>A4：请访问<a href="https://hieh97blhp.feishu.cn/docs/doccnoH9ncCZspo2Ubx79bpZ0Lh" target="_blank"><b>此文档</b></a>查看我们的更新历史、迭代进展和规划（包括万词王以及其他项目）。</p>  <p><b>Q5：想为此项目做贡献？</b></p> <p>A5：你可以（1）经常在词语弹出的浮窗点👍或👎；（2）在页面最下方“反馈推荐词”或”反馈意见建议“；（3）参与我们的<a href="https://jinshuju.net/f/BXkRsZ?x_field_1=web2" target="_blank"><b>用户调研</b></a>；（4）如果你有相对充裕的时间和相对丰富的设计&开发经验，并且愿意参与设计&开发，请联系岂凡超（微信号：fanchao_qi）。</p>  <p><b>Q6：开个捐款渠道吧，好给你们买服务器</b></p> <p>A6：谢谢好意，特别感动！不过我们现阶段还是能买得起服务器的，未来也会考虑通过更成熟的方式维持万词王的正常运营和迭代更新。</p>  <p><b>Q7：第一封信呢？</b></p> <p>A7：在<a href="javascript:void(0)" onclick="popWin();"><b>这</b></a> 😃。</p><br></div></div> <div id="fade" class="black_overlay" style="background-color: rgba(34, 34, 34, 0.78); display: none; position: absolute; top: 0%; left: 0%; width: 100%; height: 100%; z-index: 9000; -moz-opacity: 0.8; opacity: .80; filter: alpha(opacity=78);"></div>');
    $('.navbar-nav>li.active').before('<li id="msg"><a href="javascript:void(0)" onclick="popWin_v2();" style="color: red;">📢 来自研发团队的第二封信<span class="badge bg-danger" style="background-color: #f44336;position:relative;top:-2mm;left:-1mm;">1</span></a></li>');
    $("body > div.visible-xs > nav > div > div").append('<div style="position: relative;float: right;left: 27%;"><a href="javascript:void(0)" onclick="popWin_v2();" style="color: red;">📢 来自研发团队的第二封信<span class="badge bg-danger" style="background-color: #f44336;position:relative;top:-2mm;left:-1mm;">1</span></a></div>');
    if (localStorage.getItem("readv2")=="Y") {
        $(".badge").remove();
    }else {        
        ;
    };
    
    document.getElementById("description").placeholder=prompt_z;
    document.getElementById("description_CE").placeholder=prompt_z;
    document.getElementById("description_EE").placeholder=prompt_e;
    document.getElementById("description_EC").placeholder=prompt_e;
});
/*
$(function () { //右下角的二维码显示与消失（参考“回到顶部”功能）
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $('#toTop').fadeIn(1000)
        } else {
            $('#toTop').fadeOut(1000)
        }
    })
})*/
function popWin() {
    document.getElementById('light').style.display = 'flex';
    if ($(window).width()<751 || window.innerWidth<768) {
        document.getElementById('light').style.left = '5%';
        document.getElementById('light').style.width = '90%';
        document.getElementById('light').style.height = '85%';
    };
};
function popWin_v2() {
    document.getElementById('light_v2').style.display = 'flex';
    document.getElementById('fade').style.display = 'block';
    if ($(window).width()<751 || window.innerWidth<768) {
        document.getElementById('light_v2').style.left = '5%';
        document.getElementById('light_v2').style.width = '90%';
        document.getElementById('light_v2').style.height = '85%';
    };
};

function closeWin() {
    document.getElementById('light').style.display = 'none';
};
function closeWin_v2() {
    document.getElementById('light_v2').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    localStorage.setItem("readv2", "Y"); //localStorage.removeItem("read");
    $(".badge").remove();
};

function toast(msg, duration) {
    duration = isNaN(duration) ? 500 : duration;
    let m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
    document.body.appendChild(m);
    setTimeout(function () {
        let d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(m)
        }, d * 700);
    }, duration);
};

function showdefi(id) {
    if (document.getElementById(id).children[1].style.display == "none") {
        document.getElementById(id).children[1].style.display = "block";
        document.getElementById(id).children[0].textContent = document.getElementById(id).children[0].textContent.replace("查看","收起").replace("view","hide");
    } else {
        document.getElementById(id).children[1].style.display = "none";
        document.getElementById(id).children[0].textContent = document.getElementById(id).children[0].textContent.replace("收起","查看").replace("hide","view");
    };
};



//<!--反馈信息的获取-->
var getSelectedTabId = 0;
$(function () { 
    $('#tabs').tabs({
        activate: function (event, ui) {
            var activeTab = $('#tabs').tabs('option', 'active');
            getSelectedTabId = activeTab;
            if (activeTab==1) {getSelectedTabId = 2;} else if (activeTab==2) {getSelectedTabId = 1};
            // 适配英文界面
            if (getSelectedTabId%2==1) {
                $("#id_clk1").attr("value","Propose Appropriate Words");
                $("#id_clk2").attr("value","Make Suggestions");
                $("#id_home").text("Home Page");
                $("#id_about").attr("href","../about_en/").text("About Us");
                $("#id_link").text("GitHub Link");
                $("#idm_home").html('<span class="glyphicon glyphicon-home"></span> Home');
                $("#idm_about").html('<img src="../static/image/about.png" height="15" style="margin-bottom: 3px;" /> About Us');
                $("#idm_about").attr("href","../about_en/");
                //$("#idm_link").html('<img src="../static/image/github.png" height="15" style="margin-bottom: 3px;" /> GitHub');
                //$("#idm_link").text("GitHub Link");
                $("#msg").hide();
            }
            else {
                $("#id_clk1").attr("value","点此反馈推荐词");
                $("#id_clk2").attr("value","点此反馈意见建议");
                $("#id_home").text("反向词典主页");
                $("#id_about").attr("href","../about/").text("关于我们");
                $("#id_link").text("GitHub链接");
                $("#idm_home").html('<span class="glyphicon glyphicon-home"></span> 主页');
                $("#idm_about").html('<img src="../static/image/about.png" height="15" style="margin-bottom: 3px;" /> 关于我们');
                $("#idm_about").attr("href","../about/");
                //$("#idm_link").text("GitHub链接");
                //$("#idm_link").html('<img src="../static/image/github.png" height="15" style="margin-bottom: 3px;" /> GitHub');
                $("#msg").show();
            };
        }
    });
})

function diagWord() {
    if (getSelectedTabId%2==0) {
        $("#modal_label").text(" 您认为与您描述的语义相近的词:");
        $("#modal_content")[0].setAttribute("placeholder","在这里写下您推荐的词...");
        $("#modal_content")[0].value = '';
        $("#modal_close").text("放弃");
        $("#modal_submit").text("提交");
    }
    else {
        $("#modal_label").text(" Any appropriate words in your opinion:");
        $("#modal_content")[0].setAttribute("placeholder","Enter your words here...");
        $("#modal_content")[0].value = '';
        $("#modal_close").text("Close");
        $("#modal_submit").text("Submit");
    };
    $("#modal_submit")[0].setAttribute("onclick","submitWord()");
    $("#modal").modal({backdrop: 'static'});
}
function submitWord() {
    $("#modal").modal('hide');
    var str = $("#modal_content")[0].value;
    if (str!="" && str!=null) {
        if (getSelectedTabId%2==0) {
            toast('谢谢您的反馈!', 1000);
        }
        else {
            toast('Thank you!', 1000);
        };
        if (getSelectedTabId==0) {
            var description = $("#description").val();
        }
        else if (getSelectedTabId==1) {
            var description = $("#description_EE").val();
        }
        else if (getSelectedTabId==2) {
            var description = $("#description_CE").val();
        }
        else if (getSelectedTabId==3) {
            var description = $("#description_EC").val();
        }
        else {
            var description = "unkown tabs";
        };
        $.get("/feedback/", { 'content': str+"|||"+description, 'mode': 'FBW' });
    }
}
function diagError(i) {
    var word = $("#tabs-"+(getSelectedTabId+1).toString()+" #li"+i).text();
    if (getSelectedTabId%2==0) {
        $("#modal_label").text(" 关于词“"+word+"”的错误信息：");
        $("#modal_content")[0].setAttribute("placeholder","在这里写下具体错误内容...");
        $("#modal_content")[0].value = '';
        $("#modal_close").text("放弃");
        $("#modal_submit").text("提交");
    }
    else {
        $("#modal_label").text(' Errors about the word "'+word+'":');
        $("#modal_content")[0].setAttribute("placeholder","Enter the errors here...");
        $("#modal_content")[0].value = '';
        $("#modal_close").text("Close");
        $("#modal_submit").text("Submit");
    };
    $("#modal_submit")[0].setAttribute("onclick","submitError(\'"+word+"\')");
    $("#modal").modal({backdrop: 'static'});
}
function submitError(word) {
    $("#modal").modal('hide');    
    var str = $("#modal_content")[0].value;
    if (str!="" && str!=null) {
        if (getSelectedTabId%2==0) {
            toast('谢谢您的反馈!', 1000);
        }
        else {
            toast('Thank you!', 1000);
        };
        str = "ERROR: " + word + ": " + str;
        $.get("/feedback/", { 'content': str, 'mode': 'FBS' });
    }
}
function diagSuggest() {
    if (getSelectedTabId%2==0) {
        $("#modal_label").text(" 您对网站有何意见或建议？");
        $("#modal_content")[0].setAttribute("placeholder","在这里写下您的意见建议...");
        $("#modal_content")[0].value = '';
        $("#modal_close").text("放弃");
        $("#modal_submit").text("提交");
    }
    else {
        $("#modal_label").text(" Any suggestions about this website?");
        $("#modal_content")[0].setAttribute("placeholder","Enter your suggestions here...");
        $("#modal_content")[0].value = '';
        $("#modal_close").text("Close");
        $("#modal_submit").text("Submit");
    };
    $("#modal_submit")[0].setAttribute("onclick","submitSuggest()");
    $("#modal").modal({backdrop: 'static'});
}
function submitSuggest() {
    $("#modal").modal('hide');
    var str = $("#modal_content")[0].value;
    if(str!="" && str!=null) {
        if (getSelectedTabId%2==0) {
            toast('谢谢您的建议！', 1000);
        }
        else {
            toast('Thank you for your suggestion!', 1000);
        };
        $.get("/feedback/", { 'content': str, 'mode': 'FBS' });
    }
}

function addTag(i, m) {
    if (getSelectedTabId==0) {
        var word = $("#tabs-1 #li"+i).text();
        var description = $("#description").val();
        var elemA = $("#tabs-1 #li"+i);
        var elemD = $("#tabs-1 #li"+i+" span");
        var elemU = $("#tabs-1 #li"+i+" span.glyphicon.glyphicon-thumbs-up");
        var elemN = $("#tabs-1 #li"+i+" span.glyphicon.glyphicon-thumbs-down");
    }
    else if (getSelectedTabId==1) {
        var word = $("#tabs-2 #li"+i).text();
        var description = $("#description_EE").val();
        var elemA = $("#tabs-2 #li"+i);
        var elemD = $("#tabs-2 #li"+i+" span");
        var elemU = $("#tabs-2 #li"+i+" span.glyphicon.glyphicon-thumbs-up");
        var elemN = $("#tabs-2 #li"+i+" span.glyphicon.glyphicon-thumbs-down");
    }
    else if (getSelectedTabId==2) {
        var word = $("#tabs-3 #li"+i).text();
        var description = $("#description_CE").val();
        var elemA = $("#tabs-3 #li"+i);
        var elemD = $("#tabs-3 #li"+i+" span");
        var elemU = $("#tabs-3 #li"+i+" span.glyphicon.glyphicon-thumbs-up");
        var elemN = $("#tabs-3 #li"+i+" span.glyphicon.glyphicon-thumbs-down");
    }
    else if (getSelectedTabId==3) {
        var word = $("#tabs-4 #li"+i).text();
        var description = $("#description_EC").val();
        var elemA = $("#tabs-4 #li"+i);
        var elemD = $("#tabs-4 #li"+i+" span");
        var elemU = $("#tabs-4 #li"+i+" span.glyphicon.glyphicon-thumbs-up");
        var elemN = $("#tabs-4 #li"+i+" span.glyphicon.glyphicon-thumbs-down");
    }
    else {
        return null;
    };
    if (m==2) {
        if (elemU.length==1) {elemD.remove();}
        else {elemD.remove();elemA.append("<span style=\"color: red\" class=\"glyphicon glyphicon-thumbs-up\"></span>")}
    }
    else if (m==1) {elemD.remove()}
    else if (m==0) {
        if (elemN.length==1) {elemD.remove();}
        else {elemD.remove();elemA.append("<span class=\"glyphicon glyphicon-thumbs-down\"></span>")}
    };
    str = word + "|" + m;
    $.get("/feedback/", { 'content': str+"|||"+description, 'mode': 'FBW' });
}
function clearAlert() {
    var selID = getSelectedTabId + 1;
    var elem = $("#tabs-" + selID +" .alert");
    elem.remove();
    //elem.slideUp("fast");
    $("div.popover").hide(); //清理卡死的popover弹框
}

function clearFilter() {
    var selID = getSelectedTabId + 1;
    clearAlert();
    if (selID==1) {
        try {
            $("#filter_CN div").find("*").removeAttr("disabled");
            if ($("#description").val()=="") {
                $('#result').html("");
            }
            else {
                if ($("#description").val()==description_backup) {
                    showTable(retData_backup, $('#result'));
                }
                else {
                    modelProcecss();
                };
            };
        }
        catch(err) {
            $('#result').html("");
        };                            
        $("#filter_CN div").find("*").val(this.defaultValue).css("background-color", "");
        $("#filter_CN div.visible-xs").find("#POS_select_CC")[0].selectedIndex = 0;
        $("#filter_CN div.visible-lg").find("#POS_select_CC")[0].selectedIndex = 0;
        $("#filter_CN div.visible-xs").find("#main_select")[0].selectedIndex = 0;
        $("#filter_CN div.visible-lg").find("#main_select")[0].selectedIndex = 0;
        $("#filter_CN div.visible-xs").find("#rhyme_select_CC")[0].selectedIndex = 0;
        $("#filter_CN div.visible-lg").find("#rhyme_select_CC")[0].selectedIndex = 0;
    }
    else if (selID==2) {
        try {
            $("#filter_EE div").find("*").removeAttr("disabled");
            if ($("#description_EE").val()=="") {
                $('#result_EE').html("");
            }
            else {
                if ($("#description_EE").val()==description_backup_EE) {
                    showTable(retData_backup_EE, $('#result_EE'));
                }
                else {
                    modelProcecss_EE();
                };
            };
        }
        catch(err) {
            $('#result_EE').html("");
        };                            
        $("#filter_EE div").find("*").val(this.defaultValue).css("background-color", "");
        $("#filter_EE div.visible-xs").find("#POS_select_EE")[0].selectedIndex = 0;
        $("#filter_EE div.visible-lg").find("#POS_select_EE")[0].selectedIndex = 0;
        $("#filter_EE div.visible-xs").find("#main_select_EE")[0].selectedIndex = 0;
        $("#filter_EE div.visible-lg").find("#main_select_EE")[0].selectedIndex = 0;
    }
    else if (selID==3) {
        try {
            $("#filter_CE div").find("*").removeAttr("disabled");
            if ($("#description_CE").val()=="") {
                $('#result_CE').html("");
            }
            else {
                if ($("#description_CE").val()==description_backup_CE) {
                    showTable(retData_backup_CE, $('#result_CE'));
                }
                else {
                    modelProcecss_CE();
                };
            };
        }
        catch(err) {
            $('#result_CE').html("");
        };                            
        $("#filter_CE div").find("*").val(this.defaultValue).css("background-color", "");
        $("#filter_CE div.visible-xs").find("#POS_select_CE")[0].selectedIndex = 0;
        $("#filter_CE div.visible-lg").find("#POS_select_CE")[0].selectedIndex = 0;
        $("#filter_CE div.visible-xs").find("#main_select_CE")[0].selectedIndex = 0;
        $("#filter_CE div.visible-lg").find("#main_select_CE")[0].selectedIndex = 0;
    }
    else if (selID==4) {
        try {
            $("#filter_EC div").find("*").removeAttr("disabled");
            if ($("#description_EC").val()=="") {
                $('#result_EC').html("");
            }
            else {
                if ($("#description_EC").val()==description_backup_EC) {
                    showTable(retData_backup_EC, $('#result_EC'));
                }
                else {
                    modelProcecss_EC();
                };
            };
        }
        catch(err) {
            $('#result_EC').html("");
        };                            
        $("#filter_EC div").find("*").val(this.defaultValue).css("background-color", "");
        $("#filter_EC div.visible-xs").find("#POS_select_EC")[0].selectedIndex = 0;
        $("#filter_EC div.visible-lg").find("#POS_select_EC")[0].selectedIndex = 0;
        $("#filter_EC div.visible-xs").find("#main_select_EC")[0].selectedIndex = 0;
        $("#filter_EC div.visible-lg").find("#main_select_EC")[0].selectedIndex = 0;
        $("#filter_EC div.visible-xs").find("#rhyme_select_EC")[0].selectedIndex = 0;
        $("#filter_EC div.visible-lg").find("#rhyme_select_EC")[0].selectedIndex = 0;
    };

};


<!----------------------------全局--------------------------------->
var itemsPerCol = 20;

function htmlSuccess(str) {
    return '<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + str + '</div>';
};
function htmlInfo(str) {
    return '<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="glyphicon glyphicon-info-sign"></span></button><strong>信息：</strong>' + str + '</div>';
};
function htmlWarning(str) {
    return '<div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="glyphicon glyphicon-eye-open"></span></button><strong>警告！</strong>' + str + '</div>';
};
function htmlDanger(str) {
    return '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="glyphicon glyphicon-warning-sign"></button><strong>错误！</strong>' + str + '</div>';
};
function htmlInfo_E(str) {
    return '<div class="alert alert-info alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="glyphicon glyphicon-info-sign"></span></button><strong>Info: </strong>' + str + '</div>';
};
function htmlWarning_E(str) {
    return '<div class="alert alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="glyphicon glyphicon-eye-open"></span></button><strong>Caution! </strong>' + str + '</div>';
};
function htmlDanger_E(str) {
    return '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><span class="glyphicon glyphicon-warning-sign"></button><strong>Error! </strong>' + str + '</div>';
};

function getContent(wdData, defi, i) {
    var reg = /[āáǎàōóǒòêēéěèīíǐìūúǔùǖǘǚǜü]/g; //[āáǎàōóǒòêēéěèīíǐìūúǔùǖǘǚǜüńňǹĀÅÀö∥ɡa-zA-Z•ɑ’]
    if (defi.replace(/br/g,'').replace(/strong/g,'').search(reg)>-1) {
        var htmlCont = '<h4><strong>' + wdData['w'] + '</strong></h4>' + defi + '<HR/><label title=\'在openhownet中查看该词的义原。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['w'] + '\')&quot;>查看义原</button></label>' + '&nbsp;<label title=\'查看百度汉语中的释义。\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://hanyu.baidu.com/s?wd=' + wdData['w'] + '\')&quot;>百度汉语</button></label>' + '&nbsp;<label title=\'查找该词的同义词。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;clearFilter();$(\'#description\').val(\'' + wdData['w'] + '\');modelProcecss();&quot;>查同义词</button></label>' + '&nbsp;<label title=\'如果您发现定义、拼音等存在错误时点此反馈。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>上报错误</button></label>';
    }
    else {
        var htmlCont = '<h4><strong>' + wdData['w'] + '</strong></h4>' + wdData['p'] + '<br>' + defi + '<HR/><label title=\'在openhownet中查看该词的义原。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['w'] + '\')&quot;>查看义原</button></label>' + '&nbsp;<label title=\'查看百度汉语中的释义。\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://hanyu.baidu.com/s?wd=' + wdData['w'] + '\')&quot;>百度汉语</button></label>' + '&nbsp;<label title=\'查找该词的同义词。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;clearFilter();$(\'#description\').val(\'' + wdData['w'] + '\');modelProcecss();&quot;>查同义词</button></label>' + '&nbsp;<label title=\'如果您发现定义、拼音等存在错误时点此反馈。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>上报错误</button></label>';
    };
    return htmlCont;
};
function getTitle(i) {
    //var htmlTitle = '<div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;><label title=\'正合我意\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 2' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> 😃</span></label><label title=\'基本相关\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 1' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;>😐</span></label><label title=\'词不达意\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 0' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> 🙁</span></label></div>';
    //var htmlTitle = '<div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;><label title=\'正合我意\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 2' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> <span class=&quot;glyphicon glyphicon-thumbs-up&quot;></span></label><label title=\'词不达意\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 0' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> <span class=&quot;glyphicon glyphicon-thumbs-down&quot;></span></label></div>';
    var htmlTitle = '<div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;><label title=\'正合我意\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 2' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> <span class=&quot;glyphicon glyphicon-thumbs-up&quot;></span></label><label title=\'词不达意\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 0' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> <span class=&quot;glyphicon glyphicon-thumbs-down&quot;></span></label><label title=\'点击复制词语\' onclick=&quot;clickCopy(\'' + wd_data['w'] + '\')&quot; class=&quot;btn btn-primary&quot; style=&quot;float:right;background-color: #eee; color: #333;&quot;><img style=&quot;height:18px; cursor:pointer;&quot; src=&quot;../static/image/copy+.svg&quot;></label></div>';
    return htmlTitle;
};
function getContent_E(wdData, defi, i) {
    var htmlCont = '<h4><strong>' + wdData['w'] + '</strong></h4>' + defi + '<HR/><label title=\'View sememes in OpenHownet.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['w'] + '\')&quot;>Sememes</button></label>' + '&nbsp;<label title=\'Look up the word in Wiktionary.\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://en.wiktionary.org/wiki/' + wdData['w'] + '\')&quot;>Wiki</button></label>'+ '&nbsp;<label title=\'Search for synonyms of this word.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;clearFilter();$(\'#description_EE\').val(\'' + wdData['w'] + '\');modelProcecss_EE();&quot;>Synonym</button></label>' + '&nbsp;<label title=\'If there are any mistakes, you can tell us.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>Report Errors</button></label>';
    //var htmlCont = '<h4><strong>' + wdData['word'] + '</strong></h4>' + '1. <strong>adj. </strong>' + wdData['definition'] + '<br><HR/><label title=\'View sememes in OpenHownet.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['word'] + '\')&quot;>Sememes</button></label>' + '&nbsp;<label title=\'Look up the word in Wiktionary.\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://en.wiktionary.org/wiki/' + wd_data['word'] + '\')&quot;>Wikipedia</button></label>' + '&nbsp;<label title=\'If there are any mistakes, you can tell us.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>Report Errors</button></label>';
    return htmlCont;
};
function getTitle_E(i) {
    //var htmlTitle = '<div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;><label title=\'Just what I wanted\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 2' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> 😃</span></label><label title=\'So-so\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 1' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;>😐</span></label><label title=\'Not what I wanted\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 0' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> 🙁</span></label></div>';
    //var htmlTitle = '<div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;><label title=\'Just what I wanted\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 2' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> <span class=&quot;glyphicon glyphicon-thumbs-up&quot;></span></label><label title=\'Not what I wanted\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 0' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> <span class=&quot;glyphicon glyphicon-thumbs-down&quot;></span></label></div>';
    var htmlTitle = '<div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;><label title=\'Just what I wanted\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 2' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> <span class=&quot;glyphicon glyphicon-thumbs-up&quot;></span></label><label title=\'Not what I wanted\' class=&quot;btn btn-primary&quot; onclick=&quot;addTag(' + i + ', 0' + ')&quot; style=&quot;background-color: #eee; color: #333;&quot;><input type=&quot;radio&quot;> <span class=&quot;glyphicon glyphicon-thumbs-down&quot;></span></label><label title=\'Copy this word\' onclick=&quot;clickCopy(\'' + wd_data['w'] + '\')&quot; class=&quot;btn btn-primary&quot; style=&quot;float:right;background-color: #eee; color: #333;&quot;><img style=&quot;height:18px; cursor:pointer;&quot; src=&quot;../static/image/copy+.svg&quot;></label></div>';
    return htmlTitle;
};
function getContent_CE(wdData, defi, i) {
    var htmlCont = '<h4><strong>' + wdData['w'] + '</strong></h4>' + defi + '<HR/><label title=\'在openhownet中查看该词的义原。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['w'] + '\')&quot;>查看义原</button></label>' + '&nbsp;<label title=\'查看维基词典中的释义。\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://en.wiktionary.org/wiki/' + wdData['w'] + '\')&quot;>维基词典</button></label>' + '&nbsp;<label title=\'查找该词的同义词。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;$(\'a[href=#tabs-2]\').click();clearFilter();$(\'#description_EE\').val(\'' + wdData['w'] + '\');modelProcecss_EE();&quot;>查同义词</button></label>' + '&nbsp;<label title=\'如果您发现错误时请点此反馈。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>上报错误</button></label>';
    //var htmlCont = '<h4><strong>' + wdData['w'] + '</strong></h4>' + defi + '<HR/><label title=\'在openhownet中查看该词的义原。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['w'] + '\')&quot;>查看义原</button></label>' + '&nbsp;<label title=\'查看维基词典中的释义。\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://en.wiktionary.org/wiki/' + wdData['w'] + '\')&quot;>维基词典</button></label>' + '&nbsp;<label title=\'如果您发现错误时请点此反馈。\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>上报错误</button></label>';
    return htmlCont;
};
function getContent_EC(wdData, defi, i) {
    var reg = /[āáǎàōóǒòêēéěèīíǐìūúǔùǖǘǚǜüńňǹĀÅÀö∥ɡa-zA-Z•ɑ’]/g;
    
    if (defi.replace(/br/g,'').replace(/strong/g,'').search(reg)>-1) {
        var htmlCont = '<h4><strong>' + wdData['w'] + '</strong></h4>' + defi + '<HR/><label title=\'View sememes in OpenHownet.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['w'] + '\')&quot;>Sememes</button></label>' + '&nbsp;<label title=\'Look up the word in Baidu.\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://hanyu.baidu.com/s?wd=' + wdData['w'] + '\')&quot;>Baidu</button></label>' + '&nbsp;<label title=\'Search for synonyms of this word.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;$(\'a[href=#tabs-1]\').click();clearFilter();$(\'#description\').val(\'' + wdData['w'] + '\');modelProcecss();&quot;>Synonym</button></label>' + '&nbsp;<label title=\'If there are any mistakes, you can tell us.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>Report Errors</button></label>';
        //var htmlCont = '<h4><strong>' + wdData['w'] + '</strong></h4>' + defi + '<HR/><label title=\'View sememes in OpenHownet.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['w'] + '\')&quot;>Sememes</button></label>' + '&nbsp;<label title=\'Look up the word in Baidu.\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://hanyu.baidu.com/s?wd=' + wdData['w'] + '\')&quot;>Baidu</button></label>' + '&nbsp;<label title=\'If there are any mistakes, you can tell us.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>Report Errors</button></label>';
    }
    else {
        var htmlCont = '<h4><strong>' + wdData['w'] + '</strong></h4>' + wdData['p'] + '<br>' + defi + '<HR/><label title=\'View sememes in OpenHownet.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['w'] + '\')&quot;>Sememes</button></label>' + '&nbsp;<label title=\'Look up the word in Baidu.\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://hanyu.baidu.com/s?wd=' + wdData['w'] + '\')&quot;>Baidu</button></label>' + '&nbsp;<label title=\'Search for synonyms of this word.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;$(\'a[href=#tabs-1]\').click();clearFilter();$(\'#description\').val(\'' + wdData['w'] + '\');modelProcecss();&quot;>Synonym</button></label>' + '&nbsp;<label title=\'If there are any mistakes, you can tell us.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>Report Errors</button></label>';
        //var htmlCont = '<h4><strong>' + wdData['w'] + '</strong></h4>' + wdData['p'] + '<br>' + defi + '<HR/><label title=\'View sememes in OpenHownet.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;window.open(\'https://openhownet.thunlp.org/search_list.html?keyword=' + wdData['w'] + '\')&quot;>Sememes</button></label>' + '&nbsp;<label title=\'Look up the word in Baidu.\'><button class=&quot;btn btn-default  btn-sm&quot; onclick=&quot;window.open(\'https://hanyu.baidu.com/s?wd=' + wdData['w'] + '\')&quot;>Baidu</button></label>' + '&nbsp;<label title=\'If there are any mistakes, you can tell us.\'><button class=&quot;btn btn-default btn-sm&quot; onclick=&quot;diagError(' + i + ')&quot;>Report Errors</button></label>';
    };
    return htmlCont;
};
function showTable(dictList, res_elem) {
    //$('div.popover').children().hide();
    var words = '';
    for (var d in dictList) {
        words = words + ' ' + dictList[d].w;
    };
    var desti = "/GetEnDefis/";
    if ('p' in dictList[0]) {
        desti = "/GetChDefis/";
    };
    
    $.post(desti, {'w': words, 'm': getSelectedTabId}, function (ret) {
        var defis = ret.slice(0);
        var block_start = '<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">';
        var block_end = '</ol></div>';
        var html = '<div class="container"><div class="row" >';
        var i = 0;
        var num = dictList.length>100 ? 100 : dictList.length;
        for (; i<num; ){
            wd_data = dictList[i];
            if (i%itemsPerCol==0) {
                html += block_start;
                html = html + '<ol start="' + ((parseInt(i/itemsPerCol))*itemsPerCol+1).toString() + '" style="color:grey">';
            }
            if (getSelectedTabId==0) {
                if ($(window).width()<751 || window.innerWidth<768) {
                    html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle(i) + '" class="pop0" data-container="body" data-placement="auto bottom" data-toggle="popover" data-content="' + getContent(wd_data, defis[i], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
                }
                else {
                    html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle(i) + '" class="pop0" data-container="body" data-placement="auto right" data-toggle="popover" data-content="' + getContent(wd_data, defis[i], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
                };
            }
            else if (getSelectedTabId==1) {
                if ($(window).width()<751 || window.innerWidth<768) {
                    html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle_E(i) + '" class="pop1" data-container="body" data-placement="auto bottom" data-toggle="popover" data-content="' + getContent_E(wd_data, defis[i], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
                }
                else {
                    html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle_E(i) + '" class="pop1" data-container="body" data-placement="auto right" data-toggle="popover" data-content="' + getContent_E(wd_data, defis[i], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
                };
            }
            else if (getSelectedTabId==2) {
                if ($(window).width()<751 || window.innerWidth<768) {
                    html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle(i) + '" class="pop2" data-container="body" data-placement="auto bottom" data-toggle="popover" data-content="' + getContent_CE(wd_data, defis[i], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
                }
                else {
                    html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle(i) + '" class="pop2" data-container="body" data-placement="auto right" data-toggle="popover" data-content="' + getContent_CE(wd_data, defis[i], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
                };
            }
            else {
                if ($(window).width()<751 || window.innerWidth<768) {
                    html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle_E(i) + '" class="pop3" data-container="body" data-placement="auto bottom" data-toggle="popover" data-content="' + getContent_EC(wd_data, defis[i], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
                }
                else {
                    html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle_E(i) + '" class="pop3" data-container="body" data-placement="auto right" data-toggle="popover" data-content="' + getContent_EC(wd_data, defis[i], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
                };
            };
            i += 1;
            if (i%itemsPerCol==0) {
                html += block_end;
            }
        };
        clearAlert();
        res_elem.html(html);
        changePadding();
        gotoid("anchor"+(getSelectedTabId+1));
        if (getSelectedTabId%2==0 && document.cookie.indexOf("z=1")==-1) { // 通过cookie判断是否首次打开网页，仅首次打开时弹出使用建议。 参考https://blog.csdn.net/qq_41229582/article/details/80632855
            res_elem.before('<div class="alert alert-success alert-dismissable" style="font-family:STZhongsong;font-size:15px;padding-right: 12px;"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="right:0;">×</button><strong>使用建议：</strong><br>1、配合筛选器使用，效果更佳。<br>2、词语背景色的深浅代表相关度大小；相关度由AI模型计算而得，存在谬误。<br>3、一般而言，排序越靠后的词和输入描述越不相关；但排序靠前的词也可能意思相反或无关。<br>4、点击词语显示详情，在弹出框顶部可对该词点 <span class="glyphicon glyphicon-thumbs-up";></span>(正合我意) 或 <span class="glyphicon glyphicon-thumbs-down"></span>(词不达意)。<br><span class="glyphicon glyphicon-heart" style="color:red;"></span> 欢迎多反馈，将有助于为大家做出更精准的推荐服务 : )</div>');
            $(".alert").on("click", function(){$(this).slideUp("fast");});
        }
        else if (getSelectedTabId%2==1 && document.cookie.indexOf("e=1")==-1) {
            res_elem.before('<div class="alert alert-success alert-dismissable" style="font-family:STZhongsong;font-size:15px;padding-right: 12px;"><button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="right:0;">×</button><strong>Tips: </strong><br>1. Better results with filtering.<br>2. The shade of the background color represents the relevance of a word, which is computed by our AI model and might be inaccurate.<br>3. Lower-ranked words are generally less relevant to the description, while the higher-ranked ones might also have irrelevant or opposite meanings.<br>4. Click on a word to see its information. You can mark a word <span class="glyphicon glyphicon-thumbs-up"></span>(Just what I wanted) or <span class="glyphicon glyphicon-thumbs-down"></span>(Not what I wanted) in the pop-up.<br><span class="glyphicon glyphicon-heart" style="color:red;"></span> Your feedback is valuable and helpful in recommending better words : )</div>');
            $(".alert").on("click", function(){$(this).slideUp("fast");});
        };
        if (getSelectedTabId==0) {
            $('a.pop0').click();
            var t=new Date(new Date().getTime()+1000*60*60*2);  // cookie设置为1小时有效，即1小时后再次查询又会弹出使用建议
            document.cookie="z=1; expires="+t.toGMTString();
        }
        else if (getSelectedTabId==1) {
            $('a.pop1').click();
            var t=new Date(new Date().getTime()+1000*60*60*2);
            document.cookie="e=1; expires="+t.toGMTString();
        }
        else if (getSelectedTabId==2) {
            $('a.pop2').click();
            var t=new Date(new Date().getTime()+1000*60*60*2);
            document.cookie="z=1; expires="+t.toGMTString();
        }
        else {
            $('a.pop3').click();
            var t=new Date(new Date().getTime()+1000*60*60*2);
            document.cookie="e=1; expires="+t.toGMTString();
        }
        //$('a.pop').click(); // 这里是用于对新生成的html进行绑定，因为HTML是静态代码，页面生成时绑定了js和html的关系（执行了js代码一次），但是这个新生成的html不被当时的js代码绑定，所以这里再执行一次js代码。
        //$('div.popover').children().hide();
        $('div.popover').hide();
        
    });
};

function showTable_Cluster(dictList, res_elem) {
    var block_start = '<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">';
    var block_end = '</ul></div>';
    var html = '<div class="container"><div class="row" >';
    var i = 0;
    var num = dictList.length;
    var itemsPerCol_ = 10;
    var count = 0;
    var Class = 0;
    var addFlag = true;
    for (; i<num; ){
        wd_data = dictList[i];
        /*if (count==itemsPerCol_){
            if (addFlag) {
                html += block_end;
            };
            if (Class-1==wd_data['C']) {
                i += 1;
                addFlag = false;
                continue;
            }
            else {
                addFlag = true;
                count = 0;
            };
        };*/
        if (Class==wd_data['C']) {
            if (Class>0) {
                html += block_end;
                count = 0;
            };
            Class += 1;
            html += block_start;
            html = html + '<ul style="color:grey;">';
        }
        //if ('p' in wd_data) { // 中文里有 wd_data['pinyin']。
        if (getSelectedTabId==0) {
            $("#filter_CN div").find("input").attr("disabled", "disabled");
            $("#filter_CN div.visible-xs").find("#POS_select_CC").attr("disabled", "disabled");
            $("#filter_CN div.visible-lg").find("#POS_select_CC").attr("disabled", "disabled");
            $("#filter_CN div.visible-xs").find("#rhyme_select_CC").attr("disabled", "disabled");
            $("#filter_CN div.visible-lg").find("#rhyme_select_CC").attr("disabled", "disabled");
            if ($(window).width()<751 || window.innerWidth<768) {
                html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle(i) + '" class="pop0" data-container="body" data-placement="auto bottom" data-toggle="popover" data-content="' + getContent(wd_data, wd_data['d'], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
            }
            else {
                html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle(i) + '" class="pop0" data-container="body" data-placement="auto right" data-toggle="popover" data-content="' + getContent(wd_data, wd_data['d'], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
            }
        }
        else if (getSelectedTabId==1) {
            $("#filter_EE div").find("input").attr("disabled", "disabled");
            $("#filter_EE div.visible-xs").find("#POS_select_EE").attr("disabled", "disabled");
            $("#filter_EE div.visible-lg").find("#POS_select_EE").attr("disabled", "disabled");
            if ($(window).width()<751 || window.innerWidth<768) {
                html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle_E(i) + '" class="pop1" data-container="body" data-placement="auto bottom" data-toggle="popover" data-content="' + getContent_E(wd_data, wd_data['d'], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
            }
            else {
                html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle_E(i) + '" class="pop1" data-container="body" data-placement="auto right" data-toggle="popover" data-content="' + getContent_E(wd_data, wd_data['d'], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
            };
        }
        else if (getSelectedTabId==2) {
            $("#filter_CE div").find("input").attr("disabled", "disabled");
            $("#filter_CE div.visible-xs").find("#POS_select_CE").attr("disabled", "disabled");
            $("#filter_CE div.visible-lg").find("#POS_select_CE").attr("disabled", "disabled");
            if ($(window).width()<751 || window.innerWidth<768) {
                html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle(i) + '" class="pop2" data-container="body" data-placement="auto bottom" data-toggle="popover" data-content="' + getContent_CE(wd_data, wd_data['d'], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
            }
            else {
                html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle(i) + '" class="pop2" data-container="body" data-placement="auto right" data-toggle="popover" data-content="' + getContent_CE(wd_data, wd_data['d'], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
            };
        }
        else {
            $("#filter_EC div").find("input").attr("disabled", "disabled");
            $("#filter_EC div.visible-xs").find("#POS_select_EC").attr("disabled", "disabled");
            $("#filter_EC div.visible-lg").find("#POS_select_EC").attr("disabled", "disabled");
            $("#filter_EC div.visible-xs").find("#rhyme_select_EC").attr("disabled", "disabled");
            $("#filter_EC div.visible-lg").find("#rhyme_select_EC").attr("disabled", "disabled");
            if ($(window).width()<751 || window.innerWidth<768) {
                html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle_E(i) + '" class="pop3" data-container="body" data-placement="auto bottom" data-toggle="popover" data-content="' + getContent_EC(wd_data, wd_data['d'], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
            }
            else {
                html = html + '<li id=\"li' + i + '\" style=\"background-color: #005aff' + wd_data['c'] + ';"><a title="' + getTitle_E(i) + '" class="pop3" data-container="body" data-placement="auto right" data-toggle="popover" data-content="' + getContent_EC(wd_data, wd_data['d'], i) + '" style="color:black"><strong style="cursor:pointer">' + wd_data['w'] + '</strong></a></li>';
            };
        };
        i += 1;
        count += 1;
    };
    clearAlert();
    res_elem.html(html);
    changePadding();
    gotoid("anchor"+(getSelectedTabId+1));
    if (getSelectedTabId==0) {
        $('a.pop0').click();
        var t=new Date(new Date().getTime()+1000*60*60*2);
        document.cookie="z=1; expires="+t.toGMTString();
    }
    else if (getSelectedTabId==1) {
        $('a.pop1').click();
        var t=new Date(new Date().getTime()+1000*60*60*2);
        document.cookie="e=1; expires="+t.toGMTString();
    }
    else if (getSelectedTabId==2) {
        $('a.pop2').click();
        var t=new Date(new Date().getTime()+1000*60*60*2);
        document.cookie="z=1; expires="+t.toGMTString();
    }
    else {
        $('a.pop3').click();
        var t=new Date(new Date().getTime()+1000*60*60*2);
        document.cookie="e=1; expires="+t.toGMTString();
    }
    //$('a.pop').click(); // 这里是用于对新生成的html进行绑定，因为HTML是静态代码，页面生成时绑定了js和html的关系（执行了js代码一次），但是这个新生成的html不被当时的js代码绑定，所以这里再执行一次js代码。
    $('div.popover').hide();
};

<!----------------------------汉汉CC--------------------------------->
var retData_backup; //全局变量保存返回值原始数据。
var description_backup;

//filterRes();
function filterRes(dictList) {
    //console.log("filterRes");
    //var filter_POS = $("#filter1").val(); //document.getElementById("filter1").value
    if ($(window).width()<751 || window.innerWidth<768) {
        var POS_select_CC=$("#filter_CN div.visible-xs").find("#POS_select_CC");
        var filter2=$("#filter_CN div.visible-xs").find("#filter2");
        var filter3=$("#filter_CN div.visible-xs").find("#filter3");
        var filter4=$("#filter_CN div.visible-xs").find("#filter4");
        var filter5=$("#filter_CN div.visible-xs").find("#filter5");
        var main_select=$("#filter_CN div.visible-xs").find("#main_select");
        var rhyme_select_CC=$("#filter_CN div.visible-xs").find("#rhyme_select_CC");
    }
    else {
        var POS_select_CC=$("#filter_CN div.visible-lg").find("#POS_select_CC");
        var filter2=$("#filter_CN div.visible-lg").find("#filter2");
        var filter3=$("#filter_CN div.visible-lg").find("#filter3");
        var filter4=$("#filter_CN div.visible-lg").find("#filter4");
        var filter5=$("#filter_CN div.visible-lg").find("#filter5");
        var main_select=$("#filter_CN div.visible-lg").find("#main_select");
        var rhyme_select_CC=$("#filter_CN div.visible-lg").find("#rhyme_select_CC");
    };
    //var filter_POS = document.getElementById("POS_select_CC").options.selectedIndex;
    var filter_POS = POS_select_CC[0].selectedIndex;
    var filter_len = filter2.val();
    var filter_1stPY = filter3.val();
    var filter_strok = filter4.val();
    var filter_shape = filter5.val();
    var sort_rule = main_select[0].selectedIndex;
    var filter_rhyme = rhyme_select_CC[0].selectedIndex;
    if (filter_POS>0) {
        POS_select_CC.css("background-color", "#fffdef");
    }
    else {
        POS_select_CC.css("background-color", "");
    };
    if (filter_len!="") {
        filter2.css("background-color", "#fffdef");
    }
    else {
        filter2.css("background-color", "");
    };
    if (filter_1stPY!="") {
        filter3.css("background-color", "#fffdef");
    }
    else {
        filter3.css("background-color", "");
    };
    if (filter_strok!="") {
        filter4.css("background-color", "#fffdef");
    }
    else {
        filter4.css("background-color", "");
    };
    if (filter_shape!="") {
        filter5.css("background-color", "#fffdef");
    }
    else {
        filter5.css("background-color", "");
    };
    if (sort_rule>0) {
        main_select.css("background-color", "#fffdef");
    }
    else {
        main_select.css("background-color", "");
    };
    if (filter_rhyme>0) {
        rhyme_select_CC.css("background-color", "#fffdef");
    }
    else {
        rhyme_select_CC.css("background-color", "");
    };
    switch (filter_POS) {
        case 0:
            var dictList_filtered = dictList.slice(0);
            break;
        case 1:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("名")>-1});
            break;                                                                              
        case 2:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("动")>-1});
            break;                                                                              
        case 3:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("形")>-1});
            break;                                                                              
        case 4:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("副")>-1});
            break;                                                                              
        case 5:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("介")>-1});
            break;                                                                              
        case 6:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("数")>-1});
            break;                                                                              
        case 7:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("连")>-1});
            break;                                                                              
        case 8:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("助")>-1});
            break;                                                                              
        case 9:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("量")>-1});
            break;                                                                              
        case 10:                                                                                
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("叹")>-1});
            break;                                                                              
        case 11:                                                                                
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("代")>-1});
            break;                                                                              
        case 12:                                                                                
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("拟声")>-1});
            break;
        case 13:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("无")>-1});
            break;
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CN").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_rhyme>0) {
        var dictList_filtered = dictList_filtered.filter(function (value) {return value.r.indexOf(filter_rhyme)>-1});
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CN").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_len != "") {
        if (filter_len>0 && filter_len<=8) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.l == filter_len;
            };
        }
        else if (filter_len.indexOf('>')>-1 && filter_len.slice(filter_len.indexOf('>')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.l > filter_len.slice(filter_len.indexOf('>')+1);
            };
            filter2.val(">" + filter_len.slice(filter_len.indexOf('>')+1));
        }
        else if (filter_len.indexOf('<')>-1 && filter_len.slice(filter_len.indexOf('<')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.l < filter_len.slice(filter_len.indexOf('<')+1);
            };
            filter2.val("<" + filter_len.slice(filter_len.indexOf('<')+1));
        }
        else {
            //警告框
            $("#filter_CN").after(htmlWarning("字数筛选条件 “"+filter_len+"” 超出范围或无法识别。"));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter2.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CN").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_1stPY != "") {
        /*if (filter_1stPY>='A' && filter_1stPY<='z') {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.w[0] == filter_1stPY[0];
            };
            document.getElementById("filter3").value = filter_1stPY[0].toLowerCase();
        }*/
        filter_1stPY = filter_1stPY.toLowerCase();
        var reg = /[a-z]/g;
        if (filter_1stPY.replace(reg, "")=="") { //证明只有英文字母
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
                var pyszm = value.s.split(" ");
                for (var i=0;i<filter_1stPY.length;i++) {
                    if (pyszm[i]!=filter_1stPY[i]) {return false;};
                };
                return true;
            };
            filter3.val(filter_1stPY);
        }
        else {
            //警告框
            $("#filter_CN").after(htmlWarning("拼音首字母筛选条件 “"+filter_1stPY+"” 无法识别。"));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter3.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CN").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_strok != "") {
        if (filter_strok>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.b == filter_strok;
            };
        }
        else if (filter_strok.indexOf('>')>-1 && filter_strok.slice(filter_strok.indexOf('>')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.b > filter_strok.slice(filter_strok.indexOf('>')+1);
            };
            filter4.val(">" + filter_strok.slice(filter_strok.indexOf('>')+1));
        }
        else if (filter_strok.indexOf('<')>-1 && filter_strok.slice(filter_strok.indexOf('<')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.b < filter_strok.slice(filter_strok.indexOf('<')+1);
            };
            filter4.val("<" + filter_strok.slice(filter_strok.indexOf('<')+1));
        }
        else {
            //警告框
            $("#filter_CN").after(htmlWarning("笔画筛选条件 “"+filter_strok+"” 无法识别。"));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter4.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CN").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    //*为匹配0到多字；？匹配1字；+为且；[...]匹配集合内任一字；[^...]不匹配集合内任何字
    if (filter_shape != "") {
        var reg = /[\u4e00-\u9fa5]/g;
        var ruleStr = "或********或????????或？？？？？？？？或++++++++或[^]或[]"; //多次匹配模式（第一个“或”字占位符必须加，因为如果搜索目标是空的则搜索结果是位置0）
        //var ruleStr = "或*或?或？或+或[^]或[]"; //单次匹配模式
        var ruleInd = ruleStr.indexOf(filter_shape.replace(reg, ""));
        var tmp = filter_shape.match(reg);
        try {
            var hanziStr = tmp.join("");
        }
        catch(err) {
            var hanziStr = "";
        };
        if (ruleInd>-1) {
            if (ruleStr[ruleInd]=='*') {
                var hanziArr = filter_shape.split('*');
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    var tmp = [];
                    for (var i=0;i<this.length;i++) { // 山*水* --> ["山","水",""]，有一个空，因为*在边上的原因。
                        if (this[i].length>0) {
                            tmp.push(this[i]);
                        };
                    };
                    if (tmp.length==0) { return true;}; //没有汉字，则都算符合。
                    if (this[0]!="") { // 开头不是*而是字时，必须匹配第一个字/词
                        if (value.w[0]!=this[0]) {return false;};
                    };
                    if (this[this.length-1]!="") { // 结尾不是*而是字时，必须匹配最后一个字/词
                        if (value.w[value.w.length-1]!=this[this.length-1]) {return false;};
                    };
                    if (tmp.length==1) { //一个字或词，找到就符合。
                        if (value.w.indexOf(tmp[0])>-1) {
                            return true;
                        }
                        else {
                            return false;
                        };
                    }
                    else {
                        var ind = value.w.indexOf(tmp[0]);
                        if (ind<0) {return false;};
                        for (var i=1;i<tmp.length;i++) { //多个字或词，从上一次找到的点往后找，以保证按顺序。
                            if (value.w.indexOf(tmp[i], ind+1)<0) {
                                return false;
                            }
                            else {
                                ind = value.w.indexOf(tmp[i]);
                            };
                        };
                        return true;
                    };
                }, hanziArr);
            }
            else if (ruleStr[ruleInd]=='?' || ruleStr[ruleInd]=='？') {
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    if (filter_shape.length!=value.w.length) {return false};
                    for (var i=0;i<filter_shape.length;i++) {
                        if (filter_shape[i]==ruleStr[ruleInd]) {continue;}
                        else {
                            if (filter_shape[i]!=value.w[i]) {return false;};
                        };
                    };
                    return true;
                });
            }
            else if (ruleStr[ruleInd]=='+') {
                var hanziArr = filter_shape.split('+');
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    for (var i=0;i<this.length;i++) {
                        if (value.w.indexOf(this[i])<0) {return false;};
                    };
                    return true;
                }, hanziArr);
            }
            else if (ruleStr[ruleInd]=='[' && ruleStr[ruleInd+1]=='^') {
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    for (var i=0;i<this.length;i++) {
                        if (value.w.indexOf(this[i])>-1) {return false;};
                    };
                    return true;
                }, hanziStr);
            }
            else if (ruleStr[ruleInd]=='[') {
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    for (var i=0;i<this.length;i++) {
                        if (value.w.indexOf(this[i])>-1) {return true;};
                    };
                    return false;
                }, hanziStr);
            }
            else {
                //警告框
                $("#filter_CN").after(htmlWarning("词形筛选条件 “"+filter_shape+"” 无法识别。"));
                $(".alert").on("click", function(){$(this).slideUp("fast");});
                filter5.val(this.defaultValue);
                return false;
            };
        }
        else {
            //警告框
            $("#filter_CN").after(htmlWarning("词形筛选条件 “"+filter_shape+"” 无法识别。"));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter5.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CN").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    dictList_filtered = dictList_filtered.slice(0,100);
    switch (sort_rule) {
        case 1:
            dictList_filtered.sort(function(a, b){
                if (a.s[0] > b.s[0]) {
                    return 1;
                }
                else if (a.s[0] < b.s[0]) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            break;
        case 2:
            dictList_filtered.sort(function(a, b){
                if (a.s[0] > b.s[0]) {
                    return -1;
                }
                else if (a.s[0] < b.s[0]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            break;
        case 3:
            dictList_filtered.sort(function(a, b){return a.b - b.b});
            break;
        case 4:
            dictList_filtered.sort(function(a, b){return b.b - a.b});
            break;
        case 5:
            dictList_filtered.sort(function(a, b){return a.B - b.B});
            break;
        case 6:
            dictList_filtered.sort(function(a, b){return b.B - a.B});
            break;
    };
    showTable(dictList_filtered, $('#result'));
};


function modelProcecss() {
    clearAlert();
    var selID = getSelectedTabId + 1;
    var elem_defi = $("#defi"+selID); //20210608 针对添加输入为词则显示定义的情况，用于事后清空定义
    elem_defi.remove();
    var description = $("#description").val();
    if (description.length==0) {
        //$("#filter_CN").after(htmlDanger("输入描述不能为空。"));
        //$(".alert").on("click", function(){$(this).slideUp("fast");});
        //return true;
        var phid = Math.ceil(Math.random()*5)-1; // 5个例子，1~5
        description = example_zz[phid];
        $("#description").val(description);
    };
    var reg = /[\u4e00-\u9fa5]/g;
    if (description.search(reg)<0) {
        $("#filter_CN").after(htmlDanger("输入字符无法识别。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return true;
    };
    //20210823 添加删除输入中的“表示”“形容”“的词”等内容
    //20210824 添加判断查询为成语的情况（只在汉语单语反向词典中使用）
    if (description.length>2) {
        /*if ($(window).width()<751 || window.innerWidth<768) {
            var filter2=$("#filter_CN div.visible-xs").find("#filter2");
        }
        else {
            var filter2=$("#filter_CN div.visible-lg").find("#filter2");
        };
        if (description.substring(description.length-3,description.length)=="的成语") {
            description = description.substring(0,description.length-3);
            filter2.val(">3");
        }
        else if (description.substring(description.length-4,description.length)=="的成语。") {
            description = description.substring(0,description.length-4);
            filter2.val(">3");
        }
        else {
            filter2.val("");
        };*/ //会导致字数筛选功能失效，即手动输入字数筛选条件后，被置空。因为无法区分是用户输入的条件还是因为检测到查成语而设置的。
        if (description.substring(0,2)=="表示" || description.substring(0,2)=="形容" || description.substring(0,2)=="表达") {
            description = description.substring(2,description.length);
            if (description.length>2) {
                if (description.substring(description.length-2,description.length)=="的词" || description.substring(description.length-2,description.length)=="之词") { //带“的词”“的词语”的情况一般都是跟在“表示”引导的句子尾部
                    description = description.substring(0,description.length-2);
                }
                else if (description.substring(description.length-3,description.length)=="的词语" || description.substring(description.length-3,description.length)=="的词。" || description.substring(description.length-3,description.length)=="的词句" || description.substring(description.length-3,description.length)=="的句子") { 
                    description = description.substring(0,description.length-3);
                };
            };
        };
    };      
    //20210608 添加输入为词时显示定义的功能
    if (description.length<5) { //输入长度为1,2,3,4只能说存在输入是一个词的可能性，请求一下查定义，如果有返回定义就显示，没有定义就不显示
        $.post("/GetChDefis/", {'w': description, 'm': getSelectedTabId}, function (ret) {
            var defi = ret.slice(0);
            if (defi.length>0) {
                if ($(window).width()<751 || window.innerWidth<768) {
                    //var html = '<div class="row elem-center" id="defi1" style="margin: 0 -8px;">' + '<strong>' + description + ':</strong><br/>' + defi + '<HR/></div>';
                    var html = '<div class="row elem-center" id="defi1" style="margin: 0 -8px;"><div style="color: #235ba0;" onclick="showdefi(\'defi1\')">' + description + '  (点此查看定义)</div><div style="display: none;font-family:arial;">' + defi + '</div><br></div>';
                }else {
                    //var html = '<div class="row elem-center" id="defi1">' + '<strong>' + description + ':</strong><br/>' + defi + '<HR/></div>';
                    var html = '<div class="row elem-center" id="defi1"><div style="color: #235ba0;" onclick="showdefi(\'defi1\')">' + description + '  (点此查看定义)</div><div style="display: none;font-family:arial;">' + defi + '</div><br></div>';
                };
                $("#filter_CN").before(html);
            };
        });
    };
    //聚类功能
    if ($(window).width()<751 || window.innerWidth<768) {
        var main_select=$("#filter_CN div.visible-xs").find("#main_select");
    }
    else {
        var main_select=$("#filter_CN div.visible-lg").find("#main_select"); 
    };
    var sort_rule = main_select[0].selectedIndex;
    if (sort_rule==7) {
        $.get("/ChineseRDCluster/", { 'description': description, 'mode': 'CC' }, function (ret) {
            showTable_Cluster(ret, $('#result'));
        });
        return true;
    }
    $("#filter_CN div").find("*").removeAttr("disabled");
    //console.log('modelProcecss');
    if ($("#description").val()==description_backup) {
        filterRes(retData_backup);
    }
    else {
        $.get("/ChineseRD/", { 'description': description, 'mode': 'CC' }, function (ret) {
            try {
                retData_backup = ret.slice(0);
                description_backup = description.slice(0);
                filterRes(retData_backup);
                $("#filter_CN").show();
            }
            catch(err) {
                $('#result').html("");
                switch (ret['error']){
                    case 0: //错误框
                        $("#filter_CN").after(htmlDanger("输入描述不能为空。"));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                        break;
                    case 1: //错误框
                        $("#filter_CN").after(htmlDanger("输入字符无法识别。"));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                        break;
                    default: //报出明确的错误类型。
                        $("#filter_CN").after(htmlDanger(err.name));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                }
            }
        });
    }
};
function onkeySearch() {
    $('#result').html("");
    clearAlert();
    modelProcecss();
};
$(document).ready(function () {
    $("#description").keypress(function(e) {
        if(e.keyCode == 13)
            {
                $('#result').html("");
                clearAlert();
                modelProcecss();
            }
    });
});
<!----------------------------英英EE--------------------------------->        
var retData_backup_EE; //全局变量保存返回值原始数据。
var description_backup_EE;

function filterRes_EE(dictList) {
    if ($(window).width()<751 || window.innerWidth<768) {
        var POS_select_EE=$("#filter_EE div.visible-xs").find("#POS_select_EE");
        var filter1=$("#filter_EE div.visible-xs").find("#filter1_EE");
        var filter2=$("#filter_EE div.visible-xs").find("#filter2_EE");
        var filter3=$("#filter_EE div.visible-xs").find("#filter3_EE");
        var main_select=$("#filter_EE div.visible-xs").find("#main_select_EE");
    }
    else {
        var POS_select_EE=$("#filter_EE div.visible-lg").find("#POS_select_EE");
        var filter1=$("#filter_EE div.visible-lg").find("#filter1_EE");
        var filter2=$("#filter_EE div.visible-lg").find("#filter2_EE");
        var filter3=$("#filter_EE div.visible-lg").find("#filter3_EE");
        var main_select=$("#filter_EE div.visible-lg").find("#main_select_EE");
    };
    var filter_POS = POS_select_EE[0].selectedIndex;
    var filter_len = filter1.val();
    var filter_initial = filter2.val();
    var filter_shape = filter3.val();
    var sort_rule = main_select[0].selectedIndex;
    if (filter_POS>0) {
        POS_select_EE.css("background-color", "#fffdef");
    }
    else {
        POS_select_EE.css("background-color", "");
    };
    if (filter_len!="") {
        filter1.css("background-color", "#fffdef");
    }
    else {
        filter1.css("background-color", "");
    };
    if (filter_initial!="") {
        filter2.css("background-color", "#fffdef");
    }
    else {
        filter2.css("background-color", "");
    };
    if (filter_shape!="") {
        filter3.css("background-color", "#fffdef");
    }
    else {
        filter3.css("background-color", "");
    };
    if (sort_rule>0) {
        main_select.css("background-color", "#fffdef");
    }
    else {
        main_select.css("background-color", "");
    };
    switch (filter_POS) {
        case 1:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("n")>-1});
            break;
        case 2:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("v")>-1});
            break;
        case 3:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("adj")>-1});
            break;
        case 4:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("adv")>-1});
            break;
        case 5:
            var dictList_filtered = dictList.filter(function (value) {return value.P.length==0});
            break;
        case 0:
            var dictList_filtered = dictList.slice(0);
            break;
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_EE").after(htmlInfo_E("No screening results, please modify the POS screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_len != "") {
        if (filter_len>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.w.length == filter_len;
            };
        }
        else if (filter_len.indexOf('>')>-1 && filter_len.slice(filter_len.indexOf('>')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.w.length > filter_len.slice(filter_len.indexOf('>')+1);
            };
            filter1.val(">" + filter_len.slice(filter_len.indexOf('>')+1));
        }
        else if (filter_len.indexOf('<')>-1 && filter_len.slice(filter_len.indexOf('<')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.w.length < filter_len.slice(filter_len.indexOf('<')+1);
            };
            filter1.val("<" + filter_len.slice(filter_len.indexOf('<')+1));
        }
        else {
            //警告框
            $("#filter_EE").after(htmlWarning_E("Word length screening condition '"+filter_len+"' is out of range or unrecognizable."));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter1.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_EE").after(htmlInfo_E("No screening results, please modify the word length screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_initial != "") {
        var reg = /[a-zA-Z]/g;
        if (filter_initial.replace(reg, "")=="") { //证明只有英文字母
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
                return value.w[0] == filter_initial[0].toLowerCase();
            };
            filter2.val(filter_initial[0]);
        }
        else {
            //警告框
            $("#filter_EE").after(htmlWarning_E("Word initial screening condition '"+filter_initial+"' is not recognizable."));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter2.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_EE").after(htmlInfo_E("No screening results, please modify the initial screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    //*为匹配0到多字；？匹配1字
    if (filter_shape != "") {
        var reg = /[a-zA-Z]/g;
        var ruleStr = "或****************或????????????????或？？？？？？？？？？？？？？？？"; //多次匹配模式（第一个“或”字占位符必须加，因为如果搜索目标是空的则搜索结果是位置0）
        var ruleInd = ruleStr.indexOf(filter_shape.replace(reg, ""));
        if (ruleInd>-1) {
            if (ruleStr[ruleInd]=='*') {
                var charArr = filter_shape.split('*');
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    var tmp = [];
                    for (var i=0;i<this.length;i++) { // dic*on* --> ["dic","on",""]，有一个空，因为*在边上的原因。
                        if (this[i].length>0) {
                            tmp.push(this[i]);
                        };
                    };
                    if (tmp.length==0) { return true;}; //没有字母，则都算符合。
                    if (this[0]!="") { // 开头不是*而是字时，必须匹配第一个字母片段。########0814修改BUG：value.w[0]!=this[0]错在字母和字母片段进行对比。而是匹配第一个字母片段的首字母。
                        if (value.w[0]!=this[0][0]) {return false;};
                    };
                    if (this[this.length-1]!="") { // 结尾不是*而是字时，必须匹配最后一个字母片段。########0814修改BUG：value.w[0]!=this[0]错在字母和字母片段进行对比。而是匹配末字母片段的末字母。
                        if (value.w[value.w.length-1]!=this[this.length-1][this[this.length-1].length-1]) {return false;};
                    };
                    if (tmp.length==1) { //一个字母片段，找到就符合。
                        if (value.w.indexOf(tmp[0])>-1) {
                            return true;
                        }
                        else {
                            return false;
                        };
                    }
                    else {
                        var ind = value.w.indexOf(tmp[0]);
                        if (ind<0) {return false;};
                        for (var i=1;i<tmp.length;i++) { //多个字母片段，从上一次找到的点往后找，以保证按顺序。
                            if (value.w.indexOf(tmp[i], ind+1)<0) {
                                return false;
                            }
                            else {
                                ind = value.w.indexOf(tmp[i]);
                            };
                        };
                        return true;
                    };
                }, charArr);
            }
            else if (ruleStr[ruleInd]=='?' || ruleStr[ruleInd]=='？') {
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    if (filter_shape.length!=value.w.length) {return false};
                    for (var i=0;i<filter_shape.length;i++) {
                        if (filter_shape[i]==ruleStr[ruleInd]) {continue;}
                        else {
                            if (filter_shape[i]!=value.w[i]) {return false;};
                        };
                    };
                    return true;
                });
            }
            else {
                //警告框
                $("#filter_EE").after(htmlWarning_E("Wildcard patterns screening condition '"+filter_shape+"' is not recognizable."));
                $(".alert").on("click", function(){$(this).slideUp("fast");});
                filter3.val(this.defaultValue);
                return false;
            };
        }
        else {
            //警告框
            $("#filter_EE").after(htmlWarning_E("Wildcard patterns screening condition '"+filter_shape+"' is not recognizable."));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter3.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_EE").after(htmlInfo_E("No screening results, please modify the Wildcard patterns screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    dictList_filtered = dictList_filtered.slice(0,100);
    switch (sort_rule) {
        case 1:
            dictList_filtered.sort(function(a, b){
                if (a.w[0] > b.w[0]) {
                    return 1;
                }
                else if (a.w[0] < b.w[0]) {
                    return -1;
                }
                else {
                    if (a.w[1] > b.w[1]) {
                        return 1;
                    }
                    else if (a.w[1] < b.w[1]) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            });
            break;
        case 2:
            dictList_filtered.sort(function(a, b){
                if (a.w[0] > b.w[0]) {
                    return -1;
                }
                else if (a.w[0] < b.w[0]) {
                    return 1;
                }
                else {
                    if (a.w[1] > b.w[1]) {
                        return -1;
                    }
                    else if (a.w[1] < b.w[1]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            });
            break;
        case 3:
            dictList_filtered.sort(function(a, b){return a.w.length - b.w.length});
            break;
        case 4:
            dictList_filtered.sort(function(a, b){return b.w.length - a.w.length});
            break;
    };
    showTable(dictList_filtered, $('#result_EE'));
};


function modelProcecss_EE() {
    clearAlert();
    var selID = getSelectedTabId + 1;
    var elem_defi = $("#defi"+selID); //20210608 针对添加输入为词则显示定义的情况，用于事后清空定义
    elem_defi.remove();
    var description = $("#description_EE").val();
    if (description.length==0) {
        //$("#filter_EE").after(htmlDanger_E("The input description cannot be empty."));
        //$(".alert").on("click", function(){$(this).slideUp("fast");});
        //return true;
        var phid = Math.ceil(Math.random()*3)-1;
        description = example_ee[phid];
        $("#description_EE").val(description);
    };
    var reg = /[a-zA-Z]/;
    if (description.search(reg)<0) {
        $("#filter_EE").after(htmlDanger_E("The input characters are unrecognizable."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return true;
    };
    //20210608 添加输入为词时显示定义的功能
    if (description.trim().split(" ").length==1) { //输入没有空格，只能说存在输入是一个词的可能性，请求一下查定义，如果有返回定义就显示，没有定义就不显示
        $.post("/GetEnDefis/", {'w': description, 'm': getSelectedTabId}, function (ret) {
            var defi = ret.slice(0);
            if (defi.length>0) {
                if ($(window).width()<751 || window.innerWidth<768) {
                    //var html = '<div class="row elem-center" id="defi2" style="margin: 0 -8px;">' + '<strong>' + description + ':</strong><br/>' + defi + '<HR/></div>';
                    var html = '<div class="row elem-center" id="defi2" style="margin: 0 -8px;"><div style="color: #235ba0;" onclick="showdefi(\'defi2\')">' + description + '  (Click to view the definitions)</div><div style="display: none;">' + defi + '</div><br></div>';
                }else {
                    //var html = '<div class="row elem-center" id="defi2">' + '<strong>' + description + ':</strong><br/>' + defi + '<HR/></div>';
                    var html = '<div class="row elem-center" id="defi2"><div style="color: #235ba0;" onclick="showdefi(\'defi2\')">' + description + '  (Click to view the definitions)</div><div style="display: none;">' + defi + '</div><br></div>';
                };
                $("#filter_EE").before(html);
            };
        });
    };
    // 聚类功能
    if ($(window).width()<751 || window.innerWidth<768) {
        var main_select=$("#filter_EE div.visible-xs").find("#main_select_EE");
    }
    else {
        var main_select=$("#filter_EE div.visible-lg").find("#main_select_EE"); 
    };
    var sort_rule = main_select[0].selectedIndex;
    if (sort_rule==5) {
        $.get("/EnglishRDCluster/", { 'description': description, 'mode': 'EE' }, function (ret) {
            showTable_Cluster(ret, $('#result_EE'));
        });
        return true;
    }
    $("#filter_EE div").find("*").removeAttr("disabled");
    if ($("#description_EE").val()==description_backup_EE) {
        filterRes_EE(retData_backup_EE);
    }
    else {
        $.get("/EnglishRD/", { 'description': description, 'mode': 'EE' }, function (ret) {
            try {
                retData_backup_EE = ret.slice(0);
                description_backup_EE = description.slice(0);
                //console.log(ret);
                filterRes_EE(retData_backup_EE);
                $("#filter_EE").show();
            }
            catch(err) {
                $('#result_EE').html("");
                switch (ret['error']){
                    case 0: //错误框
                        $("#filter_EE").after(htmlDanger_E("The input description cannot be empty."));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                        break;
                    case 1: //错误框
                        $("#filter_EE").after(htmlDanger_E("The input characters are unrecognizable."));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                        break;
                    default: //报出明确的错误类型。
                        $("#filter_EE").after(htmlDanger_E(err.name));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                }
            }
        });
    }
};
function onkeySearch_EE() {
    $('#result_EE').html("");
    clearAlert();
    modelProcecss_EE();
};
$(document).ready(function () {
    $("#description_EE").keypress(function(e) {
        if(e.keyCode == 13)
            {
                $('#result_EE').html("");
                clearAlert();
                modelProcecss_EE();
            }
    });
});

<!----------------------------汉英CE--------------------------------->
var retData_backup_CE; //全局变量保存返回值原始数据。
var description_backup_CE;

function filterRes_CE(dictList) {
    if ($(window).width()<751 || window.innerWidth<768) {
        var POS_select_CE=$("#filter_CE div.visible-xs").find("#POS_select_CE");
        var filter1=$("#filter_CE div.visible-xs").find("#filter1_CE");
        var filter2=$("#filter_CE div.visible-xs").find("#filter2_CE");
        var filter3=$("#filter_CE div.visible-xs").find("#filter3_CE");
        var main_select=$("#filter_CE div.visible-xs").find("#main_select_CE");
    }
    else {
        var POS_select_CE=$("#filter_CE div.visible-lg").find("#POS_select_CE");
        var filter1=$("#filter_CE div.visible-lg").find("#filter1_CE");
        var filter2=$("#filter_CE div.visible-lg").find("#filter2_CE");
        var filter3=$("#filter_CE div.visible-lg").find("#filter3_CE");
        var main_select=$("#filter_CE div.visible-lg").find("#main_select_CE");
    };
    var filter_POS = POS_select_CE[0].selectedIndex;
    var filter_len = filter1.val();
    var filter_initial = filter2.val();
    var filter_shape = filter3.val();
    var sort_rule = main_select[0].selectedIndex;
    if (filter_POS>0) {
        POS_select_CE.css("background-color", "#fffdef");
    }
    else {
        POS_select_CE.css("background-color", "");
    };
    if (filter_len!="") {
        filter1.css("background-color", "#fffdef");
    }
    else {
        filter1.css("background-color", "");
    };
    if (filter_initial!="") {
        filter2.css("background-color", "#fffdef");
    }
    else {
        filter2.css("background-color", "");
    };
    if (filter_shape!="") {
        filter3.css("background-color", "#fffdef");
    }
    else {
        filter3.css("background-color", "");
    };
    if (sort_rule>0) {
        main_select.css("background-color", "#fffdef");
    }
    else {
        main_select.css("background-color", "");
    };
    switch (filter_POS) {
        case 1:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("n")>-1});
            break;
        case 2:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("v")>-1});
            break;
        case 3:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("adj")>-1});
            break;
        case 4:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("adv")>-1});
            break;
        case 5:
            var dictList_filtered = dictList.filter(function (value) {return value.P.length==0});
            break;
        case 0:
            var dictList_filtered = dictList.slice(0);
            break;
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CE").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_len != "") {
        if (filter_len>0 && filter_len<=30) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.w.length == filter_len;
            };
        }
        else if (filter_len.indexOf('>')>-1 && filter_len.slice(filter_len.indexOf('>')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.w.length > filter_len.slice(filter_len.indexOf('>')+1);
            };
            filter1.val(">" + filter_len.slice(filter_len.indexOf('>')+1));
        }
        else if (filter_len.indexOf('<')>-1 && filter_len.slice(filter_len.indexOf('<')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.w.length < filter_len.slice(filter_len.indexOf('<')+1);
            };
            filter1.val("<" + filter_len.slice(filter_len.indexOf('<')+1));
        }
        else {
            //警告框
            $("#filter_CE").after(htmlWarning("单词长度筛选条件 '"+filter_len+"' 超出范围或无法识别。"));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter1.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CE").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_initial != "") {
        var reg = /[a-zA-Z]/g;
        if (filter_initial.replace(reg, "")=="") { //证明只有英文字母
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
                return value.w[0] == filter_initial[0].toLowerCase();
            };
            filter2.val(filter_initial[0]);
        }
        else {
            //警告框
            $("#filter_CE").after(htmlWarning("单词首字母筛选条件 '"+filter_initial+"' 无法识别。"));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter2.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CE").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    //*为匹配0到多字；？匹配1字
    if (filter_shape != "") {
        var reg = /[a-zA-Z]/g;
        var ruleStr = "或****************或????????????????或？？？？？？？？？？？？？？？？"; //多次匹配模式（第一个“或”字占位符必须加，因为如果搜索目标是空的则搜索结果是位置0）
        var ruleInd = ruleStr.indexOf(filter_shape.replace(reg, ""));
        if (ruleInd>-1) {
            if (ruleStr[ruleInd]=='*') {
                var charArr = filter_shape.split('*');
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    var tmp = [];
                    for (var i=0;i<this.length;i++) { // dic*on* --> ["dic","on",""]，有一个空，因为*在边上的原因。
                        if (this[i].length>0) {
                            tmp.push(this[i]);
                        };
                    };
                    if (tmp.length==0) { return true;}; //没有字母，则都算符合。
                    if (this[0]!="") { // 开头不是*而是字时，必须匹配第一个字母片段。########0814修改BUG：value.w[0]!=this[0]错在字母和字母片段进行对比。而是匹配第一个字母片段的首字母。
                        if (value.w[0]!=this[0][0]) {return false;};
                    };
                    if (this[this.length-1]!="") { // 结尾不是*而是字时，必须匹配最后一个字母片段。########0814修改BUG：value.w[0]!=this[0]错在字母和字母片段进行对比。而是匹配末字母片段的末字母。
                        if (value.w[value.w.length-1]!=this[this.length-1][this[this.length-1].length-1]) {return false;};
                    };
                    if (tmp.length==1) { //一个字母片段，找到就符合。
                        if (value.w.indexOf(tmp[0])>-1) {
                            return true;
                        }
                        else {
                            return false;
                        };
                    }
                    else {
                        var ind = value.w.indexOf(tmp[0]);
                        if (ind<0) {return false;};
                        for (var i=1;i<tmp.length;i++) { //多个字母片段，从上一次找到的点往后找，以保证按顺序。
                            if (value.w.indexOf(tmp[i], ind+1)<0) {
                                return false;
                            }
                            else {
                                ind = value.w.indexOf(tmp[i]);
                            };
                        };
                        return true;
                    };
                }, charArr);
            }
            else if (ruleStr[ruleInd]=='?' || ruleStr[ruleInd]=='？') {
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    if (filter_shape.length!=value.w.length) {return false};
                    for (var i=0;i<filter_shape.length;i++) {
                        if (filter_shape[i]==ruleStr[ruleInd]) {continue;}
                        else {
                            if (filter_shape[i]!=value.w[i]) {return false;};
                        };
                    };
                    return true;
                });
            }
            else {
                //警告框
                $("#filter_CE").after(htmlWarning("词形筛选条件 '"+filter_shape+"' 无法识别。"));
                $(".alert").on("click", function(){$(this).slideUp("fast");});
                filter3.val(this.defaultValue);
                return false;
            };
        }
        else {
            //警告框
            $("#filter_CE").after(htmlWarning("词形筛选条件 '"+filter_shape+"' 无法识别。"));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter3.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_CE").after(htmlInfo("无筛选结果，请修改筛选条件。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    dictList_filtered = dictList_filtered.slice(0,100);
    switch (sort_rule) {
        case 1:
            dictList_filtered.sort(function(a, b){
                if (a.w[0] > b.w[0]) {
                    return 1;
                }
                else if (a.w[0] < b.w[0]) {
                    return -1;
                }
                else {
                    if (a.w[1] > b.w[1]) {
                        return 1;
                    }
                    else if (a.w[1] < b.w[1]) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            });
            break;
        case 2:
            dictList_filtered.sort(function(a, b){
                if (a.w[0] > b.w[0]) {
                    return -1;
                }
                else if (a.w[0] < b.w[0]) {
                    return 1;
                }
                else {
                    if (a.w[1] > b.w[1]) {
                        return -1;
                    }
                    else if (a.w[1] < b.w[1]) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            });
            break;
        case 3:
            dictList_filtered.sort(function(a, b){return a.w.length - b.w.length});
            break;
        case 4:
            dictList_filtered.sort(function(a, b){return b.w.length - a.w.length});
            break;
    };
    showTable(dictList_filtered, $('#result_CE'));
};


function modelProcecss_CE() {
    clearAlert();
    var selID = getSelectedTabId + 1;
    var elem_defi = $("#defi"+selID); //20210608 针对添加输入为词则显示定义的情况，用于事后清空定义
    elem_defi.remove();
    var description = $("#description_CE").val();
    if (description.length==0) {
        //$("#filter_CE").after(htmlDanger("输入描述不能为空。"));
        //$(".alert").on("click", function(){$(this).slideUp("fast");});
        //return true;
        var phid = Math.ceil(Math.random()*3)-1;
        description = example_ze[phid];
        $("#description_CE").val(description);
    };
    var reg = /[\u4e00-\u9fa5]/g;
    if (description.search(reg)<0) {
        $("#filter_CE").after(htmlDanger("输入字符无法识别。"));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return true;
    };
    //20210823 添加删除输入中的“表示”“形容”“的词”等内容
    if (description.length>2) {
        if (description.substring(0,2)=="表示" || description.substring(0,2)=="形容" || description.substring(0,2)=="表达") {
            description = description.substring(2,description.length);
            if (description.length>2) {
                if (description.substring(description.length-2,description.length)=="的词" || description.substring(description.length-2,description.length)=="之词") { //带“的词”“的词语”的情况一般都是跟在“表示”引导的句子尾部
                    description = description.substring(0,description.length-2);
                }
                else if (description.substring(description.length-3,description.length)=="的词语" || description.substring(description.length-3,description.length)=="的词。" || description.substring(description.length-3,description.length)=="的词句" || description.substring(description.length-3,description.length)=="的句子") { 
                    description = description.substring(0,description.length-3);
                };
            };
        };
    };  
    //20210608 添加输入为词时显示定义的功能
    if (description.length<5) { //输入长度为1,2,3,4只能说存在输入是一个词的可能性，请求一下查定义，如果有返回定义就显示，没有定义就不显示
        $.post("/GetChDefis/", {'w': description, 'm': getSelectedTabId}, function (ret) {
            var defi = ret.slice(0);
            if (defi.length>0) {
                if ($(window).width()<751 || window.innerWidth<768) {
                    //var html = '<div class="row elem-center" id="defi3" style="margin: 0 -8px;">' + '<strong>' + description + ':</strong><br/>' + defi + '<HR/></div>';
                    var html = '<div class="row elem-center" id="defi3" style="margin: 0 -8px;"><div style="color: #235ba0;" onclick="showdefi(\'defi3\')">' + description + '  (点此查看定义)</div><div style="display: none;font-family:arial;">' + defi + '</div><br></div>';
                }else {
                    //var html = '<div class="row elem-center" id="defi3">' + '<strong>' + description + ':</strong><br/>' + defi + '<HR/></div>';
                    var html = '<div class="row elem-center" id="defi3"><div style="color: #235ba0;" onclick="showdefi(\'defi3\')">' + description + '  (点此查看定义)</div><div style="display: none;font-family:arial;">' + defi + '</div><br></div>';
                };
                $("#filter_CE").before(html);
            };
        });
    };
    // 聚类功能
    if ($(window).width()<751 || window.innerWidth<768) {
        var main_select=$("#filter_CE div.visible-xs").find("#main_select_CE");
    }
    else {
        var main_select=$("#filter_CE div.visible-lg").find("#main_select_CE"); 
    };
    var sort_rule = main_select[0].selectedIndex;
    if (sort_rule==5) {
        $.get("/EnglishRDCluster/", { 'description': description, 'mode': 'CE' }, function (ret) {
            showTable_Cluster(ret, $('#result_CE'));
        });
        return true;
    }
    $("#filter_CE div").find("*").removeAttr("disabled");
    if ($("#description_CE").val()==description_backup_CE) {
        filterRes_CE(retData_backup_CE);
    }
    else {
        $.get("/EnglishRD/", { 'description': description, 'mode': 'CE' }, function (ret) {
            try {
                retData_backup_CE = ret.slice(0);
                description_backup_CE = description.slice(0);
                //console.log(ret);
                filterRes_CE(retData_backup_CE);
                $("#filter_CE").show();
            }
            catch(err) {
                $('#result_CE').html("");
                switch (ret['error']){
                    case 0: //错误框
                        $("#filter_CE").after(htmlDanger("输入描述不能为空。"));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                        break;
                    case 1: //错误框
                        $("#filter_CE").after(htmlDanger("输入字符无法识别。"));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                        break;
                    default: //报出明确的错误类型。
                        $("#filter_CE").after(htmlDanger(err.name));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                }
            }
        });
    }
};
function onkeySearch_CE() {
    $('#result_CE').html("");
    clearAlert();
    modelProcecss_CE();
};
$(document).ready(function () {
    $("#description_CE").keypress(function(e) {
        if(e.keyCode == 13)
            {
                $('#result_CE').html("");
                clearAlert();
                modelProcecss_CE();
            }
    });
});
<!----------------------------英汉EC--------------------------------->
var retData_backup_EC; //全局变量保存返回值原始数据。
var description_backup_EC;

//filterRes_EC();
function filterRes_EC(dictList) {
    //console.log("filterRes_EC");
    //var filter_POS = $("#filter1_EC").val(); //document.getElementById("filter1").value
    if ($(window).width()<751 || window.innerWidth<768) {
        var POS_select_EC=$("#filter_EC div.visible-xs").find("#POS_select_EC");
        var filter2=$("#filter_EC div.visible-xs").find("#filter2_EC");
        var filter3=$("#filter_EC div.visible-xs").find("#filter3_EC");
        var filter4=$("#filter_EC div.visible-xs").find("#filter4_EC");
        var filter5=$("#filter_EC div.visible-xs").find("#filter5_EC");
        var main_select=$("#filter_EC div.visible-xs").find("#main_select_EC");
        var rhyme_select_EC=$("#filter_EC div.visible-xs").find("#rhyme_select_EC");
    }
    else {
        var POS_select_EC=$("#filter_EC div.visible-lg").find("#POS_select_EC");
        var filter2=$("#filter_EC div.visible-lg").find("#filter2_EC");
        var filter3=$("#filter_EC div.visible-lg").find("#filter3_EC");
        var filter4=$("#filter_EC div.visible-lg").find("#filter4_EC");
        var filter5=$("#filter_EC div.visible-lg").find("#filter5_EC");
        var main_select=$("#filter_EC div.visible-lg").find("#main_select_EC");
        var rhyme_select_EC=$("#filter_EC div.visible-lg").find("#rhyme_select_EC");
    };
    //var filter_POS = document.getElementById("POS_select_CC").options.selectedIndex;
    var filter_POS = POS_select_EC[0].selectedIndex;
    var filter_len = filter2.val();
    var filter_1stPY = filter3.val();
    var filter_strok = filter4.val();
    var filter_shape = filter5.val();
    var sort_rule = main_select[0].selectedIndex;
    var filter_rhyme = rhyme_select_EC[0].selectedIndex;
    if (filter_POS>0) {
        POS_select_EC.css("background-color", "#fffdef");
    }
    else {
        POS_select_EC.css("background-color", "");
    };
    if (filter_len!="") {
        filter2.css("background-color", "#fffdef");
    }
    else {
        filter2.css("background-color", "");
    };
    if (filter_1stPY!="") {
        filter3.css("background-color", "#fffdef");
    }
    else {
        filter3.css("background-color", "");
    };
    if (filter_strok!="") {
        filter4.css("background-color", "#fffdef");
    }
    else {
        filter4.css("background-color", "");
    };
    if (filter_shape!="") {
        filter5.css("background-color", "#fffdef");
    }
    else {
        filter5.css("background-color", "");
    };
    if (sort_rule>0) {
        main_select.css("background-color", "#fffdef");
    }
    else {
        main_select.css("background-color", "");
    };
    if (filter_rhyme>0) {
        rhyme_select_EC.css("background-color", "#fffdef");
    }
    else {
        rhyme_select_EC.css("background-color", "");
    };
    switch (filter_POS) {
        case 0:
            var dictList_filtered = dictList.slice(0);
            break;
        case 1:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("名")>-1});
            break;                                                                              
        case 2:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("动")>-1});
            break;                                                                              
        case 3:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("形")>-1});
            break;                                                                              
        case 4:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("副")>-1});
            break;                                                                              
        case 5:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("介")>-1});
            break;                                                                              
        case 6:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("数")>-1});
            break;                                                                              
        case 7:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("连")>-1});
            break;                                                                              
        case 8:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("助")>-1});
            break;                                                                              
        case 9:                                                                                 
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("量")>-1});
            break;                                                                              
        case 10:                                                                                
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("叹")>-1});
            break;                                                                              
        case 11:                                                                                
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("代")>-1});
            break;                                                                              
        case 12:                                                                                
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("拟声")>-1});
            break;
        case 13:
            var dictList_filtered = dictList.filter(function (value) {return value.P.indexOf("无")>-1});
            break;
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_EC").after(htmlInfo_E("No screening results, please modify the POS screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_rhyme>0) {
        var dictList_filtered = dictList_filtered.filter(function (value) {return value.r.indexOf(filter_rhyme)>-1});
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_EC").after(htmlInfo_E("No screening results, please modify the rhyme screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_len != "") {
        if (filter_len>0 && filter_len<=8) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.l == filter_len;
            };
        }
        else if (filter_len.indexOf('>')>-1 && filter_len.slice(filter_len.indexOf('>')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.l > filter_len.slice(filter_len.indexOf('>')+1);
            };
            filter2.val(">" + filter_len.slice(filter_len.indexOf('>')+1));
        }
        else if (filter_len.indexOf('<')>-1 && filter_len.slice(filter_len.indexOf('<')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.l < filter_len.slice(filter_len.indexOf('<')+1);
            };
            filter2.val("<" + filter_len.slice(filter_len.indexOf('<')+1));
        }
        else {
            //警告框
            $("#filter_EC").after(htmlWarning_E("Word length screening condition '"+filter_len+"' is out of range or unrecognizable."));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter2.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.l == 0) {
        //信息框
        $("#filter_EC").after(htmlInfo_E("No screening results, please modify the word length screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_1stPY != "") {
        filter_1stPY = filter_1stPY.toLowerCase()
        var reg = /[a-z]/g;
        if (filter_1stPY.replace(reg, "")=="") { //证明只有英文字母
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
                var pyszm = value.s.split(" ");
                for (var i=0;i<filter_1stPY.length;i++) {
                    if (pyszm[i]!=filter_1stPY[i]) {return false;};
                };
                return true;
            };
            filter3.val(filter_1stPY);
        }
        else {
            //警告框
            $("#filter_EC").after(htmlWarning_E("Initial Pinyin screening condition '"+filter_1stPY+"' is not recognizable."));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter3.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_EC").after(htmlInfo_E("No screening results, please modify the initial Pinyin screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    if (filter_strok != "") {
        if (filter_strok>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.b == filter_strok;
            };
        }
        else if (filter_strok.indexOf('>')>-1 && filter_strok.slice(filter_strok.indexOf('>')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.b > filter_strok.slice(filter_strok.indexOf('>')+1);
            };
            document.getElementById("filter4_EC").value = ">" + filter_strok.slice(filter_strok.indexOf('>')+1);
        }
        else if (filter_strok.indexOf('<')>-1 && filter_strok.slice(filter_strok.indexOf('<')+1)>0) {
            var dictList_filtered = dictList_filtered.filter(localFunc);
            function localFunc(value) {
              return value.b < filter_strok.slice(filter_strok.indexOf('<')+1);
            };
            document.getElementById("filter4_EC").value = "<" + filter_strok.slice(filter_strok.indexOf('<')+1);
        }
        else {
            //警告框
            $("#filter_EC").after(htmlWarning_E("Number of strokes screening condition '"+filter_strok+"' is not recognizable."));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            document.getElementById("filter4_EC").value = "";
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_EC").after(htmlInfo_E("No screening results, please modify the number of strokes screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    //*为匹配0到多字；？匹配1字；+为且；[...]匹配集合内任一字；[^...]不匹配集合内任何字
    if (filter_shape != "") {
        var reg = /[\u4e00-\u9fa5]/g;
        var ruleStr = "或********或????????或？？？？？？？？或++++++++或[^]或[]"; //多次匹配模式（第一个“或”字占位符必须加，因为如果搜索目标是空的则搜索结果是位置0）
        //var ruleStr = "或*或?或？或+或[^]或[]"; //单次匹配模式
        var ruleInd = ruleStr.indexOf(filter_shape.replace(reg, ""));
        var tmp = filter_shape.match(reg);
        try {
            var hanziStr = tmp.join("");
        }
        catch(err) {
            var hanziStr = "";
        };
        if (ruleInd>-1) {
            if (ruleStr[ruleInd]=='*') {
                var hanziArr = filter_shape.split('*');
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    var tmp = [];
                    for (var i=0;i<this.length;i++) { // 山*水* --> ["山","水",""]，有一个空，因为*在边上的原因。
                        if (this[i].length>0) {
                            tmp.push(this[i]);
                        };
                    };
                    if (tmp.length==0) { return true;}; //没有汉字，则都算符合。
                    if (this[0]!="") { // 开头不是*而是字时，必须匹配第一个字/词
                        if (value.w[0]!=this[0]) {return false;};
                    };
                    if (this[this.length-1]!="") { // 结尾不是*而是字时，必须匹配最后一个字/词
                        if (value.w[value.w.length-1]!=this[this.length-1]) {return false;};
                    };
                    if (tmp.length==1) { //一个字或词，找到就符合。
                        if (value.w.indexOf(tmp[0])>-1) {
                            return true;
                        }
                        else {
                            return false;
                        };
                    }
                    else {
                        var ind = value.w.indexOf(tmp[0]);
                        if (ind<0) {return false;};
                        for (var i=1;i<tmp.length;i++) { //多个字或词，从上一次找到的点往后找，以保证按顺序。
                            if (value.w.indexOf(tmp[i], ind+1)<0) {
                                return false;
                            }
                            else {
                                ind = value.w.indexOf(tmp[i]);
                            };
                        };
                        return true;
                    };
                }, hanziArr);
            }
            else if (ruleStr[ruleInd]=='?' || ruleStr[ruleInd]=='？') {
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    if (filter_shape.length!=value.w.length) {return false};
                    for (var i=0;i<filter_shape.length;i++) {
                        if (filter_shape[i]==ruleStr[ruleInd]) {continue;}
                        else {
                            if (filter_shape[i]!=value.w[i]) {return false;};
                        };
                    };
                    return true;
                });
            }
            else if (ruleStr[ruleInd]=='+') {
                var hanziArr = filter_shape.split('+');
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    for (var i=0;i<this.length;i++) {
                        if (value.w.indexOf(this[i])<0) {return false;};
                    };
                    return true;
                }, hanziArr);
            }
            else if (ruleStr[ruleInd]=='[' && ruleStr[ruleInd+1]=='^') {
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    for (var i=0;i<this.length;i++) {
                        if (value.w.indexOf(this[i])>-1) {return false;};
                    };
                    return true;
                }, hanziStr);
            }
            else if (ruleStr[ruleInd]=='[') {
                var dictList_filtered = dictList_filtered.filter(function (value) {
                    for (var i=0;i<this.length;i++) {
                        if (value.w.indexOf(this[i])>-1) {return true;};
                    };
                    return false;
                }, hanziStr);
            }
            else {
                //警告框
                $("#filter_EC").after(htmlWarning_E("Wildcard patterns screening condition '"+filter_shape+"' is not recognizable."));
                $(".alert").on("click", function(){$(this).slideUp("fast");});
                filter5.val(this.defaultValue);
                return false;
            };
        }
        else {
            //警告框
            $("#filter_EC").after(htmlWarning_E("Wildcard patterns screening condition '"+filter_shape+"' is not recognizable."));
            $(".alert").on("click", function(){$(this).slideUp("fast");});
            filter5.val(this.defaultValue);
            return false;
        };
    };
    if (dictList_filtered.length == 0) {
        //信息框
        $("#filter_EC").after(htmlInfo_E("No screening results, please modify the Wildcard patterns screening condition."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return false;
    };
    dictList_filtered = dictList_filtered.slice(0,100);
    switch (sort_rule) {
        case 1:
            dictList_filtered.sort(function(a, b){
                if (a.s[0] > b.s[0]) {
                    return 1;
                }
                else if (a.s[0] < b.s[0]) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            break;
        case 2:
            dictList_filtered.sort(function(a, b){
                if (a.s[0] > b.s[0]) {
                    return -1;
                }
                else if (a.s[0] < b.s[0]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            break;
        case 3:
            dictList_filtered.sort(function(a, b){return a.b - b.b});
            break;
        case 4:
            dictList_filtered.sort(function(a, b){return b.b - a.b});
            break;
        case 5:
            dictList_filtered.sort(function(a, b){return a.B - b.B});
            break;
        case 6:
            dictList_filtered.sort(function(a, b){return b.B - a.B});
            break;
    };
    showTable(dictList_filtered, $('#result_EC'));
};


function modelProcecss_EC() {
    clearAlert();
    var selID = getSelectedTabId + 1;
    var elem_defi = $("#defi"+selID); //20210608 针对添加输入为词则显示定义的情况，用于事后清空定义
    elem_defi.remove();
    var description = $("#description_EC").val();
    if (description.length==0) {
        //$("#filter_EC").after(htmlDanger_E("The input description cannot be empty."));
        //$(".alert").on("click", function(){$(this).slideUp("fast");});
        //return true;
        var phid = Math.ceil(Math.random()*3)-1;
        description = example_ez[phid];
        $("#description_EC").val(description);
    };
    var reg = /[a-zA-Z]/;
    if (description.search(reg)<0) {
        $("#filter_EC").after(htmlDanger_E("The input characters are unrecognizable."));
        $(".alert").on("click", function(){$(this).slideUp("fast");});
        return true;
    };
    //20210608 添加输入为词时显示定义的功能
    if (description.trim().split(" ").length==1) { //输入没有空格，只能说存在输入是一个词的可能性，请求一下查定义，如果有返回定义就显示，没有定义就不显示
        $.post("/GetEnDefis/", {'w': description, 'm': getSelectedTabId}, function (ret) {
            var defi = ret.slice(0);
            if (defi.length>0) {
                if ($(window).width()<751 || window.innerWidth<768) {
                    //var html = '<div class="row elem-center" id="defi4" style="margin: 0 -8px;">' + '<strong>' + description + ':</strong><br/>' + defi + '<HR/></div>';
                    var html = '<div class="row elem-center" id="defi4" style="margin: 0 -8px;"><div style="color: #235ba0;" onclick="showdefi(\'defi4\')">' + description + '  (Click to view the definitions)</div><div style="display: none;">' + defi + '</div><br></div>';
                }else {
                    //var html = '<div class="row elem-center" id="defi4">' + '<strong>' + description + ':</strong><br/>' + defi + '<HR/></div>';
                    var html = '<div class="row elem-center" id="defi4"><div style="color: #235ba0;" onclick="showdefi(\'defi4\')">' + description + '  (Click to view the definitions)</div><div style="display: none;">' + defi + '</div><br></div>';
                };
                $("#filter_EC").before(html);
            };
        });
    };
    // 聚类功能
    if ($(window).width()<751 || window.innerWidth<768) {
        var main_select=$("#filter_EC div.visible-xs").find("#main_select_EC");
    }
    else {
        var main_select=$("#filter_EC div.visible-lg").find("#main_select_EC"); 
    };
    var sort_rule = main_select[0].selectedIndex;
    if (sort_rule==7) {
        $.get("/ChineseRDCluster/", { 'description': description, 'mode': 'EC' }, function (ret) {
            showTable_Cluster(ret, $('#result_EC'));
        });
        return true;
    }
    $("#filter_EC div").find("*").removeAttr("disabled");
    if ($("#description_EC").val()==description_backup_EC) {
        filterRes_EC(retData_backup_EC);
    }
    else {
        $.get("/ChineseRD/", { 'description': description, 'mode': 'EC' }, function (ret) {
            retData_backup_EC = ret.slice(0);
            description_backup_EC = description.slice(0);
            //console.log(ret);
            try {
                filterRes_EC(retData_backup_EC);
                $("#filter_EC").show();
            }
            catch(err) {
                $('#result_EC').html("");
                switch (ret['error']){
                    case 0: //错误框
                        $("#filter_EC").after(htmlDanger_E("The input description cannot be empty."));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                        break;
                    case 1: //错误框
                        $("#filter_EC").after(htmlDanger_E("The input characters are unrecognizable."));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                        break;
                    default: //报出明确的错误类型。
                        $("#filter_EC").after(htmlDanger(err.name));
                        $(".alert").on("click", function(){$(this).slideUp("fast");});
                }
            }
        });
    }
};
function onkeySearch_EC() {
    $('#result_EC').html("");
    clearAlert();
    modelProcecss_EC();
};
$(document).ready(function () {
    $("#description_EC").keypress(function(e) {
        if(e.keyCode == 13)
            {
                $('#result_EC').html("");
                clearAlert();
                modelProcecss_EC();
            }
    });
});

<!--------筛选和排序--------->
$(document).ready(function(){
  $("#flip_EE").click(function(){
    $("#panel_EE").slideToggle("fast", function(){
    if($(this).is(":visible")){
        $("#flip_EE").html('Clear and Hide Filter <span class="glyphicon glyphicon-off"></span>')} <!--和排序<span class="glyphicon glyphicon-sort"></span>-->
    else{
        clearAlert();
        $("#filter_EE div").find("*").removeAttr("disabled");
        try {
            if ($("#description_EE").val()=="") {
                $('#result_EE').html("");
            }
            else {
                if ($("#description_EE").val()==description_backup_EE) {
                    showTable(retData_backup_EE, $('#result_EE'));
                }
                else {
                    modelProcecss_EE();
                };
            };
        }
        catch(err) {
            $('#result_EE').html("");
        };                            
        $("#filter_EE.panel").find("*").val(this.defaultValue).css("background-color", "");
        $("#flip_EE").html('Open Filter <span class="glyphicon glyphicon-filter"></span>')}
        document.getElementById("main_select_EE").options.selectedIndex = 0;
        document.getElementById("POS_select_EE").options.selectedIndex = 0;
    });
  });
});
$(document).ready(function(){
  $("#flip_CE").click(function(){
    $("#panel_CE").slideToggle("fast", function(){
    if($(this).is(":visible")){
        $("#flip_CE").html('清除并收起 筛选器 <span class="glyphicon glyphicon-off"></span>')} <!--和排序<span class="glyphicon glyphicon-sort"></span>-->
    else{
        clearAlert();
        $("#filter_CE div").find("*").removeAttr("disabled");
        try {
            if ($("#description_CE").val()=="") {
                $('#result_CE').html("");
            }
            else {
                if ($("#description_CE").val()==description_backup_CE) {
                    showTable(retData_backup_CE, $('#result_CE'));
                }
                else {
                    modelProcecss_CE();
                };
            };
        }
        catch(err) {
            $('#result_CE').html("");
        };                            
        $("#filter_CE.panel").find("*").val(this.defaultValue).css("background-color", "");
        $("#flip_CE").html('开启 筛选器 <span class="glyphicon glyphicon-filter"></span>')}
        document.getElementById("main_select_CE").options.selectedIndex = 0;
        document.getElementById("POS_select_CE").options.selectedIndex = 0;
    });
  });
});
$(document).ready(function(){
  $("#flip_EC").click(function(){
    $("#panel_EC").slideToggle("fast", function(){
    if($(this).is(":visible")){
        $("#flip_EC").html('Clear and Hide Filter <span class="glyphicon glyphicon-off"></span>')} 
    else{
        clearAlert();
        $("#filter_EC div").find("*").removeAttr("disabled");
        try {
            if ($("#description_EC").val()=="") {
                $('#result_EC').html("");
            }
            else {
                if ($("#description_EC").val()==description_backup_EC) {
                    showTable(retData_backup_EC, $('#result_EC'));
                }
                else {
                    modelProcecss_EC();
                };
            };
        }
        catch(err) {
            $('#result_EC').html("");
        };                            
        $("#filter_EC div.panel").find("*").val(this.defaultValue).css("background-color", "");
        $("#flip_EC").html('Open Filter <span class="glyphicon glyphicon-filter"></span>')}
        document.getElementById("main_select_EC").options.selectedIndex = 0;
        document.getElementById("POS_select_EC").options.selectedIndex = 0;
        document.getElementById("rhyme_select_EC").options.selectedIndex = 0;
    });
  });
});
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("fast", function(){
    if($(this).is(":visible")){
        $("#flip").html('清除并收起 筛选器 <span class="glyphicon glyphicon-off"></span>')} <!--和排序<span class="glyphicon glyphicon-sort"></span>-->
    else{
        clearAlert();
        $("#filter_CN div").find("*").removeAttr("disabled");
        try {
            if ($("#description").val()=="") { //收起筛选器后，若输入为空（可能一开始就是空，或改为空但没按回车）则清空 输出区。
                $('#result').html("");
            }
            else {
                if ($("#description").val()==description_backup) { //输入框中没变化，则因为没有筛选条件而直接显示上一次的结果。
                    showTable(retData_backup, $('#result'));
                }
                else {
                    modelProcecss(); //输入框里有变化，则重新计算结果（没有筛选条件，filterRes中的判断都会跳过的，不慢）。
                };
            };
        }
        catch(err) {
            $('#result').html("");
        };                            
        $("#filter_CN div.panel").find("*").val(this.defaultValue);
        $("#flip").html('开启 筛选器 <span class="glyphicon glyphicon-filter"></span>')}
        document.getElementById("main_select").options.selectedIndex = 0;
        document.getElementById("POS_select_CC").options.selectedIndex = 0;
        document.getElementById("rhyme_select_CC").options.selectedIndex = 0;                        
    });
  });
});